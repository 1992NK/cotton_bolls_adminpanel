"use client";

import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import styles from "./imageUploader.module.css";

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

const ImageUploader = () => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (!file || !allowedTypes.includes(file.type)) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      className={`${styles.dropzone} ${dragging ? styles.dragging : ""}`}
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".jpeg,.jpg,.png,.webp"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {preview ? (
        <img src={preview} alt="Preview" className={styles.preview} />
      ) : (
        <>
          <FiUploadCloud className={styles.uploadIcon} />
          <p className={styles.text}>Drag your images here</p>
          <p className={styles.hint}>
            (Only *jpeg, *webp and *png images will be accepted)
          </p>
        </>
      )}
    </div>
  );
};

export default ImageUploader;