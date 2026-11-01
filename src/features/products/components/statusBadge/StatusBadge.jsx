import styles from "./statusBadge.module.css";

const labels = { selling: "Selling", soldOut: "Sold Out" };

const StatusBadge = ({ status }) => (
  <span className={`${styles.badge} ${styles[status]}`}>{labels[status]}</span>
);

export default StatusBadge;