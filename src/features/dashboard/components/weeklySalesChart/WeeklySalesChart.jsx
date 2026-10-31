"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "@/components/common/card/Card";
import { weeklySales } from "@/features/dashboard/data/chartData";
import styles from "./weeklySalesChart.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function WeeklySalesChart() {
  const [activeKey, setActiveKey] = useState("sales");
  const active = weeklySales.tabs.find((tab) => tab.key === activeKey);

  const data = {
    labels: weeklySales.labels,
    datasets: [
      {
        label: active.label,
        data: active.values,
        borderColor: active.color,
        backgroundColor: active.color,
        pointRadius: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { boxWidth: 40, boxHeight: 12 } },
    },
    scales: {
      y: {
        min: active.min,
        max: active.max,
        ticks: { stepSize: active.step },
      },
      x: { grid: { display: false } },
    },
  };

  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>Weekly Sales</h3>

      <div className={styles.tabs}>
        {weeklySales.tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${tab.key === activeKey ? styles.activeTab : ""}`}
            onClick={() => setActiveKey(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.chartBox}>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
}