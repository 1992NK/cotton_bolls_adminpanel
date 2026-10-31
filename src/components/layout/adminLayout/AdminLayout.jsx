"use client";

import { useState } from "react";
import SideBar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";
import styles from "./adminLayout.module.css";

export default function AdminLayout({ children }) {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => setToggled((prev) => !prev);
  const handleClose = () => setToggled(false);

  return (
    <div className={styles.wrapper}>
      <SideBar toggled={toggled} onClose={handleClose} />
      {toggled && <div className={styles.overlay} onClick={handleClose} />}

      <div className={`${styles.main} ${toggled ? styles.mainFull : ""}`}>
        <NavBar onToggle={handleToggle} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}