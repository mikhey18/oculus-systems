'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, HardDrive, Server, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SystemCalculator() {
  const { t } = useLanguage();
  const [cameras, setCameras] = useState(4);
  const [archiveDays, setArchiveDays] = useState(30);

  // Calculation: 1 Camera * 1 Day ≈ 40GB (4K H.265 estimate)
  const GB_PER_CAMERA_PER_DAY = 40;
  const totalGB = cameras * archiveDays * GB_PER_CAMERA_PER_DAY;
  const totalTB = totalGB / 1024;
  
  // Round up to nearest TB for recommendation
  const recommendedTB = Math.ceil(totalTB);
  
  // NVR channels: round up to nearest 4, 8, or 16 channel system
  const getNVRChannels = (numCameras: number) => {
    if (numCameras <= 4) return 4;
    if (numCameras <= 8) return 8;
    if (numCameras <= 16) return 16;
    return 16; // Max
  };
  
  const nvrChannels = getNVRChannels(cameras);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-lg mb-4">
            <Calculator className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-background/80 backdrop-blur-md border border-slate-800 rounded-lg p-6 sm:p-8 space-y-8"
        >
          {/* Number of Cameras Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-lg font-semibold text-slate-200">
                {t.calculator.camerasLabel}
              </label>
              <span className="text-2xl font-bold text-amber-500 font-mono tabular-nums">
              {cameras}
            </span>
            </div>
            <input
              type="range"
              min="1"
              max="16"
              value={cameras}
              onChange={(e) => setCameras(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer slider-amber"
              style={{
                background: `linear-gradient(to right, rgb(245, 158, 11) 0%, rgb(245, 158, 11) ${((cameras - 1) / 15) * 100}%, rgb(30, 41, 59) ${((cameras - 1) / 15) * 100}%, rgb(30, 41, 59) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>1</span>
              <span>16</span>
            </div>
          </div>

          {/* Archive Days Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-lg font-semibold text-slate-200">
                {t.calculator.archiveDaysLabel}
              </label>
              <span className="text-2xl font-bold text-amber-500 font-mono tabular-nums">
                {archiveDays}
              </span>
            </div>
            <input
              type="range"
              min="7"
              max="60"
              value={archiveDays}
              onChange={(e) => setArchiveDays(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer slider-amber"
              style={{
                background: `linear-gradient(to right, rgb(245, 158, 11) 0%, rgb(245, 158, 11) ${((archiveDays - 7) / 53) * 100}%, rgb(30, 41, 59) ${((archiveDays - 7) / 53) * 100}%, rgb(30, 41, 59) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>7 days</span>
              <span>60 days</span>
            </div>
          </div>

          {/* Calculation Display */}
          <div className="pt-6 border-t border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-background border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">{t.calculator.totalStorage}</div>
                <div className="text-2xl font-bold text-slate-200 font-mono">
                  {totalTB.toFixed(2)} TB
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  ({totalGB.toLocaleString()} GB)
                </div>
              </div>
              <div className="bg-background border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">{t.calculator.perCameraDay}</div>
                <div className="text-2xl font-bold text-slate-200 font-mono">
                  {GB_PER_CAMERA_PER_DAY} GB
                </div>
                <div className="text-xs text-slate-500 mt-1">4K H.265</div>
              </div>
              <div className="bg-background border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">{t.calculator.dailyTotal}</div>
                <div className="text-2xl font-bold text-slate-200 font-mono">
                  {(cameras * GB_PER_CAMERA_PER_DAY).toLocaleString()} GB
                </div>
                <div className="text-xs text-slate-500 mt-1">All cameras</div>
              </div>
            </div>

            {/* Recommendation Card */}
            <motion.div
              key={`${recommendedTB}-${nvrChannels}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/50 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-500 mb-2">
                    {t.calculator.recommended}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-amber-500" />
                      <span className="text-slate-200 font-mono text-lg">
                        {recommendedTB}{t.calculator.hardDrive}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-amber-500" />
                      <span className="text-slate-200 font-mono text-lg">
                        {nvrChannels} {t.calculator.channelNVR}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="w-full mt-6 flex items-center justify-center gap-3 px-6 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
            >
              <span>{t.calculator.requestQuote}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-slate-500">
            {t.calculator.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
