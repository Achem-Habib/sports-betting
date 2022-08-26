import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import AuthContext from "../../context/AuthContext";
import Placebet from "../pages/Placebet";

function BetQuestion({ question, match_info, category }) {
  const [betRates, setBetRates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [answerId, setAnswerId] = useState();
  const [answer, setAnswer] = useState();
  const [rate, setRate] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useWebSocket(`ws://127.0.0.1:8000/ws/job-status/`, {
    onMessage: (e) => {
      const message = JSON.parse(e.data);
      setData(message);
      console.log(message);
    },
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/betrates/?id=${question.id}`)
      .then((res) => {
        setData();
        setBetRates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <>
      <div className="border-b border-slate-400 pb-4 mt-2 mb-4 ml-2">
        <h1 className="text-white text-lg font-semibold mb-2">
          {question.question}
        </h1>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {betRates.map((betRate) => (
            <div key={betRate.id} className="relative flex">
              <button
                type="button"
                onClick={() => {
                  setAnswerId(betRate.id);
                  setAnswer(betRate.bet_answer);
                  setRate(betRate.rate);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-r w-full from-blue-700 to-blue-900 flex justify-between px-2 py-1 rounded-md"
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
