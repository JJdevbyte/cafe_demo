"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from 'lucide-react';

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

const MenuGrid = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-32 bg-cream relative overflow-hidden">
      {/* Background Grid Line */}
      <div className="absolute right-[15%] top-0 w-[1px] h-full bg-espresso/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-espresso/40 block mb-4">
              Curated Selection
            </span>
            <h2 className="font-serif text-6xl text-espresso tracking-tight">
              The <span className="font-light italic">Minimalist</span> Menu
            </h2>
          </div>

          <Tabs defaultValue="All" className="w-full lg:w-auto" onValueChange={setActiveTab}>
            <TabsList className="bg-transparent h-12 p-0 gap-8">
              {["All", "Coffee", "Pastry", "Specialty"].map((cat) => (
                <TabsTrigger 
                  key={cat}
                  value={cat} 
                  className="bg-transparent px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-espresso data-[state=active]:bg-transparent font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/40 data-[state=active]:text-espresso transition-all h-full"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-espresso/5 bg-[#f5f5f5] mb-6">
                  <Image 
                    src={item.image} 
                    fill 
                    alt={item.name} 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/5 transition-colors duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-cream/80 backdrop-blur-md px-3 py-1 font-sans text-[8px] uppercase tracking-[0.2em] text-espresso border border-espresso/5">
                      {item.category}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-espresso mb-1 group-hover:italic transition-all">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[11px] text-espresso/50 leading-relaxed max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-serif text-xl text-espresso">{item.price}</span>
                    <div className="w-8 h-8 rounded-full border border-espresso/10 flex items-center justify-center group-hover:bg-espresso group-hover:text-cream transition-all duration-500">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
