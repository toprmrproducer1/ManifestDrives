"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "HOW LONG DOES SHIPPING TAKE?",
    answer: "All orders are dispatched within 1–2 business days. Delivered in 6–12 business days worldwide. You'll receive a tracking number via email as soon as your order ships."
  },
  {
    question: "WHICH SCALE ARE THE MODEL CARS?",
    answer: "All models are 1:32 scale — the perfect desk size. Large enough to show every detail. Small enough to sit on any surface without taking over the space."
  },
  {
    question: "ARE THE DOORS AND HOOD FUNCTIONAL?",
    answer: "Yes. Doors, hoods, and bonnets open and close on all three models. Built for display, designed to interact with."
  },
  {
    question: "DO THEY COME WITH A DISPLAY BASE?",
    answer: "Every model ships with a branded display base included — no separate purchase needed."
  },
  {
    question: "CAN I GIFT THIS?",
    answer: "Yes. Premium packaging on every order. Gift-ready straight out of the box. No extra wrapping needed."
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer: "Yes — worldwide. Free shipping on every order, no minimum spend required."
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-[8vw] bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bebas text-[48px] md:text-[64px] tracking-[2px] leading-none mb-16 text-center">
          COMMON <span className="text-[#E8000D]">MANIFESTATIONS</span>
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div 
              key={i}
              className="border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-colors duration-300 hover:border-white/10"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover-target"
              >
                <span className="font-bebas text-[20px] md:text-[24px] tracking-[2px] uppercase">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Plus className="w-6 h-6 text-[#E8000D]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 font-inter text-[#9A9A9A] text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
