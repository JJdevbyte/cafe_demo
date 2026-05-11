"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const TastefulFooter = () => {
  return (
    <footer className="bg-cream pt-32 pb-12 relative overflow-hidden">
      {/* Structural Grid Line */}
      <div className="absolute left-[50%] top-0 w-[1px] h-full bg-espresso/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-32">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-espresso/40 block mb-6">
              Stay Connected
            </span>
            <h2 className="font-serif text-5xl text-espresso tracking-tight mb-12">
              Join the <span className="font-light italic">Ritual.</span>
            </h2>
            <div className="flex gap-4 border-b border-espresso/10 pb-4 max-w-md group focus-within:border-espresso transition-colors duration-500">
              <Input 
                placeholder="Email Address" 
                className="bg-transparent border-0 rounded-none p-0 h-10 text-espresso placeholder:text-espresso/20 focus-visible:ring-0 font-sans text-xs tracking-widest uppercase"
              />
              <Button variant="ghost" size="icon" className="text-espresso opacity-40 hover:opacity-100 hover:bg-transparent">
                <ArrowRight size={18} />
              </Button>
            </div>
            <p className="font-sans text-[10px] text-espresso/40 mt-6 tracking-wide uppercase">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-espresso">Explore</h4>
              <ul className="space-y-4">
                {['Menu', 'Story', 'Shop', 'Events'].map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[11px] uppercase tracking-[0.2em] text-espresso/60 hover:text-espresso transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-espresso">Legal</h4>
              <ul className="space-y-4">
                {['Privacy', 'Terms', 'Cookies', 'Licensing'].map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[11px] uppercase tracking-[0.2em] text-espresso/60 hover:text-espresso transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-espresso">Social</h4>
              <div className="flex gap-6">
                <Instagram size={18} className="text-espresso/40 hover:text-espresso transition-colors cursor-pointer" />
                <Twitter size={18} className="text-espresso/40 hover:text-espresso transition-colors cursor-pointer" />
                <Facebook size={18} className="text-espresso/40 hover:text-espresso transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-espresso/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-xl tracking-[0.2em] uppercase text-espresso">
            Cafe<span className="font-light opacity-50">Hero</span>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/30">
            © 2024 CafeHero Artisanal Ritual. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/30">New York</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/30">Tokyo</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-espresso/30">London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TastefulFooter;
