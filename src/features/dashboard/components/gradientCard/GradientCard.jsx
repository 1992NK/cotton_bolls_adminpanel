import styles from "./gradientCard.module.css";

export default function GradientCard({ title, amount, icon: Icon, variant, breakdown }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <span className={styles.iconWrap}>
        <Icon size={16} />
      </span>

      <div className={`${styles.content} ${breakdown ? "" : styles.pushDown}`}>
        <h3 className={styles.amount}>{amount}</h3>
        <p className={styles.title}>{title}</p>
      </div>

      {breakdown && (
        <ul className={styles.breakdown}>
          {breakdown.map((item) => (
            <li key={item.label} className={styles.breakItem}>
              <span className={styles.breakLabel}>{item.label}</span>
              <strong className={styles.breakValue}>{item.value}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}