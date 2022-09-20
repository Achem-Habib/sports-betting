import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { url } from "../../constants/urls";
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

  const [lowestLimit, setLowestLimit] = useState();
  const [highestLimit, setHighestLimit] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Withdraw Request";
    async function getMethod() {
      try {
        let res = await axios.get(`${url}/transactions/withdraw-method/`);
        if (res) {
          let data = res.data;
          let new_method = [];
          data.map((d) => new_method.push(d.method_name));
          setMethod(new_method);
          setMethodName(new_method[0]);
          getAccountType(new_method[0]);
        }
      } catch (er) {
        setError(
          "Something is wrong. Check your internet connection and refresh the page."
        );
      }
    }

    async function withdrawLimit() {
      try {
        let res = await axios.get(`${url}/transactions/withdraw-limit/`);
        if (res) {
          let data = res.data;
          data.map((d) => {
            if (user.club_holder) {
              setLowestLimit(d.club_lowest_limit);
              setHighestLimit(d.club_highest_limit);
            } else {
              setLowestLimit(d.lowest_limit);
              setHighestLimit(d.highest_limit);
            }

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
    withdrawLimit();
  }, [user.club_holder]);

  async function getAccountType(name) {
    try {
      let res = await axios.get(
        `${url}/transactions/withdraw-account-type/?account=${name}`
      );
      if (res) {
        let data = res.data;
        let new_account_type = [];
        data.map((d) => new_account_type.push(d.account_type));
        setAccountType(new_account_type);
        setType(new_account_type[0]);
      }
    } catch (err) {
      setError(
        "Error while fetching data. Check your internet connection and refresh the page"
      );
    }
  }

  function handleMethodChange(e) {
    setMethodName(e.target.value);
    getAccountType(e.target.value);
  }

  async function withdrawRequest(user, method, account_type, send_to, amount) {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    let body = JSON.stringify({
      user,
      method,
      account_type,
      send_to,
      amount,
    });

    try {
      let res = await axios.post(
        `${url}/transactions/withdraw-request/`,
        body,
        config
      );
      if (res) {
        setLoading(false);
        setError();
        setSendTo("");
        setAmount("");
        setPassword("");
        setIsOpen(true);
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong.Check your Internet connection and the information you provide!"
      );
    }
  }

  async function balanceUpdate() {
    try {
      let response = await axios.get(
        `${url}/accounts/balance/?user_name=${username}`
      );
      const balance = response.data["balance"];

      if (balance >= amount) {
        const new_balance = balance - amount;

        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        // Request Body
        let body = JSON.stringify({
          balance: new_balance,
        });
        let res = await axios.post(
          `${url}/accounts/balance/?user_name=${user.username}`,
          body,
          config
        );

        if (res) {
          withdrawRequest(userId, methodName, type, sendTo, amount);
        }
      } else {
        setLoading(false);
        setError(
          "Your balance is lower than the amount you are trying to withdraw."
        );
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong. Check your internet connection and refresh the page."
      );
    }
  }

  async function userAuthentication() {
    setLoading(true);
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    let body = JSON.stringify({ username, password });

    try {
      let res = await axios.post(`${url}/accounts/token/`, body, config);
      if (res) {
        balanceUpdate();
      }
    } catch (err) {
      setLoading(false);
      setError("Error while authenticating.Check your password!");
    }
  }

  function handleSubmit(e) {
    setError("");
    e.preventDefault();
    let toRegex = new RegExp("(?:\\+88|88)?(01[3-9]\\d{8})");
    if (!toRegex.test(sendTo)) {
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
          `Withdraw amount must be minimum ${lowestLimit} tk and maximum ${highestLimit} tk.`
        );
      }
    }

    userAuthentication();
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
            className="mx-auto w-full max-w-md space-y-3"
            onSubmit={handleSubmit}
          >
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
