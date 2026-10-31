import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import GradientCard from "./components/gradientCard/GradientCard";
import StatCard from "./components/statCard/StatCard";
import WeeklySalesChart from "./components/weeklySalesChart/WeeklySalesChart";
import BestSellingChart from "./components/bestSellingChart/BestSellingChart";
import RecentOrdersTable from "./components/recentOrdersTable/RecentOrdersTable";
import { salesCards, orderStats } from "./data/cardsData";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className="container">
      <SectionTitle title="Dashboard Overview" />

      <section className={styles.gradientGrid}>
        {salesCards.map((card) => (
          <GradientCard key={card.id} {...card} />
        ))}
      </section>

      <section className={styles.statGrid}>
        {orderStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      <section className={styles.chartGrid}>
        <WeeklySalesChart />
        <BestSellingChart />
      </section>

      <SectionTitle title="Recent Order" />
      <RecentOrdersTable />
    </div>
  );
}