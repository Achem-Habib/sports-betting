import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import SportsCategory from "../Home/SportsCategory";

function Home() {
  const [matches, setMatches] = useState([]);
  const liveMatch = matches.filter((match) => match.match_status === "Live");
  const upcomingMatch = matches.filter(
    (match) => match.match_status === "Upcoming"
  );

  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  useWebSocket(`ws://127.0.0.1:8000/ws/job-status/`, {
    onMessage: (e) => {
      const message = JSON.parse(e.data);
      if (message["Changed"] === "Match") {
        setData(message);
      }
    },
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    document.title = "Home";

    async function getMatchList() {
      try {
        const res = await axios.get(`${url}/matches/`);
        setMatches(res.data);
        setData();
      } catch (err) {
        console.log(err);
      }
    }

    async function getMessage() {
      try {
        const res = await axios.get(`${url}/accounts/message/`);
        res.data.map((d) => setMessage(d.message));
      } catch (err) {}
    }

    getMessage();
    getMatchList();
  }, [data]);

  return (
    <div className="pt-16  ">
      {user ? (
        ""
      ) : (
        <div className="flex md:hidden gap-x-2  w-full px-2 sm:px-8 pt-2">
          <Link
            to="/signin"
            className="bg-green-500 text-white text-center text-md font-medium w-full py-1 border border-slate-600 rounded-md"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white text-center text-md font-medium w-full py-1 border border-slate-600 rounded-md"
          >
            Create account
          </Link>
        </div>
      )}
      <marquee className="text-white bg-violet-800 mt-4 py-1">
        {message}
      </marquee>
      <div className="mx-2 flex flex-col gap-y-6  md:grid md:grid-cols-2 md:gap-x-8 sm:mx-8 lg:gap-x-16 lg:mx-16">
        <SportsCategory matches={liveMatch} status="Live" />
        <SportsCategory matches={upcomingMatch} status="Upcoming" />
      </div>
      <div className="border-t border-slate-300 flex mt-8 ">
        <div className="mx-auto flex flex-col my-4">
          <a
            href="/"
            className=" font-serif font-bold text-2xl text-lime-400 mx-auto"
          >
            sports24
          </a>
          <p className="text-white mx-auto">
            © all copyright reserve to sports24.com
          </p>
          <p className="text-white mx-auto">
            We strongly discourage to play if you are not 18+
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
