import styles from "./formFields.module.css";

const TextField = ({ value, onChange, placeholder, type = "text", prefix, multiline = false }) => {
  if (multiline) {
    return (
      <textarea
        className={`${styles.control} ${styles.textarea}`}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return (
    <div className={`${styles.control} ${styles.group}`}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <input
        className={styles.input}
        type={type}
        min={type === "number" ? 0 : undefined}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextField;