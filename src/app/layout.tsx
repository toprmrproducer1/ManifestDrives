import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientWrapper from "@/components/ClientWrapper";
import ShopifyProvider from "@/components/ShopifyProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "Manifest Drives — Own It In Your Hand First",
  description: "Premium 1:32 die-cast scale models of the world's most iconic cars. BMW M4. Lamborghini Huracán STO. Porsche 911 GT3 RS. It starts on your desk. It ends in your driveway.",
  themeColor: "#080808",
  openGraph: {
    title: "Manifest Drives",
    description: "The desk first. The driveway next.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://cdn.shopify.com/storefront/web-components.js" async />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} antialiased bg-[#080808] text-white`}
      >
        <CustomCursor />
        
        <ShopifyProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ShopifyProvider>
      </body>
    </html>
  );
}
