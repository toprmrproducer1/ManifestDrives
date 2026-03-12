"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "STEP 1",
    title: "UNBOX THE AMBITION",
    desc: "Feel the weight of the alloy. This isn't a plastic toy; it's a physical manifestation of where you're headed."
  },
  {
    step: "STEP 2",
    title: "PLACE IN LINE OF SIGHT",
    desc: "Set it next to your monitor. It needs to be the first thing you see when you start, and the last thing you see when you finish."
  },
  {
    step: "STEP 3",
    title: "USE IT AS LEVERAGE",
    desc: "When you want to quit, stop. Look at the car. Remember why you started this in the first place. Get back to work."
  }
];

export default function TheRitual() {
  return (
    <section className="bg-[#0A0A0A] py-[120px] px-6 md:px-[8vw] border-t border-white/[0.04]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Video/Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] bg-black overflow-hidden border border-white/[0.06]"
        >
          {/* <!-- REPLACE: ritual-video.mp4 --> */}
          <img
            src="https://images.unsplash.com/photo-1542289947-063fc7febe89?q=80&w=1400&auto=format&fit=crop"
            alt="The Ritual process"
            className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.2] contrast-[1.2]"
          />
          {/* Subtle Red Overlay Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(232,0,13,0.15)_100%)] pointer-events-none mix-blend-multiply" />
        </motion.div>

        {/* Right Column: Copy & Steps */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-6"
          >
            THE RITUAL
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[clamp(60px,8vw,90px)] text-white leading-[0.85] mb-16 tracking-[1px]"
          >
            HOW TO USE IT.
          </motion.h2>

          <div className="flex flex-col gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                className="flex flex-col relative group hover-target"
              >
                <div className="font-bebas text-[18px] tracking-[4px] text-[#E8000D] mb-2 leading-none">
                  {step.step}
                </div>
                <h3 className="font-inter font-semibold text-[20px] text-white tracking-[1px] uppercase mb-4 transition-colors duration-400 group-hover:text-[#E8000D]">
                  {step.title}
                </h3>
                <p className="font-inter text-[16px] text-[#9A9A9A] leading-[1.6]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
