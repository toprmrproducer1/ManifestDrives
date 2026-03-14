"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

export default function SwipeReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const getPercent = useCallback((clientX: number) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handleMove = useCallback((clientX: number) => {
    setInteracted(true);
    setPct(getPercent(clientX));
  }, [getPercent]);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); handleMove(e.clientX); };
  const onMouseMove = useCallback((e: MouseEvent) => { if (isDragging) handleMove(e.clientX); }, [isDragging, handleMove]);
  const onMouseUp   = useCallback(() => setIsDragging(false), []);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => { setIsDragging(true); handleMove(e.touches[0].clientX); };
  const onTouchMove  = useCallback((e: TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); }, [isDragging, handleMove]);
  const onTouchEnd   = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden cursor-ew-resize bg-[#080808] select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* ── DESK LAYER (left / bottom) ─────────────────────────── */}
      <div className="absolute inset-0 z-[1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/swipe/car-desk.png"
          alt="Model car on desk"
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,8,0.2)] to-[rgba(8,8,8,0.6)] pointer-events-none" />
        {/* label */}
        <div className="absolute bottom-20 left-12 flex flex-col gap-1 z-10">
          <span className="font-inter text-[10px] tracking-[5px] text-[#E8000D] uppercase">TODAY</span>
          <span className="font-bebas text-[clamp(28px,4vw,48px)] text-white tracking-[2px] leading-none">ON YOUR DESK</span>
        </div>
      </div>

      {/* ── DRIVEWAY LAYER (right / top — clipped) ─────────────── */}
      <div
        className="absolute inset-0 z-[2]"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)`, transition: isDragging ? "none" : "clip-path 0.05s linear" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/swipe/car-driveway.png"
          alt="Real car in driveway"
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,8,0.2)] to-[rgba(8,8,8,0.6)] pointer-events-none" />
        {/* label — fades in when driveway dominates */}
        <div
          className="absolute bottom-20 right-12 flex flex-col gap-1 z-10 text-right transition-opacity duration-400"
          style={{ opacity: pct > 60 ? 1 : 0 }}
        >
          <span className="font-inter text-[10px] tracking-[5px] text-[#E8000D] uppercase">TOMORROW</span>
          <span className="font-bebas text-[clamp(28px,4vw,48px)] text-white tracking-[2px] leading-none">IN YOUR DRIVEWAY</span>
        </div>
      </div>

      {/* ── DRAG HANDLE ────────────────────────────────────────── */}
      <div
        className="absolute top-0 h-full z-[10] flex flex-col items-center pointer-events-none"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex-1 w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(232,0,13,0.8)] to-transparent" />
        <div className="w-12 h-12 rounded-full bg-[rgba(8,8,8,0.9)] border border-[rgba(232,0,13,0.5)] backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(232,0,13,0.3)] flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 12H4M4 12L7 9M4 12L7 15" stroke="#E8000D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12H20M20 12L17 9M20 12L17 15" stroke="#E8000D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1 w-[1.5px] bg-gradient-to-b from-transparent via-[rgba(232,0,13,0.8)] to-transparent" />
      </div>

      {/* ── HINT ───────────────────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-inter text-[10px] tracking-[4px] text-white/25 uppercase animate-pulse transition-opacity duration-500"
        style={{ opacity: interacted ? 0 : 1 }}
      >
        ← DRAG TO REVEAL →
      </div>
    </section>
  );
}
