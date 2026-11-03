import { FiSearch, FiPlusCircle, FiSliders } from "react-icons/fi";
import styles from "./categoryToolbar.module.css";

const CategoryToolbar = ({ search, onSearch, onlyPublished, onTogglePublished }) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <label className={styles.searchBox}>
          <FiSearch />
          <input
            type="text"
            placeholder="Search by Category name"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>

        <button
          type="button"
          className={`${styles.filterBtn} ${onlyPublished ? styles.active : ""}`}
          onClick={onTogglePublished}
        >
          <FiPlusCircle /> Published
        </button>

        <button type="button" className={styles.filterBtn}>
          <FiPlusCircle /> Children
        </button>
      </div>

      <button type="button" className={styles.viewBtn}>
        <FiSliders /> View
      </button>
    </div>
  );
};

export default CategoryToolbar;