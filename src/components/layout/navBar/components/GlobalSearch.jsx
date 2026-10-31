import { FiSearch } from "react-icons/fi";
import styles from "./globalSearch.module.css";

export default function GlobalSearch() {
  return (
    <label className={styles.search}>
      <FiSearch />
      <input type="text" placeholder="Search" className={styles.input} />
      <kbd className={styles.shortcut}>⌘ K</kbd>
    </label>
  );
}
