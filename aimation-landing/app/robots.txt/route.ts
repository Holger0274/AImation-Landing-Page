import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/seo/metadata';

export const dynamic = 'force-static';

export async function GET() {
  // Preserve existing training permissions; search access is a separate policy.
  // Specific groups do not inherit the wildcard group's API exclusion.
  const agents = ['*', 'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot',
    'anthropic-ai', 'Google-Extended', 'PerplexityBot', 'Applebot-Extended'];
  const content = agents.map((agent) => 'User-agent: ' + agent + '\nAllow: /\nDisallow: /api/').join('\n\n');
  return new NextResponse(content + '\n\nSitemap: ' + SITE_URL + '/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
