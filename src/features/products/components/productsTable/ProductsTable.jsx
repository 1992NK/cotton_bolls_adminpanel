import { ChevronsUpDown } from "lucide-react";
import { tableColumns } from "../../data/columns";
import ProductRow from "../productRow/ProductRow";
import styles from "./productsTable.module.css";

const ProductsTable = ({
  rows, visibleColumns, sort, onSort,
  selectedIds, allSelected, onToggleAll, onToggleSelect,
  onUpdateField, actions,
}) => {
  const columns = tableColumns.filter((column) => visibleColumns.includes(column.key));

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkCell}>
              <input type="checkbox" checked={allSelected} onChange={onToggleAll} />
            </th>
            {columns.map((column) => (
              <th key={column.key}>
                {column.sortable ? (
                  <button type="button" className={styles.sortBtn} onClick={() => onSort(column.key)}>
                    {column.label}
                    <ChevronsUpDown size={14} className={sort.key === column.key ? styles.sorted : ""} />
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
            <th>View</th>
            <th>Published</th>
            <th>Featured</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {rows.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              visibleColumns={visibleColumns}
              selected={selectedIds.includes(product.id)}
              onToggleSelect={onToggleSelect}
              onUpdateField={onUpdateField}
              actions={actions}
            />
          ))}
          {!rows.length && (
            <tr>
              <td colSpan={columns.length + 5} className={styles.empty}>No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;