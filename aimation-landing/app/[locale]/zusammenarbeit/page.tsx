import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo/metadata';
import { DISCOVERY_PAGES } from '@/lib/data/discovery';
import DetailLayout from '@/components/discovery/DetailLayout';
import Process from '@/components/sections/Process';
import Services from '@/components/sections/Services';
import EuAiActNotice from '@/components/sections/EuAiActNotice';
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const entry = DISCOVERY_PAGES.zusammenarbeit; const copy = entry[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(entry.path, locale, `${copy.title} | AImation`, copy.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <DetailLayout page="zusammenarbeit" locale={locale} stops={[{ id: 'prozess', de: 'Ablauf und Preise', en: 'Process and prices' }, { id: 'leistungen', de: 'Leistungen', en: 'Services' }, { id: 'ki-kompetenz', de: 'KI-Kompetenz', en: 'AI literacy' }]}>
    <Process />
<Services />
<div id="ki-kompetenz"><EuAiActNotice /></div>
  </DetailLayout>;
}
