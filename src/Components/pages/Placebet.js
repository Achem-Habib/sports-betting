import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import BetAnswer from "../Placebet/BetAnswer";
import BetSummury from "../Placebet/BetSummury";
import MatchInfo from "../Placebet/MatchInfo";
import QuickBet from "../Placebet/QuickBet";

export default function Placebet({
  isOpen,
  setIsOpen,
  match_info,
  question,
  answer_id,
  answer,
  rate,
  category,
}) {
  const [betAmount, setBetAmount] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const { user } = useContext(AuthContext);
  const username = user.username;
  const clubName = user.club_name;

  const return_amount = betAmount * rate;

  async function TotalBetUpdate() {
    try {
      let response = await axios.get(
        `${url}/accounts/total-bet/?user_name=${username}`
      );
      const total_bet = response.data["total_bet"];

      if (response) {
        let new_total_bet = total_bet + betAmount;
        let date = new Date();
        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        // Request Body
        let body = JSON.stringify({
          total_bet: new_total_bet,
          last_bet_date: date,
        });
        let res = await axios.post(
          `${url}/accounts/total-bet/?user_name=${user.username}`,
          body,
          config
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function placeBet(
    user,
    username,
    match_id,
    match_category,
    tournament_name,
    match_date_time,
    team_1,
    team_2,
    question_id,
    question_identifier,
    question,
    answer_id,
    answer,
    rate,
    club_name,
    amount,
    return_amount
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
      username,
      match_id,
      match_category,
      tournament_name,
      match_date_time,
      team_1,
      team_2,
      question_id,
      question_identifier,
      question,
      answer_id,
      answer,
      rate,
      club_name,
      amount,
      return_amount,
    });

    try {
      let res = await axios.post(`${url}/place-bet/`, body, config);

      if (res) {
        setLoading(false);
        setMessage("Bet has been placed successfully");
        TotalBetUpdate();
      }
    } catch (error) {
      setLoading(false);
      setError(
        "Something is wrong.Check your Internet connection and refresh the page."
      );
    }
  }

  async function balanceUpdate() {
    try {
      let response = await axios.get(
        `${url}/accounts/balance/?user_name=${username}`
      );
      const balance = response.data["balance"];

      if (balance >= betAmount) {
        const new_balance = balance - betAmount;

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
          placeBet(
            user.user_id,
            username,
            match_info.id,
            match_info.match_category,
            match_info.tournament_name,
            match_info.date_time,
            match_info.team_1,
            match_info.team_2,
            question.id,
            question.identifier,
            question.question,
            answer_id,
            answer,
            rate,
            clubName,
            betAmount,
            return_amount
          );
        }
      } else {
        setLoading(false);
        setError("You don't have sufficient balance to place this bet.");
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong. Check your internet connection and refresh the page."
      );
    }
  }

  async function betOddsCheck() {
    try {
      let res = await axios.get(`${url}/question/?id=${question.id}`);
      let data = res.data;

      if (data.active === false) {
        setLoading(false);
        setError("Bet odds has been changed.Try again later!");
      } else {
        let res = await axios.get(`${url}/betrate/?id=${answer_id}`);
        let data = res.data;

        if (data.rate === rate) {
          balanceUpdate();
        } else {
          setLoading(false);
          setError("Bet odds has been changed.Try again later!");
        }
      }
    } catch (err) {
      setLoading(false);
      setError(
        "Something is wrong. Check your internet connection and refresh the page."
      );
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (betAmount < 50) {
      setError("Minimum bet amount is 50tk!");
    } else {
      setLoading(true);
      setError("");
      setMessage("");
      betOddsCheck();
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" transform w-full max-w-md transition-all">
                <div className="mx-2 bg-white    rounded-md">
                  <MatchInfo
                    setIsOpen={setIsOpen}
                    match_info={match_info}
                    category={category}
                  />
                  {error && (
                    <p className="text-md text-red-600 font-semibold mx-2 my-2">
                      {error}
                    </p>
                  )}
                  {message && (
                    <p className="text-md text-green-600 font-semibold mx-2 my-2">
                      {message}
                    </p>
                  )}
                  <div className="flex flex-col gap-y-2 mx-2 pb-3">
                    <BetAnswer
                      question={question}
                      answer={answer}
                      rate={rate}
                    />

                    <div>
                      <label
                        htmlFor="amount"
                        className="text-slate-800 text-sm font-semibold"
                      >
                        Enter Amount
                      </label>
                      <input
                        id="amount"
                        name="amount"
                        type="number"
                        required
                        className="appearance-none  relative block w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder={betAmount}
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                      />
                    </div>

                    <QuickBet setBetAmount={setBetAmount} />

                    <BetSummury betAmount={betAmount} rate={rate} />
                    <div>
                      <button
                        disabled={loading}
                        type="submit"
                        onClick={handleSubmit}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                      >
                        {loading ? "Processing..." : "Place bet"}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
