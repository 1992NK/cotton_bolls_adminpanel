import { CheckIcon } from "../icons/Icons";
import styles from "./checkBox.module.css";

const CheckBox = ({ id, name, label, checked, onChange }) => {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <span className={`${styles.box} textWhite`}>
        <CheckIcon width={14} height={14} />
      </span>
      <span className={`${styles.label} textDark`}>{label}</span>
    </label>
  );
};

export default CheckBox;