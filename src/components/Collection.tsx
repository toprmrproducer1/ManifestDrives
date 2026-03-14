"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: "m4",
    handle: "bmw-m4-diecast-model",
    name: "BMW M4 COMPETITION",
    specs: "S58 · 503 HP · 3.9s",
    quote: '"The most wanted desk on the way to the most wanted car."',
    price: "4,999",
    video: "/assets/product/product-m4.mp4",
  },
  {
    id: "sto",
    handle: "lamborghini-die-cast-model",
    name: "HURACÁN STO",
    specs: "V10 · 640 HP · 3.0s",
    quote: '"Not a toy. A declaration."',
    price: "5,499",
    video: "/assets/product/product-gt3.mp4",
  },
  {
    id: "gt3",
    handle: "porsche-gt3-rs-model",
    name: "PORSCHE 911 GT3 RS",
    specs: "FLAT-SIX · 525 HP · 9,000 RPM",
    quote: '"The obsessive\'s anchor."',
    price: "4,999",
    video: "/assets/product/product-sto.mp4",
  },
];

export default function Collection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <section id="the-cars" className="bg-[#080808] px-6 py-[80px] md:px-[8vw] md:py-[120px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase text-center mb-6"
      >
        CHOOSE YOUR FIRST STEP
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-bebas text-[48px] md:text-[80px] leading-none mb-16 tracking-[-2px] uppercase bg-[linear-gradient(180deg,#FFFFFF_0%,#6A6A6A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]"
      >
        YOUR COLLECTION
      </motion.h2>

      <div className="w-full flex flex-col md:flex-row gap-8">
        {PRODUCTS.map((prod, i) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 overflow-hidden group hover-target flex flex-col relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(232,0,13,0.2)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.6),_0_0_0_1px_rgba(232,0,13,0.1)]"
          >
            {/* Card Inner Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,0,13,0.06)_0%,transparent_70%)]" />
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-[linear-gradient(90deg,transparent,rgba(232,0,13,0.6)_50%,transparent)]" />

            {/* Video */}
            <div className="relative w-full h-[260px] bg-black overflow-hidden flex items-center justify-center">
              {mounted ? (
                <video
                  src={prod.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-[#0A0A0A]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,1)] via-transparent to-transparent opacity-100" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col bg-transparent relative z-10 flex-grow pt-4">
              <h3 className="font-bebas text-[42px] tracking-[2px] mb-2 uppercase bg-[linear-gradient(135deg,#FFFFFF_0%,#9A9A9A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                {prod.name}
              </h3>

              {/* Stat Pill */}
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] border-l-2 border-l-[#E8000D] backdrop-blur-[10px] px-5 py-2.5 mb-6 inline-flex flex-col items-start w-fit">
                <div className="font-bebas text-white text-[24px] leading-none mb-1">{prod.specs}</div>
                <div className="font-inter font-normal text-[#4A4A4A] text-[10px] tracking-[3px] uppercase">PERFORMANCE SPEC</div>
              </div>

              <div className="font-inter italic text-[14px] text-[#9A9A9A] mb-8 flex-grow">
                {prod.quote}
              </div>

              {/* ── Action Buttons ── */}
              <div className="mt-auto relative pt-6 border-t border-[rgba(255,255,255,0.04)]">
                {mounted ? (
                  <shopify-context type="product" handle={prod.handle}>
                    <template dangerouslySetInnerHTML={{ __html: `
                      <div style="display:flex;gap:8px;margin-bottom:8px;">
                        <button
                          onclick="document.getElementById('cart').addLine(event).showModal();"
                          style="flex:1;background:#E8000D;color:white;border:none;padding:13px 0;font-family:sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:700;cursor:pointer;transition:background .2s;"
                          onmouseenter="this.style.background='#FF1A1A'"
                          onmouseleave="this.style.background='#E8000D'"
                        >Add to Cart</button>
                        <button
                          onclick="document.getElementById('col-modal').showModal();document.getElementById('col-modal-ctx').update(event);"
                          style="flex:1;background:transparent;color:white;border:1px solid rgba(255,255,255,0.22);padding:13px 0;font-family:sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:700;cursor:pointer;transition:border-color .2s;"
                          onmouseenter="this.style.borderColor='rgba(255,255,255,0.55)'"
                          onmouseleave="this.style.borderColor='rgba(255,255,255,0.22)'"
                        >Shop Now</button>
                      </div>
                      <div style="text-align:center;font-family:sans-serif;font-size:14px;font-weight:700;color:#C9A84C;">
                        ₹${prod.price}
                      </div>
                    ` }} />
                  </shopify-context>
                ) : (
                  <>
                    <div className="flex gap-2 mb-2">
                      <button className="flex-1 bg-[#E8000D] text-white border-none py-3 font-inter text-[11px] tracking-[3px] uppercase font-bold cursor-pointer">
                        Add to Cart
                      </button>
                      <button className="flex-1 bg-transparent text-white border border-white/20 py-3 font-inter text-[11px] tracking-[3px] uppercase font-bold cursor-pointer">
                        Shop Now
                      </button>
                    </div>
                    <div className="text-center font-inter text-[14px] font-bold text-[#C9A84C]">₹{prod.price}</div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16"
      >
        <a 
          href="/shop" 
          className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border border-[#E8000D] overflow-hidden transition-all duration-300 hover:bg-[#E8000D]"
        >
          <span className="relative z-10 font-bebas text-[20px] tracking-[4px] text-white uppercase group-hover:text-white">
            Shop Full Catalog
          </span>
        </a>
      </motion.div>

      {/* ── Product Detail Modal ──────────────────────────────── */}
      {mounted && (
        <>
          <dialog
            id="col-modal"
            style={{ background: "transparent", padding: 0, border: "none", margin: "auto", width: "min(95vw, 900px)", maxHeight: "92vh", overflow: "visible" }}
          >
            <shopify-context
              id="col-modal-ctx"
              type="product"
              wait-for-update="true"
              style={{ display: "block", background: "#111111", border: "1px solid rgba(255,255,255,0.08)", overflow: "auto", maxHeight: "92vh", position: "relative" } as React.CSSProperties}
            >
              <template dangerouslySetInnerHTML={{ __html: `
                <button
                  onclick="document.getElementById('col-modal').close();"
                  style="position:absolute;top:14px;right:14px;z-index:60;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);cursor:pointer;font-size:22px;"
                >&times;</button>

                <div style="display:flex;flex-wrap:wrap;min-height:420px;">
                  <div style="flex:1;min-width:260px;background:#0A0A0A;display:flex;flex-direction:column;border-right:1px solid rgba(255,255,255,0.05);">
                    <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px;">
                      <shopify-media width="420" height="420" query="product.selectedOrFirstAvailableVariant.image" style="width:100%;object-fit:contain;"></shopify-media>
                    </div>
                    <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.05);">
                      <shopify-list-context type="image" query="product.images" first="5" style="display:flex;gap:8px;overflow-x:auto;">
                        <template>
                          <button type="button"
                            style="flex-shrink:0;width:52px;height:52px;border:1px solid rgba(255,255,255,0.1);background:#111;cursor:pointer;padding:4px;transition:border-color .2s;"
                            onmouseenter="this.style.borderColor='#E8000D'"
                            onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)'"
                          >
                            <shopify-media width="44" height="44" query="image" style="width:100%;height:100%;object-fit:cover;pointer-events:none;"></shopify-media>
                          </button>
                        </template>
                      </shopify-list-context>
                    </div>
                  </div>

                  <div style="flex:1;min-width:260px;padding:40px 32px;display:flex;flex-direction:column;background:#111111;">
                    <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#6A6A6A;margin-bottom:6px;font-family:sans-serif;">
                      MANIFEST DRIVES
                    </div>
                    <div style="font-size:30px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:white;line-height:1.1;margin-bottom:10px;font-family:sans-serif;">
                      <shopify-data query="product.title"></shopify-data>
                    </div>
                    <div style="font-size:22px;font-weight:700;color:#C9A84C;margin-bottom:20px;font-family:sans-serif;">
                      <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </div>
                    <div style="margin-bottom:18px;">
                      <shopify-variant-selector></shopify-variant-selector>
                    </div>
                    <div style="font-size:14px;color:#9A9A9A;line-height:1.75;margin-bottom:24px;font-family:sans-serif;">
                      <shopify-data query="product.descriptionHtml"></shopify-data>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;">
                      <button
                        onclick="document.getElementById('cart').addLine(event).showModal();"
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                        style="width:100%;background:#E8000D;color:white;border:none;padding:16px;font-size:13px;letter-spacing:4px;text-transform:uppercase;cursor:pointer;font-family:sans-serif;font-weight:700;transition:background .2s;"
                        onmouseenter="this.style.background='#FF1A1A'"
                        onmouseleave="this.style.background='#E8000D'"
                      >Add to Cart</button>
                      <button
                        onclick="document.querySelector('shopify-store').buyNow(event);"
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                        style="width:100%;background:transparent;color:white;border:1px solid rgba(255,255,255,0.25);padding:16px;font-size:13px;letter-spacing:4px;text-transform:uppercase;cursor:pointer;font-family:sans-serif;font-weight:700;transition:border-color .2s;"
                        onmouseenter="this.style.borderColor='rgba(255,255,255,0.6)'"
                        onmouseleave="this.style.borderColor='rgba(255,255,255,0.25)'"
                      >Buy Now</button>
                    </div>
                  </div>
                </div>
              ` }} />
            </shopify-context>
          </dialog>

          <style dangerouslySetInnerHTML={{ __html: `
            dialog#col-modal[open] { display:flex; }
            dialog#col-modal::backdrop {
              background: rgba(0,0,0,0.88);
              backdrop-filter: blur(6px);
            }
          `}} />
        </>
      )}
    </section>
  );
}
