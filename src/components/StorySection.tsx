"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { transitions } from '@/lib/transitions';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const StorySection = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: transitions.cinematic 
    }
  };

  return (
    <div id="story" className="bg-charcoal text-vanilla">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1280&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop"
        title="Essential Extraction"
        scrollToExpand="Scroll to Expand"
        textBlend={false}
      >
        <div className="max-w-4xl mx-auto text-center py-24">
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.span variants={textVariants} className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/80 block">
              Our Philosophy
            </motion.span>
            
            <motion.h2 variants={textVariants} className="font-serif text-5xl md:text-7xl text-vanilla tracking-tight text-balance leading-[1.1]">
              The Architecture <br />
              of <span className="font-light italic text-brass">Taste.</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-3xl mx-auto mt-12">
              <motion.p variants={textVariants} className="font-sans text-sm md:text-base text-vanilla/70 leading-relaxed tracking-wide text-pretty flex-1 text-left">
                We approach coffee as a structural medium. By stripping away the unnecessary and focusing purely on the essential elements of extraction, origin, and presentation, we create an experience that is both minimalist and profound.
              </motion.p>
              
              <motion.p variants={textVariants} className="font-sans text-sm md:text-base text-vanilla/70 leading-relaxed tracking-wide text-pretty flex-1 text-left">
                Every bean is sourced with strict adherence to sustainable design practices, ensuring the foundation of your cup is as solid as the flavor it delivers.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default StorySection;
