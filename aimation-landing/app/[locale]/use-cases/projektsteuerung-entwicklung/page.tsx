import { setRequestLocale } from 'next-intl/server';
import ApplicationDetailPage from '@/components/pages/ApplicationDetailPage';
import { APPLICATION_PAGES } from '@/lib/data/application-pages';
import { pageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const app = APPLICATION_PAGES.projects;
  const c = app[locale === 'en' ? 'en' : 'de'];
  return pageMetadata(app.path, locale, `${c.label} | ${app.name} | AImation`, c.description);
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ApplicationDetailPage locale={locale} application="projects"/>;
}
