import CategoryRow from "./categoryRow";
import styles from "./categoryTable.module.css";

const CategoryTable = ({
  rows,
  selectedIds,
  onToggleSelect,
  onToggleSelectAll,
  onTogglePublished,
  onEdit,
  onDelete,
}) => {
  const allSelected =
    rows.length > 0 && rows.every((item) => selectedIds.includes(item.id));

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkCol}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={onToggleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>ICON</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th className={styles.centerCol}>PUBLISHED</th>
            <th className={styles.rightCol}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className={styles.empty}>
                No categories found
              </td>
            </tr>
          )}
          {rows.map((item) => (
            <CategoryRow
              key={item.id}
              item={item}
              selected={selectedIds.includes(item.id)}
              onToggleSelect={() => onToggleSelect(item.id)}
              onTogglePublished={() => onTogglePublished(item.id)}
              onEdit={() => onEdit(item)}
              onDelete={() => onDelete(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;