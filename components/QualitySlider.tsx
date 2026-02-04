'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function QualitySlider() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            {t.qualitySlider.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.qualitySlider.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-full rounded-lg overflow-hidden border border-slate-800 shadow-2xl"
          ref={containerRef}
          onClick={handleContainerClick}
          style={{ touchAction: 'none' }}
        >
          {/* Bad Quality Image (Left) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=20&blur=5&grayscale=100"
              alt="Standard WiFi Camera - Blurry, grainy quality"
              className="w-full h-full object-cover"
              style={{ filter: 'blur(8px) grayscale(100%) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm sm:text-base font-medium backdrop-blur-sm">
                {t.qualitySlider.standardCameraLabel}
              </span>
            </div>
          </div>

          {/* Good Quality Image (Right) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=90"
              alt={t.qualitySlider.oculusSystem}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/60 to-transparent" />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-500 text-sm sm:text-base font-medium backdrop-blur-sm">
                {t.qualitySlider.oculusSystemLabel}
              </span>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 cursor-grab active:cursor-grabbing z-20 touch-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsDragging(true);
              const touch = e.touches[0];
              if (touch && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                setSliderPosition(percentage);
              }
            }}
          >
            {/* Glowing handle line */}
            <div className="absolute inset-0 w-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
            
            {/* Handle circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-full border-4 border-background shadow-lg shadow-amber-500/50 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <svg
                  className="w-full h-full text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <p className="text-xs sm:text-sm text-slate-400 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
              ← Drag to compare →
            </p>
          </div>
        </motion.div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="bg-background/80 backdrop-blur-md border border-red-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3">{t.qualitySlider.metrics.standard.title}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {t.qualitySlider.metrics.standard.points.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background/80 backdrop-blur-md border border-amber-500/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-500 mb-3">{t.qualitySlider.metrics.oculus.title}</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {t.qualitySlider.metrics.oculus.points.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
