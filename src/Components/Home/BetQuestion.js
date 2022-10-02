import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Placebet from "../pages/Placebet";

function BetQuestion({ question, match_info, category }) {
  const [betRates, setBetRates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [answerId, setAnswerId] = useState();
  const [answer, setAnswer] = useState();
  const [rate, setRate] = useState();
  const { user } = useContext(AuthContext);
  const [userActive, setUserActive] = useState();
  const [clubHolder, setClubHolder] = useState(true);

  const [data, setData] = useState([]);

  useWebSocket(`ws://127.0.0.1:8000/ws/job-status/`, {
    onMessage: (e) => {
      const message = JSON.parse(e.data);
      if (message["Changed"] === "BetRate") {
        setData(message);
      }
    },
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    async function userIsActive(name) {
      try {
        let res = await axios.get(`${url}/accounts/balance/?user_name=${name}`);
        if (res) {
          setData();
          let data = res.data;
          setUserActive(data["is_active"]);
        }
      } catch (err) {
        console.log("Something is wrong");
      }
    }
    async function getBetRates() {
      try {
        let res = await axios.get(`${url}/betrates/?id=${question.id}`);
        setData();
        setBetRates(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getBetRates();

    if (user) {
      userIsActive(user.username);
      setClubHolder(user.club_holder);
    }
  }, [question.id, user, data]);

  return (
    <>
      <div className="border-b border-slate-400 pb-4 mt-2 mb-4 ml-2">
        <h1 className=" text-slate-100 text-lg font-semibold mb-2">
          {question.question}
        </h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {betRates.map((betRate) => (
            <div key={betRate.id} className="relative flex">
              <button
                type="button"
                disabled={!question.active || !userActive || clubHolder}
                onClick={() => {
                  setAnswerId(betRate.id);
                  setAnswer(betRate.bet_answer);
                  setRate(betRate.rate);
                  setIsOpen(true);
                }}
                className={`w-full  flex justify-between px-2 py-1 rounded-md ${
                  question.active
                    ? "bg-gradient-to-r from-blue-700 to-blue-900"
                    : "bg-red-700"
                }`}
              >
                <span className="text-white text-sm">{betRate.bet_answer}</span>
                <span className="text-white text-sm font-bold">
                  {betRate.rate}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {user ? (
        <Placebet
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          match_info={match_info}
          question={question}
          answer_id={answerId}
          answer={answer}
          rate={rate}
          category={category}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(BetQuestion);
