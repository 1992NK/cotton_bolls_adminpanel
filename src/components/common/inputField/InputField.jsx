"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icons/Icons";
import styles from "./inputField.module.css";

const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={`${styles.label} textDark`}>
        {label}
      </label>

      <div className={styles.inputWrap}>
        {icon && <span className={`${styles.icon} textMuted`}>{icon}</span>}

        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
          required
        />

        {isPassword && (
          <button
            type="button"
            className={`${styles.toggle} textMuted`}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;