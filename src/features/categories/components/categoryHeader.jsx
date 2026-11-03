import { FiUpload, FiDownload, FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import styles from "./categoryHeader.module.css";

const CategoryHeader = ({ hasSelection, onAdd, onDeleteSelected }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Category</h1>
        <p className={styles.subTitle}>Manage product categories</p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.outlineBtn}>
          <FiUpload /> Export
        </button>
        <button type="button" className={styles.outlineBtn}>
          <FiDownload /> Import
        </button>
        <button type="button" className={styles.bulkBtn}>
          <FiEdit /> Bulk Action
        </button>
        <button
          type="button"
          className={styles.deleteBtn}
          disabled={!hasSelection}
          onClick={onDeleteSelected}
        >
          <FiTrash2 /> Delete
        </button>
        <button type="button" className={styles.addBtn} onClick={onAdd}>
          <FiPlus /> Add Category
        </button>
      </div>
    </div>
  );
};

export default CategoryHeader;