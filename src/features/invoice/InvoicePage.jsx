import Card from "@/components/common/card/Card";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import InvoiceHeader from "./components/invoiceHeader/InvoiceHeader";
import InvoiceInfo from "./components/invoiceInfo/InvoiceInfo";
import InvoiceItemsTable from "./components/invoiceItemsTable/InvoiceItemsTable";
import InvoiceSummary from "./components/invoiceSummary/InvoiceSummary";
import DeliveryTracking from "./components/deliveryTracking/DeliveryTracking";
import { getInvoice } from "./data/invoiceData";
import styles from "./invoice.module.css";

export default function InvoicePage({ invoiceNo }) {
  const invoice = getInvoice(invoiceNo);

  return (
    <div className="container">
      <SectionTitle title="Invoice" />

      <Card className={styles.invoiceCard}>
        <InvoiceHeader status={invoice.status} />
        <InvoiceInfo
          date={invoice.date}
          invoiceNo={invoice.invoiceNo}
          customer={invoice.customer}
        />
        <InvoiceItemsTable items={invoice.items} />
        <InvoiceSummary
          paymentMethod={invoice.paymentMethod}
          shippingCost={invoice.shippingCost}
          discount={invoice.discount}
          total={invoice.total}
        />
        <DeliveryTracking tracking={invoice.tracking} />
      </Card>
    </div>
  );
}