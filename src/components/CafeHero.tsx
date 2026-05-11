"use client";

import React from 'react';
import { MapPin } from 'lucide-react';

const CafeHero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 opacity-20 pointer-events-none transform -translate-x-1/3 -translate-y-1/3 rotate-45">
        <img src="/botanical-branch.webp" alt="" className="w-full h-auto" />
      </div>

      {/* Left Side (Content) */}
      <div className="flex flex-col justify-center p-10 md:p-20 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso leading-tight">
            Your Morning Ritual, <br />
            <span className="italic">Perfected.</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-sage/80 max-w-md">
            Step into a sanctuary where organic craftsmanship meets artisanal comfort. 
            Every cup is a masterpiece, every moment is yours.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button className="px-8 py-4 bg-espresso text-cream font-sans font-medium rounded-full hover:bg-espresso/90 transition-all shadow-lg">
            View Menu
          </button>
          <button className="px-8 py-4 border-2 border-espresso text-espresso font-sans font-medium rounded-full flex items-center gap-2 hover:bg-espresso hover:text-cream transition-all">
            <MapPin size={20} />
            Get Directions
          </button>
        </div>
      </div>

      {/* Right Side (Empty Centered Div) */}
      <div className="flex items-center justify-center bg-[#FAF9F6] p-10">
        {/* Placeholder for future asset */}
      </div>
    </section>
  );
};

export default CafeHero;
