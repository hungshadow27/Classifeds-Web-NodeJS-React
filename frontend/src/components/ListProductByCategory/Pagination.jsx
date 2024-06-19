import React from "react";

const Pagination = ({ currentPage, setCurrentPage, maxPages }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    return;
  };
  const handleNext = () => {
    if (currentPage !== maxPages) {
      setCurrentPage(currentPage + 1);
    }
    return;
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => handlePrev()}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>
        {Array.from(Array(maxPages), (item, index) => {
          return (
            <li key={index}>
              {index + 1 === Number(currentPage) ? (
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className="flex items-center justify-center px-4 h-10 border border-gray-300 bg-primary hover:bg-orange-100"
                >
                  {index + 1}
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  {index + 1}
                </button>
              )}
            </li>
          );
        })}
        <li>
          <button
            onClick={() => handleNext()}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
