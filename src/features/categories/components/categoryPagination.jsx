import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";
import { rowsPerPageOptions } from "../data/categoryData";
import styles from "./categoryPagination.module.css";

const CategoryPagination = ({
  selectedCount,
  totalRows,
  rowsPerPage,
  onRowsPerPage,
  page,
  totalPages,
  onPage,
}) => {
  return (
    <div className={styles.pagination}>
      <p className={styles.selectedText}>
        {selectedCount} of {totalRows} row(s) selected.
      </p>

      <div className={styles.controls}>
        <label className={styles.rows}>
          Rows per page
          <select
            value={rowsPerPage}
            onChange={(e) => onRowsPerPage(Number(e.target.value))}
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <span className={styles.pageText}>
          Page {page} of {totalPages}
        </span>

        <div className={styles.buttons}>
          <button type="button" disabled={page === 1} onClick={() => onPage(1)}>
            <FiChevronsLeft />
          </button>
          <button type="button" disabled={page === 1} onClick={() => onPage(page - 1)}>
            <FiChevronLeft />
          </button>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => onPage(page + 1)}
          >
            <FiChevronRight />
          </button>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => onPage(totalPages)}
          >
            <FiChevronsRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPagination;