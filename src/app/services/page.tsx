import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Our Services — Codematics Services Pvt Ltd",
  description: "Explore our specialized services: Mobile Apps Development, Web Development, Game Development, UX/UI Design, 3D Modeling, Digital Marketing, AI, NLP, and Blockchain.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
