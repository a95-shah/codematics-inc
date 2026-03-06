"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const leadership = [
  { name: "Malik Ahsan Ali", role: "Managing Director (MD) / Founder" },
  { name: "Abdul Majeed", role: "Chief Executive Officer" },
  { name: "Waqar Ahmad", role: "Chief Financial Officer" },
  { name: "Atta Ullah", role: "General Manager" },
];

const team = [
  { name: "Obaid Ullah Khan", role: "Admin / Accounts Officer" },
  { name: "Abu Huraira", role: "Admin Assistant" },
  { name: "Adeel", role: "SQA Engineer" },
  { name: "Farhad Younas", role: "iOS Engineer" },
  { name: "Kaleem Ahmad", role: "3D Modeler & Animator | Team Lead" },
  { name: "Muhammad Mursaleen", role: "3D Technical Director" },
  { name: "Umaima Malik", role: "3D Modeler & Animator" },
  { name: "Ahmad Hassan", role: "Full Stack Developer" },
  { name: "Bilal Khan", role: "Android Developer" },
  { name: "Sana Fatima", role: "UI/UX Designer" },
  { name: "Zubair Ahmed", role: "DevOps Engineer" },
  { name: "Nadia Akhtar", role: "Digital Marketing Specialist" },
];

export default function TeamPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="text-center z-[1] px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge mb-6">Our People</div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-5 font-heading">
              <span className="text-white-theme">Team</span> <span className="text-[#c92228]">Codematics</span>
            </h1>
            <p className="text-[1.1rem] text-gray-300 max-w-[600px] mx-auto leading-[1.8]">
              A talented and diverse team of professionals driving innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title="Leadership" subtitle="The visionary leaders guiding Codematics towards excellence." />
          <div className="grid-4">
            {leadership.map((member, i) => (
              <TeamCard key={member.name} name={member.name} role={member.role} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <SectionHeading title="Our Expert Team" subtitle="Engineers, designers, and innovators who bring projects to life." />
          <div className="grid-4">
            {team.map((member, i) => (
              <TeamCard key={member.name} name={member.name} role={member.role} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--bg-primary), rgba(201,34,40,0.05))" }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-5">
              Join Our <span className="text-red">Team</span>
            </h2>
            <p className="text-gray-300 text-base max-w-[600px] mx-auto mb-8 leading-[1.8]">
              We&apos;re always looking for talented individuals to join our growing team. Let&apos;s build the future together.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
