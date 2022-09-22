export default function Search({ searchInput, setSearchInput, search }) {
  return (
    <form className=" max-w-md " onSubmit={search}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium  sr-only text-gray-200"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5  text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm  rounded-lg border    bg-gray-700 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search by username..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
