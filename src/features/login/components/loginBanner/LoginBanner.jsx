import styles from "./loginBanner.module.css";

const LoginBanner = () => {
  return (
    <aside className={styles.banner} aria-hidden="true">
      <span className={styles.circleTop} />
      <span className={styles.circleLeftBig} />
      <span className={styles.circleLeftSmall} />
      <span className={styles.circleBottom} />
      <span className={styles.ringBottom} />
    </aside>
  );
};

export default LoginBanner;