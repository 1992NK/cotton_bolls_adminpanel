import styles from "./formFields.module.css";

const SelectField = ({ options, value, onChange, placeholder }) => (
  <select className={`${styles.control} ${styles.select}`} value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default SelectField;