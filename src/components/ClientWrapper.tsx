"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  
  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check session storage to only show preloader once per session
    const hasSeenPreloader = sessionStorage.getItem("manifest_preloader_seen");
    if (hasSeenPreloader) {
      setTimeout(() => setShowPreloader(false), 0);
    } else {
      sessionStorage.setItem("manifest_preloader_seen", "true");
    }
  }, []);

  return (
    <>
      {/* 2px Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E8000D] origin-left z-[9999] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Preloader Sequence */}
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.3 }} // Ensures max 1.8s
          onAnimationComplete={() => setShowPreloader(false)}
        >
          <div className="flex flex-col items-center justify-center">
            {/* 600ms initial wait before first word starts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="font-bebas text-[80px] text-white leading-none tracking-[8px]"
            >
              MANIFEST
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }} // 200ms after first word starts
              className="font-bebas text-[80px] text-[#E8000D] leading-none tracking-[8px]"
            >
              DRIVES
            </motion.div>
          </div>
        </motion.div>
      )}

      {children}
    </>
  );
}
