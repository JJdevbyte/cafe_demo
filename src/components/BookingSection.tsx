"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section id="book" className="py-32 bg-espresso relative overflow-hidden">
      {/* Decorative Structural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" aria-hidden="true">
        <div className="absolute left-[20%] top-0 w-[1px] h-full bg-cream" />
        <div className="absolute left-[80%] top-0 w-[1px] h-full bg-cream" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-cream/40 block mb-6">
              Reservations
            </span>
            <h2 className="font-serif text-7xl text-cream tracking-tight mb-8 text-balance">
              Secure Your <span className="font-light italic">Sanctuary.</span>
            </h2>
            <p className="font-sans text-sm text-cream/60 leading-relaxed tracking-wide max-w-sm text-pretty">
              We offer a limited number of tables to ensure an intimate and architectural atmosphere for every guest.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 p-12 lg:p-16"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g. John Doe…" 
                    spellCheck={false}
                    className="h-14 bg-transparent border-0 border-b border-cream/20 rounded-none text-cream placeholder:text-cream/20 focus-visible:ring-0 focus-visible:border-cream transition-colors font-serif text-xl" 
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="date" className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">Date</Label>
                  <Input id="date" type="date" className="h-14 bg-transparent border-0 border-b border-cream/20 rounded-none text-cream placeholder:text-cream/20 focus-visible:ring-0 focus-visible:border-cream transition-colors font-serif text-xl" />
                </div>

                <div className="space-y-3">
                  <Label className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">Guests</Label>
                  <Select>
                    <SelectTrigger className="h-14 bg-transparent border-0 border-b border-cream/20 rounded-none text-cream focus:ring-0 focus:border-cream transition-colors font-serif text-xl">
                      <SelectValue placeholder="Select amount…" />
                    </SelectTrigger>
                    <SelectContent className="bg-espresso border-cream/10 text-cream rounded-none">
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="6+">6+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/40">Time</Label>
                  <Select>
                    <SelectTrigger className="h-14 bg-transparent border-0 border-b border-cream/20 rounded-none text-cream focus:ring-0 focus:border-cream transition-colors font-serif text-xl">
                      <SelectValue placeholder="Select time…" />
                    </SelectTrigger>
                    <SelectContent className="bg-espresso border-cream/10 text-cream rounded-none">
                      <SelectItem value="morning">Morning (8:00 – 11:00)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00 – 15:00)</SelectItem>
                      <SelectItem value="evening">Evening (16:00 – 20:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 pt-8">
                  <Button className="w-full h-16 bg-cream text-espresso hover:bg-cream/90 transition-all duration-500 rounded-none font-sans text-xs uppercase tracking-[0.4em] focus-visible:ring-1 focus-visible:ring-cream">
                    Confirm Reservation
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
