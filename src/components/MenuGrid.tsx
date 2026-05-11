"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Obsidian Cold Brew",
    price: "$8",
    category: "Coffee",
    image: "/menu-cold-brew.webp",
    description: "12-hour extraction with notes of dark chocolate and smoke."
  },
  {
    id: 2,
    name: "Velvet Flat White",
    price: "$6",
    category: "Coffee",
    image: "/menu-flat-white.webp",
    description: "Micro-foam silk over high-altitude espresso."
  },
  {
    id: 3,
    name: "Ceremonial Matcha",
    price: "$9",
    category: "Specialty",
    image: "/menu-matcha.webp",
    description: "Whisked stone-ground Uji matcha with oat milk."
  },
  {
    id: 4,
    name: "Artisanal Croissant",
    price: "$7",
    category: "Pastry",
    image: "/menu-croissant.webp",
    description: "82% butter fat, 48-hour lamination."
  },
  {
    id: 5,
    name: "Wild Berry Tart",
    price: "$12",
    category: "Pastry",
    image: "/menu-tart.webp",
    description: "Sable crust with organic mountain berries."
  },
  {
    id: 6,
    name: "Botanical Tonic",
    price: "$8",
    category: "Specialty",
    image: "/menu-tonic.webp",
    description: "Cold brew infused with rosemary and citrus zest."
  }
];

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
  const categories = ["All", "Coffee", "Pastry", "Specialty"];

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

          <nav className="flex gap-8 relative border-b border-brass/20 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "relative font-sans text-[10px] uppercase tracking-[0.3em] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass/20",
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
                className="group cursor-pointer h-full flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-brass/10 bg-espresso-rich mb-6 shadow-2xl">
                  <Image 
                    src={item.image} 
                    fill 
                    alt={item.name} 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.id <= 3}
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-navy/80 backdrop-blur-md px-3 py-1 font-sans text-[8px] uppercase tracking-[0.2em] text-brass border border-brass/20">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start mt-auto">
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-vanilla mb-1 group-hover:italic group-hover:text-brass transition-all text-pretty opacity-100 visible">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[11px] text-vanilla/50 leading-relaxed max-w-[240px] text-pretty opacity-100 visible">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    <span className="font-serif text-xl text-brass tabular-nums">{item.price}</span>
                    <div className="w-8 h-8 rounded-full border border-brass/20 flex items-center justify-center group-hover:bg-brass group-hover:text-navy transition-all duration-500 text-brass" aria-hidden="true">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
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
