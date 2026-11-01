import styles from "./invoiceInfo.module.css";

export default function InvoiceInfo({ date, invoiceNo, customer }) {
  return (
    <div className={styles.info}>
      <div>
        <h4 className={styles.label}>Date</h4>
        <p className={styles.value}>{date}</p>
      </div>

      <div>
        <h4 className={styles.label}>Invoice No</h4>
        <p className={styles.value}>#{invoiceNo}</p>
      </div>

      <div className={styles.invoiceTo}>
        <h4 className={styles.label}>Invoice To</h4>
        <p className={styles.value}>{customer.name}</p>
        <p className={styles.value}>
          {customer.email} {customer.phone}
        </p>
        {customer.addressLines.map((line) => (
          <p key={line} className={styles.value}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}