"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { transitions } from '@/lib/transitions';

const StorySection = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: transitions.cinematic 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ...transitions.cinematic, duration: 1.6 }
    }
  };

  return (
    <section id="story" className="py-32 bg-cream relative overflow-hidden text-navy">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.span variants={textVariants} className="font-sans text-[10px] uppercase tracking-[0.5em] text-espresso/60 block">
              Our Philosophy
            </motion.span>
            
            <motion.h2 variants={textVariants} className="font-serif text-5xl md:text-6xl text-navy tracking-tight text-balance leading-[1.1]">
              The Architecture <br />
              of <span className="font-light italic text-brass">Taste.</span>
            </motion.h2>

            <motion.p variants={textVariants} className="font-sans text-sm text-navy/70 leading-relaxed tracking-wide text-pretty max-w-md">
              We approach coffee as a structural medium. By stripping away the unnecessary and focusing purely on the essential elements of extraction, origin, and presentation, we create an experience that is both minimalist and profound.
            </motion.p>
            
            <motion.p variants={textVariants} className="font-sans text-sm text-navy/70 leading-relaxed tracking-wide text-pretty max-w-md">
              Every bean is sourced with strict adherence to sustainable design practices, ensuring the foundation of your cup is as solid as the flavor it delivers.
            </motion.p>
          </motion.div>

          {/* Right Image Block (Asymmetric) */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px] w-full lg:-mr-32 mt-12 lg:mt-0">
            <motion.div 
              className="absolute inset-0 z-0 bg-espresso/5 translate-x-8 translate-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.div 
              className="relative w-full h-full overflow-hidden shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <Image
                src="/hero-cinematic.png" // Reusing the high-quality asset or we can generate one later
                fill
                alt="Minimalist coffee extraction process"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;
