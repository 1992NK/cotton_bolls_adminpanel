import styles from "./avatar.module.css";

export default function Avatar({ name = "", src, size = 32 }) {
  const style = { width: size, height: size, fontSize: size / 2.5 };

  if (src) {
    return <img src={src} alt={name} className={styles.avatar} style={style} />;
  }

  return (
    <span className={styles.avatar} style={style}>
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
