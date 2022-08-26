import axios from "axios";
import React, { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Tablebody from "../BetHistory/TableBody";
import TableHeader from "../BetHistory/TableHeader";
import Pagination from "../pagination/Pagination";

export default function BetHistory() {
  const options = [2, 10, 20, 30, 40];
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(options[0]);
  const [betHistory, setBetHistory] = useState([]);
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return betHistory.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, betHistory, PageSize]);

  console.log(PageSize);

  useEffect(() => {
    const fetchBetHistory = () => {
      setLoading(true);
      axios
        .get(`http://localhost:8000/place-bet/?username=${user.username}`)
        .then((res) => {
          setBetHistory(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Something is going wrong!");
        });
    };

    fetchBetHistory();
  }, []);

  return (
    <div>
      {loading && (
        <div className="relative h-screen w-screen">
          <h1 className="absolute font-semibold text-white text-center top-1/2 left-1/2">
            Loading...
          </h1>
        </div>
      )}
      {!loading && (
        <div className="pt-16 md:pt-20 flex flex-col gap-y-4 mx-2 mb-10">
          <h2 className=" text-center text-3xl font-extrabold text-teal-400">
            Bet history
          </h2>
          <div className="flex flex-col  gap-y-4 ">
            <div className="flex flex-col  max-w-md gap-y-1 ">
              <label className="text-gray-200 font-semibold" htmlFor="show">
                Show
              </label>
              <select
                className="relative  block px-3 py-2 bg-gray-600 border border-gray-700 placeholder-gray-200 text-gray-200 rounded-md focus:outline-none  focus:border-indigo-500 focus:z-10 sm:text-sm"
                name="show"
                id="show"
                onChange={(e) => setPageSize(e.target.value)}
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-200">
              <TableHeader />
              <Tablebody currentTableData={currentTableData} />
            </table>
          </div>
          <Pagination
            className="flex"
            currentPage={currentPage}
            totalCount={betHistory.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
}
