import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Header({ showSidebar, setShowSidebar }) {
  const { user } = useContext(AuthContext);
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (user) {
      getBalance(user.username);
    }
  }, []);

  function getBalance(name) {
    console.log("getBalance is called");
    axios
      .get(`http://127.0.0.1:8000/accounts/balance/?user_name=${name}`)
      .then((res) => {
        let data = res.data;
        setBalance(data["balance"]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <header className=" relative">
      <div className="flex fixed z-10 items-center justify-between w-full h-12 px-2 mx-auto bg-slate-900 border-b border-gray-500 sm:px-6 lg:px-8 md:h-16">
        {/*Mobile menu toggle, controls the 'mobileMenuOpen' state.*/}
        <button onClick={() => setShowSidebar(true)} type="button" className="">
          <svg
            className="w-6 h-6 fill-slate-100 hover:fill-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        <Link
          to="/"
          className="font-mono font-bold text-xl text-blue-700 mx-auto"
        >
          Sports
        </Link>

        {user ? (
          <div className="md:hidden flex gap-x-1">
            <span className="flex gap-x-1 bg-white py-0.5  px-2 rounded-md">
              <p className="text-slate-800 text-sm my-auto font-semibold">
                {balance} tk
              </p>
            </span>
            <Link
              to="/deposit"
              className="text-fuchsia-500 my-auto  text-center text-2xl  font-semibold"
            >
              +
            </Link>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <div className="hidden md:flex gap-x-1">
            <span className="flex gap-x-1 bg-white  px-2 rounded-md">
              <p className="text-slate-800 text-sm my-auto font-semibold">
                {balance} tk
              </p>
            </span>
            <Link
              to="/deposit"
              className="text-fuchsia-500 my-auto  text-center text-2xl  font-semibold"
            >
              +
            </Link>
          </div>
        ) : (
          <div className="flex justify-end  space-x-2 md:space-x-4">
            <Link
              to="/signin"
              className="hidden font-medium text-white md:block hover:text-slate-300"
            >
              Sign in
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
