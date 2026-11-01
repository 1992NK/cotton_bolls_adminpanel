"use client";

import { useRef } from "react";
import { UploadCloud, X } from "lucide-react";
import styles from "./imageUpload.module.css";

const ACCEPTED = ["image/jpeg", "image/png", "image/webp"];

const ImageUpload = ({ files, onChange, multiple = true }) => {
  const inputRef = useRef(null);

  const addFiles = (fileList) => {
    const valid = Array.from(fileList)
      .filter((file) => ACCEPTED.includes(file.type))
      .map((file) => ({ name: file.name, preview: URL.createObjectURL(file) }));
    onChange(multiple ? [...files, ...valid] : valid.slice(0, 1));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => onChange(files.filter((_, i) => i !== index));

  return (
    <div>
      <div
        className={styles.dropzone}
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <UploadCloud size={30} className={styles.icon} />
        <p className={styles.text}>Drag your images here</p>
        <span className={styles.hint}>(Only *.jpeg, *.webp and *.png images will be accepted)</span>
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          accept=".jpeg,.jpg,.png,.webp"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>
      {files.length > 0 && (
        <ul className={styles.previews}>
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className={styles.preview}>
              <img src={file.preview} alt={file.name} />
              <button type="button" onClick={() => removeFile(index)} aria-label="Remove image"><X size={12} /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageUpload;