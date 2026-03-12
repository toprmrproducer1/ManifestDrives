"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "I put the M4 on my desk in January. I test drove the real one last Tuesday.",
    author: "Arjun M., 24, Mumbai",
  },
  {
    quote: "Every person who said this was a toy doesn't own the car.",
    author: "Karan S., 22, Delhi",
  },
  {
    quote: "Six months on my desk. The obsession never left. That's the point.",
    author: "Rohan P., 26, Pune",
  },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", prefix = "", delay = 0 }: { target: number, suffix?: string, prefix?: string, delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="the-proof" className="relative bg-[linear-gradient(180deg,#080808_0%,#0A0A0A_50%,#080808_100%)] py-[80px] md:py-[120px] px-6 md:px-[8vw] z-10">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(232,0,13,0.04)_0%,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-6"
      >
        THEY STARTED WHERE YOU ARE
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 text-center font-bebas text-[40px] md:text-[64px] text-white leading-[0.9] mb-[80px]"
      >
        THE DESK FIRST.<br />
        THE DRIVEWAY NEXT.
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 mb-[80px] relative z-10">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex-1 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[40px] saturate-[150%] shadow-[0_8px_32px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.05)] p-10 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="font-serif text-[#E8000D] opacity-60 text-[100px] leading-[0.6] mb-4">&ldquo;</div>
            <p className="font-inter text-[17px] text-[rgba(255,255,255,0.9)] leading-[1.7] mb-8 min-h-[85px]">
              {t.quote}
            </p>
            {/* Horizontal line removed */}
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] rounded-full bg-[#111] border border-[rgba(232,0,13,0.3)] shadow-[0_0_16px_rgba(232,0,13,0.15)] flex items-center justify-center font-bebas text-[18px] text-white">
                {t.author.charAt(0)}
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <div className="font-inter text-[14px] font-medium text-white">
                  {t.author}
                </div>
                <div className="inline-block bg-[rgba(232,0,13,0.06)] border border-[rgba(232,0,13,0.2)] backdrop-blur-[10px] px-3 py-1 font-bebas text-[11px] tracking-[3px] text-[rgba(232,0,13,0.8)] uppercase transition-colors duration-300 hover:bg-[rgba(232,0,13,0.12)] hover:text-[#E8000D]">
                  OWNER
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full md:px-0">
        <div className="flex flex-col md:flex-row py-0 gap-10 md:gap-0 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] backdrop-blur-[20px] p-[48px]">
          <div className="flex-1 text-center relative">
            <div className="font-bebas text-[clamp(48px,6vw,80px)] text-white mb-2 leading-none bg-[linear-gradient(180deg,#FFFFFF_0%,#9A9A9A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              <AnimatedCounter target={2400} suffix="+" prefix="" delay={0.2} />
            </div>
            <div className="font-inter text-[10px] md:text-[12px] tracking-[3px] text-[#4A4A4A] uppercase">
              ORDERS PLACED
            </div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] right-0 w-[1px] bg-[linear-gradient(180deg,transparent,rgba(232,0,13,0.4),transparent)]" />
          </div>
          <div className="flex-1 text-center relative">
            <div className="font-bebas text-[clamp(48px,6vw,80px)] text-white mb-2 leading-none bg-[linear-gradient(180deg,#FFFFFF_0%,#9A9A9A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              <AnimatedCounter target={24} suffix="L+" prefix="₹" delay={0.4} />
            </div>
            <div className="font-inter text-[10px] md:text-[12px] tracking-[3px] text-[#4A4A4A] uppercase">
              WORTH OF DREAMS STARTED
            </div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] right-0 w-[1px] bg-[linear-gradient(180deg,transparent,rgba(232,0,13,0.4),transparent)]" />
          </div>
          <div className="flex-1 text-center">
            <div className="font-bebas text-[clamp(48px,6vw,80px)] text-white mb-2 leading-none bg-[linear-gradient(180deg,#FFFFFF_0%,#9A9A9A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              <AnimatedCounter target={97} suffix="%" delay={0.6} />
            </div>
            <div className="font-inter text-[10px] md:text-[12px] tracking-[3px] text-[#4A4A4A] uppercase">
              WOULD BUY AGAIN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
