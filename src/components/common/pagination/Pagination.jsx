import { ChevronLeft, ChevronRight } from "lucide-react";
import getPageNumbers from "@/utils/getPageNumbers";
import styles from "./pagination.module.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.navBtn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={14} />
        <span>Previous</span>
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className={styles.dots}>
            •••
          </span>
        ) : (
          <button
            key={page}
            className={`${styles.page} ${page === currentPage ? styles.active : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.navBtn}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span>Next</span>
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}