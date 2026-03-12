"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "m4",
    handle: "bmw-m4",
    name: "BMW M4 COMPETITION",
    specs: "S58 · 503 HP · 3.9s",
    quote: '"The most wanted desk on the way to the most wanted car."',
    price: "4,999",
    video: "/assets/product/product-m4.mp4",
  },
  {
    id: "sto",
    handle: "huracan-sto",
    name: "HURACÁN STO",
    specs: "V10 · 640 HP · 3.0s",
    quote: '"Not a toy. A declaration."',
    price: "5,499",
    video: "/assets/product/product-gt3.mp4",
  },
  {
    id: "gt3",
    handle: "porsche-911-gt3-rs",
    name: "PORSCHE 911 GT3 RS",
    specs: "FLAT-SIX · 525 HP · 9,000 RPM",
    quote: '"The obsessive\'s anchor."',
    price: "4,999",
    video: "/assets/product/product-sto.mp4",
  },
];

export default function Collection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <section id="the-cars" className="bg-[#080808] px-6 py-[80px] md:px-[8vw] md:py-[120px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase text-center mb-6"
      >
        CHOOSE YOUR FIRST STEP
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-bebas text-[48px] md:text-[80px] leading-none mb-16 tracking-[-2px] uppercase bg-[linear-gradient(180deg,#FFFFFF_0%,#6A6A6A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]"
      >
        YOUR COLLECTION
      </motion.h2>

      <div className="w-full flex flex-col md:flex-row gap-8">
        {PRODUCTS.map((prod, i) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 overflow-hidden group hover-target flex flex-col relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(232,0,13,0.2)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.6),_0_0_0_1px_rgba(232,0,13,0.1)]"
          >
            {/* Card Inner Glow (on hover) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,0,13,0.06)_0%,transparent_70%)]" />
            
            {/* Card Top Border Accent (on hover) */}
            <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-[linear-gradient(90deg,transparent,rgba(232,0,13,0.6)_50%,transparent)]" />
            {/* Video Reveal Top Half */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-black overflow-hidden flex items-center justify-center">
              <video
                src={prod.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,1)] via-transparent to-transparent opacity-100" />
            </div>

            {/* Content Bottom Half */}
            <div className="p-8 flex flex-col bg-transparent relative z-10 flex-grow pt-4">
              <h3 className="font-bebas text-[42px] tracking-[2px] mb-2 uppercase bg-[linear-gradient(135deg,#FFFFFF_0%,#9A9A9A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                {prod.name}
              </h3>
              
              {/* Stat Pill */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] border-l-2 border-l-[#E8000D] backdrop-blur-[10px] px-5 py-2.5 mb-6 inline-flex flex-col items-start w-fit">
                <div className="font-bebas text-white text-[24px] leading-none mb-1">{prod.specs}</div>
                <div className="font-inter font-normal text-[#4A4A4A] text-[10px] tracking-[3px] uppercase">PERFORMANCE SPEC</div>
              </div>

              <div className="font-inter italic text-[14px] text-[#9A9A9A] mb-8 flex-grow">
                {prod.quote}
              </div>

              <div id={`shopify-${prod.id}`} className="mt-auto relative pt-8 border-t border-[rgba(255,255,255,0.04)]">
                {mounted ? (
                  <shopify-context type="product" handle={prod.handle}>
                    <template dangerouslySetInnerHTML={{ __html: `
                      <button onclick="document.getElementById('cart').addLine(event).showModal();" class="w-full border-none transition-all duration-400 hover-target btn-premium bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px] flex flex-col items-center justify-center py-3">
                        <span class="font-bebas text-[18px] tracking-[4px] text-white uppercase mb-0.5 pointer-events-none">OWN THE ${prod.name.split(" ")[1]}</span>
                        <span class="font-inter font-medium text-[13px] text-[#C9A84C] pointer-events-none">₹${prod.price}</span>
                      </button>
                    `}} />
                  </shopify-context>
                ) : (
                  <button className="w-full border-none transition-all duration-400 hover-target btn-premium bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px] flex flex-col items-center justify-center py-3">
                    <span className="font-bebas text-[18px] tracking-[4px] text-white uppercase mb-0.5 pointer-events-none">OWN THE {prod.name.split(" ")[1]}</span>
                    <span className="font-inter font-medium text-[13px] text-[#C9A84C] pointer-events-none">₹{prod.price}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
