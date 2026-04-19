import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const dynamic = 'force-static';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

export const metadata: Metadata = {
  title: { absolute: 'Blog: KI für den Mittelstand | Praxis statt Buzzwords | AI.mation' },
  description: 'Ehrliche Einschätzungen zu KI im Mittelstand. Keine Hochglanzbroschüren, sondern Artikel, die Sie morgen anwenden können.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'Blog: KI für den Mittelstand | AI.mation',
    description: 'Ehrliche Einschätzungen zu KI im Mittelstand. Keine Hochglanzbroschüren, sondern Artikel, die Sie morgen anwenden können.',
    url: `${siteUrl}/blog`,
    type: 'website',
    locale: 'de_DE',
    images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: 'Startseite', url: '/' },
  { name: 'Blog', url: '/blog' },
];

const ARTICLES = [
  {
    slug: 'ki-cad-zukunft-jetzt-starten',
    title: 'KI kennt keinen Halt — warum wir bei CAD jetzt starten müssen, auch wenn es noch nicht ausgereift ist.',
    excerpt: 'Claude Opus 4.7 liest technische Zeichnungen mit 98,5 % Genauigkeit — ein Kategoriesprung. Warum Konstruktionsabteilungen trotzdem nicht auf Reife warten sollten, und was ein PoC konkret bringt.',
    tag: 'KI-Umsetzung',
    date: '2026-04-19',
    readingTime: '9 Min.',
    relatedPillar: { label: 'KI-Umsetzung', href: '/ki-automatisierung-mittelstand' },
  },
  {
    slug: 'ki-prompts-die-wirklich-funktionieren',
    title: 'KI-Prompts, die wirklich funktionieren: 7 Muster für den Arbeitsalltag im Mittelstand.',
    excerpt: 'Vague In, Vague Out. Wer ChatGPT oder Claude mit schlechten Prompts füttert, bekommt schlechte Antworten. Diese 7 Prompt-Muster liefern sofort brauchbare Ergebnisse – in Vertrieb, HR und Produktion.',
    tag: 'Prompt Engineering',
    date: '2026-04-01',
    readingTime: '6 Min.',
    relatedPillar: { label: 'KI-Schulungen', href: '/ki-schulungen-mittelstand' },
  },
  {
    slug: '6-stufen-ki-nutzung',
    title: 'Wo steht Ihr Unternehmen bei KI? Die 6 Stufen von Prompting bis autonome Agenten.',
    excerpt: 'Von ChatGPT-Prompting bis Multi-Agenten-System: 6 Stufen mit konkreten Beispielen. Finden Sie Ihre Stufe — und den nächsten sinnvollen Schritt.',
    tag: 'KI-Strategie',
    date: '2026-03-30',
    readingTime: '8 Min.',
    relatedPillar: { label: 'KI-Beratung', href: '/ki-beratung-kmu' },
  },
  {
    slug: 'schatten-ki-unternehmen',
    title: 'Schatten-KI in Ihrem Unternehmen: Warum Verbieten nicht funktioniert. Und was stattdessen hilft.',
    excerpt: '78% Ihrer Mitarbeiter nutzen KI-Tools ohne IT-Freigabe. Verbieten macht es schlimmer. Was Mittelständler stattdessen tun sollten.',
    tag: 'KI-Governance',
    date: '2026-03-16',
    readingTime: '7 Min.',
    relatedPillar: { label: 'KI-Schulungen', href: '/ki-schulungen-mittelstand' },
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogOverviewPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} siteUrl={siteUrl} />
      <Header />
      <main id="main-content" className="bg-[#faf9f7]">
        {/* ── HERO ── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-inter">
              <Link href="/" className="hover:text-[#071013] transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#071013] font-medium">Blog</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f90093] text-[#f90093] text-xs font-heading font-semibold mb-6">
              Praxiswissen
            </div>

            <h1
              className="font-heading font-bold text-[#071013] mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
            >
              KI für den Mittelstand:{' '}
              <span className="text-[#f90093]">Praxis statt Buzzwords</span>
            </h1>
            <p className="text-gray-600 font-inter leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
              Keine Hochglanzbroschüren. Keine Theorie-Vorträge. Artikel, die Sie morgen anwenden können — mit ehrlichen Einschätzungen, was KI kann und was nicht.
            </p>
          </div>
        </section>

        {/* ── ARTIKEL-LISTE ── */}
        <section className="pb-24 px-4">
          <div className="max-w-4xl mx-auto grid gap-6 md:gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-[#f90093] hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#faf9f7] border border-gray-200 text-xs font-heading font-semibold text-[#071013]">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-inter">{formatDate(article.date)}</span>
                  <span className="text-xs text-gray-400 font-inter">·</span>
                  <span className="text-xs text-gray-400 font-inter">{article.readingTime} Lesezeit</span>
                </div>

                <h2
                  className="font-heading font-bold text-[#071013] mb-3 leading-snug group-hover:text-[#f90093] transition-colors"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.375rem)' }}
                >
                  <Link href={`/blog/${article.slug}`} className="hover:underline focus:outline-none focus-visible:underline">
                    {article.title}
                  </Link>
                </h2>

                <p className="text-gray-600 font-inter text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#f90093] font-heading font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Artikel lesen <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={article.relatedPillar.href}
                    className="text-xs text-gray-400 font-inter hover:text-[#071013] transition-colors"
                  >
                    Verwandte Seite: {article.relatedPillar.label} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#071013]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-heading font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
            >
              Fragen zu KI in Ihrem Unternehmen?
            </h2>
            <p className="text-gray-300 font-inter mb-8" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)' }}>
              30 Minuten Erstgespräch. Kostenlos. Wir sagen Ihnen ehrlich, ob und wo KI bei Ihnen Sinn ergibt.
            </p>
            <a
              href="https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #f90093, #ff4ecd)',
                boxShadow: '0 0 30px rgba(249, 0, 147, 0.4)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              }}
            >
              Kostenloses Erstgespräch vereinbaren
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
