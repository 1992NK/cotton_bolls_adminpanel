import { ShoppingBag } from "lucide-react";
import styles from "./logo.module.css";

export default function Logo({ size = 24, showText = true }) {
  return (
    <div className={styles.logo}>
      <span className={styles.icon} style={{ width: size, height: size }}>
        <ShoppingBag size={Math.round(size * 0.6)} color="#ffffff" />
      </span>
      {showText && (
        <span className={styles.text} style={{ fontSize: Math.round(size * 0.75) }}>
          Dashtar
        </span>
      )}
    </div>
  );
}