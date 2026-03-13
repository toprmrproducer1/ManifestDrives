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
    <main className="min-h-screen bg-[#080808] text-white pt-[120px] px-6 md:px-[8vw] pb-24">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#9A9A9A] hover:text-white transition-colors hover-target">
          <ArrowLeft size={16} />
          <span className="font-bebas text-[18px] tracking-[2px] uppercase mt-1">BACK TO MANIFEST</span>
        </Link>
        <h1 className="font-bebas text-[48px] md:text-[72px] mt-6 tracking-[2px] leading-none mb-4">THE FULL STORE</h1>
        <p className="font-inter text-[#9A9A9A] max-w-xl text-[15px] leading-relaxed">
          The complete Manifest Drives collection. Authentically engineered 1:32 scale models.
        </p>
      </div>

      {mounted && (
        <div className="w-full">
          {/* We use standard CSS grid for the list context container */}
          <shopify-list-context 
            type="product" 
            query="products" 
            first="12"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full"
          >
            <template dangerouslySetInnerHTML={{ __html: `
              <div class="bg-[#111111] border border-white/5 rounded-0 overflow-hidden flex flex-col hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-400 group h-full">
                
                <div class="bg-black aspect-square relative overflow-hidden flex items-center justify-center p-8">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <shopify-media 
                    width="400" 
                    height="400" 
                    query="product.featuredImage" 
                    class="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  ></shopify-media>
                </div>
                
                <div class="p-6 flex flex-col flex-1 border-t border-white/5">
                  <h2 class="font-bebas text-[24px] tracking-[1px] text-white mb-2 uppercase">
                    <shopify-data query="product.title"></shopify-data>
                  </h2>
                  <div class="font-inter text-[#C9A84C] font-medium text-[14px] mb-6">
                    <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                  </div>
                  
                  <div class="mt-auto flex flex-col gap-3">
                    <button
                      onclick="document.getElementById('product-modal').showModal(); document.getElementById('product-modal-context').update(event);"
                      class="w-full inline-block font-bebas text-[16px] tracking-[4px] px-6 py-4 uppercase border border-white/20 transition-all duration-400 hover-target text-white bg-transparent hover:bg-white/5 cursor-pointer"
                    >
                      VIEW DETAILS
                    </button>
                    <button 
                      onclick="document.getElementById('cart').addLine(event).showModal();" 
                      class="w-full inline-block font-bebas text-[16px] tracking-[4px] px-6 py-4 uppercase border-none transition-all duration-400 hover-target text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:shadow-[0_0_0_1px_rgba(232,0,13,0.5),_0_8px_40px_rgba(232,0,13,0.6),_inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[1px] cursor-pointer"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

              </div>
            ` }} />
            <div shopify-loading-placeholder="true" className="col-span-full py-20 text-center font-bebas text-[24px] tracking-[4px] text-[#9A9A9A] animate-pulse">
              LOADING MANIFEST COLLECTION...
            </div>
          </shopify-list-context>

          {/* Product Modal */}
          <dialog id="product-modal" className="bg-transparent p-0 border-0 rounded-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm m-auto w-[90vw] max-w-5xl">
            <shopify-context id="product-modal-context" type="product" wait-for-update="true" className="block w-full bg-[#111111] border border-white/10 relative max-h-[90vh] overflow-y-auto">
              <template dangerouslySetInnerHTML={{ __html: `
                <button onclick="document.getElementById('product-modal').close();" class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer z-[60] bg-[#111111] border border-white/10 w-10 h-10 flex items-center justify-center rounded-full hover-target">&times;</button>
                <div class="flex flex-col md:flex-row w-full min-h-[500px]">
                  <div class="w-full md:w-1/2 bg-black flex flex-col items-center justify-center p-8 relative min-h-[300px] border-b md:border-b-0 md:border-r border-white/5">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
                    <shopify-media id="modal-main-image" width="600" height="600" query="product.selectedOrFirstAvailableVariant.image" class="w-full object-contain relative z-10 flex-1"></shopify-media>
                    
                    <div class="w-full mt-6 z-20">
                      <p class="font-inter text-[#9A9A9A] text-[11px] uppercase tracking-[2px] mb-3">GALLERY</p>
                      <shopify-list-context type="image" query="product.images" first="6" class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <template>
                          <button 
                            type="button" 
                            onclick="
                              const mainImg = document.getElementById('modal-main-image');
                              const thumbImg = this.querySelector('shopify-media');
                              if (mainImg && thumbImg) {
                                // Extract the underlying unpic-img or img src from the shadow DOM
                                const thumbSrc = thumbImg.shadowRoot ? thumbImg.shadowRoot.querySelector('img').src : thumbImg.querySelector('img')?.src;
                                if (thumbSrc && mainImg.shadowRoot) {
                                  const mainUnpic = mainImg.shadowRoot.querySelector('unpic-img, img');
                                  if (mainUnpic) mainUnpic.setAttribute('src', thumbSrc);
                                }
                              }
                            "
                            class="w-16 h-16 shrink-0 bg-[#080808] border border-white/10 hover:border-[#E8000D] transition-colors cursor-pointer p-1"
                          >
                            <shopify-media width="64" height="64" query="image" class="w-full h-full object-cover pointer-events-none"></shopify-media>
                          </button>
                        </template>
                      </shopify-list-context>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#111111]">
                    <div class="mb-6">
                      <div class="font-inter text-[#9A9A9A] text-[12px] tracking-[2px] uppercase mb-2">
                        <shopify-data query="product.vendor"></shopify-data>
                      </div>
                      <h1 class="font-bebas text-[36px] md:text-[48px] tracking-[2px] text-white leading-none uppercase mb-4">
                        <shopify-data query="product.title"></shopify-data>
                      </h1>
                      <div class="font-inter text-[#C9A84C] font-medium text-[24px]">
                        <shopify-money format="money_with_currency" query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </div>
                    </div>
                    
                    <div class="custom-variant-wrapper mb-8">
                      <shopify-variant-selector></shopify-variant-selector>
                    </div>
                    
                    <div class="font-inter text-[#B0B0B0] text-[15px] leading-relaxed mb-8 shopify-product-description">
                      <shopify-data query="product.descriptionHtml"></shopify-data>
                    </div>
                    
                    <div class="flex flex-col gap-4 mt-auto">
                      <button 
                        onclick="document.getElementById('cart').addLine(event).showModal();" 
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                        class="w-full inline-block font-bebas text-[18px] tracking-[4px] px-8 py-5 uppercase border-none transition-all duration-400 hover-target text-white bg-[#E8000D] shadow-[0_0_0_1px_rgba(232,0,13,0.3),_0_4px_24px_rgba(232,0,13,0.4),_inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF1A1A] hover:-translate-y-[1px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ADD TO CART
                      </button>
                      <button 
                        onclick="document.querySelector('shopify-store').buyNow(event)" 
                        shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                        class="w-full inline-block font-bebas text-[18px] tracking-[4px] px-8 py-5 uppercase border border-white/20 transition-all duration-400 hover-target text-white bg-transparent hover:bg-white/5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              ` }} />
            </shopify-context>
          </dialog>

          <style dangerouslySetInnerHTML={{ __html: `
            .custom-variant-wrapper shopify-variant-selector::part(form) {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }
            .custom-variant-wrapper shopify-variant-selector::part(label) {
              color: #9A9A9A;
              font-family: var(--font-inter);
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 2px;
              margin-bottom: 8px;
              display: block;
            }
            .custom-variant-wrapper shopify-variant-selector::part(select) {
              background-color: #080808;
              color: white;
              border: 1px solid rgba(255,255,255,0.15);
              padding: 12px 16px;
              border-radius: 0;
              font-family: var(--font-inter);
              width: 100%;
              outline: none;
              font-size: 16px;
              appearance: none;
            }
            .custom-variant-wrapper shopify-variant-selector::part(select):focus {
              border-color: rgba(232,0,13,0.5);
            }
            .shopify-product-description p {
              margin-bottom: 1em;
            }
            .shopify-product-description p:last-child {
              margin-bottom: 0;
            }
            dialog#product-modal[open] {
              display: flex;
            }
            dialog#product-modal::backdrop {
              background-color: rgba(0,0,0,0.85);
              backdrop-filter: blur(8px);
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          ` }} />
        </div>
      )}
    </main>
  );
}
