import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BookingSection = () => {
  return (
    <section id="book" className="relative py-24 bg-espresso text-cream overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/cafe-bg.webp" 
          alt="Cafe Interior" 
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-sm font-sans tracking-widest text-sage uppercase">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">
            Reserve Your <br />
            <span className="italic text-sage/90">Experience</span>
          </h3>
          <p className="text-lg font-sans text-cream/70 max-w-md">
            Whether it's a quiet morning coffee or a weekend brunch with friends, 
            secure your table and let us take care of the rest.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-cream/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
          <form className="space-y-6 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-cream/80">Date</Label>
                <Input 
                  id="date"
                  type="date" 
                  className="bg-transparent border-white/20 text-cream focus:border-sage transition-colors h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-cream/80">Time</Label>
                <Input 
                  id="time"
                  type="time" 
                  className="bg-transparent border-white/20 text-cream focus:border-sage transition-colors h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-cream/80">Guests</Label>
              <Select>
                <SelectTrigger className="bg-transparent border-white/20 text-cream focus:border-sage h-11">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent className="bg-espresso text-cream border-white/10">
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-cream/80">Name</Label>
              <Input 
                id="name"
                type="text" 
                placeholder="John Doe"
                className="bg-transparent border-white/20 text-cream focus:border-sage transition-colors h-11 placeholder:text-cream/30"
              />
            </div>

            <Button 
              type="button"
              className="mt-4 py-6 bg-sage text-cream font-sans font-medium tracking-wider uppercase rounded-full hover:bg-sage/80 transition-all shadow-lg w-full md:w-auto self-start text-base px-10"
            >
              Confirm Reservation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
