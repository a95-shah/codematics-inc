"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full py-4 px-5 rounded-xl text-white-theme text-[15px] font-body outline-none transition-all duration-300 ${
      focused === field
        ? "bg-[rgba(201,34,40,0.05)] border border-red shadow-[0_0_20px_rgba(201,34,40,0.1)]"
        : "bg-glass-bg border border-glass-border shadow-none"
    }`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-5"
    >
      <div>
        <input
          type="text"
          placeholder="What is your name?"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          required
          className={inputClass("name")}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="What is your email?"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          required
          className={inputClass("email")}
        />
      </div>
      <div>
        <textarea
          placeholder="Write your message here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          required
          rows={5}
          className={`${inputClass("message")} resize-y min-h-[120px]`}
        />
      </div>
      <motion.button
        type="submit"
        className="btn-primary w-full justify-center !py-[18px] !px-8 !text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
