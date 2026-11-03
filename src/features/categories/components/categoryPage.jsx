"use client";

import { useMemo, useState } from "react";
import { categoryList } from "../data/categoryData";
import CategoryHeader from "./categoryHeader";
import CategoryToolbar from "./categoryToolbar";
import CategoryTable from "./categoryTable";
import CategoryPagination from "./categoryPagination";
import CategoryDrawer from "./categoryDrawer";
import styles from "./categoryPage.module.css";

const CategoryPage = () => {
  const [categories, setCategories] = useState(categoryList);
  const [search, setSearch] = useState("");
  const [onlyPublished, setOnlyPublished] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [page, setPage] = useState(1);
  const [drawer, setDrawer] = useState({ open: false, category: null });

  const filtered = useMemo(
    () =>
      categories.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchPublished = onlyPublished ? item.published : true;
        return matchSearch && matchPublished;
      }),
    [categories, search, onlyPublished]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const visibleRows = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const openAddDrawer = () => setDrawer({ open: true, category: null });
  const openEditDrawer = (category) => setDrawer({ open: true, category });
  const closeDrawer = () => setDrawer({ open: false, category: null });

  const toggleSelect = (id) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

  const toggleSelectAll = () => {
    const visibleIds = visibleRows.map((item) => item.id);
    const allSelected = visibleIds.every((id) => selectedIds.includes(id));
    setSelectedIds(allSelected ? [] : visibleIds);
  };

  const togglePublished = (id) =>
    setCategories((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, published: !item.published } : item
      )
    );

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((item) => item.id !== id));
    setSelectedIds((prev) => prev.filter((item) => item !== id));
  };

  const deleteSelected = () => {
    setCategories((prev) => prev.filter((item) => !selectedIds.includes(item.id)));
    setSelectedIds([]);
  };

  const saveCategory = (data) => {
    if (drawer.category) {
      setCategories((prev) =>
        prev.map((item) =>
          item.id === drawer.category.id ? { ...item, ...data } : item
        )
      );
    } else {
      const newId = Math.random().toString(16).slice(2, 6).toUpperCase();
      setCategories((prev) => [
        { id: newId, icon: "/images/categories/placeholder.png", ...data },
        ...prev,
      ]);
    }
    closeDrawer();
  };

  return (
    <section className={`container ${styles.page}`}>
      <CategoryHeader
        hasSelection={selectedIds.length > 0}
        onAdd={openAddDrawer}
        onDeleteSelected={deleteSelected}
      />
      <CategoryToolbar
        search={search}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onlyPublished={onlyPublished}
        onTogglePublished={() => setOnlyPublished((prev) => !prev)}
      />
      <CategoryTable
        rows={visibleRows}
        selectedIds={selectedIds}
        onToggleSelect={toggleSelect}
        onToggleSelectAll={toggleSelectAll}
        onTogglePublished={togglePublished}
        onEdit={openEditDrawer}
        onDelete={deleteCategory}
      />
      <CategoryPagination
        selectedCount={selectedIds.length}
        totalRows={filtered.length}
        rowsPerPage={rowsPerPage}
        onRowsPerPage={(value) => {
          setRowsPerPage(value);
          setPage(1);
        }}
        page={currentPage}
        totalPages={totalPages}
        onPage={setPage}
      />
      <CategoryDrawer
        open={drawer.open}
        category={drawer.category}
        onClose={closeDrawer}
        onSave={saveCategory}
      />
    </section>
  );
};

export default CategoryPage;