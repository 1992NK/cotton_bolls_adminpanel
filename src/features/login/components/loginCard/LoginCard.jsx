import Logo from "@/components/common/logo/Logo";
import { LockIcon } from "@/components/common/icons/Icons";
import LoginForm from "../loginForm/LoginForm";
import { loginContent } from "../../data/loginData";
import styles from "./loginCard.module.css";

const LoginCard = () => {
  const { brand, title, subtitle, secureText } = loginContent;

  return (
    <div className={styles.card}>
      <Logo name={brand.name} highlight={brand.highlight} />

      <h1 className={`${styles.title} textDark`}>{title}</h1>
      <p className={`${styles.subtitle} textMuted`}>{subtitle}</p>

      <LoginForm />

      <div className={styles.secure}>
        <span className={styles.line} />
        <span className={`${styles.secureText} textMuted`}>
          <LockIcon width={18} height={18} />
          {secureText}
        </span>
        <span className={styles.line} />
      </div>
    </div>
  );
};

export default LoginCard;