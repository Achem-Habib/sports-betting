function MobileSearchBar({ showSearchBar, setShowSearchBar }) {
  return (
    <div className=" mt-14 fixed z-10 w-full md:hidden">
      <div className="bg-amber-500 py-2 px-4 mx-2 sm:mx-8 rounded-md flex">
        <form className="flex w-full justify-center  ">
          <input
            className="w-full h-10 px-2 outline-none border border-slate-400 focus:border-slate-600"
            type="text"
            placeholder="Search Anything"
          />

          {/* Search button */}
          <button className="px-0.5 bg-red-500 hover:bg-red-600 py-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              className="w-8 fill-white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MobileSearchBar;
