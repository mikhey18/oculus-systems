'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm text-amber-500 font-medium">{t.hero.systemOnline}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6 leading-tight">
            {t.hero.headline}
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subhead}
          </p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {t.hero.cta}
          </motion.button>

          {/* Key features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          >
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-amber-500 mb-3" />
              <p className="text-sm text-slate-400">{t.hero.features.totalPrivacy}</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-amber-500 mb-3" />
              <p className="text-sm text-slate-400">{t.hero.features.evidenceQuality}</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-amber-500 mb-3" />
              <p className="text-sm text-slate-400">{t.hero.features.worksOffline}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
