import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo/metadata';
import { DISCOVERY_PAGES } from '@/lib/data/discovery';
import DetailLayout from '@/components/discovery/DetailLayout';
import DevelopmentLandscape from '@/components/sections/DevelopmentLandscape';
import PainPoints from '@/components/sections/PainPoints';
import BeforeAfter from '@/components/sections/BeforeAfter';
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const entry = DISCOVERY_PAGES.anwendungen; const copy = entry[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(entry.path, locale, `${copy.title} | AImation`, copy.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <DetailLayout page="anwendungen" locale={locale} stops={[{ id: 'landscape-entdecken', de: 'Abläufe durchspielen', en: 'Explore workflows' }, { id: 'herausforderungen', de: 'Aufgaben im Alltag', en: 'Everyday tasks' }, { id: 'vorher-nachher', de: 'Abläufe vergleichen', en: 'Compare workflows' }]}>
    <DevelopmentLandscape />
<PainPoints />
<BeforeAfter />
  </DetailLayout>;
}
