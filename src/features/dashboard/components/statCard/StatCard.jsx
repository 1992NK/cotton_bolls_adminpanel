import Card from "@/components/common/card/Card";
import Badge from "@/components/common/badge/Badge";
import styles from "./statCard.module.css";

export default function StatCard({ title, value, icon: Icon, iconColor, iconBg, badge }) {
  return (
    <Card className={styles.statCard}>
      <span className={styles.iconBox} style={{ background: iconBg }}>
        <Icon size={16} color={iconColor} />
      </span>

      <p className={styles.title}>
        <span className={styles.titleText}>{title}</span>
        {badge && <Badge {...badge} />}
      </p>

      <h3 className={styles.value}>{value}</h3>
    </Card>
  );
}