import React from "react";

import { DOTS, usePagination } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="inline-flex -space-x-px">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={onPrevious}
          className="py-2 px-3 ml-0 leading-tight  rounded-l-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          Previous
        </button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index}>
              <button className="py-2 px-3 leading-tight   border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                &#8230;
              </button>
            </li>
          );
        }

        return (
          <li key={index}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className="py-2 px-3 leading-tight   border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li>
        <button
          disabled={currentPage === lastPage}
          onClick={onNext}
          className="py-2 px-3 ml-0 leading-tight  rounded-r-lg border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
