"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  HiDeviceMobile, HiCode, HiDesktopComputer, HiColorSwatch,
  HiCube, HiSpeakerphone, HiLightningBolt, HiChat, HiLink,
} from "react-icons/hi";

const services = [
  { icon: <HiDeviceMobile />, title: "Mobile Apps Development", description: "The global scenario of Mobile Apps Development is currently witnessing an enormous growth. With so many apps coming up, we deliver high-quality, scalable mobile solutions for iOS and Android platforms using the latest frameworks and technologies.", details: ["iOS & Android Native Apps", "Cross-Platform Development", "App Store Optimization", "Maintenance & Support"] },
  { icon: <HiCode />, title: "Web Development", description: "Team Codematics possesses excellent web development skills. Our web designers and developers know their job well when it comes to building world-class, responsive, and performant web applications.", details: ["Full-Stack Web Applications", "Progressive Web Apps (PWA)", "E-Commerce Solutions", "CMS Development"] },
  { icon: <HiDesktopComputer />, title: "Game Development", description: "Making and developing games from an idea to its functional stage is where all the fun lies. For our team, it's more fascinating to create immersive gaming experiences across platforms.", details: ["Unity & Unreal Engine", "2D & 3D Games", "AR/VR Experiences", "Cross-Platform Gaming"] },
  { icon: <HiColorSwatch />, title: "UX/UI & Graphic Design", description: "In a world increasingly driven by visual content, businesses and individuals are constantly searching for the best way to communicate through stunning, user-centric design.", details: ["User Experience Research", "Interface Design", "Brand Identity", "Design Systems"] },
  { icon: <HiCube />, title: "3D Modeling & Animation", description: "We blend creativity with technical precision to transform visual storytelling into motions, influencing how brands connect with their audiences worldwide.", details: ["Character Modeling", "Product Visualization", "Motion Graphics", "Architectural Rendering"] },
  { icon: <HiSpeakerphone />, title: "Digital Marketing", description: "We at Codematics have the expertise of working on how to use the web and digital space to achieve core business goals and drive measurable results.", details: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"] },
  { icon: <HiLightningBolt />, title: "Generative AI", description: "We are at the forefront of AI innovation, utilizing the latest models and techniques to help you drive sustained growth and competitive advantage in the age of AI.", details: ["Custom AI Models", "LLM Integration", "AI-Powered Automation", "Chatbot Development"] },
  { icon: <HiChat />, title: "Natural Language Processing", description: "Codematics' unique approach to NLP helps clients create smarter, more intuitive systems that transform how they engage with technology and users.", details: ["Text Analytics", "Sentiment Analysis", "Language Models", "Voice Assistants"] },
  { icon: <HiLink />, title: "Blockchain Technology", description: "As a trusted provider of blockchain development and consulting services, we help businesses create secure, transparent, and decentralized solutions.", details: ["Smart Contracts", "DeFi Solutions", "NFT Marketplaces", "Blockchain Consulting"] },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="grid-pattern" />
        <div className="text-center z-[1] px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge mb-6">What We Do</div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-5 font-heading">
              <span className="text-white-theme">Our</span> <span className="text-[#c92228]">Services</span>
            </h1>
            <p className="text-[1.1rem] text-gray-300 max-w-[650px] mx-auto leading-[1.8]">
              We have a refined process. We offer the platform from where projects take shape through stages of planning, testing, and execution following an agile methodology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="grid-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title="Deep Dive Into Our Expertise" subtitle="Each of our services is backed by years of experience and a team of specialists." />
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.05} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-[60px] p-10 bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-[20px] about-grid">
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div className="text-4xl text-red mb-4">{service.icon}</div>
                  <h3 className="text-[22px] font-bold mb-4 font-heading">{service.title}</h3>
                  <p className="text-gray-300 text-[15px] leading-[1.8] mb-5">{service.description}</p>
                  <ul className="list-none grid grid-cols-2 gap-2">
                    {service.details.map((d) => (
                      <li key={d} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <div className="w-full aspect-[1.2] rounded-2xl border border-glass-border flex items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-tertiary">
                    <div className="text-[72px] text-red opacity-30">{service.icon}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--bg-secondary), rgba(201,34,40,0.05))" }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-5">
              Have a Project in <span className="text-red">Mind</span>?
            </h2>
            <p className="text-gray-300 text-base max-w-[600px] mx-auto mb-8 leading-[1.8]">
              Let&apos;s discuss how Codematics can help bring your ideas to life with our expertise.
            </p>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
