import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo/metadata';
import { DISCOVERY_PAGES } from '@/lib/data/discovery';
import DetailLayout from '@/components/discovery/DetailLayout';
import About from '@/components/sections/About';
import Partnership from '@/components/sections/Partnership';
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const entry = DISCOVERY_PAGES.person; const copy = entry[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(entry.path, locale, `${copy.title} | AImation`, copy.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <DetailLayout page="person" locale={locale} stops={[{ id: 'ueber-mich', de: 'Mein Hintergrund', en: 'My background' }, { id: 'partnerschaften', de: 'Mitgliedschaften und Partner', en: 'Memberships and partners' }]}>
    <About />
<Partnership />
  </DetailLayout>;
}
