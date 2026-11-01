import InvoicePage from "@/features/invoice/InvoicePage";

export default async function Page({ params }) {
  const { id } = await params;

  return <InvoicePage invoiceNo={id} />;
}