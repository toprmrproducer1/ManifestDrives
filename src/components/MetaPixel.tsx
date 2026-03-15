"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import * as metaPixel from "@/utils/metaPixel";

export const MetaPixel = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This pageview only triggers on route changes, not the initial load of the script itself,
    // but the script includes a default fbq('track', 'PageView') for the initial load.
    if (pathname) {
      metaPixel.pageview();
    }
  }, [pathname, searchParams]);

  if (!metaPixel.FB_PIXEL_ID) return null;

  return (
    <>
      <Script
        id="meta-pixel-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixel.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${metaPixel.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
};
