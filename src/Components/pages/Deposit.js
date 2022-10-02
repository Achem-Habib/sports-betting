import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";
import Success from "../SuccessMessage/Success";

export default function Deposit() {
  const [method, setMethod] = useState([]);
  const [number, setNumber] = useState([]);

  const { user } = useContext(AuthContext);
  const userId = user.user_id;
  const [methodName, setMethodName] = useState("");
  const [sendTo, setSendTo] = useState();
  const [sendFrom, setSendFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [transNumber, setTransNumber] = useState("");

  const [lowestLimit, setLowestLimit] = useState();
  const [highestLimit, setHighestLimit] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Deposit Request";

    async function getMethod() {
      try {
        let res = await axios.get(`${url}/transactions/deposit-method/`);
        if (res) {
          let data = res.data;
          let new_method = [];
          data.map((d) => new_method.push(d.method_name));
          setMethod(new_method);
          setMethodName(new_method[0]);
          getNumber(new_method[0]);
        }
      } catch (err) {
        setError("Somethind is wrong. Check your internet connection!");
      }
    }

    async function depositLimit() {
      try {
        let res = await axios.get(`${url}/transactions/deposit-limit/`);
        if (res) {
          let data = res.data;
          data.map((d) => {
            setLowestLimit(d.lowest_limit);
            setHighestLimit(d.highest_limit);

            return "";
          });
        }
      } catch (err) {
        setError(
          "Something is wrong. Check your internet connection and refresh the page."
        );
      }
    }

    getMethod();
    depositLimit();
  }, []);

  async function getNumber(name) {
    try {
      let res = await axios.get(
        `${url}/transactions/deposit-number/?name=${name}`
      );
      if (res) {
        let data = res.data;
        let new_number = [];
        data.map((d) => new_number.push(d.number));
        setNumber(new_number);
        setSendTo(new_number[0]);
      }
    } catch (err) {
      setError("Somethind is wrong. Check your internet connection!");
    }
  }

  function handleMethodChange(e) {
    setMethodName(e.target.value);
    getNumber(e.target.value);
  }

  async function depositRequest(
    user,
    method,
    send_to,
    send_from,
    amount,
    transaction_number
  ) {
    setError("");
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({
      user,
      method,
      send_to,
      send_from,
      amount,
      transaction_number,
    });

    try {
      let res = await axios.post(
        `${url}/transactions/deposit-request/`,
        body,
        config
      );
      if (res) {
        setLoading(false);
        setError("");
        setSendFrom("");
        setAmount("");
        setTransNumber("");
        setIsOpen(true);
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong. Check your internet connection and the information you provide!"
      );
    }
  }

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    let fromRegex = new RegExp("(?:\\+88|88)?(01[3-9]\\d{8})");
    if (!fromRegex.test(sendFrom)) {
      return setError(
        "Mobile number is not valid. Enter a valid phone number."
      );
    }

    if (isNaN(amount)) {
      return setError(
        "The amount you enter is not valid. Enter a valid amount."
      );
    }

    if (lowestLimit && highestLimit) {
      if (amount < lowestLimit || amount > highestLimit) {
        return setError(
          `Deposit amount must be greater than ${lowestLimit} tk and less than ${highestLimit} tk.`
        );
      }
    }

    await depositRequest(
      userId,
      methodName,
      sendTo,
      sendFrom,
      amount,
      transNumber
    );
  }

  return (
    <>
      <div className="pt-20 pb-10">
        <div className="flex flex-col gap-y-8 mx-2 ">
          <div>
            <h2 className=" text-center text-3xl font-extrabold text-teal-400">
              Request a deposit
            </h2>
          </div>

          <form
            className="mx-auto w-full max-w-md space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
              <RadioInput
                id="method"
                name="Select method"
                options={method}
                value={methodName}
                onChange={handleMethodChange}
                required
              />
              <RadioInput
                id="number"
                name="Select number"
                options={number}
                value={sendTo}
                onChange={(event) => setSendTo(event.target.value)}
                required
              />
              <Input
                id="from"
                type="text"
                placeholder="From"
                value={sendFrom}
                onChange={(e) => setSendFrom(e.target.value)}
                required
              />
              <Input
                id="amount"
                to="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <Input
                id="transaction-number"
                to="text"
                placeholder="Transaction Number"
                value={transNumber}
                onChange={(e) => setTransNumber(e.target.value)}
                required
              />
            </div>

            {error ? (
              <div className="">
                <p className="text-center text-md font-medium text-red-500">
                  {error}
                </p>
              </div>
            ) : (
              ""
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                {loading ? "Processing" : "Request Deposit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Success
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Deposit Request Successful"
        message="Your deposit request has been sent successfully. Please, Don't send a request more than once. It may cause several problem."
      />
    </>
  );
}
