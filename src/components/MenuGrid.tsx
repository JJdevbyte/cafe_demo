"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

import { MENU_ITEMS } from "@/data/menu";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

const MenuGrid = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(MENU_ITEMS.map(item => item.category)))], []);

  const filteredItems = useMemo(() => {
    return activeTab === "All" 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="menu" className="py-32 bg-navy relative overflow-hidden">
      {/* Background Grid Line */}
      <div className="absolute right-[15%] top-0 w-[1px] h-full bg-brass/10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/60 block mb-4"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-6xl text-vanilla tracking-tight text-balance"
            >
              The <span className="font-light italic text-brass">Minimalist</span> Menu
            </motion.h2>
          </div>

          <nav className="flex gap-8 relative border-b border-brass/20 pb-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "relative font-sans text-[10px] uppercase tracking-[0.3em] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass/20 flex-shrink-0",
                  activeTab === cat ? "text-brass" : "text-vanilla/40 hover:text-brass/60"
                )}
                aria-pressed={activeTab === cat}
              >
                <span className="relative z-10">{cat}</span>
                {activeTab === cat && (
                  <motion.div 
                    layoutId="menu-underline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-brass"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <motion.div 
          layout="position"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[600px]"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group cursor-pointer h-full"
              >
                {/* 3D Tracker Wrapper (Uiverse witty-deer-12) */}
                <div className="relative aspect-[4/5] perspective-1000 mb-6 transition-transform duration-200 active:scale-[0.96] canvas-grid">
                  {/* Trackers - Must be direct siblings of .menu-card for ~ selector */}
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`tracker tr-${i + 1} z-50 hidden md:block`}
                    />
                  ))}

                  <motion.div 
                    whileTap={{ scale: 0.97 }}
                    className="menu-card absolute inset-0 overflow-hidden border border-brass/10 bg-espresso-rich shadow-2xl transition-all duration-500 ease-out preserve-3d group/card"
                  >
                    {/* Background Glow Aura (Exact Snippet Logic) */}
                    <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-brass via-espresso-rich to-navy blur-[3rem] opacity-0 group-hover/card:opacity-60 transition-opacity duration-300" />
                    
                    <Image 
                      src={item.image} 
                      fill 
                      alt={item.name} 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={item.id <= 3}
                    />
                    
                    {/* Content Overlay - Revealed via Tracker/Group Hover */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 translate-z-10 preserve-3d">
                      <div className="flex justify-between items-start opacity-40 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="bg-navy/80 backdrop-blur-md px-3 py-1 font-sans text-[8px] uppercase tracking-[0.2em] text-brass border border-brass/20">
                          {item.category}
                        </div>
                        <span className="font-serif text-2xl text-brass tabular-nums transform translate-z-20">{item.price}</span>
                      </div>

                      <div className="space-y-4 transform translate-z-30 transition-all duration-300 group-hover/card:translate-y-[-10px]">
                        <h3 className="font-serif text-3xl text-vanilla leading-tight tracking-tight opacity-80 group-hover/card:opacity-100 transition-opacity duration-300">
                          {item.name}
                        </h3>
                        <p className="font-sans text-[11px] text-vanilla/40 group-hover/card:text-vanilla/70 leading-relaxed max-w-[240px] tracking-wide uppercase transition-all duration-300">
                          {item.description}
                        </p>
                        <div className="pt-4 flex items-center gap-2 text-brass opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                          <span className="font-sans text-[8px] uppercase tracking-[0.4em]">View Ritual</span>
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-navy/50 group-hover/card:bg-navy/20 transition-colors duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuGrid;
