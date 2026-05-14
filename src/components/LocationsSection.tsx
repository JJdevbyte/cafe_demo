"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { transitions } from '@/lib/transitions';

const locations = [
  {
    city: "New York",
    address: "142 West 24th St.",
    neighborhood: "Chelsea",
    hours: "7AM — 7PM"
  },
  {
    city: "Tokyo",
    address: "3-4-1 Minami-Aoyama",
    neighborhood: "Minato City",
    hours: "8AM — 8PM"
  },
  {
    city: "London",
    address: "24 Shoreditch High St.",
    neighborhood: "Hackney",
    hours: "7:30AM — 6PM"
  }
];

const LocationsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.cinematic
    }
  };

  return (
    <section id="locations" className="py-32 bg-charcoal text-vanilla relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-vanilla" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-vanilla" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-24 text-center">
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {locations.map((loc) => (
            <motion.div key={loc.city} variants={itemVariants} className="group cursor-default">
              <div className="border-t border-brass/20 pt-8 transition-colors duration-500 group-hover:border-brass/60">
                <h3 className="font-serif text-4xl mb-2 group-hover:text-brass transition-colors duration-500">{loc.city}</h3>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-vanilla/40 mb-8">{loc.neighborhood}</p>
                
                <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-sans text-sm tracking-wide text-vanilla/80">{loc.address}</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass/80">{loc.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
