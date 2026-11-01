import formatCurrency from "@/utils/formatCurrency";
import styles from "./invoiceSummary.module.css";

export default function InvoiceSummary({ paymentMethod, shippingCost, discount, total }) {
  return (
    <div className={styles.summary}>
      <div>
        <h4 className={styles.label}>Payment Method</h4>
        <p className={styles.value}>{paymentMethod}</p>
      </div>

      <div>
        <h4 className={styles.label}>Shipping Cost</h4>
        <p className={styles.value}>{formatCurrency(shippingCost)}</p>
      </div>

      <div>
        <h4 className={styles.label}>Discount</h4>
        <p className={styles.value}>{formatCurrency(discount)}</p>
      </div>

      <div className={styles.total}>
        <h4 className={styles.label}>Total Amount</h4>
        <p className={`${styles.totalValue} textDanger`}>{formatCurrency(total)}</p>
      </div>
    </div>
  );
}