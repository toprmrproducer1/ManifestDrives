"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TOTAL_SECONDS = 300; // 5 minutes

export default function UrgencySection() {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const isExpired = seconds === 0;

  return (
    <section
      id="md-urgency"
      className="relative w-full bg-[#050505] border-y border-white/[0.04] py-[80px] md:py-[120px] px-6 md:px-[8vw] overflow-hidden"
    >
      {/* Background red radial glow — subtle */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(232,0,13,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 md:gap-0 items-center max-w-7xl mx-auto">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-6 md:pr-16"
        >
          {/* Eyebrow */}
          <p className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase">
            Your competition already clicked
          </p>

          {/* Main headline */}
          <h2 className="font-bebas text-[clamp(42px,6vw,88px)] leading-[0.9] text-white uppercase tracking-[-1px]">
            They started.<br />
            You&apos;re still<br />
            scrolling.
          </h2>

          {/* Subheadline */}
          <p className="font-inter text-[17px] text-white/80 leading-relaxed max-w-[520px]">
            Your competition has this car on their desk already.{" "}
            They&apos;re working. You&apos;re still &ldquo;thinking about it&rdquo;.
          </p>

          {/* Body */}
          <div className="font-inter text-[15px] text-white/45 leading-relaxed max-w-[520px] space-y-3">
            <p>
              Every day you stall, someone else adds the M4, GT3 RS, or STO to their desk and gets back to work.
            </p>
            <p>
              You keep the same phone wallpaper, the same excuses, the same results. Nothing changes until you put something real in front of you.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-3 mt-2">
            <a
              href="#the-cars"
              className="inline-block font-bebas text-[18px] tracking-[4px] px-10 py-4 uppercase text-white bg-[#E8000D] btn-premium shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6)] hover:-translate-y-[1px] transition-all duration-300"
            >
              Make the Decision.
            </a>
            <p className="font-inter text-[12px] text-[#4A4A4A] leading-relaxed">
              Buy the model. Put it on your desk. Then stop scrolling and start working.
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-8 bg-[rgba(255,255,255,0.02)] border border-white/[0.06] p-8 md:p-10"
        >
          {/* Timer label */}
          <p className="font-inter text-[11px] tracking-[3px] text-[#4A4A4A] uppercase text-center">
            You have 5 minutes. Then it&apos;s just another scroll.
          </p>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`font-bebas text-[clamp(72px,10vw,120px)] leading-none tracking-[8px] transition-colors duration-500 ${
                isExpired ? "text-[#4A4A4A]" : seconds <= 60 ? "text-[#E8000D]" : "text-white"
              }`}
            >
              {mm} : {ss}
            </div>
            <p className="font-inter text-[11px] tracking-[2px] text-[#4A4A4A] uppercase">
              {isExpired ? "Time's up. The decision is still yours." : "MM : SS"}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/[0.05]" />

          {/* Stats */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <span className="font-inter text-[14px] text-white/70">Desks already started</span>
              <span className="font-bebas text-[22px] tracking-[2px] text-[#C9A84C]">1,284</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-inter text-[14px] text-white/70">Yours</span>
              <span className="font-inter text-[16px] font-bold text-[#C9A84C]">0 <span className="text-white/30 text-[13px] font-normal">(so far)</span></span>
            </div>
          </div>

          {/* Micro-copy */}
          <p className="font-inter text-[12px] text-[#4A4A4A] text-center leading-relaxed">
            They&apos;re not better than you.<br />They just clicked before you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
