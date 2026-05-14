'use client';

import { useRef, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to animations
  // Expand phase: 0% to 50% of the scroll
  const expansionProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Calculations for expanding media
  const mediaWidth = useTransform(
    expansionProgress,
    [0, 1],
    [300, isMobile ? 950 : 1550]
  );
  
  const mediaHeight = useTransform(
    expansionProgress,
    [0, 1],
    [400, isMobile ? 600 : 800]
  );

  const textTranslateX = useTransform(
    expansionProgress,
    [0, 1],
    [0, isMobile ? 180 : 150]
  );

  const bgOpacity = useTransform(expansionProgress, [0, 1], [1, 0]);
  const overlayOpacity = useTransform(expansionProgress, [0, 1], [0.7, 0.4]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={containerRef}
      // Make the container tall so we have room to scroll and animate
      className='relative h-[250vh] bg-charcoal'
    >
      {/* Sticky wrapper stays pinned to viewport while we scroll through the 250vh container */}
      <div className='sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center'>
        
        {/* Background Image that fades out */}
        <motion.div
          className='absolute inset-0 z-0 h-full'
          style={{ opacity: bgOpacity }}
        >
          <Image
            src={bgImageSrc}
            alt='Background'
            fill
            className='object-cover object-center'
            priority
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>

        <div className='container mx-auto flex flex-col items-center justify-start relative z-10 h-full'>
          <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
            
            {/* The expanding media container */}
            <motion.div
              className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
              style={{
                width: mediaWidth,
                height: mediaHeight,
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              {mediaType === 'video' ? (
                <div className='relative w-full h-full pointer-events-none'>
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover'
                  />
                  <motion.div
                    className='absolute inset-0 bg-black'
                    style={{ opacity: overlayOpacity }}
                  />
                </div>
              ) : (
                <div className='relative w-full h-full'>
                  <Image
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    fill
                    className='object-cover'
                  />
                  <motion.div
                    className='absolute inset-0 bg-black'
                    style={{ opacity: overlayOpacity }}
                  />
                </div>
              )}

              {/* Text inside the expanding media */}
              <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
                {date && (
                  <motion.p
                    className='text-2xl text-vanilla mb-4'
                    style={{ x: useTransform(textTranslateX, v => -v + "vw") }}
                  >
                    {date}
                  </motion.p>
                )}
                {scrollToExpand && (
                  <motion.p
                    className='text-brass font-medium text-center uppercase tracking-widest text-[10px] mt-4'
                    style={{ x: useTransform(textTranslateX, v => v + "vw") }}
                  >
                    {scrollToExpand}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Split Title */}
            <div
              className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col pointer-events-none ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className='text-4xl md:text-6xl lg:text-8xl font-serif text-vanilla'
                style={{ x: useTransform(textTranslateX, v => -v + "vw") }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className='text-4xl md:text-6xl lg:text-8xl font-serif text-center italic font-light text-brass'
                style={{ x: useTransform(textTranslateX, v => v + "vw") }}
              >
                {restOfTitle}
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* 
        Content below the sticky hero. 
        This will scroll into view naturally after the user scrolls past the 250vh container.
      */}
      <div className="relative z-20 bg-charcoal w-full">
        <div className="container mx-auto px-8 md:px-16 py-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
