"use client";

import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { defaultVisibleColumns } from "../../data/columns";
import ProductsHeader from "../productsHeader/ProductsHeader";
import ProductsToolbar from "../productsToolbar/ProductsToolbar";
import ProductsTable from "../productsTable/ProductsTable";
import TablePagination from "../tablePagination/TablePagination";
import ProductDrawer from "../productDrawer/ProductDrawer";
import styles from "./productsPage.module.css";

const ProductsPage = () => {
  const products = useProducts();
  const [visibleColumns, setVisibleColumns] = useState(defaultVisibleColumns);
  const [drawer, setDrawer] = useState({ open: false, product: null });

  const openAddDrawer = () => setDrawer({ open: true, product: null });
  const openEditDrawer = (product) => setDrawer({ open: true, product });
  const closeDrawer = () => setDrawer({ open: false, product: null });

  const toggleColumn = (key) =>
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );

  const handleDelete = (product) => {
    if (window.confirm(`Delete "${product.name}"?`)) products.deleteProduct(product.id);
  };

  const handleBulkDelete = () => {
    if (window.confirm("Delete selected products?")) products.deleteSelected();
  };

  // Product details page banne par yahan route push kar dena
  const handleView = () => {};

    return (
    <div className="container">
      <div className={styles.page}>
        <ProductsHeader
          selectedCount={products.selectedIds.length}
          onAdd={openAddDrawer}
          onDelete={handleBulkDelete}
        />
        <ProductsToolbar
          search={products.search}
          onSearch={products.handleSearch}
          selectedCategories={products.selectedCategories}
          onToggleCategory={products.toggleCategory}
          priceFilter={products.priceFilter}
          onSelectPrice={products.selectPriceFilter}
          visibleColumns={visibleColumns}
          onToggleColumn={toggleColumn}
        />
        <ProductsTable
          rows={products.visibleProducts}
          visibleColumns={visibleColumns}
          sort={products.sort}
          onSort={products.toggleSort}
          selectedIds={products.selectedIds}
          allSelected={products.allSelected}
          onToggleAll={products.toggleSelectAll}
          onToggleSelect={products.toggleSelect}
          onUpdateField={products.updateField}
          actions={{
            onView: handleView,
            onDuplicate: products.duplicateProduct,
            onEdit: openEditDrawer,
            onDelete: handleDelete,
          }}
        />
        <TablePagination
          selectedCount={products.selectedIds.length}
          totalCount={products.totalCount}
          page={products.page}
          totalPages={products.totalPages}
          rowsPerPage={products.rowsPerPage}
          onPageChange={products.setPage}
          onRowsPerPageChange={products.changeRowsPerPage}
        />
      </div>
      {drawer.open && (
        <ProductDrawer
          product={drawer.product}
          onClose={closeDrawer}
          onSave={products.saveProduct}
        />
      )}
    </div>
  );
};

export default ProductsPage;