"use client";

import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";

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
          <Button className="px-8 py-7 bg-espresso text-cream font-sans font-medium rounded-full hover:bg-espresso/90 transition-all shadow-lg text-base">
            View Menu
          </Button>
          <Button variant="outline" className="px-8 py-7 border-2 border-espresso text-espresso font-sans font-medium rounded-full flex items-center gap-2 hover:bg-espresso hover:text-cream transition-all text-base">
            <MapPin size={20} />
            Get Directions
          </Button>
        </div>
      </div>

      {/* Right Side (Crossfade Animation) */}
      <div className="flex items-center justify-center bg-[#FAF9F6] p-10">
        <div className='relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center'>
          {/* Base Layer (Empty State) */}
          <Image 
            src='/cafe-sequence/end.webp' 
            fill 
            alt='Empty plate' 
            className='object-contain' 
          />
          
          {/* Animated Layer (Full State) */}
          <motion.div 
            className='absolute inset-0 w-full h-full z-10'
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: 'easeInOut', 
              times: [0, 0.4, 0.5, 0.9, 1] 
            }}
          >
            <Image 
              src='/cafe-sequence/start.webp' 
              fill 
              alt='Fresh coffee and croissant' 
              className='object-contain' 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
