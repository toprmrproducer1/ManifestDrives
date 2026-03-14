"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Manifesto() {
  return (
    <section className="w-full min-h-[60vh] bg-[#080808] flex items-center justify-center px-6 py-[120px] md:py-[140px]">
      <div className="flex flex-col items-center text-center max-w-[620px] mx-auto">

        <FadeUp delay={0} className="font-inter text-[10px] tracking-[6px] text-[#E8000D] uppercase mb-7">
          WHY THIS EXISTS
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] text-white tracking-[1px] leading-[1.05] mb-9">
            IT ALL STARTED WITH A GUY<br />
            SEARCHING UP HIS DREAM CAR.
          </h2>
        </FadeUp>

        {/* Red divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-10 h-[1.5px] bg-[#E8000D] mx-auto mb-9"
        />

        <FadeUp delay={0.3}>
          <p className="font-inter text-[17px] text-white/45 leading-[1.8] mb-6">
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
          <p className="font-inter text-[16px] text-white/50 leading-[2] mb-12">
            Keep it on your desk.<br />
            Keep it in your line of sight.<br />
            Every single morning.
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <span className="font-bebas text-[clamp(18px,2.5vw,26px)] tracking-[4px] text-[#E8000D]">
            NEVER OUT OF SIGHT. NEVER OUT OF REACH.
          </span>
        </FadeUp>

      </div>
    </section>
  );
}
