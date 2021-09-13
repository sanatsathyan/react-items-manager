import React from "react";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="/#"
            onClick={(event) => {
              event.preventDefault();
              onPageChange(currentPage - 1);
            }}
          >
            Previous
          </a>
        </li>
        {totalPages &&
          Array.from(Array(totalPages).keys()).map((item, key) => (
            <li
              key={key}
              className={`page-item ${key + 1 === currentPage ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="/#"
                onClick={(event) => {
                  event.preventDefault();
                  onPageChange(key + 1);
                }}
              >
                {key + 1}
              </a>
            </li>
          ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="/#"
            onClick={(event) => {
              event.preventDefault();
              onPageChange(currentPage + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
