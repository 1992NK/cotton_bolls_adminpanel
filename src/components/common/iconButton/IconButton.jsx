import styles from "./iconButton.module.css";

export default function IconButton({
  children,
  label,
  badge,
  badgeType = "danger",
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.iconButton}
      aria-label={label}
      onClick={onClick}
    >
      {children}
      {badge && (
        <span className={`${styles.badge} ${styles[badgeType]} textWhite`}>
          {badge}
        </span>
      )}
    </button>
  );
}
