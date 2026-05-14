"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { transitions } from '@/lib/transitions';
import { Button } from '@/components/ui/button';

const shopItems = [
  {
    id: 1,
    name: "Obsidian Blend",
    type: "Whole Bean Coffee",
    price: "$24",
    image: "/menu-cold-brew.webp" // Reusing high-quality asset for demo
  },
  {
    id: 2,
    name: "Ceramic Dripper",
    type: "Brewing Equipment",
    price: "$45",
    image: "/menu-flat-white.webp" // Reusing high-quality asset for demo
  },
  {
    id: 3,
    name: "Tasting Cups",
    type: "Drinkware (Set of 2)",
    price: "$32",
    image: "/menu-matcha.webp" // Reusing high-quality asset for demo
  }
];

const ShopSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.cinematic
    }
  };

  return (
    <section id="shop" className="py-32 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transitions.cinematic}
              className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/60 block mb-4"
            >
              The Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitions.cinematic, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl text-vanilla tracking-tight text-balance"
            >
              Curated <span className="font-light italic text-brass">Objects.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transitions.cinematic, delay: 0.2 }}
          >
             <Button variant="ghost" className="h-12 px-6 rounded-none border border-brass/20 text-brass font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-brass/10 transition-colors duration-500">
                View All
             </Button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {shopItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden bg-espresso-rich border border-brass/5 group-hover:border-brass/20 transition-colors duration-500">
                <Image 
                  src={item.image} 
                  fill 
                  alt={item.name}
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                
                {/* Hover Add to Cart Button */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center">
                   <div className="flex items-center gap-2 text-brass font-sans text-[10px] uppercase tracking-[0.3em] bg-navy/90 backdrop-blur-md px-6 py-3 border border-brass/20 shadow-[0_4px_20px_rgba(196,154,95,0.15)]">
                     <span>Add to Cart</span>
                     <ArrowUpRight size={14} />
                   </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-vanilla mb-1 group-hover:text-brass transition-colors duration-300">{item.name}</h3>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-vanilla/40">{item.type}</p>
                </div>
                <span className="font-sans text-sm tracking-widest text-brass">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ShopSection;
