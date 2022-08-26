export default function ClubMember() {
  const options = [10, 20, 30, 40];
  return (
    <div className="pt-16 md:pt-20 flex flex-col gap-y-4 mx-2">
      <div className="flex flex-col  gap-y-4 ">
        <div className="flex flex-col  max-w-md gap-y-1 ">
          <label className="text-gray-200 font-semibold" htmlFor="show">
            Show
          </label>
          <select
            className="relative  block px-3 py-2 bg-gray-600 border border-gray-700 placeholder-gray-200 text-gray-200 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="show"
            id="show"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <form className=" max-w-md ">
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
              required=""
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-200">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-200">
            <tr>
              <th scope="col" className="py-3 px-6">
                #
              </th>
              <th scope="col" className="py-3 px-6">
                Joining Date
              </th>
              <th scope="col" className="py-3 px-6">
                Recent Bet Date
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                Total Bet(tk)
              </th>
              <th scope="col" className="py-3 px-6">
                Comission Earned(tk)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b bg-gray-900 border-gray-700">
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">kabul</td>
              <td className="py-4 px-6">2000</td>
              <td className="py-4 px-6">200</td>
            </tr>
            <tr className="border-b bg-gray-800 border-gray-700">
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">kabul</td>
              <td className="py-4 px-6">2000</td>
              <td className="py-4 px-6">200</td>
            </tr>
            <tr className=" border-b bg-gray-900 border-gray-700">
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">12 May 2022 @12:11 pm</td>
              <td className="py-4 px-6">kabul</td>
              <td className="py-4 px-6">2000</td>
              <td className="py-4 px-6">200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
