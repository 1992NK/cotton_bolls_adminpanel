import { FiChevronDown } from "react-icons/fi";
import Avatar from "@/components/common/avatar/Avatar";
import styles from "./sideBarUser.module.css";

export default function SideBarUser() {
  return (
    <div className={styles.user}>
      <Avatar name="admin" size={32} />
      <div className={styles.info}>
        <p className={styles.name}>admin</p>
        <p className={styles.email}>admin@gmail.com</p>
      </div>
      <FiChevronDown />
    </div>
  );
}
