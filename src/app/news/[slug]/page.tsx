import { Metadata } from "next";
import { newsItems } from "@/data/newsData";
import NewsDetailClient from "./NewsDetailClient";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return { title: "News Not Found — Codematics" };
  return {
    title: `${item.title} — Codematics News`,
    description: item.description,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();
  return <NewsDetailClient item={item!} />;
}
