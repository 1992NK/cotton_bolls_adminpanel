"use client";

import { useState } from "react";
import { X } from "lucide-react";
import styles from "./formFields.module.css";

const TagsInput = ({ tags, onChange }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const value = text.trim();
    if (value && !tags.includes(value)) onChange([...tags, value]);
    setText("");
  };

  const removeTag = (tag) => onChange(tags.filter((t) => t !== tag));

  return (
    <div className={`${styles.control} ${styles.tags}`}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
          <button type="button" onClick={() => removeTag(tag)} aria-label={`Remove ${tag}`}><X size={12} /></button>
        </span>
      ))}
      <input
        className={styles.input}
        placeholder="Product Tag (Write then press enter to add new tag )"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TagsInput;