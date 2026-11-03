"use client";

import { useState } from "react";
import ImageUploader from "./imageUploader";
import ParentCategoryField from "./parentCategoryField";
import ToggleSwitch from "./toggleSwitch";
import styles from "./categoryForm.module.css";

const FormRow = ({ label, children }) => (
  <div className={styles.row}>
    <label className={styles.label}>{label}</label>
    <div className={styles.field}>{children}</div>
  </div>
);

const CategoryForm = ({ category, onCancel, onSubmit }) => {
  const isEdit = Boolean(category);

  const [form, setForm] = useState({
    name: category?.name ?? "",
    description: category?.description ?? "",
    parent: "Home",
    published: category?.published ?? true,
  });

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit({
      name: form.name,
      description: form.description,
      published: form.published,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.body}>
        <FormRow label="Name">
          <input
            type="text"
            className={styles.input}
            placeholder="Category title"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </FormRow>

        <FormRow label="Description">
          <textarea
            className={styles.textarea}
            placeholder="Category Description"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </FormRow>

        <FormRow label="Parent Category">
          <ParentCategoryField
            value={form.parent}
            onSelect={(value) => handleChange("parent", value)}
          />
        </FormRow>

        <FormRow label="Category Image">
          <ImageUploader />
        </FormRow>

        <FormRow label="Published">
          <ToggleSwitch
            variant="form"
            checked={form.published}
            onChange={() => handleChange("published", !form.published)}
          />
        </FormRow>
      </div>

      <div className={styles.footer}>
        <button type="button" className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submitBtn}>
          {isEdit ? "Update Category" : "Add Category"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;