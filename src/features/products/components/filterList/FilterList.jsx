"use client";

import { useState } from "react";
import { Check, Search } from "lucide-react";
import styles from "./filterList.module.css";

const FilterList = ({ options, selected, onSelect, placeholder }) => {
  const [query, setQuery] = useState("");
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.list}>
      <label className={styles.search}>
        <Search size={16} />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <ul className={styles.options}>
        {filtered.map((option) => {
          const active = selected.includes(option.value);
          return (
            <li key={option.value}>
              <button
                type="button"
                className={`${styles.option} ${active ? styles.active : ""}`}
                onClick={() => onSelect(option.value)}
              >
                <span className={`${styles.check} ${active ? styles.checked : ""}`}>
                  {active && <Check size={12} />}
                </span>
                {option.label}
              </button>
            </li>
          );
        })}
        {!filtered.length && <li className={styles.empty}>No results</li>}
      </ul>
    </div>
  );
};

export default FilterList;