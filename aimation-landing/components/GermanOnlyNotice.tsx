import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type Props = {
  /** next-intl message namespace holding `headline`, `notice` and `cta`. */
  namespace: 'enBlogNotice' | 'enUseCaseNotice';
  /** German URL the visitor is sent to (the page that actually has content). */
  href: string;
};

/**
 * Shown on /en for long-form content (blog articles, use cases) that only
 * exists in German. Renders an English notice plus a link to the German page,
 * instead of silently displaying German text on the English site.
 */
export default async function GermanOnlyNotice({ namespace, href }: Props) {
  const t = await getTranslations(namespace);

  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-6 py-32 md:py-40 text-center">
          <h1
            className="font-heading font-bold text-[#071013] mb-6 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            {t('headline')}
          </h1>
          <p className="text-lg text-gray-600 font-inter mb-8">{t('notice')}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f90093, #ff4ecd)' }}
          >
            {t('cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
