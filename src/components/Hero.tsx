"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARS = [
  {
    id: "m4",
    handle: "bmw-m4",
    tab: "BMW M4",
    headline: "THE FIRST STEP.",
    subline: "Every man who owns the real car started somewhere.",
    price: "4,999",
    video: "/assets/hero/hero-m4.mp4",
  },
  {
    id: "sto",
    handle: "huracan-sto",
    tab: "HURACÁN STO",
    headline: "THE DREAM IS REAL.",
    subline: "Keep it where you can see it. Every morning.",
    price: "5,499",
    video: "/assets/hero/hero-gt3.mp4",
  },
  {
    id: "gt3",
    handle: "porsche-911-gt3-rs",
    tab: "PORSCHE GT3 RS",
    headline: "BUILT FOR THOSE WHO KNOW.",
    subline: "The men who own these cars once held one like this.",
    price: "4,999",
    video: "/assets/hero/hero-sto.mp4",
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Parallax setup
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]); // 0.4x speed

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CARS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeCar = CARS[activeIdx];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] flex flex-col justify-center">
      {/* Background Videos with Parallax — client-only to avoid crossOrigin SSR mismatch */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        {mounted && CARS.map((car, idx) => (
          <video
            key={car.id}
            src={car.video}
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: "75% center" }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeIdx ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
      </motion.div>

      {/* Hero Gradient Overlay - Reduced darkness */}
      <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(8,8,8,0.85)_0%,rgba(8,8,8,0.4)_30%,transparent_50%)]" />

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={() => setActiveIdx((prev) => (prev - 1 + CARS.length) % CARS.length)}
          className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-white backdrop-blur-md transition-all hover-target hidden md:block"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button
          onClick={() => setActiveIdx((prev) => (prev + 1) % CARS.length)}
          className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-white backdrop-blur-md transition-all hover-target hidden md:block"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content - shifted more left  */}
      <div className="relative z-10 w-full px-6 md:pl-[4vw] xl:pl-[8vw] max-w-[600px] mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCar.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-bebas text-[clamp(64px,10vw,120px)] text-white leading-[0.87] mb-6 uppercase drop-shadow-[0_0_80px_rgba(232,0,13,0.15)] [text-shadow:0_0_80px_rgba(232,0,13,0.15),0_2px_4px_rgba(0,0,0,0.8)]">
              {activeCar.headline.split(".").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="font-inter text-[16px] text-[#9A9A9A] max-w-[360px] leading-relaxed mb-10">
              {activeCar.subline}
            </p>
            {mounted ? (
              <shopify-context type="product" handle={activeCar.handle}>
                <template dangerouslySetInnerHTML={{ __html: `
                  <button onclick="document.getElementById('cart').addLine(event).showModal();" class="inline-block font-bebas text-[16px] tracking-[4px] px-10 py-4 uppercase border-none transition-all duration-400 hover-target btn-premium text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px]">
                    CLAIM YOURS — ₹${activeCar.price}
                  </button>
                ` }} />
              </shopify-context>
            ) : (
              <button className="inline-block font-bebas text-[16px] tracking-[4px] px-10 py-4 uppercase border-none transition-all duration-400 hover-target btn-premium text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px]">
                CLAIM YOURS — ₹{activeCar.price}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-[40px] z-10 bg-white/20 overflow-hidden hidden md:block">
        <motion.div
          animate={{ y: [-10, 40] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-[10px] bg-white"
        />
      </div>
    </section>
  );
}
