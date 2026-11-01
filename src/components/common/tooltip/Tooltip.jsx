import styles from "./tooltip.module.css";

export default function Tooltip({ label, children, align = "center" }) {
  return (
    <span className={styles.wrapper}>
      {children}
      <span role="tooltip" className={`${styles.tip} ${styles[align]} textWhite`}>
        {label}
      </span>
    </span>
  );
}