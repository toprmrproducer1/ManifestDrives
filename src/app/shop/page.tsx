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
                  
                  <div class="mt-auto">
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
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <div shopify-loading-placeholder={true as any} className="col-span-full py-20 text-center font-bebas text-[24px] tracking-[4px] text-[#9A9A9A] animate-pulse">
              LOADING MANIFEST COLLECTION...
            </div>
          </shopify-list-context>
        </div>
      )}
    </main>
  );
}
