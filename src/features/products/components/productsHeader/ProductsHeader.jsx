import { Download, FilePenLine, Plus, Trash2, Upload } from "lucide-react";
import styles from "./productsHeader.module.css";

const ProductsHeader = ({ selectedCount, onAdd, onDelete }) => {
  const hasSelection = selectedCount > 0;

  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Products</h1>
        <p className={styles.subtitle}>Manage your products inventory</p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.btn}><Upload size={14} /> Export</button>
        <button type="button" className={styles.btn}><Download size={14} /> Import</button>
        <button type="button" className={`${styles.btn} ${styles.bulk}`} disabled={!hasSelection}>
          <FilePenLine size={14} /> Bulk Action
        </button>
        <button type="button" className={`${styles.btn} ${styles.remove}`} disabled={!hasSelection} onClick={onDelete}>
          <Trash2 size={14} /> Delete
        </button>
        <button type="button" className={`${styles.btn} ${styles.add}`} onClick={onAdd}>
          <Plus size={14} /> Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductsHeader;