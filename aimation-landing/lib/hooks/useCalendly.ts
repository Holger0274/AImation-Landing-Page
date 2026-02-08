'use client';

import { useCallback, useEffect, useState } from 'react';
import type { CalendlyPrefillData } from '@/lib/types/calendly';

interface UseCalendlyOptions {
  url?: string;
  onEventScheduled?: (event: { event: string; payload: any }) => void;
}

interface UseCalendlyReturn {
  openCalendly: (prefillData?: CalendlyPrefillData) => void;
  isCalendlyReady: boolean;
}

/**
 * Custom hook for integrating Calendly Popup Widget
 *
 * @param options - Configuration options
 * @param options.url - Calendly URL (defaults to env variable NEXT_PUBLIC_CALENDLY_URL)
 * @param options.onEventScheduled - Callback when user schedules an event
 *
 * @returns Object with openCalendly function and isCalendlyReady status
 *
 * @example
 * const { openCalendly, isCalendlyReady } = useCalendly({
 *   url: 'https://calendly.com/your-username/30min',
 *   onEventScheduled: (event) => console.log('Event scheduled!', event)
 * });
 *
 * // Open Calendly with prefilled data
 * openCalendly({
 *   name: 'Max Mustermann',
 *   email: 'max@firma.de',
 *   customAnswers: { company: 'Mustermann GmbH' }
 * });
 */
export function useCalendly(options: UseCalendlyOptions = {}): UseCalendlyReturn {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  // Get Calendly URL from options or environment variable
  const calendlyUrl = options.url || process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    // Check if Calendly widget is loaded
    const checkCalendlyReady = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setIsCalendlyReady(true);
      } else {
        // Retry after a short delay if not loaded yet
        setTimeout(checkCalendlyReady, 100);
      }
    };

    checkCalendlyReady();
  }, []);

  useEffect(() => {
    // Listen for Calendly events if callback provided
    if (!options.onEventScheduled) return;

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;

      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled' && options.onEventScheduled) {
          options.onEventScheduled(e.data);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [options.onEventScheduled]);

  const openCalendly = useCallback(
    (prefillData?: CalendlyPrefillData) => {
      if (typeof window === 'undefined' || !window.Calendly) {
        console.error('Calendly widget not loaded yet. Please try again in a moment.');
        return;
      }

      if (!calendlyUrl) {
        console.error(
          'Calendly URL not configured. Please set NEXT_PUBLIC_CALENDLY_URL environment variable or pass url option to useCalendly hook.'
        );
        return;
      }

      // Open Calendly popup with optional prefill data
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: prefillData,
        pageSettings: {
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'f90093', // AI.mation Magenta
          textColor: '071013', // AI.mation Soft Black
        },
      });
    },
    [calendlyUrl]
  );

  return {
    openCalendly,
    isCalendlyReady,
  };
}
