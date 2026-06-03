'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export default function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();

  // Safe href calculation — no double slashes
  const deHref = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname;
  const enHref = pathname.startsWith('/en') ? pathname : `/en${pathname}`;

  const pillBg = isDark ? 'bg-[#1a2a2f]' : 'bg-[#e5e7eb]';

  return (
    <div className={`flex ${pillBg} rounded-full p-0.5 gap-0.5`}>
      <Link
        href={deHref}
        className={
          locale === 'de'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors'
        }
        aria-label="Zur deutschen Version wechseln"
      >
        DE
      </Link>
      <Link
        href={enHref}
        className={
          locale === 'en'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors'
        }
        aria-label="Switch to English version"
      >
        EN
      </Link>
    </div>
  );
}
