"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import styles from "./sideBarItem.module.css";

const isActivePath = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function SideBarItem({ item, onNavigate }) {
  const pathname = usePathname();
  const { label, href, icon: Icon, children } = item;

  const hasChildren = Boolean(children);
  const isChildActive =
    hasChildren && children.some((child) => isActivePath(pathname, child.href));
  const [isOpen, setIsOpen] = useState(isChildActive);

  if (hasChildren) {
    return (
      <li>
        <button
          type="button"
          className={styles.item}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon className={styles.icon} />
          <span className={styles.label}>{label}</span>
          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
        </button>

        {isOpen && (
          <ul className={styles.subMenu}>
            {children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className={`${styles.subItem} ${
                    isActivePath(pathname, child.href) ? styles.active : ""
                  }`}
                >
                  <span className={styles.dash} />
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        className={`${styles.item} ${isActivePath(pathname, href) ? styles.active : ""}`}
      >
        <Icon className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </Link>
    </li>
  );
}
