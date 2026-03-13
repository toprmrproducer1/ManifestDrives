"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 w-full h-[64px] z-[1000] flex items-center justify-between px-6 md:px-[4vw] transition-all duration-300 ${
          scrolled 
            ? "bg-[#080808]/40 backdrop-blur-[40px] saturate-[180%] border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04),_0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-transparent border-b border-white/0"
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent_0%,rgba(232,0,13,0.4)_20%,rgba(255,255,255,0.1)_50%,rgba(232,0,13,0.4)_80%,transparent_100%)] pointer-events-none" />
        )}
        <Link href="/" className="relative group cursor-pointer hover-target inline-flex flex-col items-start pt-[6px]">
          <span className="font-bebas text-[18px] tracking-[8px] text-white font-normal leading-none uppercase">MANIFEST</span>
          <div className="w-full h-[1px] bg-[#E8000D] my-[2px] transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
          <span className="font-bebas text-[18px] tracking-[8px] text-[#E8000D] font-normal leading-none uppercase">DRIVES</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: "THE CARS", href: "/#the-cars" }, 
            { label: "THE PROOF", href: "/#the-proof" },
            { label: "SHOP FULL CATALOG", href: "/shop" },
            { label: "OWN YOURS", href: "/#own-yours" }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`font-inter font-medium text-[13px] tracking-[2px] uppercase hover-target transition-colors duration-300 ${item.label === "SHOP FULL CATALOG" ? "text-white bg-[#E8000D] px-4 py-2 rounded shadow-[0_0_0_1px_rgba(232,0,13,0.3)] hover:bg-[#FF1A1A]" : "text-[#9A9A9A] hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2 hover-target"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] bg-[#080808] flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {[
              { label: "THE CARS", href: "/#the-cars" }, 
              { label: "THE PROOF", href: "/#the-proof" },
              { label: "SHOP CATALOG", href: "/shop" },
              { label: "OWN YOURS", href: "/#own-yours" }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-bebas text-[40px] tracking-[4px] ${item.label === "SHOP CATALOG" ? "text-[#E8000D]" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
