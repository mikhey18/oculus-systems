'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Truth() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            {t.truth.title}
          </h2>
          <p className="text-xl text-slate-400">
            {t.truth.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cloud Cameras */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background/80 backdrop-blur-md border border-red-500/30 rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              {t.truth.cloud.title}
            </h3>
            <ul className="space-y-4">
              {t.truth.cloud.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Oculus NVR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background/80 backdrop-blur-md border border-amber-500/50 rounded-lg p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
            
            <h3 className="text-2xl font-bold text-amber-500 mb-6 relative z-10">
              {t.truth.nvr.title}
            </h3>
            <ul className="space-y-4 relative z-10">
              {t.truth.nvr.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
