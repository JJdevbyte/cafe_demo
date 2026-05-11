"use client";

import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const CafeHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Stop-Motion Engine Logic
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalFrames = 10;

    // 4. The Canvas Preloader Logic (Zero-Padded Files)
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, '0');
      img.src = `/cafe-sequence/frame_${paddedIndex}.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages[i - 1] = img;
    }
  }, []);

  // 5. The Stop-Motion Engine Render Loop
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const renderLoop = () => {
      // Clear and Draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentImg = images[frameIndex];
      
      // Maintain aspect ratio while drawing
      const scale = Math.min(canvas.width / currentImg.width, canvas.height / currentImg.height);
      const x = (canvas.width / 2) - (currentImg.width / 2) * scale;
      const y = (canvas.height / 2) - (currentImg.height / 2) * scale;
      ctx.drawImage(currentImg, x, y, currentImg.width * scale, currentImg.height * scale);

      // Timing Logic
      let delay = 400; // Standard frame hold
      
      if (frameIndex === 9) {
        delay = 2000; // Reset delay (empty plate)
        frameIndex = 0;
      } else {
        frameIndex++;
      }

      timeoutId = setTimeout(renderLoop, delay);
    };

    renderLoop();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoaded, images]);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FAF9F6]">
      {/* 2. Left Side (Content) */}
      <div className="flex flex-col justify-center p-10 md:p-20 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso leading-tight">
            Your Morning Ritual, <br />
            <span className="italic">Perfected.</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-sage/80 max-w-md">
            Step into a sanctuary where organic craftsmanship meets artisanal comfort. 
            Every cup is a masterpiece, every moment is yours.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button className="px-8 py-4 bg-espresso text-cream font-sans font-medium rounded-full hover:bg-espresso/90 transition-all shadow-lg">
            View Menu
          </button>
          <button className="px-8 py-4 border-2 border-espresso text-espresso font-sans font-medium rounded-full flex items-center gap-2 hover:bg-espresso hover:text-cream transition-all">
            <MapPin size={20} />
            Get Directions
          </button>
        </div>
      </div>

      {/* 3. Right Side (Canvas) */}
      <div className="flex items-center justify-center bg-[#FAF9F6] p-10">
        <canvas 
          ref={canvasRef}
          width={800}
          height={800}
          className="w-full max-w-lg mx-auto object-contain"
        />
        {!isLoaded && (
          <div className="absolute font-sans text-sage animate-pulse">
            Brewing perfection...
          </div>
        )}
      </div>
    </section>
  );
};

export default CafeHero;
