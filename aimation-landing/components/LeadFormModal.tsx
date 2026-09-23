'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
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
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [submitError, setSubmitError] = useState(false);

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
    setSubmitError(false);

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
        process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/holgerpeschke-hp/erstgespraech'
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
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-[#071013]/80 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[60] w-[calc(100%-2rem)] max-w-2xl max-h-[90dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain bg-surface rounded-2xl border border-line shadow-2xl"
          aria-label={t('ariaLabel')}
          onOpenAutoFocus={() => {
            returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const opener = returnFocusRef.current;
            if (opener?.isConnected && opener !== document.body) opener.focus();
            else document.querySelector<HTMLElement>('button[aria-controls="mobile-navigation"]')?.focus();
          }}
        >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-raised hover:bg-raised transition-colors"
              aria-label={t('closeAriaLabel')}
            >
              <X className="w-5 h-5 text-ink" />
            </button>

            {/* Form */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <Dialog.Title className="text-3xl md:text-4xl font-bold text-ink font-heading mb-3 pr-6">
                  {t('headline')}{' '}
                  <span className="text-magenta-light">{t('headlineHighlight')}</span>
                </Dialog.Title>
                <Dialog.Description className="text-muted font-body">
                  {t('subline')}
                </Dialog.Description>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t('nameLabel')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-ink bg-surface"
                    placeholder={t('namePlaceholder')}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1 text-sm text-red-300">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t('emailLabel')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-ink bg-surface"
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1 text-sm text-red-300">{errors.email.message}</p>
                  )}
                </div>

                {/* Firma */}
                <div>
                  <label
                    htmlFor="firma"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t('firmaLabel')}
                  </label>
                  <input
                    id="firma"
                    type="text"
                    {...register('firma')}
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-ink bg-surface"
                    placeholder={t('firmaPlaceholder')}
                  />
                  {errors.firma && (
                    <p role="alert" className="mt-1 text-sm text-red-300">{errors.firma.message}</p>
                  )}
                </div>

                {/* Unternehmensgröße & Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="unternehmensgroesse"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      {t('unternehmensgroesseLabel')}
                    </label>
                    <select
                      id="unternehmensgroesse"
                      {...register('unternehmensgroesse')}
                      className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all bg-surface text-ink"
                    >
                      <option value="">{t('unternehmensgroessePlaceholder')}</option>
                      <option value="10-50">{t('sizeOption1')}</option>
                      <option value="50-250">{t('sizeOption2')}</option>
                      <option value="250-1000">{t('sizeOption3')}</option>
                      <option value="1000+">{t('sizeOption4')}</option>
                    </select>
                    {errors.unternehmensgroesse && (
                      <p role="alert" className="mt-1 text-sm text-red-300">
                        {errors.unternehmensgroesse.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      {t('telefonLabel')}
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      {...register('telefon')}
                      className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-ink bg-surface"
                      placeholder={t('telefonPlaceholder')}
                    />
                  </div>
                </div>

                {/* Herausforderung */}
                <div>
                  <label
                    htmlFor="herausforderung"
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t('herausforderungLabel')}
                  </label>
                  <textarea
                    id="herausforderung"
                    {...register('herausforderung')}
                    rows={4}
                    className="w-full px-4 py-3 border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all resize-none text-ink bg-surface"
                    placeholder={t('herausforderungPlaceholder')}
                  />
                  {errors.herausforderung && (
                    <p role="alert" className="mt-1 text-sm text-red-300">
                      {errors.herausforderung.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-dim">
                    {t('herausforderungHint')}
                  </p>
                </div>

                {/* Datenschutz */}
                <div className="flex items-start">
                  <input
                    id="datenschutz"
                    type="checkbox"
                    {...register('datenschutz')}
                    className="mt-1 h-5 w-5 border-line rounded text-magenta-light focus:ring-[#f90093]"
                  />
                  <label htmlFor="datenschutz" className="ml-3 text-sm text-muted">
                    {t('datenschutzLabel')}{' '}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-magenta-light underline hover:no-underline"
                    >
                      {t('datenschutzLink')}
                    </a>{' '}
                    {t('datenschutzEnd')}
                  </label>
                </div>
                {errors.datenschutz && (
                  <p role="alert" className="mt-1 text-sm text-red-300">{errors.datenschutz.message}</p>
                )}

                {submitError && <p role="alert" className="text-sm text-red-300">{t('errorGeneric')}</p>}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-[#071013] rounded-lg font-heading font-semibold text-lg hover:shadow-[0_0_30px_rgba(249,0,147,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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

                <p className="text-xs text-center text-dim">
                  {t('submitNote')}
                </p>
              </form>
            </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
