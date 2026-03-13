import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Truth from "@/components/Truth";
import Collection from "@/components/Collection";
import StudentWins from "@/components/StudentWins";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      <Hero />
      <Truth />
      <Collection />
      <StudentWins />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
