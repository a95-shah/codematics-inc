import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Our Products — Codematics Services Pvt Ltd",
  description: "Discover our award-winning products serving millions of users worldwide: Universal TV Remote, InvoiceBilling, POS, Citizen Master, CV Maker, and more.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
