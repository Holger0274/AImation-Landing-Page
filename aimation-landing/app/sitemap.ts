import { MetadataRoute } from 'next';

/**
 * XML-Sitemap für AI.mation Landing Page
 * Optimiert für klassische Suchmaschinen und AI-Crawler
 *
 * W6 FIX: Impressum und Datenschutz aus der Sitemap entfernt.
 * Seiten mit robots: { index: false } (noindex) duerfen NICHT in der Sitemap stehen.
 * Google ignoriert noindex-Seiten in Sitemaps, aber es sendet ein falsches Signal.
 *
 * Next.js generiert automatisch die sitemap.xml unter /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aimation.de';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Zukuenftige Pillar-Pages (auskommentiert bis zur Erstellung)
    // Sobald diese Seiten live gehen, hier einkommentieren:
    // {
    //   url: `${baseUrl}/ki-beratung-kmu`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ki-schulungen-unternehmen`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ki-automatisierung-mittelstand`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ressourcen/guides`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
