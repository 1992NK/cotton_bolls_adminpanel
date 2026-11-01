"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ChevronRight, ChevronsUpDown } from "lucide-react";
import menuItems from "@/constants/menuItems";
import styles from "./sideBar.module.css";

const MOBILE_BREAKPOINT = 992;

export default function SideBar({ toggled, onClose }) {
  const pathname = usePathname();
  const [tooltip, setTooltip] = useState(null);

  const handleLinkClick = () => {
    // mobile par link click hone par drawer band ho, desktop par sidebar collapsed hi rahe
    if (window.innerWidth <= MOBILE_BREAKPOINT) onClose();
  };

  const handleMouseEnter = (event, label) => {
    if (!toggled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({ label, top: rect.top + rect.height / 2 });
  };

  const handleMouseLeave = () => setTooltip(null);

  return (
    <aside className={`${styles.sideBar} ${toggled ? styles.collapsed : ""}`}>
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
                    onClick={handleLinkClick}
                    onMouseEnter={(e) => handleMouseEnter(e, label)}
                    onMouseLeave={handleMouseLeave}
                    className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                  >
                    <Icon size={16} />
                    <span className={styles.label}>{label}</span>
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

      {toggled && tooltip && (
        <span
          className={styles.tooltip}
          style={{ top: tooltip.top, color: "#ffffff" }}
        >
          {tooltip.label}
        </span>
      )}
    </aside>
  );
}