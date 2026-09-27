import type { Metadata } from 'next';
import { ENGLISH_PATHS, basePath, localizedPath } from './locales';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de').replace(/\/$/, '');
export const HOME_COPY = {
  de: { title: 'KI in der Produktentwicklung: Beratung, Schulung, Umsetzung | AImation', description: 'KI-Beratung für Entwicklungsleiter: Wissen sichern, Anfragen bearbeiten und Berichte vorbereiten. Schulung und Umsetzung aus 20 Jahren Entwicklungspraxis.' },
  en: { title: 'AI for product development: consulting, training, implementation | AImation', description: 'AI consulting for engineering teams: retain knowledge, handle requests and prepare reports. Training and implementation built on 20 years of engineering experience.' },
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
