import ToggleSwitch from "./toggleSwitch";
import CategoryActionMenu from "./categoryActionMenu";
import styles from "./categoryRow.module.css";

const CategoryRow = ({
  item,
  selected,
  onToggleSelect,
  onTogglePublished,
  onEdit,
  onDelete,
}) => {
  return (
    <tr>
      <td className={styles.checkCol}>
        <input type="checkbox" checked={selected} onChange={onToggleSelect} />
      </td>
      <td className={styles.idCell}>{item.id}</td>
      <td>
        <span className={styles.iconBox}>
          <img src={item.icon} alt={item.name} />
        </span>
      </td>
      <td className={styles.nameCell}>{item.name}</td>
      <td className={styles.descCell}>{item.description}</td>
      <td className={styles.centerCol}>
        <ToggleSwitch
          variant="table"
          checked={item.published}
          onChange={onTogglePublished}
        />
      </td>
      <td className={styles.rightCol}>
        <CategoryActionMenu onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
};

export default CategoryRow;