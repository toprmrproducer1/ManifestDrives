"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "WHICH SCALE ARE THE MODEL CARS?",
    answer: "All our primary models are 1:32 scale, precision-engineered to match the exact proportions of the real vehicles. Perfect for high-end desk displays."
  },
  {
    question: "HOW QUICKLY WILL I RECEIVE MY ORDER?",
    answer: "We use premium expedited shipping for all orders. Expect delivery within 3-5 business days domestically, and 7-10 days internationally."
  },
  {
    question: "DO THEY COME WITH A DISPLAY CASE?",
    answer: "Yes, every vehicle arrives mounted in a collector-grade acrylic display case to prevent dust and maintain pristine condition."
  },
  {
    question: "ARE THE DOORS AND HOOD FUNCTIONAL?",
    answer: "Absolutely. Our 1:32 scale models feature full articulation including opening doors, hood, and intricately detailed engine bays."
  },
  {
    question: "I LIVE OUTSIDE THE US/UK. DO YOU SHIP GLOBALLY?",
    answer: "Yes. Shipping is available worldwide. International collectors are fully supported. Shipping fees calculate at checkout."
  },
  {
    question: "WHAT IF MY MODEL ARRIVES DAMAGED?",
    answer: "We stand by our quality. In the rare event of transit damage, we issue an instant replacement, no questions asked. Just provide photos of the unboxing."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#080808] py-24 px-6 md:px-[8vw] border-t border-white/5 relative z-10">
      <div className="max-w-[800px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-[32px] md:text-[48px] text-white text-center mb-16 tracking-[2px]"
        >
          FREQUENTLY ASKED <span className="font-bebas text-white">QUESTIONS</span>
        </motion.h2>

        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between py-6 text-left hover-target group outline-none"
                >
                  <span className={`font-inter text-[15px] transition-colors duration-300 ${isOpen ? "text-white" : "text-[#D0D0D0] group-hover:text-white"}`}>
                    {item.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 ml-4 text-white/50 group-hover:text-white transition-colors"
                  >
                    <Plus size={20} strokeWidth={1.5} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pr-8 font-inter text-[14px] leading-relaxed text-[#9A9A9A]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
