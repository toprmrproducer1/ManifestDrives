"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] flex items-center justify-center">
      {/* Layer 1 is the bg-[#080808] on the section itself */}
      
      {/* Layer 2: Radial gradient from center bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,rgba(232,0,13,0.08)_0%,transparent_70%)]" />
      
      {/* Layer 3: Car background image (simulated with video frame or pure css for now, user didn't provide specific CTA back image so we use dark overlay) */}
      <div className="absolute inset-0 z-0 opacity-30 bg-center bg-cover bg-no-repeat bg-[url('/assets/hero/hero-gt3.mp4')]" />

      {/* Layer 4: Linear gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(0deg,rgba(8,8,8,1)_0%,rgba(8,8,8,0)_40%,rgba(8,8,8,0.8)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 text-center px-6"
      >
        <div className="font-inter text-[11px] tracking-[6px] text-[#E8000D] uppercase mb-8">
          THE CHOICE
        </div>
        
        <h2 className="font-bebas text-[clamp(48px,8vw,96px)] text-white leading-[0.9] mb-12 uppercase tracking-[-2px] flex flex-col items-center">
          <div className="flex gap-4 overflow-hidden">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.0, ease:[0.23,1,0.32,1]}}>TWO</motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1, ease:[0.23,1,0.32,1]}}>VERSIONS</motion.div>
          </div>
          <div className="flex gap-4 overflow-hidden">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.2, ease:[0.23,1,0.32,1]}}>OF</motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.3, ease:[0.23,1,0.32,1]}}>YOU</motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.4, ease:[0.23,1,0.32,1]}}>EXIST</motion.div>
          </div>
          <div className="flex gap-4 overflow-hidden">
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.5, ease:[0.23,1,0.32,1]}}>RIGHT</motion.div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.6, ease:[0.23,1,0.32,1]}}>NOW.</motion.div>
          </div>
        </h2>
        
        <p className="font-inter text-[18px] text-[#9A9A9A] leading-[1.8] max-w-[500px] mx-auto mb-12">
          One acts. One doesn&apos;t.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
          <a
            href="#the-cars"
            className="font-bebas text-[18px] tracking-[4px] px-14 py-5 uppercase border-none transition-all duration-400 hover-target btn-premium text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px] min-w-[300px]"
          >
            START YOUR COLLECTION
          </a>
          <button className="bg-transparent border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.2)] font-bebas text-[18px] tracking-[4px] px-14 py-5 uppercase transition-colors duration-300 hover:text-[rgba(255,255,255,0.4)] hover-target min-w-[300px]">
            DO NOTHING.
          </button>
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-inter text-[12px] tracking-[2px] text-[#2A2A2A] uppercase w-full text-center z-10">
        FREE WORLDWIDE SHIPPING · SHIPS IN 1–2 DAYS · 30-DAY SATISFACTION GUARANTEE
      </div>
    </section>
  );
}
