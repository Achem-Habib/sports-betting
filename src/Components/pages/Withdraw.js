import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Input from "../Form/Input";
import RadioInput from "../Form/RadioInput";
import Success from "../SuccessMessage/Success";

export default function Withdraw() {
  const [method, setMethod] = useState([]);
  const [accountType, setAccountType] = useState([]);

  const { user } = useContext(AuthContext);
  const userId = user.user_id;
  const username = user.username;
  const [methodName, setMethodName] = useState("");
  const [type, setType] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Withdraw Request";
    getMethod();
  }, []);

  function getMethod() {
    axios
      .get("http://127.0.0.1:8000/transactions/withdraw-method/")
      .then((res) => {
        let data = res.data;
        let new_method = [];
        data.map((d) => new_method.push(d.method_name));

        return new_method;
      })
      .then((res) => {
        setMethod(res);
        setMethodName(res[0]);
        getAccountType(res[0]);
      })
      .catch((err) => {
        setError(
          "Error while fetching data. Check your internet connection and refresh the page."
        );
      });
  }

  function getAccountType(name) {
    axios
      .get(
        `http://127.0.0.1:8000/transactions/withdraw-account-type/?account=${name}`
      )
      .then((res) => {
        let data = res.data;
        let new_account_type = [];
        data.map((d) => new_account_type.push(d.account_type));

        return new_account_type;
      })
      .then((res) => {
        setAccountType(res);
        setType(res[0]);
      })
      .catch((err) => {
        setError(
          "Error while fetching data. Check your internet connection and refresh the page"
        );
      });
  }

  function handleMethodChange(e) {
    setMethodName(e.target.value);
    getAccountType(e.target.value);
  }

  function withdrawRequest(user, method, account_type, send_to, amount) {
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
      account_type,
      send_to,
      amount,
    });

    axios
      .post(
        "http://127.0.0.1:8000/transactions/withdraw-request/",
        body,
        config
      )
      .then((res) => {
        setLoading(false);
        setSendTo("");
        setAmount("");
        setPassword("");
        setIsOpen(true);
      })
      .catch((err) => {
        setError(
          "Something is wrong.Check your Internet connection and the information you provide!"
        );
      });
  }

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    let toRegex = new RegExp("(?:\\+88|88)?(01[3-9]\\d{8})");
    if (!toRegex.test(sendTo)) {
      return setError("Mobile number is not valid. Enter a valid phone number");
    }

    if (isNaN(amount)) {
      return setError(
        "The amount you enter is not valid. Enter a valid amount"
      );
    }

    function sendingRequest() {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Request Body
      const body = JSON.stringify({ username, password });

      axios
        .post("http://127.0.0.1:8000/accounts/token/", body, config)
        .then((res) => {
          withdrawRequest(userId, methodName, type, sendTo, amount);
        })
        .catch((err) => {
          setLoading(false);
          setError("Error while authenticating.Check your password!");
        });
    }
    sendingRequest();
  }

  return (
    <>
      <div className="pt-16 md:pt-20 pb-10">
        <div className="flex flex-col gap-y-8 mx-2 ">
          <div>
            <h2 className=" text-center text-3xl font-extrabold text-teal-400">
              Request a Withdraw
            </h2>
          </div>
          <form
            className="mx-auto w-full max-w-md space-y-6"
            onSubmit={handleSubmit}
          >
            {error ? (
              <div className="">
                <p className="text-center text-lg font-semibold text-red-500">
                  {error}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-y-4 shadow-sm -space-y-px">
              <RadioInput
                id="method"
                name="Select method"
                options={method}
                value={methodName}
                onChange={handleMethodChange}
              />
              <RadioInput
                id="type-of-account"
                name="Type of Account"
                options={accountType}
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
              <Input
                id="to"
                type="text"
                placeholder="To"
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
                required
              />
              <Input
                id="amount"
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none "
              >
                {loading ? "Processing..." : "Request Withdraw"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Success
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Withdraw Request Successful"
        message="Your withdraw request has been sent successfully. Please, Don't send a request more than once. It may cause several problem."
      />
    </>
  );
}
