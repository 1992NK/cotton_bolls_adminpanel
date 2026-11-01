"use client";

import { useCallback, useRef, useState } from "react";
import { PlusCircle } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import styles from "./filterDropdown.module.css";

const FilterDropdown = ({ label, icon: Icon = PlusCircle, count = 0, align = "left", children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(ref, close);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button type="button" className={styles.trigger} onClick={() => setOpen((prev) => !prev)}>
        <Icon size={16} />
        <span>{label}</span>
        {count > 0 && <span className={styles.count}>{count}</span>}
      </button>
      {open && (
        <div className={`${styles.panel} ${align === "right" ? styles.right : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;