import styles from "./badge.module.css";

export default function Badge({ label, bg, textColor, className = "" }) {
  return (
    <span
      className={`${styles.badge} ${className}`}
      style={{ background: bg, color: textColor }}
    >
      {label}
    </span>
  );
}