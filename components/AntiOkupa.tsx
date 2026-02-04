'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, HardDrive, FileVideo, WifiOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const featureIcons = [Clock, HardDrive, FileVideo, WifiOff];

export default function AntiOkupa() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Warning badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber-500/10 border border-amber-500/50 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm text-amber-500 font-semibold uppercase tracking-wide">
              {t.antiOkupa.subhead}
            </span>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            {t.antiOkupa.headline}
          </h2>
        </motion.div>

        {/* Main content card with amber border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background/80 backdrop-blur-md border-2 border-amber-500/50 rounded-xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl shadow-amber-500/10"
        >
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Shield icon with 24/7 indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-amber-500/10 border-2 border-amber-500/50 rounded-full p-6">
                  <Shield className="w-12 h-12 text-amber-500" />
                </div>
                {/* 24/7 Recording indicator */}
                <div className="absolute -bottom-2 -right-2 bg-amber-500 border-2 border-background rounded-full p-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Core message */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 text-center leading-relaxed font-medium max-w-4xl mx-auto">
              {t.antiOkupa.coreMessage}
            </p>

            {/* Key points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {Object.values(t.antiOkupa.features).map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="bg-background/60 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5 text-center hover:border-amber-500/60 transition-all"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <p className="text-slate-300 font-medium text-sm sm:text-base">
                      {feature}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Legal note */}
            <div className="mt-10 pt-8 border-t border-amber-500/20">
              <p className="text-sm text-slate-400 text-center italic leading-relaxed">
                {t.antiOkupa.legalNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
