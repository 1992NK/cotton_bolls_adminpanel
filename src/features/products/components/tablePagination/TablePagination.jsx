import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { rowsPerPageOptions } from "../../data/columns";
import styles from "./tablePagination.module.css";

const TablePagination = ({
  selectedCount, totalCount, page, totalPages, rowsPerPage,
  onPageChange, onRowsPerPageChange,
}) => {
  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <div className={styles.pagination}>
      <p className={styles.selected}>{selectedCount} of {totalCount} row(s) selected.</p>
      <div className={styles.controls}>
        <label className={styles.rows}>
          Rows per page
          <select value={rowsPerPage} onChange={(e) => onRowsPerPageChange(e.target.value)}>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <span>Page {page} of {totalPages}</span>
        <div className={styles.buttons}>
          <button type="button" disabled={isFirst} onClick={() => onPageChange(1)} aria-label="First page"><ChevronsLeft size={16} /></button>
          <button type="button" disabled={isFirst} onClick={() => onPageChange(page - 1)} aria-label="Previous page"><ChevronLeft size={16} /></button>
          <button type="button" disabled={isLast} onClick={() => onPageChange(page + 1)} aria-label="Next page"><ChevronRight size={16} /></button>
          <button type="button" disabled={isLast} onClick={() => onPageChange(totalPages)} aria-label="Last page"><ChevronsRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;