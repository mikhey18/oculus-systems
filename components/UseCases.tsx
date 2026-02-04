'use client';

import { motion } from 'framer-motion';
import { Home, Building2, DoorOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Home, Building2, DoorOpen];

export default function UseCases() {
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
            {t.useCases.title}
          </h2>
          <p className="text-xl text-slate-400">
            {t.useCases.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.useCases.cases.map((useCase, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background/80 backdrop-blur-md border border-slate-800 rounded-lg p-6 sm:p-8 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
