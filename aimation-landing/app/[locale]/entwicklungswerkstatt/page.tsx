import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo/metadata';
import { DISCOVERY_PAGES } from '@/lib/data/discovery';
import DetailLayout from '@/components/discovery/DetailLayout';
import AI2CADTeaser from '@/components/ai2cad/AI2CADTeaser';
import EngineeringExtensions from '@/components/ai2cad/EngineeringExtensions';
import EarlyDemos from '@/components/sections/EarlyDemos';
import SelfBuilt from '@/components/sections/SelfBuilt';
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const entry = DISCOVERY_PAGES.werkstatt; const copy = entry[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(entry.path, locale, `${copy.title} | AImation`, copy.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <DetailLayout page="werkstatt" locale={locale} stops={[{ id: 'entwicklung-erleben', de: 'CAD und FEM', en: 'CAD and FEM' }, { id: 'weitere-entwicklungsfelder', de: 'Patent, CNC und Elektrik', en: 'Patents, CNC and electrical planning' }, { id: 'anwendungsdemos', de: 'Anwendungsvideos', en: 'Application videos' }, { id: 'selbst-gebaut', de: 'Eigene Werkzeuge', en: 'Our tools' }]}>
    <AI2CADTeaser locale={locale} />
<EngineeringExtensions en={locale === 'en'} />
<EarlyDemos />
<SelfBuilt />
  </DetailLayout>;
}
