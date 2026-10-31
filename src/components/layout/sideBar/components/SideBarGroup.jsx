import SideBarItem from "./SideBarItem";
import styles from "./sideBarGroup.module.css";

export default function SideBarGroup({ group, onNavigate }) {
  return (
    <div className={styles.group}>
      <p className={styles.title}>{group.title}</p>
      <ul>
        {group.items.map((item) => (
          <SideBarItem key={item.label} item={item} onNavigate={onNavigate} />
        ))}
      </ul>
    </div>
  );
}
