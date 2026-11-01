"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Copy, Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import styles from "./rowActions.module.css";

const MENU_HEIGHT = 160;

const RowActions = ({ onView, onDuplicate, onEdit, onDelete }) => {
  const [position, setPosition] = useState(null);
  const ref = useRef(null);
  const close = useCallback(() => setPosition(null), []);
  useClickOutside(ref, close);

  useEffect(() => {
    if (!position) return;
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [position, close]);

  const handleToggle = (e) => {
    if (position) return close();
    const rect = e.currentTarget.getBoundingClientRect();
    const openUp = rect.bottom + MENU_HEIGHT > window.innerHeight;
    setPosition({
      top: openUp ? rect.top - MENU_HEIGHT : rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });
  };

  const items = [
    { label: "View", icon: Eye, onClick: onView },
    { label: "Duplicate", icon: Copy, onClick: onDuplicate },
    { label: "Edit", icon: Pencil, onClick: onEdit },
    { label: "Delete", icon: Trash2, onClick: onDelete, danger: true },
  ];

  return (
    <div ref={ref} className={styles.wrapper}>
      <button type="button" className={styles.trigger} onClick={handleToggle} aria-label="More actions">
        <MoreHorizontal size={18} />
      </button>
      {position && (
        <ul className={styles.menu} style={{ top: position.top, right: position.right }}>
          {items.map(({ label, icon: Icon, onClick, danger }) => (
            <li key={label}>
              <button
                type="button"
                className={`${styles.item} ${danger ? styles.danger : ""}`}
                onClick={() => { onClick(); close(); }}
              >
                <Icon size={16} /> {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RowActions;