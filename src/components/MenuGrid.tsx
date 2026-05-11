"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MenuGrid.module.css';

const menuItems = [
  { id: 1, name: 'Cold Brew', price: '$5.50', desc: '12-hour slow steeped, smooth finish.', category: 'Coffee', img: '/menu-cold-brew.webp' },
  { id: 2, name: 'Flat White', price: '$4.80', desc: 'Velvety microfoam over double ristretto.', category: 'Coffee', img: '/menu-flat-white.webp' },
  { id: 3, name: 'Matcha Latte', price: '$6.00', desc: 'Ceremonial grade matcha, lightly sweetened.', category: 'Tea', img: '/menu-matcha.webp' },
  { id: 4, name: 'Almond Croissant', price: '$5.00', desc: 'Twice-baked with rich frangipane filling.', category: 'Bakery', img: '/menu-croissant.webp' },
  { id: 5, name: 'Espresso Tonic', price: '$5.80', desc: 'Bright, bubbly, and refreshing coffee mocktail.', category: 'Specialty', img: '/menu-tonic.webp' },
  { id: 6, name: 'Chocolate Tart', price: '$7.50', desc: 'Dark ganache with sea salt and gold leaf.', category: 'Bakery', img: '/menu-tart.webp' }
];

const MenuGrid = () => {
  const [focusedId, setFocusedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setFocusedId(focusedId === id ? null : id);
  };

  return (
    <section id="menu" className="relative py-24 bg-cream overflow-hidden transition-colors duration-500">
      {/* Botanical Background Decorations */}
      <div className="absolute top-0 right-0 w-96 opacity-30 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <Image src="/botanical-branch.webp" alt="Botanical Branch" width={500} height={500} className="w-full h-auto object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-80 opacity-30 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <Image src="/botanical-beans.webp" alt="Botanical Beans" width={400} height={400} className="w-full h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-sans tracking-widest text-sage uppercase mb-4">Our Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-espresso">The Bestsellers</h3>
          </div>
          {focusedId && (
            <button 
              onClick={() => setFocusedId(null)}
              className="text-sm font-sans font-medium text-espresso border-b border-espresso pb-1 hover:text-sage hover:border-sage transition-colors"
            >
              Clear Focus
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => {
            const isFocused = focusedId === item.id;
            const isBlurred = focusedId !== null && focusedId !== item.id;
            
            return (
              <div 
                key={item.id} 
                className={`${styles.menuCardContainer} ${styles.noselect} ${isFocused ? styles.focused : ''} ${isBlurred ? styles.blurred : ''} cursor-pointer`}
                onClick={() => handleCardClick(item.id)}
              >
                <div className={styles.canvas}>
                  {/* 25 Trackers for 3D Hover */}
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className={`${styles.tracker} ${styles[`tr-${i + 1}`]}`} />
                  ))}
                  
                  {/* Card Content */}
                  <div className={styles.card}>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className={styles.cardImage} 
                    />
                    <div className={styles.cardOverlay} />
                    
                    <div className={styles.cardInfo}>
                      <span className="text-xs font-sans tracking-widest uppercase text-cream/80 mb-2 block">
                        {item.category}
                      </span>
                      <h4 className="text-2xl font-serif text-cream mb-1">{item.name}</h4>
                      <p className="text-sm font-sans text-cream/70 mb-4">{item.desc}</p>
                      <div className="text-lg font-sans font-medium text-cream">{item.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
