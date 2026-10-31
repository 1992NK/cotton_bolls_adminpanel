"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "@/components/common/card/Card";
import { bestSelling } from "@/features/dashboard/data/chartData";
import styles from "./bestSellingChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingChart() {
  const data = {
    labels: bestSelling.map((item) => item.name),
    datasets: [
      {
        data: bestSelling.map((item) => item.value),
        backgroundColor: bestSelling.map((item) => item.color),
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { boxWidth: 40, boxHeight: 12 } },
    },
  };

  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>Best Selling Products</h3>

      <div className={styles.chartBox}>
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
}