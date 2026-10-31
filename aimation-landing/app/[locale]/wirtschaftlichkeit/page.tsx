import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo/metadata';
import { DISCOVERY_PAGES } from '@/lib/data/discovery';
import DetailLayout from '@/components/discovery/DetailLayout';
import TimeEstimate from '@/components/sections/TimeEstimate';
import QktImpact from '@/components/sections/QktImpact';
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const entry = DISCOVERY_PAGES.wirtschaftlichkeit; const copy = entry[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(entry.path, locale, `${copy.title} | AImation`, copy.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <DetailLayout page="wirtschaftlichkeit" locale={locale} stops={[{ id: 'zeitpotenzial', de: 'Zeitpotenzial berechnen', en: 'Calculate time savings' }, { id: 'qualitaet-kosten-timing', de: 'Qualität, Kosten, Timing', en: 'Quality, cost, timing' }]}>
    <TimeEstimate />
<QktImpact />
  </DetailLayout>;
}
