"use client";

import Image from "next/image";
import { PanelLeft, Search, Languages, Sun, Bell } from "lucide-react";
import Badge from "@/components/common/badge/Badge";
import styles from "./navBar.module.css";

export default function NavBar({ onToggle }) {
  return (
    <header className={styles.navBar}>
      <div className={styles.inner}>
        <button className={styles.toggleBtn} onClick={onToggle} aria-label="Toggle sidebar">
          <PanelLeft size={16} />
        </button>

        <div className={styles.right}>
          <label className={styles.search}>
            <Search size={14} />
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <kbd className={styles.kbd}>⌘ K</kbd>
          </label>

          <button className={styles.iconBtn} aria-label="Language">
            <Languages size={18} />
            <Badge label="EN" bg="#10b981" textColor="#ffffff" className={styles.notifyBadge} />
          </button>

          <button className={styles.iconBtn} aria-label="Theme">
            <Sun size={18} />
          </button>

          <span className={styles.darkDot} />

          <button className={styles.iconBtn} aria-label="Notifications">
            <Bell size={18} />
            <Badge label="9+" bg="#ef4444" textColor="#ffffff" className={styles.notifyBadge} />
          </button>

          <Image
            src="/images/avatar.png"
            alt="admin"
            width={32}
            height={32}
            className={styles.avatar}
          />
        </div>
      </div>
    </header>
  );
}