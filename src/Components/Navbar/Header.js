import { useState } from "react";
import { Link } from "react-router-dom";
import MobileSearchBar from "./MobileSearchBar";
import SearchBar from "./SearchBar";

function Header({ showSidebar, setShowSidebar }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header className=" relative">
      <div className="flex fixed z-10 items-center justify-between w-full h-12 px-2 mx-auto bg-slate-900 border-b border-gray-500 sm:px-6 lg:px-8 md:h-16">
        {/*Mobile menu toggle, controls the 'mobileMenuOpen' state.*/}
        <button onClick={() => setShowSidebar(true)} type="button" className="">
          <svg
            className="w-6 h-6 fill-slate-100 hover:fill-slate-700"
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

        {/*Search bar*/}
        <SearchBar />

        <div className="flex justify-end  space-x-2 md:space-x-4">
          <a
            href="#"
            className="hidden font-medium text-white md:block hover:text-slate-300"
          >
            Sign in
          </a>
          <span className="hidden w-px h-6 bg-gray-200 md:block"></span>
          <a
            href="#"
            className="hidden md:block font-medium text-white  hover:text-slate-300"
          >
            Create account
          </a>

          {/*search button */}
          <button
            onClick={() =>
              showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true)
            }
            href="#"
            className="md:hidden search-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-slate-100 hover:fill-slate-200"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
      </div>

      {/*Mobile search bar*/}
      {showSearchBar && !showSidebar ? (
        <MobileSearchBar
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
