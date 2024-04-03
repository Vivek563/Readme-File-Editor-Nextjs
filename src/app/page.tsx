import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
     return (
          <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
               <Navbar />
               <HeroSection />
          </main>
     );
}
