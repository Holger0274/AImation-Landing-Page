import { MetadataRoute } from 'next';

/**
 * XML-Sitemap für AI.mation
 *
 * Automatisch generiert unter /sitemap.xml
 *
 * Auskommentierte Einträge werden aktiviert, sobald die jeweilige Seite
 * erstellt ist. Reihenfolge entspricht Priorität (Phase 3 Briefing).
 *
 * W6 FIX beibehalten: Impressum + Datenschutz absichtlich ausgelassen
 * (haben robots: noindex — noindex-Seiten gehören nicht in die Sitemap)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
  const currentDate = new Date();

  return [
    // === AKTIV ===
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // === PHASE 3: Pillar Pages ===
    // Aktivieren sobald Seite erstellt ist (Reihenfolge = Priorität):

    {
      url: `${baseUrl}/ki-agenten-unternehmen`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // {
    //   url: `${baseUrl}/ki-beratung-kmu`,              // Pillar 2
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ki-schulungen-mittelstand`,    // Pillar 1
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${baseUrl}/ki-automatisierung-mittelstand`, // Pillar 3
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },

    // === PHASE 3: Blog-Artikel ===
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/schatten-ki-unternehmen`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/6-stufen-ki-nutzung`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ki-prompts-die-wirklich-funktionieren`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // === PHASE 3: Use-Case-Seiten ===
    // {
    //   url: `${baseUrl}/use-cases/patentrecherche-ki`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/use-cases/knowledge-graph-management`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/use-cases/email-klassifizierung`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ];
}
