import { MetadataRoute } from 'next';

/**
 * XML-Sitemap für AI.mation Landing Page
 * Optimiert für klassische Suchmaschinen und AI-Crawler
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
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Zukünftige Pillar-Pages (auskommentiert bis zur Erstellung)
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
