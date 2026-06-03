import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  // 'de' (default) ohne Praefix, 'en' mit /en-Praefix
  localePrefix: 'as-needed',
  // Browser-Sprache nicht automatisch erkennen, der User waehlt bewusst per Switcher
  localeDetection: false,
});
