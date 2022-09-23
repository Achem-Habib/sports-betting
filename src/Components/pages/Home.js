import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { url, websocket_url } from "../../constants/urls";
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

  useWebSocket(`ws://${websocket_url}/ws/job-status/`, {
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

    getMatchList();
  }, [data]);

  return (
    <div className="pt-14 md:pt-16">
      {user ? (
        ""
      ) : (
        <div className="flex md:hidden gap-x-2  w-full px-2 sm:px-8">
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
      <div className="mx-2 flex flex-col gap-y-6  md:grid md:grid-cols-2 md:gap-x-8 sm:mx-8 lg:gap-x-16 lg:mx-16">
        <SportsCategory matches={liveMatch} status="Live" />
        <SportsCategory matches={upcomingMatch} status="Upcoming" />
      </div>
    </div>
  );
}

export default Home;
