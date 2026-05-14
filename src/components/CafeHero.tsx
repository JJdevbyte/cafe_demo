"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion, Variants } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';
import { transitions } from "@/lib/transitions"; // I'll create this file next

const CafeHero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: transitions.cinematic
    },
  };

  const imageVariants: Variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        ...transitions.cinematic,
        duration: 1.8,
        delay: 0.4 
      } 
    },
  };

  return (
    <section 
      className="relative min-h-screen bg-navy overflow-hidden flex flex-col justify-center select-none"
      onMouseMove={handleMouseMove}
      aria-labelledby="hero-heading"
    >
      {/* Cinematic Lighting & Floating Blobs (Uiverse stupid-mole-90) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brass/10 rounded-full blur-[120px] animate-blob-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-espresso-rich/20 rounded-full blur-[100px] animate-blob-bounce-delayed" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,154,95,0.05),transparent_70%)]" />
      </div>

      <style jsx global>{`
        @keyframes blob-bounce {
          0% { transform: translate(-20%, -20%) scale(1); }
          25% { transform: translate(20%, -10%) scale(1.1); }
          50% { transform: translate(10%, 20%) scale(0.9); }
          75% { transform: translate(-10%, 10%) scale(1.05); }
          100% { transform: translate(-20%, -20%) scale(1); }
        }
        .animate-blob-bounce {
          animation: blob-bounce 25s infinite ease-in-out;
        }
        .animate-blob-bounce-delayed {
          animation: blob-bounce 30s infinite ease-in-out reverse;
          animation-delay: -5s;
        }
      `}</style>

      {/* Structural Grid Lines (Decorative) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]" aria-hidden="true">
        <div className="absolute left-[10%] top-0 w-[1px] h-full bg-brass/20" />
        <div className="absolute left-[50%] top-0 w-[1px] h-full bg-brass/20" />
        <div className="absolute left-[90%] top-0 w-[1px] h-full bg-brass/20" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-brass/20" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-brass/20" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography as Art */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-12 relative z-30"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.div variants={itemVariants} className="overflow-hidden">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brass/60 block mb-4">
                Est. 2024 — Artisanal Ritual
              </span>
            </motion.div>

            <motion.h1 
              id="hero-heading"
              variants={itemVariants}
              className="font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-vanilla tracking-tight"
            >
              COFFEE<br />
              <span className="font-light italic ml-[0.5em] text-brass">AS ART.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-md font-sans text-sm leading-relaxed text-vanilla/70 mt-8 tracking-wide text-pretty"
            >
              We treat every brew as an architectural project. Minimalist in form, maximum in flavor. Experience the curated ritual of the perfect cup.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6 mt-12">
              <Button className="h-14 px-10 rounded-none bg-brass text-navy hover:bg-brass/90 transition-all duration-500 font-sans text-[10px] uppercase tracking-[0.3em] flex gap-3 group focus-visible:ring-1 focus-visible:ring-brass shadow-[0_4px_20px_rgba(196,154,95,0.15)] hover:shadow-[0_8px_30px_rgba(196,154,95,0.25)]">
                Discover Menu
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button variant="ghost" className="h-14 px-10 rounded-none border border-brass/10 text-vanilla font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-brass/5 hover:border-brass/30 bg-navy/40 backdrop-blur-md focus-visible:ring-1 focus-visible:ring-brass/40 shadow-lg transition-all duration-500">
                Our Story
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: The Asset */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={shouldReduceMotion ? {} : { 
              x: translateX, 
              y: translateY,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-brass/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] group bg-charcoal">
              <Image 
                src="/hero-cinematic.png" 
                fill 
                alt="Close-up of a perfectly extracted espresso shot in a minimalist glass, showcasing architectural layers and crema." 
                className="object-cover scale-110 group-hover:scale-105 transition-transform duration-[3s] ease-out"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Detail */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-espresso-rich p-6 border border-brass/30 shadow-2xl hidden md:block"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            >
              <div className="font-serif text-xl italic text-vanilla">The Obsidian Brew</div>
              <div className="font-sans text-[8px] uppercase tracking-[0.2em] text-brass/60 mt-1">Limited Batch — Seasonal</div>
            </motion.div>
          </motion.div>

          {/* Background Decorative Line */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border border-brass/10 rounded-full pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom Marquee (Decorative) */}
      <div className="absolute bottom-8 md:bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-40 pointer-events-none select-none z-0 drop-shadow-2xl" aria-hidden="true">
        <div className="inline-block animate-marquee font-serif text-[15vw] md:text-[12vw] uppercase tracking-[0.2em] text-brass/30">
          Crafted Ritual &nbsp;•&nbsp; Pure Extraction &nbsp;•&nbsp; Architectural Aroma &nbsp;•&nbsp;
        </div>
        <div className="inline-block animate-marquee font-serif text-[15vw] md:text-[12vw] uppercase tracking-[0.2em] text-brass/30">
          Crafted Ritual &nbsp;•&nbsp; Pure Extraction &nbsp;•&nbsp; Architectural Aroma &nbsp;•&nbsp;
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
