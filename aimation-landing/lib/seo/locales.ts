// Only advertise translations whose page content is actually translated.
// Add a path here when its complete English version is ready.
export const ENGLISH_PATHS = new Set([
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
