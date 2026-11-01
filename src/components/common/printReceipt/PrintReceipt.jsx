"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Logo from "@/components/common/logo/Logo";
import companyInfo from "@/constants/companyInfo";
import formatCurrency from "@/utils/formatCurrency";
import styles from "./printReceipt.module.css";

export default function PrintReceipt({ invoice, onAfterPrint }) {
  const afterPrintRef = useRef(onAfterPrint);

  useEffect(() => {
    const handleAfterPrint = () => {
      document.body.classList.remove("printingReceipt");
      afterPrintRef.current();
    };

    document.body.classList.add("printingReceipt");
    window.addEventListener("afterprint", handleAfterPrint);
    const timer = setTimeout(() => window.print(), 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("afterprint", handleAfterPrint);
      document.body.classList.remove("printingReceipt");
    };
  }, []);

  const grossTotal = invoice.subTotal;

  return createPortal(
    <div className="printOnly">
      <div className={styles.receipt}>
        <div className={styles.head}>
          <Logo size={14} showText={false} />
          <h2 className={styles.company}>{companyInfo.name}</h2>
          <p className={styles.line}>{companyInfo.address}</p>
          <p className={styles.line}>{companyInfo.phone}</p>
          <p className={styles.email}>{companyInfo.email}</p>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th className={styles.alignRight}>Qty</th>
              <th className={styles.alignRight}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={`${styles.alignRight} ${styles.bold}`}>{item.quantity}</td>
                <td className={`${styles.alignRight} ${styles.bold}`}>
                  {formatCurrency(item.quantity * item.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.summary}>
          <ul className={styles.left}>
            <li>
              Payment method : <strong>{invoice.paymentMethod}</strong>
            </li>
            <li>
              Shipping Method : <strong>{invoice.shippingMethod}</strong>
            </li>
            <li>
              No of Items : <strong>{invoice.items.length}</strong>
            </li>
            <li>
              Bill No : <strong>{invoice.invoiceNo}</strong>
            </li>
          </ul>

          <ul className={styles.right}>
            <li>
              <span>Gross Total :</span>
              <span>{formatCurrency(grossTotal)}</span>
            </li>
            <li>
              <span>Shipping Cost :</span>
              <span>{formatCurrency(invoice.shippingCost)}</span>
            </li>
            <li className={styles.totalRow}>
              <span>Total :</span>
              <span>{formatCurrency(invoice.total)}</span>
            </li>
          </ul>
        </div>

        <p className={styles.meta}>
          VAT number: <strong>{invoice.vatNumber}</strong>
        </p>
        <p className={styles.metaDate}>
          Date : <strong>{invoice.date}</strong>
        </p>

        <p className={styles.thanks}>Thank you for your order. Come Again...!</p>
      </div>
    </div>,
    document.body
  );
}