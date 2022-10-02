import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { url } from "../../constants/urls";
import AuthContext from "../../context/AuthContext";
import Search from "../ClubMember/Search";
import TableBody from "../ClubMember/TableBody";
import TableHeader from "../ClubMember/TableHeader";
import Pagination from "../pagination/Pagination";

export default function ClubMember() {
  const options = [10, 20, 30, 40];
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(options[0]);
  const [clubMember, setClubMember] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [clubProfit, setClubProfit] = useState();
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const startIndex = currentPage * PageSize + 1 - PageSize;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return searchResult.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, searchResult, PageSize]);

  useEffect(() => {
    document.title = "Club Member";

    async function fetchClubProfit() {
      try {
        let res = await axios.get(`${url}/accounts/club-profit/`);
        let data = res.data;
        data.map((d) => setClubProfit(d.profit));
      } catch (err) {
        setError(
          "Something is wrong. Check your internet connection and refresh the page"
        );
      }
    }
    async function fetchClubMember() {
      setLoading(true);
      try {
        let res = await axios.get(
          `${url}/accounts/club-member/?club_name=${user.username}`
        );
        if (res) {
          setClubMember(res.data);
          setSearchResult(res.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(
          "Something is wrong. Check your internet connection and refresh the page."
        );
      }
    }
    fetchClubProfit();
    fetchClubMember();
  }, [user.username]);

  function search(e) {
    e.preventDefault();
    setCurrentPage(1);
    let result = [];
    if (searchInput) {
      clubMember.map((history) => {
        if (history.username === searchInput) {
          result.push(history);
        }
        return "";
      });

      setSearchResult(result);
    } else {
      setSearchResult(clubMember);
    }
  }

  return (
    <div>
      {loading && (
        <div className="relative h-screen w-screen">
          <h1 className="absolute font-semibold text-white  top-1/2 w-full text-center">
            Loading...
          </h1>
        </div>
      )}

      {error && (
        <div className="relative h-screen w-screen">
          <h1 className="absolute font-semibold text-red-500  top-1/2  w-full text-center">
            {error}
          </h1>
        </div>
      )}

      {!loading && !error && (
        <div className="pt-20 pb-16 flex flex-col gap-y-4 mx-2">
          <h2 className=" text-center text-3xl font-extrabold text-teal-400">
            Your Club Member
          </h2>
          <div className="flex flex-col  gap-y-4 ">
            {currentPage === 1 && (
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
            )}
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              search={search}
            />
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-200">
              <TableHeader />
              <TableBody
                currentTableData={currentTableData}
                startIndex={startIndex}
                clubProfit={clubProfit}
              />
            </table>
          </div>
          <Pagination
            className="flex"
            currentPage={currentPage}
            totalCount={searchResult.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
}
