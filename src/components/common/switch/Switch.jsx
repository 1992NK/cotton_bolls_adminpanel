const Switch = ({ checked, onChange, tone = "default", text, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={() => onChange(!checked)}
    className={`${styles.switch} ${checked ? styles.on : ""} ${styles[tone]} ${text ? styles.withText : ""}`}
  >
    {text && <span className={styles.text}>{text}</span>}
    <span className={styles.thumb} />
  </button>
);

import styles from "./switch.module.css";
export default Switch;