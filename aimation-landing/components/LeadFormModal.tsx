'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const leadFormSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  firma: z.string().optional(),
  unternehmensgroesse: z.string().optional(),
  telefon: z.string().optional(),
  herausforderung: z.string().max(500, 'Maximal 500 Zeichen').optional(),
  datenschutz: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen',
  }),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations('leadForm');

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    try {
      // Send data to API route (which will forward to n8n webhook)
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Daten');
      }

      // Reset form
      reset();

      // Close modal
      onClose();

      // Redirect to Calendly with pre-filled data
      const calendlyUrl = new URL(
        process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-link'
      );
      calendlyUrl.searchParams.append('name', data.name);
      calendlyUrl.searchParams.append('email', data.email);
      if (data.telefon) {
        calendlyUrl.searchParams.append('a1', data.telefon); // Custom field
      }

      // Open Calendly in same tab
      window.location.href = calendlyUrl.toString();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('errorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Background overlay, neutral (kein Stockfoto) */}
          <div className="absolute inset-0 bg-[#071013]/80 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={t('ariaLabel')}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label={t('closeAriaLabel')}
            >
              <X className="w-5 h-5 text-[#071013]" />
            </button>

            {/* Form */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#071013] font-heading mb-3">
                  {t('headline')}{' '}
                  <span className="text-[#f90093]">{t('headlineHighlight')}</span>
                </h2>
                <p className="text-gray-600 font-body">
                  {t('subline')}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    {t('nameLabel')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                    placeholder={t('namePlaceholder')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    {t('emailLabel')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Firma */}
                <div>
                  <label
                    htmlFor="firma"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    {t('firmaLabel')}
                  </label>
                  <input
                    id="firma"
                    type="text"
                    {...register('firma')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                    placeholder={t('firmaPlaceholder')}
                  />
                  {errors.firma && (
                    <p className="mt-1 text-sm text-red-600">{errors.firma.message}</p>
                  )}
                </div>

                {/* Unternehmensgröße & Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="unternehmensgroesse"
                      className="block text-sm font-medium text-[#071013] mb-2"
                    >
                      {t('unternehmensgroesseLabel')}
                    </label>
                    <select
                      id="unternehmensgroesse"
                      {...register('unternehmensgroesse')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all bg-white text-[#071013]"
                    >
                      <option value="">{t('unternehmensgroessePlaceholder')}</option>
                      <option value="10-50">{t('sizeOption1')}</option>
                      <option value="50-250">{t('sizeOption2')}</option>
                      <option value="250-1000">{t('sizeOption3')}</option>
                      <option value="1000+">{t('sizeOption4')}</option>
                    </select>
                    {errors.unternehmensgroesse && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.unternehmensgroesse.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-[#071013] mb-2"
                    >
                      {t('telefonLabel')}
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      {...register('telefon')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                      placeholder={t('telefonPlaceholder')}
                    />
                  </div>
                </div>

                {/* Herausforderung */}
                <div>
                  <label
                    htmlFor="herausforderung"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    {t('herausforderungLabel')}
                  </label>
                  <textarea
                    id="herausforderung"
                    {...register('herausforderung')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all resize-none text-[#071013] bg-white"
                    placeholder={t('herausforderungPlaceholder')}
                  />
                  {errors.herausforderung && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.herausforderung.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {t('herausforderungHint')}
                  </p>
                </div>

                {/* Datenschutz */}
                <div className="flex items-start">
                  <input
                    id="datenschutz"
                    type="checkbox"
                    {...register('datenschutz')}
                    className="mt-1 h-5 w-5 border-gray-300 rounded text-[#f90093] focus:ring-[#f90093]"
                  />
                  <label htmlFor="datenschutz" className="ml-3 text-sm text-gray-600">
                    {t('datenschutzLabel')}{' '}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f90093] underline hover:no-underline"
                    >
                      {t('datenschutzLink')}
                    </a>{' '}
                    {t('datenschutzEnd')}
                  </label>
                </div>
                {errors.datenschutz && (
                  <p className="mt-1 text-sm text-red-600">{errors.datenschutz.message}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-white rounded-full font-heading font-semibold text-lg hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t('submitting')}
                    </>
                  ) : (
                    t('submitButton')
                  )}
                </button>

                <p className="text-xs text-center text-gray-500">
                  {t('submitNote')}
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
