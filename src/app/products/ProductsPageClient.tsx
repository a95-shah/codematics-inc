"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";
import Link from "next/link";

const products = [
  { title: "Universal TV Remote", description: "Over 180 million users worldwide. The ultimate smart remote control app compatible with all TV brands — Samsung, LG, Sony, and more.", color: "#c92228" },
  { title: "InvoiceBilling | Receipt Maker", description: "Fast invoices, quick payments. A comprehensive billing and receipt solution for businesses of all sizes.", color: "#2563eb" },
  { title: "Codematics Point of Sale", description: "A full-featured POS system for modern retail and business management with inventory tracking and analytics.", color: "#059669" },
  { title: "Citizen Master", description: "Your ID, civil records, services & more — all in one secure digital platform for citizen services.", color: "#7c3aed" },
  { title: "CV Maker | Resume Builder", description: "Create standardized and personalized resumes instantly with our professional, easy-to-use resume builder.", color: "#d97706" },
  { title: "Smart Roku Remote", description: "Your Roku devices and streaming — a smart remote control app with all features for Roku TVs.", color: "#0891b2" },
  { title: "Bomber Warrior Game", description: "Find the spirit of challenges — an exciting action-packed gaming experience by Codematics.", color: "#dc2626" },
  { title: "Blood Community App", description: "Give blood, save lives — a community-driven mobile app connecting blood donors with recipients.", color: "#e11d48" },
  { title: "Fund Raising Record Keeping", description: "Easily manage and monitor all fundraising activities with our comprehensive record-keeping solution.", color: "#65a30d" },
  { title: "Flicky Chicky Arcader", description: "A delightful jumping and running game — fun for all ages with colorful graphics and engaging gameplay.", color: "#f59e0b" },
];

export default function ProductsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] rounded-full blur-[40px]" style={{ background: "radial-gradient(circle, rgba(201,34,40,0.06) 0%, transparent 70%)" }} />
        <div className="text-center z-[1] px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge mb-6">Our Portfolio</div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-5 font-heading">
              <span className="text-white-theme">Our Winning</span> <span className="text-[#c92228]">Products</span>
            </h1>
            <p className="text-[1.1rem] text-gray-300 max-w-[650px] mx-auto leading-[1.8]">
              Award-winning products that serve millions of users worldwide across mobile, web, and gaming platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-secondary py-[60px]">
        <div className="container">
          <div className="grid-3">
            <Counter end={180} suffix="M+" label="Global Users" />
            <Counter end={766} suffix="+" label="Projects Delivered" />
            <Counter end={33} suffix="+" label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title="Featured Products" subtitle="Explore our portfolio of innovative products trusted by millions worldwide." />
          <div className="grid-3">
            {products.map((product, i) => (
              <ProductCard key={product.title} title={product.title} description={product.description} color={product.color} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--bg-secondary), rgba(201,34,40,0.05))" }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-5">
              Have a Product <span className="text-red">Idea</span>?
            </h2>
            <p className="text-gray-300 text-base max-w-[600px] mx-auto mb-8 leading-[1.8]">
              Let us help you turn your vision into a product that millions will love.
            </p>
            <Link href="/contact" className="btn-primary">Discuss Your Idea</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
