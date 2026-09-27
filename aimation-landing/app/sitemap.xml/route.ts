import { NextResponse } from 'next/server';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { ENGLISH_PATHS, localizedPath } from '@/lib/seo/locales';
import { SITE_URL } from '@/lib/seo/metadata';

// Discover static public pages at build time. Dynamic routes need explicit enumeration.
export const dynamic = 'force-static';

async function discoverPages(directory: string, segments: string[] = []): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = entries.some((entry) => entry.isFile() && entry.name === 'page.tsx')
    ? ['/' + segments.join('/')] : [];
  for (const entry of entries) {
    if (!entry.isDirectory() || /^[\[_@.]/.test(entry.name)) continue;
    const next = entry.name.startsWith('(') ? segments : [...segments, entry.name];
    pages.push(...await discoverPages(path.join(directory, entry.name), next));
  }
  return pages;
}

const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const pages = [...new Set(await discoverPages(path.join(process.cwd(), 'app', '[locale]')))].sort();
  const entries = pages.flatMap((base) => {
    const translated = ENGLISH_PATHS.has(base);
    const alternates = translated
      ? [['de', base], ['en', localizedPath(base, 'en')], ['x-default', base]]
          .map(([language, url]) => '    <xhtml:link rel="alternate" hreflang="' + language + '" href="' + escapeXml(SITE_URL + url) + '"/>').join('\n')
      : '';
    return (translated ? [base, localizedPath(base, 'en')] : [base]).map((url) =>
      '  <url>\n    <loc>' + escapeXml(SITE_URL + url) + '</loc>\n' + alternates + '\n  </url>');
  });
  return new NextResponse('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + entries.join('\n') + '\n</urlset>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
