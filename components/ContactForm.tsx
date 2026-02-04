'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WHATSAPP_PHONE } from '@/constants/config';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          message: formData.message,
          type: 'Contact Form',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          location: '',
          message: '',
        });
        
        // Fallback to WhatsApp if configured
        if (WHATSAPP_PHONE) {
          setTimeout(() => {
            const whatsappMessage = `Hola! He enviado una consulta desde el sitio web.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nUbicación: ${formData.location}\n\nMensaje: ${formData.message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
        // Fallback to WhatsApp
        const whatsappMessage = `Hola! Estoy interesado en Oculus Systems.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nUbicación: ${formData.location}\n\nMensaje: ${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = WHATSAPP_PHONE
          ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
          : `https://wa.me/?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Fallback to WhatsApp
      const whatsappMessage = `Hola! Estoy interesado en Oculus Systems.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nUbicación: ${formData.location}\n\nMensaje: ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = WHATSAPP_PHONE
        ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
        : `https://wa.me/?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-400">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-background/80 backdrop-blur-md border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              {t.contact.fields.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              placeholder={t.contact.fields.name}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
              {t.contact.fields.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              placeholder={t.contact.fields.phone}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-300 mb-2">
              {t.contact.fields.location}
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              placeholder={t.contact.fields.location}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              {t.contact.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
              placeholder={t.contact.fields.message}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="px-4 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm">
              ¡Mensaje enviado! Te contactaremos pronto.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="px-4 py-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              Se abrió WhatsApp como alternativa. Por favor, envía tu mensaje allí.
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-semibold rounded-lg transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-[1.02] disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t.contact.submit}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
