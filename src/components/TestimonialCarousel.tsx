"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Had the car arrive today and the quality was exceptional!!! Would definitely buy again.",
    name: "Asher Cyril",
    location: "Mumbai, India",
  },
  {
    stars: 5,
    quote: "Absolutely stunning detail. This isn't a toy — it's a display piece. The Huracán STO looks flawless on my desk.",
    name: "Rishi Mehra",
    location: "Delhi, India",
  },
  {
    stars: 5,
    quote: "Fast shipping, excellent packaging, and the model exceeded every expectation. Manifest Drives is the real deal.",
    name: "Siddharth Kapoor",
    location: "Bangalore, India",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(t.stars)].map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#E8A020">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-inter font-bold text-[22px] md:text-[26px] text-[#111111] leading-snug mb-10">
              &ldquo;{t.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Logo mark */}
        <div className="flex justify-center mb-4">
          <svg width="80" height="28" viewBox="0 0 120 40" fill="none">
            <path d="M10 32 Q20 8 30 22 Q40 36 50 18 Q60 4 70 22 Q80 36 90 18 Q100 4 110 22" stroke="#111111" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <rect x="40" y="34" width="40" height="2" fill="#111111"/>
            <text x="60" y="42" textAnchor="middle" fontSize="6" fill="#111111" fontFamily="sans-serif" letterSpacing="2">MANIFESTDRIVES</text>
          </svg>
        </div>

        {/* Author */}
        <p className="font-inter text-[14px] text-[#555555] mb-8">
          {t.name} &mdash; {t.location}
        </p>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#333333] hover:border-[#111111] transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === active ? "bg-[#111111]" : "bg-[#CCCCCC]"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#333333] hover:border-[#111111] transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
