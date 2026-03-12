"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] flex items-center justify-center border-t border-white/[0.04]">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(232,0,13,0.06)_0%,transparent_70%)]" />
      
      {/* Background Image Texture */}
      {/* <!-- REPLACE: final-cta-bg.jpg --> */}
      <div className="absolute inset-0 z-0 opacity-10 bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2600&auto=format&fit=crop')] grayscale" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(0deg,rgba(8,8,8,1)_0%,rgba(8,8,8,0.2)_50%,rgba(8,8,8,1)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 text-center px-6 w-full max-w-[800px]"
      >
        <div className="font-inter text-[11px] tracking-[6px] text-[#E8000D] uppercase mb-8">
          THE FINAL CHOICE
        </div>
        
        <h2 className="font-bebas text-[clamp(60px,10vw,120px)] text-white leading-[0.85] mb-8 uppercase tracking-[-1px]">
          TWO VERSIONS<br />
          OF YOU EXIST<br />
          RIGHT NOW.
        </h2>
        
        <div className="w-[60px] h-[2px] bg-[#E8000D] mx-auto mb-8" />
        
        <p className="font-inter text-[18px] text-[#9A9A9A] leading-[1.8] mb-16">
          One acts. One doesn&apos;t.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <a
            href="#the-cars"
            className="flex-1 max-w-[320px] mx-auto sm:mx-0 font-bebas text-[18px] tracking-[4px] py-[20px] px-8 uppercase border-none transition-all duration-400 hover-target text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px]"
          >
            START YOUR COLLECTION
          </a>
          <button className="flex-1 max-w-[320px] mx-auto sm:mx-0 bg-transparent border border-white/[0.08] text-white/30 font-bebas text-[18px] tracking-[4px] py-[20px] px-8 uppercase transition-colors duration-300 hover:text-white/60 hover:bg-white/[0.02] hover-target">
            DO NOTHING.
          </button>
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-inter text-[11px] tracking-[3px] text-[#2A2A2A] uppercase w-full text-center z-10 px-6 hidden md:block">
        FREE SHIPPING INDIA · SHIPS IN 3 DAYS · PREMIUM PACKAGING
      </div>
    </section>
  );
}
