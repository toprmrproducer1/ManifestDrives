"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const CARS = [
  {
    id: "m4",
    handle: "bmw-m4",
    tab: "BMW M4",
    headline: "THE FIRST STEP.",
    subline: "Every man who owns the real car started somewhere.",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1555353540-64fd1b1e422c?q=80&w=2600&auto=format&fit=crop", // Placeholder for Isle of Man / Acid Green M4
    imageComment: "<!-- REPLACE: bmw-m4-hero-front.jpg -->",
    stats: [
      { label: "TOP SPEED", value: "290 KM/H" },
      { label: "0-100", value: "3.9S" },
      { label: "ENGINE", value: "S58 I6" },
      { label: "SCALE", value: "1:32" }
    ]
  },
  {
    id: "sto",
    handle: "huracan-sto",
    tab: "HURACÁN STO",
    headline: "THE DREAM IS REAL.",
    subline: "Keep it where you can see it. Every morning.",
    price: "5,499",
    image: "https://images.unsplash.com/photo-1627003426742-0fdbd5904d9e?q=80&w=2600&auto=format&fit=crop", // Placeholder for STO
    imageComment: "<!-- REPLACE: lambo-sto-hero-front.jpg -->",
    stats: [
      { label: "TOP SPEED", value: "310 KM/H" },
      { label: "0-100", value: "3.0S" },
      { label: "ENGINE", value: "V12 NA" },
      { label: "SCALE", value: "1:32" }
    ]
  },
  {
    id: "gt3",
    handle: "porsche-911-gt3-rs",
    tab: "PORSCHE GT3 RS",
    headline: "BUILT FOR THOSE WHO KNOW.",
    subline: "The men who own these cars once held one like this.",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1503376760367-1b6121649669?q=80&w=2600&auto=format&fit=crop", // Placeholder for GT3
    imageComment: "<!-- REPLACE: porsche-gt3rs-hero-front.jpg -->",
    stats: [
      { label: "TOP SPEED", value: "296 KM/H" },
      { label: "0-100", value: "3.2S" },
      { label: "ENGINE", value: "4.0L F6" },
      { label: "SCALE", value: "1:32" }
    ]
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

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
      {/* Background Images with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCar.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div dangerouslySetInnerHTML={{ __html: activeCar.imageComment }} />
            <img
              src={activeCar.image}
              alt={activeCar.tab}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.90] saturate-[1.15]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Hero Gradient Overlay - Dark left, clear right */}
      <div 
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(108deg, rgba(8,8,8,0.94) 0%, rgba(8,8,8,0.80) 28%, rgba(8,8,8,0.30) 58%, rgba(8,8,8,0.00) 100%)' }}
      />

      {/* Red Horizontal Speed Line at ~62% */}
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[100vw] h-[2px] bg-[#E8000D] z-10 pointer-events-none"
        style={{ top: '62%' }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 md:pl-[8vw] xl:pl-[10vw] flex flex-col pt-[12vh] pointer-events-none h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCar.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 flex flex-col justify-center pointer-events-auto max-w-[800px]"
          >
            <h1 className="font-bebas text-[clamp(60px,10vw,120px)] text-white leading-[0.87] tracking-[-1px] mb-6 uppercase drop-shadow-[0_0_80px_rgba(232,0,13,0.15)] [text-shadow:0_0_80px_rgba(232,0,13,0.15),0_2px_8px_rgba(0,0,0,0.9)]">
              {activeCar.headline}
            </h1>
            <p className="font-inter text-[16px] text-white/50 max-w-[320px] leading-relaxed mb-10">
              {activeCar.subline}
            </p>
            
            <div className="mb-14">
              {mounted ? (
                <shopify-context type="product" handle={activeCar.handle}>
                  <template dangerouslySetInnerHTML={{ __html: `
                    <button onclick="document.getElementById('cart').addLine(event).showModal();" class="inline-block font-bebas text-[16px] tracking-[4px] px-[44px] py-[16px] uppercase border-none rounded-none transition-all duration-300 hover-target text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_8px_40px_rgba(232,0,13,0.6)] hover:-translate-y-[1px]">
                      CLAIM YOURS — ₹${activeCar.price}
                    </button>
                  ` }} />
                </shopify-context>
              ) : (
                <button className="inline-block font-bebas text-[16px] tracking-[4px] px-[44px] py-[16px] uppercase border-none rounded-none transition-all duration-300 hover-target text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_8px_40px_rgba(232,0,13,0.6)] hover:-translate-y-[1px]">
                  CLAIM YOURS — ₹{activeCar.price}
                </button>
              )}
            </div>

            {/* Glass Tabs */}
            <div className="flex gap-4">
              {CARS.map((car, idx) => (
                <button
                  key={car.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`font-bebas text-[13px] tracking-[4px] px-[24px] py-[10px] rounded-none transition-all duration-300 hover-target backdrop-blur-[20px] ${
                    idx === activeIdx 
                      ? 'bg-[#E8000D]/[0.08] border border-[#E8000D]/50 text-white shadow-[0_0_24px_rgba(232,0,13,0.18),_inset_0_0_16px_rgba(232,0,13,0.06)]' 
                      : 'bg-white/[0.03] border border-white/[0.08] text-white/[0.35] hover:text-white/80'
                  }`}
                >
                  {car.tab}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Stat Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#080808]/75 backdrop-blur-[24px] border-t border-white/5 z-20 flex justify-between items-center px-6 md:px-[8vw]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCar.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-between items-center h-full"
          >
            {activeCar.stats.map((stat, i, arr) => (
              <div key={i} className="flex-1 flex items-center h-full relative px-4">
                <div className="flex flex-col">
                  <span className="font-bebas text-[32px] leading-none [background:linear-gradient(180deg,#ffffff_0%,#aaaaaa_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    {stat.value}
                  </span>
                  <span className="font-inter text-[10px] tracking-[3px] text-[#4A4A4A] uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-[linear-gradient(180deg,transparent,rgba(232,0,13,0.4),transparent)]" />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
