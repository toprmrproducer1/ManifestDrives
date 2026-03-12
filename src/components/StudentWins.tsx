"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WINS = [
  {
    id: 1,
    user: "ALEX TRUMAN",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
    text: "Just got my GT3 RS. The detail is insane. Perfect addition to the desk setup.",
    badge: "PORSCHE 911 GT3 RS"
  },
  {
    id: 2,
    user: "MARCUS VALIANT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    text: "No more economy class. The STO serves as my daily reminder to grind harder.",
    badge: "HURACÁN STO"
  },
  {
    id: 3,
    user: "DAVID CHEN",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&auto=format&fit=crop",
    text: "Started my business 20 days ago. The M4 model sits right next to my monitor. Manifesting the real thing soon.",
    badge: "BMW M4"
  }
];

export default function StudentWins() {
  return (
    <section className="relative py-[120px] px-6 md:px-[8vw] border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(232,0,13,0.04)_0%,transparent_70%),linear-gradient(180deg,#080808_0%,#0A0A0A_50%,#080808_100%)]" />

      {/* Header */}
      <div className="text-center mb-24 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-6"
        >
          THE REAL WORLD WINS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bebas text-[clamp(48px,7vw,80px)] text-white leading-[0.9] tracking-[1px]"
        >
          THEY STARTED<br />WHERE YOU ARE.
        </motion.h2>
      </div>

      {/* Testimonial Cards */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto mb-24">
        {WINS.map((win, idx) => (
          <motion.div
            key={win.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 + 0.1, duration: 0.6 }}
            className="flex-1 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[40px] saturate-[150%] p-[48px] shadow-[0_8px_32px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col items-start relative hover-target"
          >
            <div className="font-georgia text-[#E8000D] text-[100px] leading-[0.6] opacity-50 mb-4 select-none">
              "
            </div>
            
            <p className="font-inter text-[16px] text-white/80 leading-[1.6] mb-12 flex-grow">
              {win.text}
            </p>

            <div className="flex items-center gap-4 w-full mt-auto pt-8 border-t border-white/[0.04]">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[rgba(232,0,13,0.3)] shadow-[0_0_16px_rgba(232,0,13,0.15)] flex-shrink-0">
                <Image src={win.avatar} alt={win.user} fill className="object-cover pointer-events-none" />
              </div>
              <div className="flex flex-col gap-1.5 items-start">
                <span className="font-inter font-medium text-[13px] text-white tracking-[2px]">{win.user}</span>
                <span className="bg-[rgba(232,0,13,0.06)] border border-[rgba(232,0,13,0.2)] backdrop-blur-[10px] font-bebas text-[11px] tracking-[3px] text-[rgba(232,0,13,0.8)] px-2 py-0.5 pointer-events-none">
                  {win.badge}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counters Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 max-w-[1440px] mx-auto bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] backdrop-blur-[20px] p-[48px] flex flex-col md:flex-row gap-8 justify-around items-center"
      >
        <div className="flex flex-col items-center">
          <span className="font-bebas text-[clamp(48px,6vw,80px)] leading-none bg-[linear-gradient(180deg,#FFFFFF_0%,#666666_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
            2,400+
          </span>
          <span className="font-inter text-[11px] tracking-[4px] text-[#E8000D] uppercase mt-2">ORDERS DO NOT LIE</span>
        </div>

        <div className="hidden md:block w-[1px] h-[80px] bg-[linear-gradient(180deg,transparent,rgba(232,0,13,0.4),transparent)]" />
        <div className="md:hidden w-[80px] h-[1px] bg-[linear-gradient(90deg,transparent,rgba(232,0,13,0.4),transparent)] my-4" />

        <div className="flex flex-col items-center">
          <span className="font-bebas text-[clamp(48px,6vw,80px)] leading-none bg-[linear-gradient(180deg,#FFFFFF_0%,#666666_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
            97%
          </span>
          <span className="font-inter text-[11px] tracking-[4px] text-[#E8000D] uppercase mt-2">5-STAR PRECISION RATINGS</span>
        </div>
      </motion.div>
    </section>
  );
}
