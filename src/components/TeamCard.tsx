"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  index: number;
  image?: string;
}

export default function TeamCard({ name, role, index, image }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center p-8 bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[2rem] transition-all duration-[400ms] cursor-pointer hover:border-red-600/30 hover:shadow-[0_0_40px_rgba(201,34,40,0.1)] hover:-translate-y-2 group"
    >
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-red-600/20 flex items-center justify-center text-3xl font-black text-[#c92228] bg-[#232527] overflow-hidden group-hover:border-[#c92228] transition-colors">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
        ) : (
          name.charAt(0)
        )}
      </div>

      <h4 className="text-lg font-black mb-1 text-white font-heading tracking-tight group-hover:text-[#c92228] transition-colors">
        {name}
      </h4>

      <p className="text-gray-500 text-xs font-bold tracking-wider">
        {role}
      </p>
    </motion.div>
  );
}
