import LoginTopBar from "./components/loginTopBar/LoginTopBar";
import LoginCard from "./components/loginCard/LoginCard";
import { loginContent } from "./data/loginData";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <LoginTopBar />

        <div className={styles.center}>
          <LoginCard />
        </div>

        <p className={`${styles.copyright} textMuted`}>
          {loginContent.copyright}
        </p>
      </div>
    </main>
  );
};

export default LoginPage;