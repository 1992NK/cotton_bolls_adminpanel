"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { languageOptions } from "../data/categoryData";
import CategoryForm from "./categoryForm";
import styles from "./categoryDrawer.module.css";

const CategoryDrawer = ({ open, category, onClose, onSave }) => {
  const isEdit = Boolean(category);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={onClose}
      />

      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2>{isEdit ? "Update Category" : "Add Category"}</h2>
            <p>
              {isEdit
                ? "Update your product category and necessary information from here"
                : "Add your Product category and necessary information from here"}
            </p>
          </div>

          <div className={styles.headerActions}>
            <select className={styles.langSelect} defaultValue="en">
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button type="button" className={styles.closeBtn} onClick={onClose}>
              <FiX />
            </button>
          </div>
        </div>

        {open && (
          <CategoryForm
            key={category?.id ?? "new"}
            category={category}
            onCancel={onClose}
            onSubmit={onSave}
          />
        )}
      </aside>
    </>
  );
};

export default CategoryDrawer;