"use client";

import { useState } from "react";
import { Printer, ZoomIn } from "lucide-react";
import Card from "@/components/common/card/Card";
import Badge from "@/components/common/badge/Badge";
import Pagination from "@/components/common/pagination/Pagination";
import statusColors from "@/constants/statusColors";
import {
  recentOrders,
  tableHeads,
  statusOptions,
  totalOrderPages,
} from "@/features/dashboard/data/recentOrdersData";
import styles from "./recentOrdersTable.module.css";

export default function RecentOrdersTable() {
  const [orders, setOrders] = useState(recentOrders);
  const [currentPage, setCurrentPage] = useState(1);

  const handleStatusChange = (id, status) => {
    setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, status } : order)));
  };

  return (
    <Card className={styles.wrapper}>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {tableHeads.map((head) => (
                <th
                  key={head.key}
                  className={head.align === "right" ? styles.alignRight : ""}
                >
                  {head.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className={styles.bold}>{order.invoiceNo}</td>
                <td>{order.orderTime}</td>
                <td>{order.customer}</td>
                <td className={styles.bold}>{order.method}</td>
                <td className={styles.bold}>{order.amount}</td>
                <td>
                  <Badge label={order.status} {...statusColors[order.status]} />
                </td>
                <td>
                  <select
                    className={styles.select}
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className={styles.alignRight}>
                  <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Print invoice">
                      <Printer size={18} />
                    </button>
                    <button className={styles.iconBtn} aria-label="View invoice">
                      <ZoomIn size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.paginationBox}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalOrderPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Card>
  );
}