import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Truth from "@/components/Truth";
import Collection from "@/components/Collection";
import TheRitual from "@/components/TheRitual";
import StudentWins from "@/components/StudentWins";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      <Hero />
      <Mission />
      <Truth />
      <Collection />
      <TheRitual />
      <StudentWins />
      <CTA />
      <BlogPreview />
      <Footer />
    </main>
  );
}
