"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

const CafeHero = () => {
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
  };

  return (
    <section 
      className="relative min-h-screen bg-cream overflow-hidden flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Structural Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-[10%] top-0 w-[1px] h-full bg-espresso" />
        <div className="absolute left-[50%] top-0 w-[1px] h-full bg-espresso" />
        <div className="absolute left-[90%] top-0 w-[1px] h-full bg-espresso" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-espresso" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-espresso" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography as Art */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={fadeInUp} className="overflow-hidden">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-espresso/40 block mb-4">
                Est. 2024 — Artisanal Ritual
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-espresso tracking-tight"
            >
              COFFEE<br />
              <span className="font-light italic ml-[0.5em]">AS ART.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="max-w-md font-sans text-sm leading-relaxed text-espresso/60 mt-8 tracking-wide"
            >
              We treat every brew as an architectural project. Minimalist in form, maximum in flavor. Experience the curated ritual of the perfect cup.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6 mt-12">
              <Button className="h-14 px-10 rounded-none bg-espresso text-cream hover:bg-espresso/90 transition-all duration-500 font-sans text-[10px] uppercase tracking-[0.3em] flex gap-3 group">
                Discover Menu
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="ghost" className="h-14 px-10 rounded-none border border-espresso/10 font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-espresso/5">
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: The Asset */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={{ 
              x: translateX, 
              y: translateY,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-espresso/5 shadow-2xl">
              <Image 
                src="/hero-cinematic.png" 
                fill 
                alt="Architectural Coffee Ritual" 
                className="object-cover scale-110 hover:scale-100 transition-transform duration-2000 ease-out"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-40" />
            </div>

            {/* Floating Detail */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-cream p-6 border border-espresso/5 shadow-xl hidden md:block"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="font-serif text-xl italic text-espresso">The Obsidian Brew</div>
              <div className="font-sans text-[8px] uppercase tracking-[0.2em] text-espresso/40 mt-1">Limited Batch — Seasonal</div>
            </motion.div>
          </motion.div>

          {/* Background Decorative Line */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border border-espresso/5 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Bottom Marquee (Minimalist) */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none">
        <div className="inline-block animate-marquee font-serif text-[12vw] uppercase tracking-[0.2em] text-espresso">
          Crafted Ritual &nbsp;•&nbsp; Pure Extraction &nbsp;•&nbsp; Architectural Aroma &nbsp;•&nbsp;
        </div>
        <div className="inline-block animate-marquee font-serif text-[12vw] uppercase tracking-[0.2em] text-espresso">
          Crafted Ritual &nbsp;•&nbsp; Pure Extraction &nbsp;•&nbsp; Architectural Aroma &nbsp;•&nbsp;
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
