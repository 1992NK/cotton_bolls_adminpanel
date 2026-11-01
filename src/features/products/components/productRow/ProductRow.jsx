import { Image as ImageIcon, ZoomIn } from "lucide-react";
import Switch from "@/components/common/switch/Switch";
import StatusBadge from "../statusBadge/StatusBadge";
import RowActions from "../rowActions/RowActions";
import { formatPrice, getStatus } from "../../utils/productHelpers";
import styles from "./productRow.module.css";

const ProductRow = ({ product, visibleColumns, selected, onToggleSelect, onUpdateField, actions }) => {
  const show = (key) => visibleColumns.includes(key);

  return (
    <tr className={styles.row}>
      <td>
        <input type="checkbox" checked={selected} onChange={() => onToggleSelect(product.id)} />
      </td>
      {show("name") && (
        <td>
          <div className={styles.nameCell}>
            <span className={styles.thumb}>
              {product.image ? <img src={product.image} alt={product.name} /> : <ImageIcon size={14} />}
            </span>
            <span className={styles.name}>{product.name}</span>
          </div>
        </td>
      )}
      {show("category") && <td>{product.category}</td>}
      {show("price") && <td className={styles.bold}>{formatPrice(product.price)}</td>}
      {show("salePrice") && <td className={styles.bold}>{formatPrice(product.salePrice)}</td>}
      {show("stock") && <td>{product.stock}</td>}
      {show("status") && (
        <td><StatusBadge status={getStatus(product)} /></td>
      )}
      <td>
        <button type="button" className={styles.iconBtn} onClick={() => actions.onView(product)} aria-label="View product">
          <ZoomIn size={18} />
        </button>
      </td>
      <td>
        <Switch
          checked={product.published}
          onChange={(value) => onUpdateField(product.id, "published", value)}
          label="Published"
        />
      </td>
      <td>
        <Switch
          tone="danger"
          checked={product.featured}
          onChange={(value) => onUpdateField(product.id, "featured", value)}
          label="Featured"
        />
      </td>
      <td className={styles.actionCell}>
        <RowActions
          onView={() => actions.onView(product)}
          onDuplicate={() => actions.onDuplicate(product)}
          onEdit={() => actions.onEdit(product)}
          onDelete={() => actions.onDelete(product)}
        />
      </td>
    </tr>
  );
};

export default ProductRow;