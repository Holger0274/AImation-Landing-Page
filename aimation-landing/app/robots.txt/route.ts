import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/

# KI-Crawler explizit erlaubt (GEO/AEO), siehe
# aimation-website-specs/2026-08-08_spec-09-ki-sichtbarkeit.md Punkt 2
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
