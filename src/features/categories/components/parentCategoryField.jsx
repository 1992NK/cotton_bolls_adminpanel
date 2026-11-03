import { FiFolder, FiPlus } from "react-icons/fi";
import { parentCategoryTree } from "../data/categoryData";
import styles from "./parentCategoryField.module.css";

const ParentCategoryField = ({ value, onSelect }) => {
  return (
    <div>
      <input type="text" className={styles.input} value={value} readOnly />

      <ul className={styles.tree}>
        {parentCategoryTree.map((node) => (
          <li key={node.id} className={styles.treeItem}>
            <FiPlus className={styles.treePlus} />
            <button
              type="button"
              className={`${styles.treeNode} ${
                value === node.name ? styles.treeNodeActive : ""
              }`}
              onClick={() => onSelect(node.name)}
            >
              <FiFolder /> {node.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentCategoryField;