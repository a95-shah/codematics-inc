"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  index: number;
}

export default function TeamCard({ name, role, index }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center p-6 bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-2xl transition-all duration-[400ms] cursor-pointer hover:border-[rgba(201,34,40,0.3)] hover:shadow-[0_0_30px_rgba(201,34,40,0.15)] hover:-translate-y-1.5"
    >
      {/* Avatar placeholder */}
      <div className="w-[100px] h-[100px] rounded-full mx-auto mb-4 border-[3px] border-red flex items-center justify-center text-4xl font-bold font-heading text-red bg-gradient-to-br from-bg-tertiary to-bg-secondary">
        {name.charAt(0)}
      </div>

      <h4 className="text-base font-bold mb-1 text-white-theme font-heading">
        {name}
      </h4>

      <p className="text-gray-400 text-[13px] font-medium">
        {role}
      </p>
    </motion.div>
  );
}
