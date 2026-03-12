"use client";

import { motion } from "framer-motion";

export default function Truth() {
  return (
    <section id="the-proof" className="relative bg-[#080808] px-6 py-[120px] md:px-[8vw] md:-mt-[40px] flex flex-col justify-center overflow-hidden min-h-[90vh]">
      {/* Background Image Texture */}
      {/* <!-- REPLACE: young-man-holding-bmw-m4.jpg --> */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center z-0 filter brightness-[0.12] opacity-[0.10]" 
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-16 md:gap-[8vw] items-center md:items-start max-w-[1440px] mx-auto w-full">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 w-full"
        >
          <div className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-8">
            WHY EVERY MAN WANTS A CAR
          </div>
          <h2 className="font-bebas text-[72px] text-white leading-[0.9] whitespace-nowrap">
            MOST MEN<br />
            DREAM.<br />
            SCROLL.<br />
            FORGET.
          </h2>
          
          <div className="w-[60px] h-[2px] bg-[#E8000D] my-[32px]" />
          
          <div className="font-inter text-[16px] text-white/50 leading-relaxed max-w-[440px]">
            Most men leave it on a screen.<br />
            The ones who don&apos;t — put something physical in their space.<br />
            A reminder. Every morning. Until it&apos;s real.
          </div>
        </motion.div>

        {/* Right Column: Hero Contrast Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 w-full flex flex-col justify-center"
        >
          <div className="relative bg-white/[0.025] border border-white/[0.06] backdrop-blur-[24px] p-[48px] overflow-hidden">
            {/* Top Red Glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(232,0,13,0.8)_50%,transparent)]" />
            
            <div className="flex flex-col gap-8">
              <div className="group">
                <div className="font-inter text-[13px] text-[#E8000D] tracking-[3px] uppercase mb-3">THE MAN WHO SCROLLS</div>
                <div className="font-inter font-semibold text-[18px] text-white leading-[1.5]">
                  Screenshots it. Never moves toward it.
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-white/[0.05]" />
              
              <div className="group">
                <div className="font-inter text-[13px] text-[#C9A84C] tracking-[3px] uppercase mb-3">THE MAN WHO ACTS</div>
                <div className="font-inter font-semibold text-[18px] text-white leading-[1.5]">
                  Puts it on his desk. Knows where he&apos;s going.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WHICH ONE ARE YOU? (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full mt-24 flex justify-center"
      >
        <h3 className="font-bebas text-[clamp(40px,6vw,72px)] tracking-[4px] text-[#E8000D] text-center w-full">
          WHICH ONE ARE YOU?
        </h3>
      </motion.div>
    </section>
  );
}
