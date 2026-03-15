"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "WHICH SCALE ARE THE MODEL CARS?",
    answer: "All our manifest models are precisely engineered at 1:32 scale, striking the perfect balance between desk-sized display and intricate engine/interior detail."
  },
  {
    question: "ARE THE DOORS AND HOOD FUNCTIONAL?",
    answer: "Yes. Every model in the Manifest collection features functional opening doors, hoods, and in most cases, steerable front wheels and working suspension."
  },
  {
    question: "HOW LONG DOES SHIPPING TAKE?",
    answer: "We ship globally from our logistics hubs. Standard shipping takes 7-12 business days, while Express Manifest shipping arrives in 3-5 days."
  },
  {
    question: "DO THEY COME WITH A DISPLAY BASE?",
    answer: "Every Manifest Drive model includes a premium acrylic display base with a brushed metal nameplate identifying the specific car and its production number."
  },
  {
    question: "DO THEY SHIP TO ALL INDIAN CITIES?",
    answer: "Yes. We ship to every pin code across India — metros, Tier-2, and Tier-3 cities included. Standard delivery is 5–8 business days across India. For metro cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune), most orders arrive in 3–4 days."
  },
  {
    question: "CAN I GIFT THIS?",
    answer: "Absolutely — and it makes an exceptional gift. Every Manifest Drive arrives in premium matte black gift packaging with a magnetic close lid. You can add a personalised note at checkout. If you're buying for a car enthusiast, they will remember this gift."
  }
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
