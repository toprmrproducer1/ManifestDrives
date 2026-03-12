"use client";

import { motion } from "framer-motion";

const BLOGS = [
  {
    id: 1,
    category: "MINDSET",
    title: "THE PSYCHOLOGY OF SCALING",
    desc: "Why environment dictates output, and how physical anchors rewire your baseline for success.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "CULTURE",
    title: "WHY F1 DRIVERS NEVER SETTLE",
    desc: "The relentless pursuit of the apex. Translating track mentality to business operations.",
    image: "https://images.unsplash.com/photo-1544839655-a1ee6e1affcd?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function BlogPreview() {
  return (
    <section className="bg-[#080808] py-[120px] px-6 md:px-[8vw] border-t border-white/[0.04]">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-6"
          >
            THE DRIVE
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end w-full"
          >
            <h2 className="font-bebas text-[clamp(48px,7vw,80px)] text-white leading-[0.9] text-center md:text-left tracking-[1px] mb-8 md:mb-0">
              LATEST BRIEFINGS.
            </h2>
            <button className="font-inter text-[11px] tracking-[3px] text-[#9A9A9A] uppercase hover:text-white transition-colors border-b border-[#9A9A9A] hover:border-white pb-1 hover-target">
              READ ALL ARTICLES
            </button>
          </motion.div>
        </div>

        {/* Blog Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden bg-black border border-white/[0.06] hover-target cursor-pointer"
            >
              {/* Image Container with Red Overlay on Hover */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] grayscale-[0.2] transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />
                {/* Aggressive Red Tint on Hover */}
                <div className="absolute inset-0 bg-[#E8000D] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col bg-[rgba(255,255,255,0.02)] border-t border-white/[0.04] flex-grow relative z-10">
                <div className="font-bebas text-[14px] tracking-[3px] text-[#E8000D] mb-4">
                  {blog.category}
                </div>
                <h3 className="font-bebas text-[36px] md:text-[44px] leading-[0.9] text-white tracking-[1px] mb-4 transition-colors group-hover:text-[#E8000D]">
                  {blog.title}
                </h3>
                <p className="font-inter text-[15px] text-[#9A9A9A] leading-[1.6]">
                  {blog.desc}
                </p>
                <div className="mt-8 font-inter text-[11px] font-semibold tracking-[3px] text-white uppercase opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 flex items-center gap-2">
                  READ BRIEFING <span className="text-[#E8000D]">→</span>
                </div>
              </div>
              
              {/* Bottom Red Line Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E8000D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
