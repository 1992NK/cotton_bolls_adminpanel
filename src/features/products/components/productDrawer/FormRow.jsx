import styles from "./formRow.module.css";

const FormRow = ({ label, children }) => (
  <div className={styles.row}>
    <label className={styles.label}>{label}</label>
    <div className={styles.field}>{children}</div>
  </div>
);

export default FormRow;