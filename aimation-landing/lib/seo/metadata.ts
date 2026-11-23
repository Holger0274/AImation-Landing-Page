import type { Metadata } from 'next';
import { ENGLISH_PATHS, basePath, localizedPath } from './locales';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de').replace(/\/$/, '');
export const HOME_COPY = {
  de: { title: 'AImation UG | KI für die technische Produktentwicklung', description: 'KI-Beratung, Schulung und Umsetzung für die technische Produktentwicklung. Wie KI mit vorhandenen Werkzeugen arbeitet, zeigt die CAD-Demo mit einer Handskizze.' },
  en: { title: 'AImation UG | AI for product development', description: 'AI consulting, training and implementation for product engineering. See how AI works with existing tools in a video that turns a hand sketch into a CAD model.' },
};

export function pageMetadata(path: string, locale: string, title: string, description: string): Metadata {
  const base = basePath(path);
  const url = `${SITE_URL}${localizedPath(base, locale)}`;
  return {
    title: { absolute: title }, description,
    alternates: {
      canonical: url,
      ...(ENGLISH_PATHS.has(base) ? { languages: { de: `${SITE_URL}${base}`, en: `${SITE_URL}${localizedPath(base, 'en')}`, 'x-default': `${SITE_URL}${base}` } } : {}),
    },
    openGraph: { title, description, url, type: 'website', siteName: 'AImation', locale: locale === 'en' ? 'en_GB' : 'de_DE', images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/images/og-image.png`] },
  };
}
