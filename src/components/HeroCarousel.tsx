'use client';

import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  {
    url: '/hero-trailer-1.jpg',
    alt: 'White van towing an enclosed box trailer on a scenic New Zealand mountain road',
  },
  {
    url: '/hero-trailer-2.jpg',
    alt: 'Silver SUV towing a flatbed utility trailer through the New Zealand Southern Alps',
  },
  {
    url: '/hero-trailer-3.jpg',
    alt: 'Ford Transit van towing a box trailer on a winding New Zealand alpine highway',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, goToSlide]);

  return (
    <>
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
          }}
          aria-hidden={currentSlide !== index}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-amber-400'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
