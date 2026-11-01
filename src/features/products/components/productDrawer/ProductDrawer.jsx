"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Drawer from "@/components/common/drawer/Drawer";
import Switch from "@/components/common/switch/Switch";
import { emptyProductForm } from "../../data/productFormDefaults";
import { languageOptions } from "../../data/filterOptions";
import BasicInfoTab from "./BasicInfoTab";
import SeoTab from "./SeoTab";
import styles from "./productDrawer.module.css";

const tabs = [
  { key: "basic", label: "Basic Info" },
  { key: "seo", label: "SEO" },
];

const getInitialForm = (product) =>
  product
    ? {
        ...emptyProductForm,
        ...product,
        images: product.image ? [{ name: product.name, preview: product.image }] : [],
      }
    : emptyProductForm;

const ProductDrawer = ({ product, onClose, onSave }) => {
  const isEdit = Boolean(product);
  const [activeTab, setActiveTab] = useState("basic");
  const [hasVariants, setHasVariants] = useState(false);
  const [form, setForm] = useState(() => getInitialForm(product));

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    onSave(form, product?.id);
    onClose();
  };

  return (
    <Drawer onClose={onClose}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>{isEdit ? "Update Product" : "Add Product"}</h2>
          <p className={styles.subtitle}>
            {isEdit ? "Update your product and necessary information from here" : "Add your product and necessary information from here"}
          </p>
        </div>
        <div className={styles.headerRight}>
          <select className={styles.language} defaultValue="en">
            {languageOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>
      </header>

      <div className={styles.tabsBar}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.variants}>
          <span>Does this product have variants?</span>
          <Switch tone="danger" text={hasVariants ? "Yes" : "No"} checked={hasVariants} onChange={setHasVariants} label="Has variants" />
        </div>
      </div>

      <div className={styles.body}>
        {activeTab === "basic" ? (
          <BasicInfoTab form={form} onChange={handleChange} />
        ) : (
          <SeoTab form={form} onChange={handleChange} />
        )}
      </div>

      <footer className={styles.footer}>
        <button type="button" className={`${styles.footerBtn} ${styles.cancel}`} onClick={onClose}>Cancel</button>
        <button type="button" className={`${styles.footerBtn} ${styles.submit}`} onClick={handleSubmit}>
          {isEdit ? "Update Product" : "Add Product"}
        </button>
      </footer>
    </Drawer>
  );
};

export default ProductDrawer;