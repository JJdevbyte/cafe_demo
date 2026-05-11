"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Menu', 'Story', 'Locations', 'Shop'];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700",
      scrolled 
        ? "bg-navy/80 backdrop-blur-xl border-b border-brass/10 py-4" 
        : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Brand */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl tracking-[0.2em] uppercase text-vanilla cursor-default"
        >
          Cafe<span className="font-light opacity-50 text-brass">Hero</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-6 py-2 font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-vanilla/60 hover:text-brass transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass/20"
            >
              <span className="relative z-10">{link}</span>
              {hoveredLink === link && (
                <motion.span 
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-brass/10 rounded-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Booking Button */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <Button 
            variant="ghost" 
            className="px-8 h-10 border border-brass/20 rounded-none font-sans text-[10px] uppercase tracking-[0.3em] text-vanilla hover:bg-brass hover:text-navy transition-all duration-500 focus-visible:ring-1 focus-visible:ring-brass"
          >
            Reserve
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-vanilla opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass/20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} className="text-brass" /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-navy border-b border-brass/10 p-12 flex flex-col items-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setMenuOpen(false)} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-serif text-4xl text-vanilla hover:text-brass hover:italic transition-all"
              >
                {link}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <Button 
                onClick={() => setMenuOpen(false)} 
                className="mt-8 w-full h-14 bg-brass text-navy rounded-none font-sans text-xs uppercase tracking-[0.3em] hover:bg-brass/90"
              >
                Reserve Table
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
