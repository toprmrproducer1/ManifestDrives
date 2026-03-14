"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShopPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── Top Header ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.07] h-[64px] flex items-center px-6 md:px-[5vw] justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-[#9A9A9A] hover:text-white transition-colors hover-target">
          <ArrowLeft size={15} />
          <span className="font-bebas text-[16px] tracking-[3px] uppercase mt-[1px]">Manifest Drives</span>
        </Link>
        <span className="font-bebas text-[22px] tracking-[6px] text-white">THE COLLECTION</span>
        <div className="w-[140px]" />
      </div>

      {/* ── Page Title ─────────────────────────────────────────────── */}
      <div className="px-6 md:px-[5vw] pt-10 pb-8 border-b border-white/[0.06]">
        <h1 className="font-bebas text-[48px] md:text-[64px] tracking-[3px] leading-none">FULL COLLECTION</h1>
        <p className="font-inter text-[#6A6A6A] text-[14px] mt-2">
          1:32 scale die-cast models. Precision engineered, museum-grade finish.
        </p>
      </div>

      {/* ── Product Grid ───────────────────────────────────────────── */}
      <div className="px-6 md:px-[5vw] py-10">
        {mounted ? (
          <>
            {/* The key insight: shopify-list-context appends cloned <template> nodes
                as its direct children. We force it to be a CSS grid via inline style.
                className / Tailwind doesn't reliably work on custom elements. */}
            <shopify-list-context
              type="product"
              query="products"
              first="24"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                width: "100%",
              } as React.CSSProperties}
            >
              <template dangerouslySetInnerHTML={{ __html: `
                <div class="md-product-card">
                  <div class="md-card-img">
                    <shopify-media
                      width="360" height="360"
                      query="product.featuredImage"
                      class="md-media"
                    ></shopify-media>
                    <span class="md-badge">1:32</span>
                  </div>
                  <div class="md-card-body">
                    <div class="md-vendor">
                      MANIFEST DRIVES
                    </div>
                    <div class="md-title">
                      <shopify-data query="product.title"></shopify-data>
                    </div>
                    <div class="md-price">
                      <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </div>
                    <div class="md-actions">
                      <button
                        onclick="document.getElementById('cart').addLine(event).showModal();"
                        class="md-btn-primary"
                      >Add to Cart</button>
                      <button
                        onclick="document.getElementById('product-modal').showModal(); document.getElementById('product-modal-context').update(event);"
                        class="md-btn-secondary"
                      >Details</button>
                    </div>
                  </div>
                </div>
              ` }} />

              {/* Loading skeleton while Shopify fetches */}
              <div shopify-loading-placeholder="true" style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ aspectRatio: "1", background: "rgba(255,255,255,0.04)" }} />
                    <div style={{ padding: "16px" }}>
                      <div style={{ height: "10px", background: "rgba(255,255,255,0.06)", width: "40%", marginBottom: "10px" }} />
                      <div style={{ height: "14px", background: "rgba(255,255,255,0.06)", width: "75%", marginBottom: "10px" }} />
                      <div style={{ height: "12px", background: "rgba(255,255,255,0.06)", width: "30%", marginBottom: "14px" }} />
                      <div style={{ height: "40px", background: "rgba(255,255,255,0.06)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </shopify-list-context>

            {/* Responsive grid breakpoints via scoped style */}
            <style dangerouslySetInnerHTML={{ __html: `
              @media (min-width: 640px) {
                shopify-list-context[type="product"] {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
              @media (min-width: 1024px) {
                shopify-list-context[type="product"] {
                  grid-template-columns: repeat(4, 1fr) !important;
                }
              }

              /* Product card styles */
              .md-product-card {
                display: flex;
                flex-direction: column;
                background: #111111;
                border: 1px solid rgba(255,255,255,0.06);
                transition: border-color 0.25s ease, transform 0.25s ease;
              }
              .md-product-card:hover {
                border-color: rgba(255,255,255,0.18);
                transform: translateY(-2px);
              }
              .md-card-img {
                position: relative;
                background: #0A0A0A;
                aspect-ratio: 1;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
              }
              .md-media {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: transform 0.5s ease;
              }
              .md-product-card:hover .md-media { transform: scale(1.06); }
              .md-badge {
                position: absolute;
                top: 10px;
                right: 10px;
                background: #E8000D;
                color: white;
                font-size: 10px;
                letter-spacing: 2px;
                padding: 2px 8px;
                font-family: sans-serif;
                text-transform: uppercase;
              }
              .md-card-body {
                padding: 16px;
                display: flex;
                flex-direction: column;
                flex: 1;
                border-top: 1px solid rgba(255,255,255,0.05);
              }
              .md-vendor {
                font-size: 10px;
                letter-spacing: 2px;
                color: #6A6A6A;
                text-transform: uppercase;
                margin-bottom: 5px;
                font-family: sans-serif;
              }
              .md-title {
                font-size: 14px;
                font-weight: 600;
                color: white;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
                line-height: 1.3;
                font-family: sans-serif;
              }
              .md-price {
                font-size: 16px;
                font-weight: 700;
                color: white;
                margin-bottom: 14px;
                font-family: sans-serif;
              }
              .md-actions {
                display: flex;
                gap: 8px;
                margin-top: auto;
              }
              .md-btn-primary {
                flex: 1;
                background: #E8000D;
                color: white;
                border: none;
                padding: 10px 0;
                font-size: 11px;
                letter-spacing: 2px;
                text-transform: uppercase;
                cursor: pointer;
                font-family: sans-serif;
                font-weight: 600;
                transition: background 0.2s;
              }
              .md-btn-primary:hover { background: #FF1A1A; }
              .md-btn-secondary {
                flex: 1;
                background: transparent;
                color: white;
                border: 1px solid rgba(255,255,255,0.2);
                padding: 10px 0;
                font-size: 11px;
                letter-spacing: 2px;
                text-transform: uppercase;
                cursor: pointer;
                font-family: sans-serif;
                font-weight: 600;
                transition: border-color 0.2s;
              }
              .md-btn-secondary:hover { border-color: rgba(255,255,255,0.5); }

              /* Modal */
              dialog#product-modal[open] { display: flex; }
              dialog#product-modal::backdrop {
                background: rgba(0,0,0,0.88);
                backdrop-filter: blur(6px);
              }
              .modal-variants shopify-variant-selector::part(form) {
                display: flex; flex-direction: column; gap: 10px;
              }
              .modal-variants shopify-variant-selector::part(label) {
                font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
                color: #9A9A9A; display: block; margin-bottom: 4px;
              }
              .modal-variants shopify-variant-selector::part(select) {
                background: #0A0A0A; color: white;
                border: 1px solid rgba(255,255,255,0.15);
                padding: 10px 14px; width: 100%; outline: none;
                font-size: 14px; appearance: none; border-radius: 0;
              }
              .modal-variants shopify-variant-selector::part(select):focus {
                border-color: rgba(232,0,13,0.5);
              }
              .modal-desc p { margin-bottom: 0.75em; }
              .modal-desc p:last-child { margin-bottom: 0; }
            ` }} />

            {/* ─── Product Detail Modal ─────────────────────────────── */}
            <dialog
              id="product-modal"
              className="bg-transparent p-0 border-0 m-auto w-[95vw] max-w-[860px] max-h-[92vh]"
            >
              <shopify-context
                id="product-modal-context"
                type="product"
                wait-for-update="true"
                className="block w-full bg-[#111111] border border-white/10 overflow-y-auto max-h-[92vh] relative"
              >
                <template dangerouslySetInnerHTML={{ __html: `
                  <button
                    onclick="document.getElementById('product-modal').close();"
                    style="position:absolute;top:14px;right:14px;z-index:60;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.6);cursor:pointer;font-size:20px;"
                  >&times;</button>

                  <div style="display:flex;flex-wrap:wrap;min-height:480px;">
                    <!-- Left: Image Panel -->
                    <div style="flex:1;min-width:260px;background:#0A0A0A;border-right:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;">
                      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px;">
                        <shopify-media
                          id="modal-main-image"
                          width="440" height="440"
                          query="product.selectedOrFirstAvailableVariant.image"
                          style="width:100%;object-fit:contain;"
                        ></shopify-media>
                      </div>
                      <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.05);">
                        <shopify-list-context type="image" query="product.images" first="6" style="display:flex;gap:8px;overflow-x:auto;">
                          <template>
                            <button type="button" style="flex-shrink:0;width:52px;height:52px;border:1px solid rgba(255,255,255,0.1);background:#111;cursor:pointer;padding:4px;transition:border-color .2s;" onmouseenter="this.style.borderColor='#E8000D'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)'">
                              <shopify-media width="44" height="44" query="image" style="width:100%;height:100%;object-fit:cover;pointer-events:none;"></shopify-media>
                            </button>
                          </template>
                        </shopify-list-context>
                      </div>
                    </div>

                    <!-- Right: Info Panel -->
                    <div style="flex:1;min-width:260px;padding:40px 36px;display:flex;flex-direction:column;background:#111111;">
                      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#6A6A6A;margin-bottom:6px;font-family:sans-serif;">
                    MANIFEST DRIVES
                      </div>
                      <div style="font-size:30px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:white;line-height:1.1;margin-bottom:10px;font-family:sans-serif;">
                        <shopify-data query="product.title"></shopify-data>
                      </div>
                      <div style="font-size:22px;font-weight:700;color:white;margin-bottom:20px;font-family:sans-serif;">
                        <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </div>
                      <div style="margin-bottom:18px;" class="modal-variants">
                        <shopify-variant-selector></shopify-variant-selector>
                      </div>
                      <div style="font-size:14px;color:#9A9A9A;line-height:1.7;margin-bottom:24px;font-family:sans-serif;" class="modal-desc">
                        <shopify-data query="product.descriptionHtml"></shopify-data>
                      </div>
                      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;">
                        <button
                          onclick="document.getElementById('cart').addLine(event).showModal();"
                          shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          style="width:100%;background:#E8000D;color:white;border:none;padding:15px;font-size:13px;letter-spacing:4px;text-transform:uppercase;cursor:pointer;font-family:sans-serif;font-weight:700;transition:background .2s;"
                          onmouseenter="this.style.background='#FF1A1A'"
                          onmouseleave="this.style.background='#E8000D'"
                        >Add to Cart</button>
                        <button
                          onclick="document.querySelector('shopify-store').buyNow(event);"
                          shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          style="width:100%;background:transparent;color:white;border:1px solid rgba(255,255,255,0.25);padding:15px;font-size:13px;letter-spacing:4px;text-transform:uppercase;cursor:pointer;font-family:sans-serif;font-weight:700;transition:border-color .2s;"
                          onmouseenter="this.style.borderColor='rgba(255,255,255,0.6)'"
                          onmouseleave="this.style.borderColor='rgba(255,255,255,0.25)'"
                        >Buy Now</button>
                      </div>
                    </div>
                  </div>
                ` }} />
              </shopify-context>
            </dialog>
          </>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ aspectRatio: "1", background: "rgba(255,255,255,0.04)" }} />
                <div style={{ padding: "16px" }}>
                  <div style={{ height: "10px", background: "rgba(255,255,255,0.06)", width: "40%", marginBottom: "10px" }} />
                  <div style={{ height: "14px", background: "rgba(255,255,255,0.06)", width: "75%", marginBottom: "10px" }} />
                  <div style={{ height: "40px", background: "rgba(255,255,255,0.06)", marginTop: "14px" }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer strip */}
      <div className="mt-16 border-t border-white/[0.06] py-8 px-6 md:px-[5vw] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-6">
          {["🚀 Free Worldwide Shipping", "🔄 30-Day Returns", "✦ 100+ Happy Customers"].map((t) => (
            <span key={t} className="font-inter text-[12px] text-[#6A6A6A] tracking-[1px]">{t}</span>
          ))}
        </div>
        <Link href="/" className="font-bebas text-[13px] tracking-[4px] text-[#E8000D] uppercase hover:text-[#FF1A1A] transition-colors">
          ← Back to Main Site
        </Link>
      </div>
    </main>
  );
}
