"use client";

import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

import { Button } from "@/components/ui/button";

const CafeHero = () => {
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery movement
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform coordinates into subtle movement and rotation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Cinematic Text Animation Variants
  const fadeUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FAF9F6] relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Background Decoration */}
      <motion.div 
        style={{ x: translateX, y: translateY }}
        className="absolute top-0 left-0 w-64 opacity-20 pointer-events-none transform -translate-x-1/3 -translate-y-1/3 rotate-45"
      >
        <img src="/botanical-branch.webp" alt="" className="w-full h-auto" />
      </motion.div>

      {/* Left Side (Content) */}
      <div className="flex flex-col justify-center p-10 md:p-20 space-y-8 relative z-20">
        <div className="space-y-4">
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-serif text-espresso leading-tight"
          >
            Your Morning Ritual, <br />
            <span className="italic">Perfected.</span>
          </motion.h1>
          <motion.p 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-lg md:text-xl font-sans text-sage/80 max-w-md"
          >
            Step into a sanctuary where organic craftsmanship meets artisanal comfort. 
            Every cup is a masterpiece, every moment is yours.
          </motion.p>
        </div>

        <motion.div 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-row items-center gap-4"
        >
          <Button className="px-8 py-7 bg-espresso text-cream font-sans font-medium rounded-full hover:bg-espresso/90 transition-all shadow-lg text-base">
            View Menu
          </Button>
          <Button variant="outline" className="px-8 py-7 border-2 border-espresso text-espresso font-sans font-medium rounded-full flex items-center gap-2 hover:bg-espresso hover:text-cream transition-all text-base">
            <MapPin size={20} />
            Get Directions
          </Button>
        </motion.div>
      </div>

      {/* Right Side (Crossfade Animation) */}
      <div className="flex items-center justify-center bg-[#FAF9F6] p-4 md:p-10 relative z-10">
        <motion.div 
          style={{ 
            x: translateX, 
            y: translateY,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='relative w-full max-w-2xl aspect-square mx-auto flex items-center justify-center'
        >
          {/* Container for images to handle fill prop correctly */}
          <div className="relative w-full h-full">
            {/* Base Layer (Empty State) */}
            <Image 
              src='/cafe-sequence/end.webp' 
              fill 
              alt='Empty plate' 
              className='object-contain' 
            />
            
            {/* Animated Layer (Full State) */}
            <motion.div 
              className='absolute inset-0 w-full h-full z-10'
              animate={{ opacity: [1, 1, 0, 0, 1] }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: 'easeInOut', 
                times: [0, 0.4, 0.5, 0.9, 1] 
              }}
            >
              <Image 
                src='/cafe-sequence/start.webp' 
                fill 
                alt='Fresh coffee and croissant' 
                className='object-contain' 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CafeHero;
