"use client";

import { useEffect } from "react";
import styles from "./drawer.module.css";

const Drawer = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {children}
      </aside>
    </div>
  );
};

export default Drawer;