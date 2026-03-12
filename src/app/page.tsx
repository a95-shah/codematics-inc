"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Counter from "@/components/Counter";
import TeamCard from "@/components/TeamCard";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import TechMarquee from "@/components/TechMarquee";
import {
  HiDeviceMobile,
  HiCode,
  HiDesktopComputer,
  HiColorSwatch,
  HiCube,
  HiSpeakerphone,
  HiLightningBolt,
  HiChat,
  HiLink,
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi";

/* ========== DATA ========== */
const services = [
  { icon: <HiDeviceMobile />, title: "Mobile Apps Development", description: "The global scenario of Mobile Apps Development is currently witnessing an enormous growth. With so many apps coming up, we deliver high-quality mobile solutions." },
  { icon: <HiCode />, title: "Web Development", description: "Team Codematics possesses excellent web development skills. Our web designers and developers know their job well when it comes to building world-class web applications." },
  { icon: <HiDesktopComputer />, title: "Game Development", description: "Making and developing games from an idea to its functional stage is where all the fun lies. For our team, its more fascinating to create immersive gaming experiences." },
  { icon: <HiColorSwatch />, title: "UX/UI & Graphic Design", description: "In a world increasingly driven by visual content, businesses and individuals are constantly searching for the best way to communicate through stunning design." },
  { icon: <HiCube />, title: "3D Modeling & Animation", description: "We blend creativity with technical precision to transform visual storytelling into motions, influencing how brands connect with audiences worldwide." },
  { icon: <HiSpeakerphone />, title: "Digital Marketing", description: "We at Codematics have the expertise of working on how to use the web and digital space to achieve core business goals and drive measurable results." },
  { icon: <HiLightningBolt />, title: "Generative AI", description: "We are at the forefront of AI innovation, utilizing the latest models and techniques to help you drive sustained growth and competitive advantage." },
  { icon: <HiChat />, title: "Natural Language Processing", description: "Codematics' unique approach to NLP helps clients create smarter, more intuitive systems that transform how they engage with technology." },
  { icon: <HiLink />, title: "Blockchain Technology", description: "As a trusted provider of blockchain development and consulting services, we help businesses create secure, decentralized solutions." },
];

const teamMembers = [
  { name: "Malik Ahsan Ali", role: "Managing Director (MD) / Founder" },
  { name: "Hammad Lodhi", role: "Chief Executive Officer" },
  { name: "Waqar Ahmad", role: "Chief Financial Officer" },
  { name: "Babar Ali", role: "General Manager" },
  { name: "Obaid Ullah Khan", role: "Admin / Accounts Officer" },
  { name: "Abu Huraira", role: "Admin Assistant" },
  { name: "Adeel", role: "SQA Engineer" },
  { name: "Farhad Younas", role: "iOS Engineer" },
  { name: "Kaleem Ahmad", role: "3D Modeler & Animator | Team Lead" },
  { name: "Muhammad Mursaleen", role: "3D Technical Director" },
  { name: "Umaima Malik", role: "3D Modeler & Animator" },
];

const products = [
  { title: "Universal TV Remote", description: "Over 180 million users worldwide. Control your TV with the ultimate smart remote app.", color: "#c92228" },
  { title: "InvoiceBilling | Receipt Maker", description: "Fast invoices, quick payments. A comprehensive billing solution for businesses.", color: "#2563eb" },
  { title: "Codematics Point of Sale", description: "A full-featured POS system for modern retail and business management.", color: "#059669" },
  { title: "Citizen Master", description: "Your ID, civil records, services & more — all in one secure digital platform.", color: "#7c3aed" },
  { title: "CV Maker | Resume Builder", description: "Create professional CVs and resumes instantly with our easy-to-use builder.", color: "#d97706" },
  { title: "Smart Roku Remote", description: "The smartest remote control app for Roku TVs and streaming devices.", color: "#0891b2" },
];

const newsItems = [
  { title: "CV Maker | Resume Builder App", description: "Create standardized and personalized resumes — the job search companion for every professional." },
  { title: "Bomber Warrior Game", description: "Find the spirit of challenges — an exciting action-packed gaming experience by Codematics." },
  { title: "Blood Community Mobile App", description: "Give blood, save lives — a community-driven app connecting blood donors with recipients." },
  { title: "Fund Raising Record Keeping", description: "Easily manage and track fundraising records with our comprehensive management solution." },
  { title: "Flicky Chicky Fun Platform Arcader", description: "A delightful jumping and running game bringing fun for all ages." },
  { title: "Smart TVs Remote Control", description: "Remote control for iOS and Android — your TV command center in your pocket." },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at center, var(--bg-secondary) 0%, var(--bg-primary) 70%)" }}
      >
        <ParticleBackground />

        {/* Gradient orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(201,34,40,0.08) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(201,34,40,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-[1] text-center max-w-[900px] px-6 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hero-badge mb-8"
            >
              Software Engineering Excellence
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[1.05] mb-2 font-heading"
          >
            <span className="text-white-theme">CODE</span>
            <span className="bg-gradient-to-br from-red to-red-light bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              MATICS
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-normal text-gray-200 mb-6 font-heading"
          >
            For A Better, Safe And Peaceful World
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-gray-300 max-w-[650px] mx-auto mb-10 leading-[1.8]"
          >
            A global trusted partner for guaranteed software engineering excellence,
            quality, and transparency at every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/services" className="btn-primary">
              View Services
            </Link>
            <Link href="/products" className="btn-secondary">
              View Projects
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-xl border-2 border-gray-500 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[3px] h-2 rounded-sm bg-red"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section bg-bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center about-grid">
            <AnimatedSection direction="left">
              <div className="hero-badge mb-5">
                About Us
              </div>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-6 leading-[1.2]">
                Technology That
                <span className="text-red"> Serves </span>
                Humanity
              </h2>
              <p className="text-gray-300 text-base leading-[1.9] mb-5">
                At our core, we believe technology should serve humanity. We craft state-of-the-art,
                secure, scalable, future-ready solutions — driving the transformation toward a more
                efficient, resilient, and digitally empowered future.
              </p>
              <p className="text-gray-400 text-[15px] leading-[1.8] mb-8">
                With a multinational presence, a diverse and talented team, and an award-winning
                portfolio, Codematics continues to set new benchmarks in the world of software
                engineering.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="w-full aspect-square relative rounded-3xl overflow-hidden border border-glass-border">
                <Image
                  src="/new.png"
                  alt="About Codematics"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              What We Do
            </motion.div>
          </div>
          <SectionHeading
            title={<><span className="text-white-theme">Our Core</span> <span className="text-[#c92228]">Services</span></>}
            subtitle="We have a refined process after we have taken up a project. We offer the platform from where the projects take shape through stages of planning, testing and execution. We follow an agile methodology and run the project through a loop of feedback and constant improvement."
          />
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

      {/* ===== AWARDS ===== */}
      <section className="section bg-bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center about-grid">
            <AnimatedSection direction="left">
              <div className="hero-badge mb-5">
                Our Achievements
              </div>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-6 leading-[1.2]">
                Awards &
                <span className="text-red"> Honors</span>
              </h2>
              <p className="text-gray-300 text-[15px] leading-[1.9]">
                We have earned a global reputation for our expertise in creating high-quality
                products. Our achievements have been acknowledged with prestigious awards from
                industry leaders and our Google and App Store-compatible Universal TV Remote App
                is amassing a global user base of over 180 million.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-3 gap-5">
                <Counter end={180} suffix="M+" label="Million Users" />
                <Counter end={766} suffix="+" label="Projects" />
                <Counter end={33} suffix="+" label="Awards Won" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="section bg-bg-secondary">
        <div className="container">
          <SectionHeading title={<><span className="text-white-theme">OUR</span> <span className="text-[#c92228]">Global Leadership</span></>} subtitle="Our talented and diverse team of professionals drives innovation and excellence in every project we undertake." />
          <div className="grid-4">
            {teamMembers.slice(0, 8).map((member, i) => (
              <TeamCard key={member.name} name={member.name} role={member.role} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="btn-secondary">
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title={<><span className="text-white-theme">Our Winning</span> <span className="text-[#c92228]">Products</span></>} subtitle="Our portfolio of award-winning products that serve millions of users worldwide." />
          <div className="grid-3">
            {products.map((product, i) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                color={product.color}
                index={i}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              Load More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK MARQUEE ===== */}
      <TechMarquee />

      {/* ===== REMOTE RESOURCES ===== */}
      <section
        id="remote-resources"
        className="section relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(201,34,40,0.08), var(--bg-secondary), rgba(201,34,40,0.05))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px opacity-50" style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }} />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center about-grid">
            <AnimatedSection direction="left">
              <div className="w-full aspect-[1.2] rounded-3xl bg-glass-bg border border-glass-border flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/remote-talent.jpg"
                  alt="Global Remote Talent"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="hero-badge mb-5">
                Hire Talent
              </div>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-6 leading-[1.2]">
                We Provide On-Demand
                <span className="text-red"> Remote Resources</span>
              </h2>
              <p className="text-gray-300 text-base leading-[1.9] mb-8">
                With a mission to reshape the work practices and break the distance, our Remote
                Resource is all set to deliver unbeatable IT services globally with the utmost
                quality to boost your business on your own terms.
              </p>
              <Link href="/remote-resources" className="btn-primary">
                Request Now
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CSR ===== */}
      <section className="section bg-bg-primary">
        <div className="container">
          <SectionHeading
            title={<><span className="text-white-theme">Our </span><span className="text-[#c92228]">CSR</span><span className="text-white-theme"> Projects</span></>}
            subtitle="Our commitment extends to CSR (Corporate Social Responsibility) projects to solve social issues through leveraging technology and moving toward building a better, safer, and peaceful world."
          />
          <AnimatedSection>
            <div className="max-w-[500px] mx-auto p-10 bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-[20px] text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl bg-[linear-gradient(135deg,rgba(201,34,40,0.2),rgba(201,34,40,0.05))]">
                🚀
              </div>
              <h3 className="text-[22px] font-bold mb-3 font-heading">Urraan</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                URRAAN provides free monthly boot camps and internships in a wide range of digital
                skills within Abbottabad city. The success rate of URRAAN is more than 75%, which
                means that majority of our candidates either start freelancing, get jobs locally, or
                initiate their own startups.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section id="news" className="section bg-bg-secondary">
        <div className="container">
          <SectionHeading title={<><span className="text-white-theme">Latest</span> <span className="text-[#c92228]">News</span></>} subtitle="Stay updated with our latest projects, releases, and company news." />
          <div className="grid-3">
            {newsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-2xl overflow-hidden transition-all duration-[400ms] cursor-pointer hover:border-[rgba(201,34,40,0.3)] hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(201,34,40,0.15)]">
                  <div className="h-[180px] flex items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-primary">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black text-white-theme bg-gradient-to-br from-red to-red-dark">
                      C
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-2 font-heading text-white-theme">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/news" className="btn-primary">
              Visit Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section bg-bg-primary">
        <div className="container">
          <SectionHeading title={<><span className="text-white-theme">Get In</span> <span className="text-[#c92228]">Touch</span></>} subtitle="Discuss with our experts and choose the best solution for your business." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] about-grid">
            <AnimatedSection direction="left">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold mb-2">
                  Let&apos;s Build Something
                  <span className="text-red"> Amazing</span>
                </h3>
                <div className="flex gap-4 items-start">
                  <div className="contact-icon-box">
                    <HiLocationMarker size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[15px]">Pakistan Office</p>
                    <p className="text-gray-400 text-sm">Office # 14, 2nd Floor, KPK IT Park, Abbottabad, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="contact-icon-box">
                    <HiLocationMarker size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[15px]">Estonia (EU) Office</p>
                    <p className="text-gray-400 text-sm">Tartu, Estonia</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="contact-icon-box">
                    <HiMail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[15px]">Email</p>
                    <p className="text-gray-400 text-sm">contact@codematics.co | info@codematics.co</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="contact-icon-box">
                    <HiPhone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[15px]">Phone</p>
                    <p className="text-gray-400 text-sm">Pakistan: +92-992-639764 | Estonia: +372-5565-5510</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
