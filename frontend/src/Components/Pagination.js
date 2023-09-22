import React from "react";
import { useNavigate } from "react-router";

function Pagination({ totalPages, onPageChange, currentPage, page }) {
  const maxVisibleButtons = 5; // Maximum number of visible buttons
  const pageNumbers = [];
  const navigate = useNavigate();

  // Calculate the range of buttons to display
  let start = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
  let end = Math.min(totalPages, start + maxVisibleButtons - 1);

  // Handle edge cases
  if (end - start + 1 < maxVisibleButtons) {
    start = Math.max(1, end - maxVisibleButtons + 1);
  }

  // Add buttons for each page in the range
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center w-full gap-2 border-solid pagination">
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded"
          >
            1
          </button>
          {start > 2 && <span>...</span>}
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`bg-blue-500  text-white font-medium px-4 py-2 rounded ${
            pageNumber === currentPage ? "bg-blue-700" : "bg-blue"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span>...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded"
          >
            {totalPages}
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination;
