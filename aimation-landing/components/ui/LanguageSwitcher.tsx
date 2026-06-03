'use client';

import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export default function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const locale = useLocale();

  function switchLocale(next: string) {
    const path = window.location.pathname;

    let targetPath: string;
    if (next === 'en') {
      // DE → EN: prepend /en (path is already without /en prefix)
      targetPath = '/en' + (path === '/' ? '' : path);
    } else {
      // EN → DE: strip /en prefix
      if (path === '/en' || path === '/en/') {
        targetPath = '/';
      } else if (path.startsWith('/en/')) {
        targetPath = path.slice(3);
      } else {
        targetPath = path;
      }
    }

    window.location.href = targetPath;
  }

  const pillBg = isDark ? 'bg-[#1a2a2f]' : 'bg-[#e5e7eb]';

  return (
    <div className={`flex ${pillBg} rounded-full p-0.5 gap-0.5`}>
      <button
        onClick={() => switchLocale('de')}
        className={
          locale === 'de'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors cursor-pointer'
        }
        aria-label="Zur deutschen Version wechseln"
      >
        DE
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={
          locale === 'en'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors cursor-pointer'
        }
        aria-label="Switch to English version"
      >
        EN
      </button>
    </div>
  );
}
