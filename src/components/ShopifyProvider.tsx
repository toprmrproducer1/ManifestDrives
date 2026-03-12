"use client";

import { useEffect, useState } from "react";

export default function ShopifyProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  return (
    <>
      <div style={{ display: mounted ? "contents" : "none" }}>
        {mounted && (
          <div suppressHydrationWarning>
            <shopify-store store-domain="9jfq50-n9.myshopify.com" public-access-token="19139b275faac35ad8ebce6ecf434646"></shopify-store>
            <shopify-cart id="cart"></shopify-cart>
          </div>
        )}
      </div>
      {children}
    </>
  );
}
