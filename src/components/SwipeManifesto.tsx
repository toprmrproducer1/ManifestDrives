"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SwipeManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const isDragging = useRef(false);

  const getPercent = useCallback((clientX: number) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current) return;
    setInteracted(true);
    setPct(getPercent(clientX));
  }, [getPercent]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    setInteracted(true);
    setPct(getPercent(e.clientX));
  }, [getPercent]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    setInteracted(true);
    setPct(getPercent(e.touches[0].clientX));
  }, [getPercent]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => { if (isDragging.current) { setInteracted(true); setPct(prev => { const rect = sectionRef.current?.getBoundingClientRect(); if (!rect) return prev; return Math.min(98, Math.max(2, ((e.touches[0].clientX - rect.left) / rect.width) * 100)); }); } };
    const onUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [handleMove]);

  return (
    <section className="w-full bg-[#080808] flex flex-col lg:flex-row items-stretch">

      {/* ── LEFT: Manifesto text ─────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32 max-w-[600px] lg:max-w-none">

        <FadeUp delay={0} className="font-inter text-[10px] tracking-[6px] text-[#E8000D] uppercase mb-7">
          WHY THIS EXISTS
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,4vw,56px)] text-white tracking-[1px] leading-[1.05] mb-9">
            IT ALL STARTED WITH A GUY<br />
            SEARCHING UP HIS DREAM CAR.
          </h2>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
          style={{ originX: 0 }}
          className="w-10 h-[1.5px] bg-[#E8000D] mb-9"
        />

        <FadeUp delay={0.3}>
          <p className="font-inter text-[17px] text-white/45 leading-[1.9] mb-6">
            He found it. Saved it. Forgot it.<br />
            The dream faded because nothing kept it alive.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="font-inter text-[20px] font-semibold text-white mb-8">
            That can&apos;t happen to yours.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="font-inter text-[16px] text-white/50 leading-[2.1] mb-12">
            Keep it on your desk.<br />
            Keep it in your line of sight.<br />
            Every single morning.
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <span className="font-bebas text-[clamp(16px,2vw,24px)] tracking-[4px] text-[#E8000D]">
            NEVER OUT OF SIGHT. NEVER OUT OF REACH.
          </span>
        </FadeUp>
      </div>

      {/* ── RIGHT: 1:1 square swipe slider ──────────────────────────── */}
      <div className="flex items-center justify-center lg:justify-end px-6 lg:px-16 py-12 lg:py-20">
        {/* Square container */}
        <div className="w-full max-w-[540px] lg:w-[540px] aspect-square">
          <div
            ref={sectionRef}
            className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            {/* DESK LAYER (bottom/left) */}
            <div className="absolute inset-0 z-[1]">
              <Image
                src="/assets/swipe/car-desk.png"
                alt="Model car on desk"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover pointer-events-none"
                style={{ objectPosition: "center 65%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 flex flex-col gap-1 z-10">
                <span className="font-inter text-[9px] tracking-[4px] text-[#E8000D] uppercase">TODAY</span>
                <span className="font-bebas text-[22px] text-white tracking-[2px] leading-none">ON YOUR DESK</span>
              </div>
            </div>

            {/* DRIVEWAY LAYER (top/right — clipped) */}
            <div
              className="absolute inset-0 z-[2]"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
            >
              <Image
                src="/assets/swipe/car-driveway.png"
                alt="Real car in driveway"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 540px"
                className="object-cover pointer-events-none"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] to-transparent pointer-events-none" />
              <div
                className="absolute bottom-5 right-5 flex flex-col gap-1 z-10 text-right transition-opacity duration-300"
                style={{ opacity: pct > 55 ? 1 : 0 }}
              >
                <span className="font-inter text-[9px] tracking-[4px] text-[#E8000D] uppercase">TOMORROW</span>
                <span className="font-bebas text-[22px] text-white tracking-[2px] leading-none">IN YOUR DRIVEWAY</span>
              </div>
            </div>

            {/* DRAG HANDLE */}
            <div
              className="absolute top-0 h-full z-[10] flex flex-col items-center pointer-events-none"
              style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
            >
              <div className="flex-1 w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(232,0,13,0.8)] to-transparent" />
              <div className="w-10 h-10 rounded-full bg-[rgba(8,8,8,0.9)] border border-[rgba(232,0,13,0.5)] backdrop-blur-md flex items-center justify-center shadow-[0_0_16px_rgba(232,0,13,0.4)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12H4M4 12L7 9M4 12L7 15" stroke="#E8000D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12H20M20 12L17 9M20 12L17 15" stroke="#E8000D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(232,0,13,0.8)] to-transparent" />
            </div>

            {/* HINT */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 font-inter text-[9px] tracking-[3px] text-white/20 uppercase animate-pulse transition-opacity duration-500"
              style={{ opacity: interacted ? 0 : 1 }}
            >
              ← DRAG →
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
