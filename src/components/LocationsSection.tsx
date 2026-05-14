"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { transitions } from '@/lib/transitions';
import { LocationMap } from '@/components/ui/expand-map';
import { cn } from '@/lib/utils';

const locations = [
  {
    city: "New York",
    address: "142 West 24th St.",
    neighborhood: "Chelsea",
    hours: "7AM — 7PM",
    coordinates: "40.7443° N, 73.9939° W"
  },
  {
    city: "Tokyo",
    address: "3-4-1 Minami-Aoyama",
    neighborhood: "Minato City",
    hours: "8AM — 8PM",
    coordinates: "35.6664° N, 139.7157° E"
  },
  {
    city: "London",
    address: "24 Shoreditch High St.",
    neighborhood: "Hackney",
    hours: "7:30AM — 6PM",
    coordinates: "51.5246° N, 0.0772° W"
  }
];

const LocationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  return (
    <section id="locations" className="py-32 bg-charcoal text-vanilla relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-vanilla" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-vanilla" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitions.cinematic}
            className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/60 block mb-4"
          >
            Sanctuaries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transitions.cinematic, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl tracking-tight text-balance"
          >
            Global <span className="font-light italic text-brass">Presence.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Location Selector */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {locations.map((loc, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={loc.city}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "text-left group transition-all duration-500 relative py-4 border-b",
                    isActive ? "border-brass" : "border-brass/20 hover:border-brass/50"
                  )}
                >
                  <h3 className={cn(
                    "font-serif text-4xl mb-2 transition-colors duration-500",
                    isActive ? "text-brass" : "text-vanilla group-hover:text-brass/80"
                  )}>
                    {loc.city}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-vanilla/40">
                    {loc.neighborhood}
                  </p>
                  
                  {/* Subtle active indicator arrow */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="active-location"
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-brass"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Interactive Map Display */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.city}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={transitions.cinematic}
                className="w-full max-w-[500px] flex justify-center"
              >
                <LocationMap 
                  location={`${activeLocation.address}, ${activeLocation.city}`}
                  coordinates={activeLocation.coordinates}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
