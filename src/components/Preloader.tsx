"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasLoadedThisSession = sessionStorage.getItem("manifest_preloader_run");
    
    if (hasLoadedThisSession) {
      setLoading(false);
      return;
    }

    // Set standard 600ms load time then fade out
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("manifest_preloader_run", "true");
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[11000] bg-[#080808] flexflex-col items-center justify-center flex"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="font-bebas text-[24px] tracking-[8px] text-white font-normal leading-none uppercase">MANIFEST</span>
              <div className="w-[120px] h-[1px] bg-[#E8000D] my-[4px]" />
              <span className="font-bebas text-[24px] tracking-[8px] text-[#E8000D] font-normal leading-none uppercase">DRIVES</span>
            </div>
            {/* Minimal line loader */}
            <div className="w-[120px] h-[1px] bg-white/10 mt-8 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                className="absolute top-0 left-0 w-1/3 h-full bg-[#E8000D]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
