import Link from "next/link";
import { loginContent } from "../../data/loginData";
import styles from "./loginTopBar.module.css";

const LoginTopBar = () => {
  const { text, linkText, linkHref } = loginContent.topBar;

  return (
    <div className={styles.topBar}>
      <span className={`${styles.text} textMuted`}>{text}</span>
      <Link href={linkHref} className={`${styles.link} textPrimary`}>
        {linkText}
      </Link>
    </div>
  );
};

export default LoginTopBar;