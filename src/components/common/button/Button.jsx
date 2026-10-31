import styles from "./button.module.css";

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button
      type={type}
      className={`${styles.button} textWhite ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;