import { LogoMarkIcon } from "../icons/Icons";
import styles from "./logo.module.css";

const Logo = ({ name = "Admin", highlight = "Hub" }) => {
  return (
    <div className={styles.logo}>
      <LogoMarkIcon />
      <span className={`${styles.text} textDark`}>
        {name}
        <span className="textPrimary">{highlight}</span>
      </span>
    </div>
  );
};

export default Logo;