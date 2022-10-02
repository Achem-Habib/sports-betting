import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";

function Header({ showSidebar, setShowSidebar }) {
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState();
  const [data, setData] = useState([]);

  const fixedBalance = parseFloat(balance).toFixed(2);

  useWebSocket(`ws://127.0.0.1:8000/ws/job-status/`, {
    onMessage: (e) => {
      const message = JSON.parse(e.data);
      setData(message);
    },
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    async function getBalance(name) {
      try {
        let res = await axios.get(`${url}/accounts/balance/?user_name=${name}`);
        if (res) {
          setData();
          let data = res.data;
          setBalance(data["balance"]);
        }
      } catch (err) {
        console.log("Something is wrong");
      }
    }

    if (user) {
      getBalance(user.username);
    }
  }, [data, user]);

  return (
    <header className=" relative">
      <div className="flex fixed z-10 items-center justify-between w-full h-16 px-2 mx-auto bg-slate-900 border-b border-gray-500 sm:px-6 lg:px-8 ">
        {/*Mobile menu toggle, controls the 'mobileMenuOpen' state.*/}
        <button onClick={() => setShowSidebar(true)} type="button" className="">
          <svg
            className="w-7 h-7 fill-slate-100 hover:fill-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        <Link
          to="/"
          className=" font-serif font-bold text-2xl text-lime-400 mx-auto"
        >
          sports24
        </Link>

        {user ? (
          <div className="md:hidden flex gap-x-2">
            <span className="flex gap-x-1 bg-white py-2  px-3 rounded-md">
              <p className="text-slate-800 text-sm my-auto font-semibold">
                {isNaN(fixedBalance) ? "" : `${fixedBalance}`} tk
              </p>
            </span>
            <Link
              to="/deposit"
              className="text-fuchsia-500 my-auto  text-center text-3xl  font-semibold"
            >
              {user.club_holder ? "" : "+"}
            </Link>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <div className="hidden md:flex gap-x-2">
            <span className="flex gap-x-1 bg-white  px-3 py-2 rounded-md">
              <p className="text-slate-800 text-sm my-auto font-semibold">
                {isNaN(fixedBalance) ? "" : `${fixedBalance}`} tk
              </p>
            </span>
            <Link
              to="/deposit"
              className="text-fuchsia-500 my-auto  text-center text-3xl  font-semibold"
            >
              {user.club_holder ? "" : "+"}
            </Link>
          </div>
        ) : (
          <div className="flex justify-end  space-x-2 md:space-x-4">
            <Link
              to="/signin"
              className="hidden font-medium text-white md:block hover:text-slate-300"
            >
              Log in
            </Link>
            <span className="hidden w-px h-6 bg-gray-200 md:block"></span>
            <Link
              to="/signup"
              className="hidden md:block font-medium text-white  hover:text-slate-300"
            >
              Create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
