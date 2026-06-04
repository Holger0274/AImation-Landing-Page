import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/ki-beratung-kmu', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-schulungen-mittelstand', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-automatisierung-mittelstand', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-agenten-unternehmen', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/use-cases', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/patentrecherche-ki', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/knowledge-graph-management', priority: '0.7', changefreq: 'monthly' },
  { path: '/use-cases/email-klassifizierung', priority: '0.7', changefreq: 'monthly' },
  { path: '/facts/aimation', priority: '0.8', changefreq: 'monthly' },
];

const blogSlugs = [
  'ki-roadmap-illusion-mittelstand',
  'bewertungsmethoden-ki-projekte',
  'ki-projekte-priorisierung-rice',
  'ki-projekte-scheitern-fundament',
  'ki-cad-zukunft-jetzt-starten',
  'ki-prompts-die-wirklich-funktionieren',
  '6-stufen-ki-nutzung',
  'schatten-ki-unternehmen',
];

export async function GET() {
  const allPages = [
    ...staticPages,
    ...blogSlugs.map((slug) => ({
      path: `/blog/${slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <xhtml:link rel="alternate" hreflang="de" href="${siteUrl}${path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en${path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${path}"/>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
