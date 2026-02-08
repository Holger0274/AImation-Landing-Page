'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';

const leadFormSchema = z.object({
  vorname: z.string().min(2, 'Vorname ist erforderlich'),
  nachname: z.string().min(2, 'Nachname ist erforderlich'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  firma: z.string().min(2, 'Firmenname ist erforderlich'),
  unternehmensgroesse: z.enum(['10-50', '50-250', '250-1000', '1000+']),
  telefon: z.string().optional(),
  herausforderung: z
    .string()
    .min(10, 'Bitte beschreiben Sie kurz Ihre Herausforderung (min. 10 Zeichen)')
    .max(500, 'Maximal 500 Zeichen'),
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
      calendlyUrl.searchParams.append('name', `${data.vorname} ${data.nachname}`);
      calendlyUrl.searchParams.append('email', data.email);
      if (data.telefon) {
        calendlyUrl.searchParams.append('a1', data.telefon); // Custom field
      }

      // Open Calendly in same tab
      window.location.href = calendlyUrl.toString();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
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
          {/* Background overlay with image */}
          <div className="absolute inset-0 bg-[#071013]/80 backdrop-blur-sm">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url(/images/form-background-consultation.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5 text-[#071013]" />
            </button>

            {/* Form */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#071013] font-heading mb-3">
                  Ihr Weg zum{' '}
                  <span className="text-[#f90093]">KI-Erstgespräch</span>
                </h2>
                <p className="text-gray-600 font-body">
                  Füllen Sie das Formular aus und buchen Sie direkt Ihren kostenlosen
                  Beratungstermin.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vorname"
                      className="block text-sm font-medium text-[#071013] mb-2"
                    >
                      Vorname *
                    </label>
                    <input
                      id="vorname"
                      type="text"
                      {...register('vorname')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                      placeholder="Max"
                    />
                    {errors.vorname && (
                      <p className="mt-1 text-sm text-red-600">{errors.vorname.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="nachname"
                      className="block text-sm font-medium text-[#071013] mb-2"
                    >
                      Nachname *
                    </label>
                    <input
                      id="nachname"
                      type="text"
                      {...register('nachname')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                      placeholder="Mustermann"
                    />
                    {errors.nachname && (
                      <p className="mt-1 text-sm text-red-600">{errors.nachname.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    E-Mail-Adresse *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                    placeholder="max.mustermann@firma.de"
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
                    Firmenname *
                  </label>
                  <input
                    id="firma"
                    type="text"
                    {...register('firma')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                    placeholder="Musterfirma GmbH"
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
                      Unternehmensgröße *
                    </label>
                    <select
                      id="unternehmensgroesse"
                      {...register('unternehmensgroesse')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all bg-white text-[#071013]"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="10-50">10-50 Mitarbeiter</option>
                      <option value="50-250">50-250 Mitarbeiter</option>
                      <option value="250-1000">250-1000 Mitarbeiter</option>
                      <option value="1000+">1000+ Mitarbeiter</option>
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
                      Telefon (optional)
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      {...register('telefon')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all text-[#071013] bg-white"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                {/* Herausforderung */}
                <div>
                  <label
                    htmlFor="herausforderung"
                    className="block text-sm font-medium text-[#071013] mb-2"
                  >
                    Ihre größte Herausforderung *
                  </label>
                  <textarea
                    id="herausforderung"
                    {...register('herausforderung')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f90093] focus:border-transparent transition-all resize-none text-[#071013] bg-white"
                    placeholder="Beschreiben Sie kurz, wobei KI Ihnen helfen könnte (z.B. 'Zu viele manuelle Prozesse in der Auftragsabwicklung' oder 'Wir wollen AI einsetzen, wissen aber nicht wo anfangen')..."
                  />
                  {errors.herausforderung && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.herausforderung.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {register('herausforderung').name && 'Min. 10 Zeichen, max. 500 Zeichen'}
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
                    Ich habe die{' '}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f90093] underline hover:no-underline"
                    >
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
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
                      Wird gesendet...
                    </>
                  ) : (
                    'Termin jetzt buchen →'
                  )}
                </button>

                <p className="text-xs text-center text-gray-500">
                  Nach dem Absenden werden Sie direkt zu unserem Kalender weitergeleitet.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
