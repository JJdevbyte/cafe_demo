"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-cream/80 backdrop-blur-xl border-b border-espresso/5 py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Brand */}
        <div className="font-serif text-2xl tracking-[0.2em] uppercase text-espresso">
          Cafe<span className="font-light opacity-50">Hero</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 items-center">
          {['Menu', 'Story', 'Locations', 'Shop'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="group relative font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-espresso/60 hover:text-espresso transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-espresso transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Booking Button */}
        <div className="hidden md:block">
          <Button variant="ghost" className="px-8 h-10 border border-espresso/20 rounded-none font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-espresso hover:text-cream transition-all duration-500">
            Reserve
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-espresso opacity-60 hover:opacity-100 transition-opacity"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream border-b border-espresso/5 p-12 flex flex-col items-center gap-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-500">
          {['Menu', 'Story', 'Locations', 'Shop'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setMenuOpen(false)} 
              className="font-serif text-4xl text-espresso hover:italic transition-all"
            >
              {link}
            </a>
          ))}
          <Button 
            onClick={() => setMenuOpen(false)} 
            className="mt-8 w-full h-14 bg-espresso text-cream rounded-none font-sans text-xs uppercase tracking-[0.3em]"
          >
            Reserve Table
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
