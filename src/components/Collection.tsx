"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "m4",
    handle: "bmw-m4",
    name: "BMW M4 COMPETITION",
    specs: "S58 3.0L / 503 HP",
    quote: "Not a toy. A declaration.",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    imageComment: "<!-- REPLACE: bmw-m4-card.jpg -->"
  },
  {
    id: "sto",
    handle: "huracan-sto",
    name: "HURACÁN STO",
    specs: "5.2L V10 / 640 HP",
    quote: "The aggressive apex predator.",
    price: "5,499",
    image: "https://images.unsplash.com/photo-1544839655-a1ee6e1affcd?q=80&w=1200&auto=format&fit=crop",
    imageComment: "<!-- REPLACE: lambo-sto-card.jpg -->"
  },
  {
    id: "gt3",
    handle: "porsche-911-gt3-rs",
    name: "PORSCHE 911 GT3 RS",
    specs: "4.0L F6 / 525 HP",
    quote: "The obsessive's anchor.",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    imageComment: "<!-- REPLACE: porsche-gt3rs-card.jpg -->"
  },
];

export default function Collection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <section id="the-cars" className="bg-[#080808] px-6 py-[70px] md:px-[8vw] md:py-[120px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase text-center mb-6"
      >
        THE REAL WORLD WINS
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-bebas text-[clamp(64px,9vw,100px)] leading-[0.85] mb-20 tracking-[-2px] uppercase bg-[linear-gradient(180deg,#FFFFFF_0%,#666666_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]"
      >
        YOUR COLLECTION
      </motion.h2>

      <div className="w-full flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto">
        {PRODUCTS.map((prod, i) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 overflow-hidden group hover-target flex flex-col relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-[10px] hover:border-[rgba(232,0,13,0.2)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.5),_0_0_0_1px_rgba(232,0,13,0.08)]"
          >
            {/* Card Top Border Accent (on hover) */}
            <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[linear-gradient(90deg,transparent,rgba(232,0,13,0.7)_50%,transparent)]" />
            
            {/* Image Reveal Top Half */}
            <div className="relative w-full aspect-[3/4] bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
              <div dangerouslySetInnerHTML={{ __html: prod.imageComment }} />
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent opacity-100 mix-blend-multiply" />
            </div>

            {/* Content Bottom Half */}
            <div className="p-8 flex flex-col bg-transparent relative z-10 flex-grow pt-8">
              <h3 className="font-bebas text-[38px] tracking-[2px] mb-6 uppercase bg-[linear-gradient(160deg,#FFFFFF_0%,#888888_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                {prod.name}
              </h3>
              
              {/* Stat Pill */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] border-l-2 border-l-[#E8000D] backdrop-blur-[10px] px-[20px] py-[10px] mb-8 inline-flex flex-col items-start w-fit">
                <div className="font-bebas text-white text-[24px] leading-none mb-1">{prod.specs.split('/')[1]?.trim() || prod.specs}</div>
                <div className="font-inter font-normal text-[#4A4A4A] text-[10px] tracking-[3px] uppercase">PERFORMANCE SPEC</div>
              </div>

              {/* Manifestation Line */}
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-6 my-[24px]">
                <p className="font-inter italic text-[15px] text-[rgba(255,255,255,0.5)] leading-[1.6]">
                  {prod.quote}
                </p>
              </div>

              <div id={`shopify-${prod.id}`} className="mt-auto relative pt-4">
                {mounted ? (
                  <shopify-context type="product" handle={prod.handle}>
                    <template dangerouslySetInnerHTML={{ __html: `
                      <button onclick="document.getElementById('cart').addLine(event).showModal();" class="w-full uppercase border-none transition-all duration-400 hover-target bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.25),_0_4px_20px_rgba(232,0,13,0.35)] hover:bg-[#FF1A1A] flex flex-col items-center justify-center py-[18px]">
                        <span class="font-bebas text-[16px] tracking-[4px] text-white mb-1 pointer-events-none">CLAIM YOURS</span>
                        <span class="font-inter font-medium text-[14px] text-[#C9A84C] pointer-events-none">₹${prod.price}</span>
                      </button>
                    `}} />
                  </shopify-context>
                ) : (
                  <button className="w-full uppercase border-none transition-all duration-400 hover-target bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.25),_0_4px_20px_rgba(232,0,13,0.35)] hover:bg-[#FF1A1A] flex flex-col items-center justify-center py-[18px]">
                    <span className="font-bebas text-[16px] tracking-[4px] text-white mb-1 pointer-events-none">CLAIM YOURS</span>
                    <span className="font-inter font-medium text-[14px] text-[#C9A84C] pointer-events-none">₹{prod.price}</span>
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
