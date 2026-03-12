"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WINS = [
  {
    id: 1,
    user: "Alex.Collector",
    time: "Yesterday at 4:58 PM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop",
    text: "Just got my GT3 RS. The detail is insane. Perfect addition to the desk setup.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69d8d?w=600&auto=format&fit=crop",
    reactions: [{ emoji: "🔥", count: 52 }, { emoji: "👍", count: 9 }, { emoji: "🏎️", count: 12 }]
  },
  {
    id: 2,
    user: "Marcus_V",
    time: "Yesterday at 5:43 PM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
    text: "No more economy 🚀 The STO serves as my daily reminder to grind harder.",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&auto=format&fit=crop",
    reactions: [{ emoji: "🚀", count: 37 }, { emoji: "🔥", count: 12 }]
  },
  {
    id: 3,
    user: "Dave_Builds",
    time: "Today at 1:01 PM",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&auto=format&fit=crop",
    text: "Started my business 20 days ago. The M4 model sits right next to my monitor. Manifesting the real thing soon. 🏁",
    image: null,
    reactions: [{ emoji: "💯", count: 85 }, { emoji: "👏", count: 24 }]
  },
  {
    id: 4,
    user: "Samir99",
    time: "Yesterday at 12:13 PM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop",
    text: "The quality on these 1:32 scales is unmatched. Heavy metadata, real alloy feel.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop",
    reactions: [{ emoji: "🔥", count: 75 }, { emoji: "👍", count: 9 }]
  },
  {
    id: 5,
    user: "Caleb_W",
    time: "Today at 5:19 AM",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&auto=format&fit=crop",
    text: "Bucket list check. Got the entire collection. They look so good under the studio lights.",
    image: "https://images.unsplash.com/photo-1503375894025-783da3e107fb?w=600&auto=format&fit=crop",
    reactions: [{ emoji: "📸", count: 42 }, { emoji: "👀", count: 18 }]
  }
];

export default function StudentWins() {
  return (
    <section className="bg-[#080808] py-24 px-6 md:px-[6vw] lg:px-[8vw] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(232,0,13,0.05),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-[10px] md:text-[12px] tracking-[4px] text-[#9A9A9A] uppercase mb-4"
        >
          THE REAL WORLD WINS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bebas text-[48px] md:text-[72px] text-white leading-none tracking-[2px]"
        >
          OUR STUDENTS ARE WINNING
        </motion.h2>
      </div>

      {/* Masonry Grid */}
      <div className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-6 max-w-[1400px] mx-auto">
        {WINS.map((win, idx) => (
          <motion.div
            key={win.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 3) * 0.1 + 0.1, duration: 0.6 }}
            className="break-inside-avoid mb-6 bg-[#111111] rounded-lg border border-white/5 p-4 hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group hover-target"
          >
            {/* Header: Avatar, Name, Time */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image src={win.avatar} alt={win.user} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[14px] text-[#E0E0E0]">{win.user}</span>
                <span className="font-inter text-[11px] text-[#7A7A7A]">{win.time}</span>
              </div>
            </div>

            {/* Message Text */}
            <p className="font-inter text-[14px] text-[#CCCCCC] leading-relaxed mb-3">
              {win.text}
            </p>

            {/* Attached Image */}
            {win.image && (
              <div className="relative w-full rounded-md overflow-hidden mb-3 bg-black">
                <Image 
                  src={win.image} 
                  alt="Post attachment" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            )}

            {/* Reactions */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {win.reactions.map((r, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-[4px] px-2 py-1 flex items-center gap-1.5 cursor-default transition-colors text-[12px]"
                >
                  <span>{r.emoji}</span>
                  <span className="font-inter text-[#A0A0A0] group-hover:text-[#FFFFFF] transition-colors">{r.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
