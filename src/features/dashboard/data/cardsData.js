import {
  ShoppingBag,
  Archive,
  Calendar,
  Clock,
  TrendingUp,
  Layers,
  Loader,
  Package,
  CircleCheck,
} from "lucide-react";

const paymentBreakdown = [
  { label: "Cash", value: "$186.29" },
  { label: "Card", value: "$0.00" },
  { label: "Credit", value: "$0.00" },
];

export const salesCards = [
  {
    id: 1,
    title: "Today Orders",
    amount: "$186.29",
    icon: ShoppingBag,
    variant: "blue",
    breakdown: paymentBreakdown,
  },
  {
    id: 2,
    title: "Yesterday Orders",
    amount: "$186.29",
    icon: Archive,
    variant: "mint",
    breakdown: paymentBreakdown,
  },
  { id: 3, title: "This Month", amount: "$825.27", icon: Calendar, variant: "rose" },
  { id: 4, title: "Last Month", amount: "$1,226.34", icon: Clock, variant: "teal" },
  { id: 5, title: "All-Time Sales", amount: "$1,351,106.14", icon: TrendingUp, variant: "purple" },
];

export const orderStats = [
  {
    id: 1,
    title: "Total Order",
    value: "1455",
    icon: Layers,
    iconColor: "#f97316",
    iconBg: "#ffedd5",
  },
  {
    id: 2,
    title: "Orders Pending",
    value: "106",
    icon: Loader,
    iconColor: "#3b82f6",
    iconBg: "#dbeafe",
    badge: { label: "$50,846.10", bg: "#fee2e2", textColor: "#ef4444" },
  },
  {
    id: 3,
    title: "Orders Processing",
    value: "43",
    icon: Package,
    iconColor: "#6366f1",
    iconBg: "#e0e7ff",
  },
  {
    id: 4,
    title: "Orders Delivered",
    value: "158",
    icon: CircleCheck,
    iconColor: "#10b981",
    iconBg: "#d1fae5",
  },
];