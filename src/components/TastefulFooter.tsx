"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const TastefulFooter = () => {
  return (
    <footer className="bg-navy pt-32 pb-12 relative overflow-hidden border-t border-brass/10">
      {/* Structural Grid Line */}
      <div className="absolute left-[50%] top-0 w-[1px] h-full bg-brass/5 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-32">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/60 block mb-6">
              Stay Connected
            </span>
            <h2 className="font-serif text-5xl text-vanilla tracking-tight mb-12 text-balance">
              Join the <span className="font-light italic text-brass">Ritual.</span>
            </h2>
            <div className="flex gap-4 border-b border-brass/20 pb-4 max-w-md group focus-within:border-brass transition-colors duration-500">
              <Input 
                placeholder="Email Address…" 
                spellCheck={false}
                type="email"
                className="bg-transparent border-0 rounded-none p-0 h-10 text-vanilla placeholder:text-vanilla/30 focus-visible:ring-0 font-sans text-xs tracking-widest uppercase"
              />
              <button className="text-brass opacity-40 hover:opacity-100 transition-opacity p-2" aria-label="Subscribe to newsletter">
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="font-sans text-[10px] text-vanilla/40 mt-6 tracking-wide uppercase">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brass opacity-80">Explore</h4>
              <ul className="space-y-4">
                {['Menu', 'Story', 'Shop', 'Events'].map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[11px] uppercase tracking-[0.2em] text-vanilla/50 hover:text-brass transition-all duration-300 focus-visible:ring-1 focus-visible:ring-brass/20 outline-none block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brass opacity-80">Legal</h4>
              <ul className="space-y-4">
                {['Privacy', 'Terms', 'Cookies', 'Licensing'].map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[11px] uppercase tracking-[0.2em] text-vanilla/50 hover:text-brass transition-all duration-300 focus-visible:ring-1 focus-visible:ring-brass/20 outline-none block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 col-span-1">
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brass opacity-80">Social</h4>
              <div className="flex gap-5 pt-2">
                <a href="#" className="group/social" aria-label="Instagram">
                  <Instagram size={18} className="text-vanilla/40 group-hover/social:text-brass group-hover/social:-translate-y-0.5 transition-all duration-300 cursor-pointer" />
                </a>
                <a href="#" className="group/social" aria-label="Twitter">
                  <Twitter size={18} className="text-vanilla/40 group-hover/social:text-brass group-hover/social:-translate-y-0.5 transition-all duration-300 cursor-pointer" />
                </a>
                <a href="#" className="group/social" aria-label="Facebook">
                  <Facebook size={18} className="text-vanilla/40 group-hover/social:text-brass group-hover/social:-translate-y-0.5 transition-all duration-300 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brass/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-xl tracking-[0.2em] uppercase text-vanilla cursor-default">
            Cafe<span className="font-light opacity-50 text-brass">Hero</span>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-vanilla/20">
            © 2024 CafeHero Artisanal Ritual. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-vanilla/30">New&nbsp;York</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-vanilla/30">Tokyo</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-vanilla/30">London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TastefulFooter;
