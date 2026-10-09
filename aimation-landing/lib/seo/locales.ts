import { AI2CAD_CHAPTERS, AI2CAD_PATH } from '@/lib/data/ai2cad';
import { DEMO_VIDEOS } from '@/lib/data/demo-videos';

// Only advertise translations whose page content is actually translated.
// Add a path here when its complete English version is ready.
export const ENGLISH_PATHS = new Set([
  ...DEMO_VIDEOS.map(video => video.path),
  '/ai2cad',
  ...AI2CAD_CHAPTERS.map(chapter => `${AI2CAD_PATH}/${chapter.slug}`),
  '/', '/ki-schulungen-mittelstand', '/facts/aimation', '/facts/holger-peschke',
  '/use-cases/excel-powerpoint-berichte',
  '/ki-produktentwicklung', '/ki-betriebssystem', '/schulungen/microsoft-365-copilot',
  '/use-cases/variantenmanagement', '/use-cases/skillmatrix-entwicklung',
  '/use-cases/projektsteuerung-entwicklung',
]);

export function basePath(path: string) {
  return (path.replace(/^\/(de|en)(?=\/|$)/, '').replace(/\/$/, '') || '/');
}

export function localizedPath(path: string, locale: string) {
  const base = basePath(path);
  return locale === 'en' && ENGLISH_PATHS.has(base) ? `/en${base === '/' ? '' : base}` : base;
}
