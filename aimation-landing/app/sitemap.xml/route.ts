import { NextResponse } from 'next/server';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { ENGLISH_PATHS, localizedPath } from '@/lib/seo/locales';
import { SITE_URL } from '@/lib/seo/metadata';
import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { DEMO_VIDEOS } from '@/lib/data/demo-videos';

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
  const pages = [...new Set([
    ...await discoverPages(path.join(process.cwd(), 'app', '[locale]')),
    ...AI2CAD_CHAPTERS.map(chapter => `${AI2CAD_PATH}/${chapter.slug}`),
    ...DEMO_VIDEOS.map(video => video.path),
  ])].sort();
  const entries = pages.flatMap((base) => {
    const translated = ENGLISH_PATHS.has(base);
    const alternates = translated
      ? [['de', base], ['en', localizedPath(base, 'en')], ['x-default', base]]
          .map(([language, url]) => '    <xhtml:link rel="alternate" hreflang="' + language + '" href="' + escapeXml(SITE_URL + url) + '"/>').join('\n')
      : '';
    const chapter = AI2CAD_CHAPTERS.find(item => `${AI2CAD_PATH}/${item.slug}` === base);
    const demo = DEMO_VIDEOS.find(item => item.path === base);
    return (translated ? [base, localizedPath(base, 'en')] : [base]).map((url) => {
      const language = url.startsWith('/en/') ? 'en' : 'de';
      const copy = chapter?.[language];
      const demoCopy = demo?.[language];
      const media = chapter && copy ? {
        asset: `ai2cad/${chapter.id}`, title: `AI2CAD ${chapter.number}: ${copy.title}`,
        description: `${copy.description} ${copy.check}`, seconds: chapter.seconds,
      } : demo && demoCopy ? {
        asset: `demos/${demo.id}`, title: `${demo.name}: ${demoCopy.topic}`,
        description: `${demoCopy.description} ${demoCopy.note}`, seconds: demo.seconds,
      } : undefined;
      const video = media ? '\n    <video:video>\n' +
        '      <video:thumbnail_loc>' + escapeXml(`${SITE_URL}/videos/${media.asset}.webp`) + '</video:thumbnail_loc>\n' +
        '      <video:title>' + escapeXml(media.title) + '</video:title>\n' +
        '      <video:description>' + escapeXml(media.description) + '</video:description>\n' +
        '      <video:content_loc>' + escapeXml(`${SITE_URL}/videos/${media.asset}.mp4`) + '</video:content_loc>\n' +
        '      <video:duration>' + media.seconds + '</video:duration>\n    </video:video>' : '';
      return '  <url>\n    <loc>' + escapeXml(SITE_URL + url) + '</loc>\n' + alternates + video + '\n  </url>';
    });
  });
  return new NextResponse('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n' + entries.join('\n') + '\n</urlset>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
