"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ChevronRight, ChevronsUpDown } from "lucide-react";
import menuItems from "@/constants/menuItems";
import styles from "./sideBar.module.css";

export default function SideBar({ toggled, onClose }) {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sideBar} ${toggled ? styles.hidden : ""}`}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
          <ShoppingBag size={14} color="#ffffff" />
        </span>
        <span className={styles.logoText}>Dashtar</span>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((section) => (
          <div key={section.title} className={styles.section}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <ul>
              {section.items.map(({ label, href, icon: Icon, hasChildren }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                    {hasChildren && <ChevronRight size={14} className={styles.arrow} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.profile}>
        <Image
          src="/images/avatar.png"
          alt="admin"
          width={32}
          height={32}
          className={styles.avatar}
        />
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>admin</span>
          <span className={styles.profileEmail}>admin@gmail.com</span>
        </div>
        <ChevronsUpDown size={14} className={styles.profileIcon} />
      </div>
    </aside>
  );
}