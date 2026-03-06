import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team — Codematics Services Pvt Ltd",
  description: "Meet the talented and diverse team behind Codematics — leaders, engineers, designers, and innovators driving software excellence.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
