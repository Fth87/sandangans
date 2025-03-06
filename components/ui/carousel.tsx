'use client';

import type React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type CarouselProps = {
  items: React.ReactNode[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
};

export const Carousel = ({ items, className, autoplay = true, interval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1 === items.length ? 0 : prevIndex + 1));
  }, [items.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay && !isPaused) {
      const timer = setTimeout(() => {
        handleNext();
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [autoplay, interval, isPaused, handleNext]);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className={cn('relative overflow-hidden', className)} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'} animate="visible" exit="exit" className=" w-full">
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={handlePrevious} className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:bg-white" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button onClick={handleNext} className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:bg-white" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
        {items.map((_, index) => (
          <button key={index} onClick={() => handleDotClick(index)} className={`h-2.5 w-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export const CarouselContent = ({ children }: { children: React.ReactNode }) => <div className="flex flex-col items-center justify-center h-full">{children}</div>;

export const CarouselItem = ({ children }: { children: React.ReactNode }) => <div className="w-full">{children}</div>;

export const CarouselPrevious = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="absolute top-1/2 left-4 -translate-y-1/2">
    Previous
  </button>
);

export const CarouselNext = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="absolute top-1/2 right-4 -translate-y-1/2">
    Next
  </button>
);
