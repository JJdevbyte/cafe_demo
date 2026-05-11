import React from 'react';
import Image from 'next/image';

const BookingSection = () => {
  return (
    <section id="book" className="relative py-24 bg-espresso text-cream overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/cafe-bg.webp" 
          alt="Cafe Interior" 
          fill
          className="object-cover opacity-30"
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
                <label className="text-sm font-sans text-cream/80">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-cream focus:outline-none focus:border-sage transition-colors placeholder:text-cream/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-sans text-cream/80">Time</label>
                <input 
                  type="time" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-cream focus:outline-none focus:border-sage transition-colors placeholder:text-cream/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-sans text-cream/80">Guests</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-2 text-cream focus:outline-none focus:border-sage transition-colors appearance-none">
                <option value="1" className="bg-espresso text-cream">1 Person</option>
                <option value="2" className="bg-espresso text-cream">2 People</option>
                <option value="3" className="bg-espresso text-cream">3 People</option>
                <option value="4" className="bg-espresso text-cream">4+ People</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-sans text-cream/80">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-white/20 pb-2 text-cream focus:outline-none focus:border-sage transition-colors placeholder:text-cream/30"
              />
            </div>

            <button 
              type="button"
              className="mt-4 px-8 py-4 bg-sage text-cream font-sans font-medium tracking-wider uppercase rounded-full hover:bg-sage/80 transition-all shadow-lg w-full md:w-auto self-start"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
