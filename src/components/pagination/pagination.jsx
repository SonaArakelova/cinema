import React, { useState } from 'react';

export const Footer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= 3) {
      setCurrentPage(page);
    }
  };

  return (
    <footer>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {/* Previous  */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              tabIndex={currentPage === 1 ? '-1' : '0'}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </a>
          </li>

          {/* Page  1 */}
          <li className="page-item">
            <a
              className={`page-link ${currentPage === 1 ? 'active' : ''}`}
              href="#"
              onClick={() => handlePageChange(1)}
            >
              1
            </a>
          </li>

          {/* Page 2  */}
          <li className="page-item">
            <a
              className={`page-link ${currentPage === 2 ? 'active' : ''}`}
              href="#"
              onClick={() => handlePageChange(2)}
            >
              2 
            </a>
          </li>

          {/* Page 3 */}
          <li className="page-item">
            <a
              className={`page-link ${currentPage === 3 ? 'active' : ''}`}
              href="#"
              onClick={() => handlePageChange(3)}
            >
              3
            </a>
          </li>

          {/* Next  */}
          <li className={`page-item ${currentPage === 3 ? 'disabled' : ''}`}>
            <a
              className="page-link"
              href="#"
              tabIndex={currentPage === 3 ? '-1' : '0'}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

