import formatCurrency from "@/utils/formatCurrency";
import styles from "./invoiceItemsTable.module.css";

export default function InvoiceItemsTable({ items }) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Product Title</th>
            <th className={styles.center}>Quantity</th>
            <th className={styles.center}>Item Price</th>
            <th className={styles.alignRight}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className={styles.srNo}>{index + 1}</td>
              <td className={styles.bold}>{item.title}</td>
              <td className={`${styles.center} ${styles.bold}`}>{item.quantity}</td>
              <td className={`${styles.center} ${styles.bold}`}>{formatCurrency(item.price)}</td>
              <td className={`${styles.alignRight} ${styles.bold} textDanger`}>
                {formatCurrency(item.quantity * item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}