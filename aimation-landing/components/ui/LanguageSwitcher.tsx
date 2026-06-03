'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export default function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  const pillBg = isDark ? 'bg-[#1a2a2f]' : 'bg-[#e5e7eb]';

  return (
    <div className={`flex ${pillBg} rounded-full p-0.5 gap-0.5 ${isPending ? 'opacity-60' : ''}`}>
      <button
        onClick={() => switchLocale('de')}
        disabled={locale === 'de' || isPending}
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
        disabled={locale === 'en' || isPending}
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
