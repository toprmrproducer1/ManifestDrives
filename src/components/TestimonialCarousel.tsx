"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Had the car arrive today and the quality was exceptional!!! Would definitely buy again.",
    name: "Asher Cyril",
    location: "Mumbai, India",
    img: "/testimonial-gt3.jpg",
    model: "Porsche 911 GT3 RS",
  },
  {
    stars: 5,
    quote: "Absolutely stunning detail. This isn't a toy — it's a display piece. The Huracán STO looks flawless on my desk.",
    name: "Rishi Mehra",
    location: "Delhi, India",
    img: "/testimonial-sto.jpg",
    model: "Huracán STO",
  },
  {
    stars: 5,
    quote: "Fast shipping, excellent packaging, and the model exceeded every expectation. Manifest Drives is the real deal.",
    name: "Siddharth Kapoor",
    location: "Bangalore, India",
    img: "/testimonial-gt3-2.jpg",
    model: "Porsche 911 GT3 RS",
  },
  {
    stars: 5,
    quote: "First time buying a die-cast model and I'm blown away. The packaging alone felt like unboxing a luxury item.",
    name: "Aditya Sharma",
    location: "Pune, India",
    img: "/testimonial-m4.jpg",
    model: "BMW M4 Competition",
  },
  {
    stars: 5,
    quote: "My M4 sits on my office desk and every client who walks in asks about it. It's a conversation starter every time.",
    name: "Karan Malhotra",
    location: "Hyderabad, India",
    img: "/testimonial-bmw2.jpg",
    model: "BMW M4 Competition",
  },
  {
    stars: 5,
    quote: "Shipped to Chennai in 4 days. Perfect condition, incredible finish. This is what premium actually looks like.",
    name: "Vikram Nair",
    location: "Chennai, India",
    img: "/testimonial-lamborghini2.jpg",
    model: "Huracán STO",
  },
  {
    stars: 5,
    quote: "Bought the GT3 RS as a birthday gift for my brother. He was stunned. The detail on the wing and wheels is insane.",
    name: "Rohan Verma",
    location: "Ahmedabad, India",
    img: "/testimonial-lamborghini3.jpg",
    model: "Lamborghini Huracán",
  },
  {
    stars: 5,
    quote: "I own a real Porsche and this model is more accurate than I expected. 1:32 and it's still perfect in every way.",
    name: "Arjun Pillai",
    location: "Kochi, India",
    img: "/testimonial-gt3.jpg",
    model: "Porsche 911 GT3 RS",
  },
  {
    stars: 5,
    quote: "Got the STO for my study desk — it's the daily reminder I need. Manifest Drives gets what they're selling.",
    name: "Dev Choudhary",
    location: "Jaipur, India",
    img: "/testimonial-sto.jpg",
    model: "Huracán STO",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8A020">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section className="py-24 px-6 md:px-[8vw] bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-4"
      >
        <p className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-4">What They Say</p>
        <h2 className="font-bebas text-[48px] md:text-[64px] text-[#111111] leading-none tracking-wide">
          REAL DESKS. REAL DRIVES.
        </h2>
      </motion.div>

      {/* Trust bar */}
      <div className="flex justify-center gap-2 mb-14">
        <StarRow count={5} />
        <span className="font-inter text-[13px] text-[#555] self-center">4.9 · 200+ verified reviews</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="bg-[#F9F9F9] border border-[#EEEEEE] overflow-hidden flex flex-col"
          >
            {/* Desk photo */}
            <div className="relative w-full aspect-square overflow-hidden bg-[#F0F0F0]">
              <Image
                src={t.img}
                alt={`${t.name}'s ${t.model} on desk`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              {/* Model badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1">
                <span className="font-inter text-[10px] tracking-[2px] text-white/80 uppercase">{t.model}</span>
              </div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col flex-grow">
              <StarRow count={t.stars} />
              <p className="font-inter text-[15px] text-[#1A1A1A] leading-relaxed mb-4 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[#EEEEEE] pt-4 mt-auto">
                <p className="font-inter font-semibold text-[14px] text-[#111111]">{t.name}</p>
                <p className="font-inter text-[12px] text-[#888888]">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
