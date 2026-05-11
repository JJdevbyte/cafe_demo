import CafeHero from "@/components/CafeHero";
import Navbar from "@/components/Navbar";
import MenuGrid from "@/components/MenuGrid";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <CafeHero />
      
      {/* Scrolling Quality Banner */}
      <div className="bg-espresso text-cream py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="animate-marquee inline-block font-sans text-sm tracking-[0.2em] uppercase">
          <span className="mx-8">• Ethically Sourced</span>
          <span className="mx-8">• Artisanal Roasting</span>
          <span className="mx-8">• Organic Ingredients</span>
          <span className="mx-8">• Sustainable Practices</span>
          <span className="mx-8">• Ethically Sourced</span>
          <span className="mx-8">• Artisanal Roasting</span>
          <span className="mx-8">• Organic Ingredients</span>
          <span className="mx-8">• Sustainable Practices</span>
        </div>
      </div>

      <MenuGrid />
      <BookingSection />
      
      {/* Footer */}
      <footer className="bg-espresso border-t border-white/10 py-12 text-center text-cream/50 text-sm font-sans">
        <p>© 2026 CafeHero. All rights reserved.</p>
      </footer>
    </main>
  );
}
