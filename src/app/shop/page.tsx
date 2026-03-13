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
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Page Header */}
      <div className="pt-[100px] pb-12 px-6 md:px-[6vw] border-b border-white/5">
        <Link href="/" className="inline-flex items-center gap-2 text-[#9A9A9A] hover:text-white transition-colors mb-8 hover-target">
          <ArrowLeft size={14} />
          <span className="font-inter text-[13px] tracking-[2px] uppercase">Back to Manifest Drives</span>
        </Link>
        <h1 className="font-bebas text-[56px] md:text-[80px] tracking-[3px] leading-none mb-3">
          FULL COLLECTION
        </h1>
        <p className="font-inter text-[#9A9A9A] text-[15px] leading-relaxed max-w-lg">
          1:32 scale die-cast models — precision engineered. Every car you dream about, scaled to perfection.
        </p>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-[6vw] py-12">
        {mounted ? (
          <>
            <shopify-list-context
              type="product"
              query="products"
              first="24"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
            >
              <template dangerouslySetInnerHTML={{ __html: `
                <div class="group flex flex-col cursor-pointer">
                  <!-- Image Area -->
                  <div class="relative bg-[#0E0E0E] border border-white/[0.06] overflow-hidden aspect-square mb-4 group-hover:border-white/15 transition-colors duration-300">
                    <shopify-media
                      width="400"
                      height="400"
                      query="product.featuredImage"
                      class="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    ></shopify-media>
                    <!-- Hover overlay -->
                    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,0,13,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
                    <!-- Quick add button on hover -->
                    <div class="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-[#080808] to-transparent">
                      <button
                        onclick="document.getElementById('cart').addLine(event).showModal();"
                        class="w-full font-bebas text-[14px] tracking-[3px] py-3 text-white bg-[#E8000D] hover:bg-[#FF1A1A] border-none cursor-pointer transition-colors duration-200 uppercase"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <!-- Product Info -->
                  <div class="flex flex-col flex-1">
                    <h2 class="font-inter font-medium text-[14px] text-white leading-snug mb-1 uppercase tracking-[0.5px] line-clamp-2">
                      <shopify-data query="product.title"></shopify-data>
                    </h2>
                    <div class="font-inter text-[#9A9A9A] text-[13px] mb-3">
                      <shopify-data query="product.vendor"></shopify-data>
                    </div>
                    <div class="flex items-center justify-between mt-auto">
                      <div class="font-inter font-semibold text-[15px] text-white">
                        <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </div>
                      <button
                        onclick="document.getElementById('product-modal').showModal(); document.getElementById('product-modal-context').update(event);"
                        class="font-inter text-[12px] text-[#9A9A9A] hover:text-white transition-colors underline underline-offset-2 cursor-pointer bg-transparent border-none uppercase tracking-[1px]"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ` }} />
              <div shopify-loading-placeholder="true" className="col-span-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="aspect-square bg-white/5 mb-4" />
                      <div className="h-4 bg-white/5 mb-2 w-3/4" />
                      <div className="h-3 bg-white/5 w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </shopify-list-context>

            {/* Product Detail Modal */}
            <dialog
              id="product-modal"
              className="bg-transparent p-0 border-0 m-auto w-[95vw] max-w-4xl max-h-[90vh]"
              style={{ borderRadius: 0 }}
            >
              <shopify-context id="product-modal-context" type="product" wait-for-update="true" className="block w-full bg-[#111111] border border-white/10 overflow-y-auto max-h-[90vh]">
                <template dangerouslySetInnerHTML={{ __html: `
                  <button
                    onclick="document.getElementById('product-modal').close();"
                    class="absolute top-4 right-4 z-50 w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all cursor-pointer"
                  >&times;</button>

                  <div class="flex flex-col md:flex-row min-h-[480px]">
                    <!-- Left: Images -->
                    <div class="md:w-[45%] bg-[#0A0A0A] border-r border-white/5 flex flex-col">
                      <div class="flex-1 flex items-center justify-center p-10">
                        <shopify-media
                          id="modal-main-image"
                          width="480"
                          height="480"
                          query="product.selectedOrFirstAvailableVariant.image"
                          class="w-full object-contain"
                        ></shopify-media>
                      </div>
                      <!-- Thumbnails -->
                      <div class="p-4 border-t border-white/5">
                        <shopify-list-context type="image" query="product.images" first="6" class="flex gap-2 overflow-x-auto">
                          <template>
                            <button
                              type="button"
                              onclick="document.getElementById('modal-main-image').setAttribute('query',''); document.getElementById('modal-main-image').setAttribute('src', this.querySelector('img')?.src || '');"
                              class="shrink-0 w-14 h-14 border border-white/10 hover:border-[#E8000D] transition-colors cursor-pointer p-1 bg-black"
                            >
                              <shopify-media width="56" height="56" query="image" class="w-full h-full object-cover pointer-events-none"></shopify-media>
                            </button>
                          </template>
                        </shopify-list-context>
                      </div>
                    </div>

                    <!-- Right: Details -->
                    <div class="md:w-[55%] p-8 md:p-10 flex flex-col">
                      <div class="mb-1 font-inter text-[11px] tracking-[3px] text-[#9A9A9A] uppercase">
                        <shopify-data query="product.vendor"></shopify-data>
                      </div>
                      <h1 class="font-bebas text-[32px] md:text-[40px] tracking-[2px] text-white leading-tight uppercase mb-3">
                        <shopify-data query="product.title"></shopify-data>
                      </h1>
                      <div class="font-inter font-bold text-[22px] text-white mb-6">
                        <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </div>

                      <div class="mb-6">
                        <shopify-variant-selector></shopify-variant-selector>
                      </div>

                      <div class="font-inter text-[14px] text-[#9A9A9A] leading-relaxed mb-8 product-desc">
                        <shopify-data query="product.descriptionHtml"></shopify-data>
                      </div>

                      <div class="flex flex-col gap-3 mt-auto">
                        <button
                          onclick="document.getElementById('cart').addLine(event).showModal();"
                          shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          class="w-full font-bebas text-[17px] tracking-[4px] py-4 text-white bg-[#E8000D] hover:bg-[#FF1A1A] border-none cursor-pointer transition-colors duration-200 uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Add to Cart
                        </button>
                        <button
                          onclick="document.querySelector('shopify-store').buyNow(event);"
                          shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          class="w-full font-bebas text-[17px] tracking-[4px] py-4 text-white bg-transparent border border-white/20 hover:border-white/40 cursor-pointer transition-colors duration-200 uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ` }} />
              </shopify-context>
            </dialog>

            <style dangerouslySetInnerHTML={{ __html: `
              dialog#product-modal[open] { display: flex; }
              dialog#product-modal::backdrop {
                background: rgba(0,0,0,0.85);
                backdrop-filter: blur(6px);
              }
              shopify-variant-selector::part(form) {
                display: flex;
                flex-direction: column;
                gap: 12px;
              }
              shopify-variant-selector::part(label) {
                font-family: var(--font-inter, sans-serif);
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #9A9A9A;
                display: block;
                margin-bottom: 6px;
              }
              shopify-variant-selector::part(select) {
                background: #080808;
                color: white;
                border: 1px solid rgba(255,255,255,0.15);
                padding: 10px 14px;
                width: 100%;
                outline: none;
                font-size: 15px;
                appearance: none;
                border-radius: 0;
              }
              shopify-variant-selector::part(select):focus {
                border-color: rgba(232,0,13,0.5);
              }
              .product-desc p { margin-bottom: 0.75em; }
              .product-desc p:last-child { margin-bottom: 0; }
            ` }} />
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-white/5 mb-4" />
                <div className="h-4 bg-white/5 mb-2 w-3/4" />
                <div className="h-3 bg-white/5 w-1/2" />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
