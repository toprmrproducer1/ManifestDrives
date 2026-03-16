import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import SwipeManifesto from "@/components/SwipeManifesto";

// Aggressive code-splitting for below-the-fold components
const Truth = dynamic(() => import("@/components/Truth"));
const Collection = dynamic(() => import("@/components/Collection"));
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const UrgencySection = dynamic(() => import("@/components/UrgencySection"));
const CTA = dynamic(() => import("@/components/CTA"));
const ManifestBanner = dynamic(() => import("@/components/ManifestBanner"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      <div className="pt-[64px]">
        <MarqueeBanner variant="dark" />
      </div>
      <Hero />
      {/* Combined: Manifesto text left + 1:1 swipe slider right */}
      <SwipeManifesto />
      <Truth />
      <Collection />
      <MarqueeBanner variant="red" />
      <UrgencySection />
      <TestimonialCarousel />
      <FAQ />
      <CTA />
      <ManifestBanner />
      <Footer />
    </main>
  );
}
