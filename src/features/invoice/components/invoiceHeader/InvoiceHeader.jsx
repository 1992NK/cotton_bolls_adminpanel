import Logo from "@/components/common/logo/Logo";
import Badge from "@/components/common/badge/Badge";
import statusColors from "@/constants/statusColors";
import companyInfo from "@/constants/companyInfo";
import styles from "./invoiceHeader.module.css";

export default function InvoiceHeader({ status }) {
  return (
    <div className={styles.header}>
      <div>
        <h3 className={styles.title}>INVOICE</h3>
        <div className={styles.statusRow}>
          <span className={styles.statusLabel}>STATUS</span>
          <Badge label={status} {...statusColors[status]} />
        </div>
      </div>

      <div className={styles.right}>
        <Logo size={32} />
        <address className={styles.address}>
          <p>{companyInfo.address}</p>
          <p>{companyInfo.phone}</p>
          <p>{companyInfo.email}</p>
          <p>{companyInfo.website}</p>
        </address>
      </div>
    </div>
  );
}