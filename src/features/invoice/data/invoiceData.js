import { recentOrders } from "@/features/dashboard/data/recentOrdersData";

const items = [
  { id: 1, title: "Rainbow Chard", quantity: 1, price: 7.07 },
  { id: 2, title: "Clementine", quantity: 1, price: 48.12 },
];

const defaultCustomer = {
  name: "sa sadsa",
  email: "spmhsrlm.lh@gmail.com",
  phone: "3453224324324",
  addressLines: ["Rewari Haryana", "Uttara, Bangladesh, 125051"],
};

const fallbackOrder = {
  orderTime: "Oct 28, 2026 9:00 AM",
  customer: "sa sadsa",
  method: "Cash",
  status: "Delivered",
};

export function getInvoice(invoiceNo) {
  const order =
    recentOrders.find((item) => item.invoiceNo === invoiceNo) ?? { ...fallbackOrder, invoiceNo };

  const shippingCost = 60;
  const discount = 0;
  const subTotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const date = order.orderTime.split(" ").slice(0, 3).join(" ");

  return {
    invoiceNo: order.invoiceNo,
    status: order.status,
    date,
    customer: { ...defaultCustomer, name: order.customer },
    paymentMethod: order.method,
    shippingMethod: "UPS",
    vatNumber: "47589",
    items,
    subTotal,
    shippingCost,
    discount,
    total: subTotal + shippingCost - discount,
    tracking: {
      trackingId: "KB-20261028-AB37791E2D66",
      status: order.status,
      partner: "Not Assigned",
      deliveredAt: date,
    },
  };
}