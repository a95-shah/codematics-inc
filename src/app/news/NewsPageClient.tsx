"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const newsItems = [
  { title: "CV Maker | Resume Builder App", description: "Create standardized and personalized resumes — the job search companion for every professional. Available on iOS and Android.", date: "Dec 2024", category: "Product Launch" },
  { title: "Bomber Warriors: Reloaded", description: "Find the spirit of challenges — an exciting action-packed gaming experience by Codematics, now reloaded with new levels.", date: "Nov 2024", category: "Game Release" },
  { title: "Blood Community Mobile App", description: "Give blood, save lives — a community-driven app connecting blood donors with recipients in real-time.", date: "Oct 2024", category: "Social Impact" },
  { title: "Fund-Raising Record Keeper App", description: "Easily manage and monitor all fundraising records and activities with our comprehensive management solution.", date: "Sep 2024", category: "Product Launch" },
  { title: "Flicky Chicky Fun Platform Arcader", description: "A delightful jumping and running game bringing fun for all ages — now available on all platforms.", date: "Aug 2024", category: "Game Release" },
  { title: "Smart TVs Remote Control for iOS & Android", description: "The smartest remote control app for your Smart TV. Control any brand from your phone with ease.", date: "Jul 2024", category: "Product Update" },
  { title: "Codematics Journey: From Startup to Global Impact", description: "A look back at our incredible journey from a small startup in Abbottabad to a global software company.", date: "Jun 2024", category: "Company News" },
  { title: "URRAAN Digital Skills Bootcamp Success", description: "Our CSR initiative URRAAN has trained over 500 students in digital skills with a 75%+ success rate.", date: "May 2024", category: "CSR" },
  { title: "Codematics Point of Sale System Launch", description: "Introducing our comprehensive POS system for modern retail — complete with inventory management and analytics.", date: "Apr 2024", category: "Product Launch" },
];

export default function NewsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="text-center z-[1] px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge mb-6">Blog & Updates</div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-5 font-heading">
              <span className="text-white-theme">Latest</span> <span className="text-[#c92228]">News</span>
            </h1>
            <p className="text-[1.1rem] text-gray-300 max-w-[600px] mx-auto leading-[1.8]">
              Stay updated with our latest projects, releases, and company news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title="All News & Updates" />
          <div className="grid-3">
            {newsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.06}>
                <div className="bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-2xl overflow-hidden transition-all duration-[400ms] cursor-pointer h-full flex flex-col hover:border-[rgba(201,34,40,0.3)] hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(201,34,40,0.15)]">
                  <div className="h-[180px] flex items-center justify-center relative bg-gradient-to-br from-bg-tertiary to-bg-secondary">
                    <div className="absolute top-4 left-4 py-1 px-3 rounded-[20px] bg-[rgba(201,34,40,0.2)] border border-[rgba(201,34,40,0.3)] text-red text-[11px] font-semibold">
                      {item.category}
                    </div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black text-white-theme bg-gradient-to-br from-red to-red-dark">
                      C
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-[1px]">{item.date}</div>
                    <h3 className="text-[17px] font-bold mb-2.5 font-heading text-white-theme leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.description}</p>
                    <div className="mt-4 text-red text-sm font-semibold">Read More →</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
