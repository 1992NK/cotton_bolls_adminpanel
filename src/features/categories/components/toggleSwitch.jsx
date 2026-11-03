import styles from "./toggleSwitch.module.css";

const ToggleSwitch = ({ checked, onChange, variant = "table" }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`${styles.switch} ${styles[variant]} ${
        checked ? styles.on : styles.off
      }`}
    >
      {variant === "form" && (
        <span className={styles.label}>{checked ? "Yes" : "No"}</span>
      )}
      <span className={styles.knob} />
    </button>
  );
};

export default ToggleSwitch;