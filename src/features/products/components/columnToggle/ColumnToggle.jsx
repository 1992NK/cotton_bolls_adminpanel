import { Check } from "lucide-react";
import { tableColumns } from "../../data/columns";
import styles from "./columnToggle.module.css";

const ColumnToggle = ({ visibleColumns, onToggle }) => (
  <div className={styles.box}>
    <p className={styles.title}>Toggle columns</p>
    <ul className={styles.list}>
      {tableColumns.map((column) => (
        <li key={column.key}>
          <button type="button" className={styles.item} onClick={() => onToggle(column.key)}>
            <span className={styles.tick}>
              {visibleColumns.includes(column.key) && <Check size={14} />}
            </span>
            {column.toggleLabel}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ColumnToggle;