import CafeHero from "@/components/CafeHero";
import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import MenuGrid from "@/components/MenuGrid";
import ShopSection from "@/components/ShopSection";
import LocationsSection from "@/components/LocationsSection";
import BookingSection from "@/components/BookingSection";

import TastefulFooter from "@/components/TastefulFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-espresso selection:text-cream">
      <Navbar />
      <CafeHero />
      <StorySection />
      
      {/* Structural Marquee */}
      <div className="bg-espresso text-cream/80 py-8 overflow-hidden whitespace-nowrap border-y border-white/5 relative z-10">
        <div className="animate-marquee inline-block font-sans text-[10px] tracking-[0.4em] uppercase">
          <span className="mx-12">• Ethically Sourced Architecture</span>
          <span className="mx-12">• Artisanal Roasting Philosophy</span>
          <span className="mx-12">• Organic Sensory Ritual</span>
          <span className="mx-12">• Sustainable Design Practices</span>
          <span className="mx-12">• Ethically Sourced Architecture</span>
          <span className="mx-12">• Artisanal Roasting Philosophy</span>
          <span className="mx-12">• Organic Sensory Ritual</span>
          <span className="mx-12">• Sustainable Design Practices</span>
        </div>
      </div>

      <MenuGrid />
      <ShopSection />
      <LocationsSection />
      <BookingSection />
      <TastefulFooter />
    </main>
  );
}
