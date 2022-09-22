import axios from "axios";
import React, { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { url } from "../../constants/urls";
import DateTime from "../DateTime";
import BetQuestion from "./BetQuestion";

function Match({ match }) {
  const [show, setShow] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState([]);

  const [data, setData] = useState([]);

  useWebSocket(`ws://127.0.0.1:8000/ws/job-status/`, {
    onMessage: (e) => {
      const message = JSON.parse(e.data);

      if (message["Changed"] === "BetQuestion") {
        setData(message);
      }
    },
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    async function getCategory() {
      try {
        let res = await axios.get(
          `${url}/match-category/?id=${match.match_category}`
        );
        setCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    async function getQuestions() {
      try {
        let res = await axios.get(`${url}/questions/?id=${match.id}`);
        setData();
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getCategory();
    getQuestions();
  }, [data]);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="flex w-full justify-between bg-white rounded-t-md  gap-x-6 px-2 py-2 "
      >
        <span className="my-auto">
          <img
            className="w-10 h-10"
            src={category.image}
            alt={category.category}
          />
        </span>
        <div className="flex flex-col leading-none">
          <p className="text-slate-700 text-sm font-semibold ">
            {match.team_1} <span>vs</span> {match.team_2}
          </p>
          <p className="text-slate-700 text-sm font-semibold ">
            {match.tournament_name}
          </p>
          <p className="text-slate-700 text-sm font-semibold">
            <DateTime date_time={match.date_time} />
          </p>
        </div>

        {/*arrow_down */}
        <span className={`my-auto ${show ? "hidden" : "block"}`}>
          <svg
            className=" w-10 h-10 fill-slate-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </span>

        {/*arrow_up*/}
        <span className={`my-auto ${show ? "block" : "hidden"}`}>
          <svg
            className="w-10 h-10 fill-slate-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
          </svg>
        </span>
      </button>

      <div className="w-full bg-gradient-to-r from-violet-900 to-violet-700 text-white py-1 px-4  font-semibold">
        Score : {match.score}
      </div>
      <div className={`${show ? "block" : "hidden"}`}>
        {questions.map((question) => (
          <BetQuestion
            key={question.id}
            question={question}
            match_info={match}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Match);
