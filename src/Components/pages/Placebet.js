import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useContext, useState } from "react";
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

  function placeBet(
    user,
    match_id,
    match_category,
    tournament_name,
    match_date,
    match_time,
    team_1,
    team_2,
    question_id,
    question,
    answer_id,
    answer,
    rate,
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
      match_id,
      match_category,
      tournament_name,
      match_date,
      match_time,
      team_1,
      team_2,
      question_id,
      question,
      answer_id,
      answer,
      rate,
      amount,
      return_amount,
    });

    axios
      .post("http://127.0.0.1:8000/place-bet/", body, config)
      .then((res) => {
        setLoading(false);
        setMessage("Bet has been placed successfully");
      })
      .catch((err) => {
        setLoading(false);
        setError("Something is wrong.Check your Internet connection.");
      });
  }

  async function handleSubmit(e) {
    const return_amount = betAmount * rate;

    setLoading(true);
    setError("");
    setMessage("");

    axios
      .get(`http://localhost:8000/question/?id=${question.id}`)
      .then((res) => {
        let data = res.data;
        if (data.active === false) {
          setLoading(false);
          setError("Bet odds has been changed.Try again after some times");
        } else {
          axios
            .get(`http://localhost:8000/betrate/?id=${answer_id}`)
            .then((res) => {
              let data = res.data;
              if (data.rate === rate) {
                placeBet(
                  user.user_id,
                  match_info.id,
                  match_info.match_category,
                  match_info.tournament_name,
                  match_info.date,
                  match_info.time,
                  match_info.team_1,
                  match_info.team_2,
                  question.id,
                  question.question,
                  answer_id,
                  answer,
                  rate,
                  betAmount,
                  return_amount
                );
              } else {
                setLoading(false);
                setError("Bet odds has been changed.Try again later");
              }
            })
            .catch((err) => {
              setLoading(false);
              setError("Something is wrong. Check your internet connection");
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Something is wrong.Check your internet connection");
      });
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
