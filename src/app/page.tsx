import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Truth from "@/components/Truth";
import Collection from "@/components/Collection";
import SwipeReveal from "@/components/SwipeReveal";
import Manifesto from "@/components/Manifesto";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      {/* Dark marquee banner immediately after navbar / top of page */}
      <div className="pt-[64px]">
        <MarqueeBanner variant="dark" />
      </div>
      <Hero />
      {/* Swipe comparison: model on desk → real car in driveway */}
      <SwipeReveal />
      {/* Manifesto text section */}
      <Manifesto />
      <Truth />
      <Collection />
      {/* Red marquee banner mid-page */}
      <MarqueeBanner variant="red" />
      {/* Testimonial carousel */}
      <TestimonialCarousel />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
