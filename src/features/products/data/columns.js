export const tableColumns = [
  { key: "name", label: "Product Name", toggleLabel: "Title", sortable: true },
  { key: "category", label: "Category", toggleLabel: "Category", sortable: true },
  { key: "price", label: "Price", toggleLabel: "Original Price", sortable: true },
  { key: "salePrice", label: "Sale Price", toggleLabel: "Sale Price", sortable: true },
  { key: "stock", label: "Stock", toggleLabel: "Stock", sortable: true },
  { key: "status", label: "Status", toggleLabel: "Stock Status", sortable: false },
];

export const defaultVisibleColumns = tableColumns.map((column) => column.key);

export const rowsPerPageOptions = [5, 10, 20, 50];