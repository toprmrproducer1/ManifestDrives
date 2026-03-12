"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "THE VISUAL CUE",
    desc: "When you see it on your desk, your brain registers the goal. It's impossible to ignore what's right in front of you."
  },
  {
    num: "02",
    title: "THE TACTILE ANCHOR",
    desc: "Heavy alloy construction. Real rubber tires. Picking it up grounds your ambition in physical reality."
  },
  {
    num: "03",
    title: "THE DAILY RITUAL",
    desc: "Look at it before you start work. Look at it when you want to quit. It demands your best effort."
  }
];

export default function Mission() {
  return (
    <section className="bg-[#080808] py-[120px] px-6 md:px-[8vw] border-b border-white/[0.04] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-inter text-[11px] tracking-[4px] text-[#E8000D] uppercase text-center mb-6"
      >
        NOT A TOY. A PSYCHOLOGICAL ANCHOR.
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-bebas text-[clamp(48px,6vw,80px)] text-white text-center leading-[0.9] mb-24"
      >
        WHY IT WORKS.
      </motion.h2>

      <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            className="flex flex-col md:pl-[32px] md:border-l border-white/[0.05] relative hover-target group"
          >
            {/* The active red line that appears on hover */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[linear-gradient(180deg,transparent,rgba(232,0,13,0.8)_50%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
            
            <div className="font-bebas text-[48px] text-[#E8000D] opacity-50 leading-[1] mb-6 select-none transition-opacity duration-500 group-hover:opacity-100">
              {pillar.num}
            </div>
            <h3 className="font-inter font-semibold text-[14px] text-white tracking-[3px] uppercase mb-4">
              {pillar.title}
            </h3>
            <p className="font-inter text-[15px] text-white/40 leading-[1.6]">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
