"use client";

import { useMemo, useState } from "react";
import { productsData } from "../data/productsData";
import { getStatus } from "../utils/productHelpers";

const applyPriceFilter = (list, filter) => {
  switch (filter) {
    case "published": return list.filter((p) => p.published);
    case "unpublished": return list.filter((p) => !p.published);
    case "selling": return list.filter((p) => p.stock > 0);
    case "outOfStock": return list.filter((p) => p.stock === 0);
    default: return list;
  }
};

// API aane par date fields se sort karna, abhi id use ho rahi hai
const applyPriceSort = (list, filter) => {
  const copy = [...list];
  switch (filter) {
    case "lowToHigh": return copy.sort((a, b) => a.price - b.price);
    case "highToLow": return copy.sort((a, b) => b.price - a.price);
    case "dateAddedAsc":
    case "dateUpdatedAsc": return copy.sort((a, b) => a.id - b.id);
    case "dateAddedDesc": return copy.sort((a, b) => b.id - a.id);
    default: return list;
  }
};

const applyColumnSort = (list, { key, direction }) => {
  if (!key) return list;
  const factor = direction === "asc" ? 1 : -1;
  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") return a[key].localeCompare(b[key]) * factor;
    return (a[key] - b[key]) * factor;
  });
};

const useProducts = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [sort, setSort] = useState({ key: "", direction: "asc" });
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [selectedIds, setSelectedIds] = useState([]);

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }
    list = applyPriceFilter(list, priceFilter);
    list = applyPriceSort(list, priceFilter);
    return applyColumnSort(list, sort);
  }, [products, search, selectedCategories, priceFilter, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const resetPage = () => setPage(1);

  const handleSearch = (value) => { setSearch(value); resetPage(); };

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
    resetPage();
  };

  const selectPriceFilter = (value) => {
    setPriceFilter((prev) => (prev === value ? "" : value));
    resetPage();
  };

  const toggleSort = (key) => {
    setSort((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const changeRowsPerPage = (value) => { setRowsPerPage(Number(value)); resetPage(); };

  const toggleSelect = (id) =>
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));

  const allSelected =
    visibleProducts.length > 0 && visibleProducts.every((p) => selectedIds.includes(p.id));

  const toggleSelectAll = () => {
    const ids = visibleProducts.map((p) => p.id);
    setSelectedIds((prev) =>
      allSelected ? prev.filter((id) => !ids.includes(id)) : [...new Set([...prev, ...ids])]
    );
  };

  const updateField = (id, field, value) =>
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));

  const saveProduct = (form, id) => {
    const data = {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      salePrice: Number(form.salePrice),
      stock: Number(form.stock),
      image: form.images[0]?.preview || "",
    };
    if (id) {
      setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)));
      return;
    }
    const newId = Math.max(0, ...products.map((p) => p.id)) + 1;
    setProducts((prev) => [{ id: newId, published: true, featured: false, ...data }, ...prev]);
  };

  const duplicateProduct = (product) => {
    const newId = Math.max(0, ...products.map((p) => p.id)) + 1;
    setProducts((prev) => [{ ...product, id: newId, name: `${product.name} (Copy)` }, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  };

  const deleteSelected = () => {
    setProducts((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };

  return {
    visibleProducts, totalCount: filteredProducts.length, getStatus,
    search, handleSearch,
    selectedCategories, toggleCategory,
    priceFilter, selectPriceFilter,
    sort, toggleSort,
    page: currentPage, totalPages, setPage, rowsPerPage, changeRowsPerPage,
    selectedIds, toggleSelect, allSelected, toggleSelectAll,
    updateField, saveProduct, duplicateProduct, deleteProduct, deleteSelected,
  };
};

export default useProducts;