"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-500 rounded-[40px] px-8 py-4 flex items-center justify-between ${
      scrolled 
        ? 'bg-cream/10 backdrop-blur-2xl border border-white/20 shadow-xl' 
        : 'bg-transparent'
    }`}>
      {/* Brand */}
      <div className={`font-serif text-2xl tracking-wider transition-colors duration-500 ${scrolled ? 'text-espresso' : 'text-espresso'}`}>
        CafeHero
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {['Menu', 'Story', 'Locations', 'Shop'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className={`font-sans text-sm uppercase tracking-widest font-medium transition-colors hover:text-sage ${scrolled ? 'text-espresso/70' : 'text-espresso/70'}`}>
            {link}
          </a>
        ))}
      </div>

      {/* Booking Button */}
      <div className="hidden md:block">
        <a href="#book" className={`px-6 py-2 rounded-full font-sans text-sm tracking-wide font-medium transition-all ${
          scrolled 
            ? 'bg-espresso text-cream hover:bg-espresso/90' 
            : 'bg-espresso text-cream hover:bg-espresso/90'
        }`}>
          Book Table
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-espresso"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-cream/95 backdrop-blur-2xl border border-white/20 shadow-xl rounded-3xl p-6 flex flex-col gap-4 md:hidden">
          {['Menu', 'Story', 'Locations', 'Shop'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-serif text-2xl text-espresso">
              {link}
            </a>
          ))}
          <a href="#book" onClick={() => setMenuOpen(false)} className="mt-4 px-6 py-3 text-center rounded-full bg-espresso text-cream font-sans tracking-wide">
            Book Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
