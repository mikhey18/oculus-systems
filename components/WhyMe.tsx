'use client';

import { motion } from 'framer-motion';
import { Cable, Smartphone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Cable, Smartphone, ShieldCheck];

export default function WhyMe() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            {t.whyMe.title}
          </h2>
          <p className="text-xl sm:text-2xl text-amber-500 font-medium">
            {t.whyMe.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.whyMe.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background/80 backdrop-blur-md border border-slate-800 rounded-lg p-6 sm:p-8 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
