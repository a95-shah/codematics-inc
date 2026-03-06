import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Latest News — Codematics Services Pvt Ltd",
  description: "Stay updated with the latest news, product launches, and company updates from Codematics Services.",
};

export default function NewsPage() {
  return <NewsPageClient />;
}
