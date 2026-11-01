import { Truck } from "lucide-react";
import Badge from "@/components/common/badge/Badge";
import styles from "./deliveryTracking.module.css";

export default function DeliveryTracking({ tracking }) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>
        <Truck size={20} />
        <span>Delivery &amp; Tracking</span>
      </h3>

      <div className={styles.grid}>
        <div className={styles.box}>
          <p className={styles.label}>Tracking ID</p>
          <p className={`${styles.trackingId} textBlue`}>{tracking.trackingId}</p>
        </div>

        <div className={styles.box}>
          <p className={styles.label}>Tracking Status</p>
          <Badge label={tracking.status} bg="#dbeafe" textColor="#2563eb" />
        </div>

        <div className={styles.box}>
          <p className={styles.label}>Delivery Partner</p>
          <p className={styles.notAssigned}>{tracking.partner}</p>
        </div>

        <div className={styles.box}>
          <p className={styles.label}>Delivered At</p>
          <p className={styles.value}>{tracking.deliveredAt}</p>
        </div>
      </div>
    </section>
  );
}