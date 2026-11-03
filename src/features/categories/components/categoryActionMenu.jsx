"use client";

import { useEffect, useRef, useState } from "react";
import { FiMoreHorizontal, FiEdit, FiTrash2 } from "react-icons/fi";
import styles from "./categoryActionMenu.module.css";

const CategoryActionMenu = ({ onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleClick = (callback) => {
    setOpen(false);
    callback();
  };

  return (
    <div className={styles.menu} ref={menuRef}>
      <button
        type="button"
        className={styles.dotsBtn}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Actions"
      >
        <FiMoreHorizontal />
      </button>

      {open && (
        <ul className={styles.dropdown}>
          <li>
            <button type="button" onClick={() => handleClick(onEdit)}>
              <FiEdit /> Edit
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleClick(onDelete)}>
              <FiTrash2 /> Delete
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CategoryActionMenu;