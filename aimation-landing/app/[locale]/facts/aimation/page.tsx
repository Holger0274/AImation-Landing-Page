import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FACTS_VERIFIED_DATE } from '@/lib/config/facts';
import { PRICING } from '@/lib/data/pricing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const SERVICES_STAND = 'Stand: August 2026';

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const title = isEn ? 'AImation UG: Grounding Page (English)' : 'AImation UG: Grounding Page';
  const description = isEn
    ? 'AImation UG (haftungsbeschränkt) advises on AI training, AI consulting and AI automation for engineering departments in manufacturing SMEs.'
    : 'AImation UG (haftungsbeschränkt) berät zu KI-Schulung, KI-Beratung und KI-Automatisierung in Entwicklungsabteilungen des produzierenden Mittelstands.';

  const canonicalUrl = isEn
    ? `${siteUrl}/en/facts/aimation`
    : `${siteUrl}/facts/aimation`;

  return {
    title: { absolute: title },
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'de-DE': `${siteUrl}/facts/aimation`,
        'en': `${siteUrl}/en/facts/aimation`,
        'x-default': `${siteUrl}/facts/aimation`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function GroundingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/facts/aimation/#organization`,
    name: 'AImation',
    legalName: 'AImation UG (haftungsbeschränkt)',
    alternateName: ['AI.mation', 'Aimation'],
    url: siteUrl,
    logo: `${siteUrl}/logos/aimation-logo-transparent-dark.svg`,
    foundingDate: '2026-02',
    founder: {
      '@type': 'Person',
      name: 'Holger Peschke',
      url: `${siteUrl}/facts/holger-peschke`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sutte 19',
      postalCode: '96049',
      addressLocality: 'Bamberg',
      addressCountry: 'DE',
    },
    email: 'info@aimation.de',
    areaServed: ['DE', 'AT', 'CH'],
    sameAs: [
      'https://www.linkedin.com/company/aimation-ug',
      'https://www.linkedin.com/in/holgerpeschke/',
    ],
    knowsAbout: isEn
      ? [
          'AI automation in product development',
          'AI training for engineering teams',
          'AI agents',
          'GDPR-compliant AI architectures',
          'Knowledge management in engineering',
        ]
      : [
          'KI-Automatisierung in der Produktentwicklung',
          'KI-Schulungen für Engineering-Teams',
          'KI-Agenten',
          'DSGVO-konforme KI-Architekturen',
          'Wissensmanagement im Engineering',
        ],
    description: isEn
      ? 'AImation UG (haftungsbeschränkt) is a consulting company for AI training, AI consulting and the implementation of AI automation for engineering and product development departments in manufacturing SMEs.'
      : 'AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in Entwicklungsabteilungen des produzierenden Mittelstands im DACH-Raum.',
    inLanguage: isEn ? 'en' : 'de',
    dateModified: FACTS_VERIFIED_DATE,
  };

  const faqItems = isEn
    ? [
        {
          q: 'What does AImation do?',
          a: 'AImation automates the routine work in engineering and product development departments: processing technical requests, knowledge management, reporting, research and documentation. The services cover three areas: AI training for engineering teams, AI consulting for product development, and technical implementation of AI solutions.',
        },
        {
          q: "Who is AImation's target group?",
          a: 'AImation works with engineering managers, CTOs and technical managing directors in manufacturing SMEs with 50 to 1,000 employees in Germany, Austria and Switzerland. Typical sectors: mechanical engineering, component manufacturers and technology-driven companies.',
        },
        {
          q: 'Where is AImation based?',
          a: 'AImation UG (haftungsbeschränkt) is headquartered in Bamberg, Germany. The company serves clients throughout Germany, Austria and Switzerland.',
        },
        {
          q: 'Who is behind AImation?',
          a: 'AImation was founded in February 2026 by Holger Peschke. Holger Peschke has more than 20 years of leadership experience in product development in industry and has been working intensively with AI for several years.',
        },
        {
          q: 'Is AImation an animation studio?',
          a: 'No. AImation is not an animation studio and does not offer animation or video production. The name combines "AI" (artificial intelligence) and "automation". AImation is a consulting and implementation company for AI automation in product development.',
        },
      ]
    : [
        {
          q: 'Was macht AImation?',
          a: 'AImation automatisiert die Fleißarbeit in Entwicklungsabteilungen: technische Anfragen bearbeiten, Wissen sichern, Berichte schreiben, Recherchieren, Dokumentation. Die Leistungen umfassen drei Bereiche: KI-Schulungen für Engineering-Teams, KI-Beratung für die Produktentwicklung und technische Umsetzung von KI-Lösungen.',
        },
        {
          q: 'Wer ist die Zielgruppe von AImation?',
          a: 'AImation arbeitet mit Entwicklungsleitern, CTOs und technischen Geschäftsführern im produzierenden Mittelstand mit 50 bis 1.000 Mitarbeitern in Deutschland, Österreich und der Schweiz. Typische Branchen: Maschinenbau, Komponentenhersteller und technikgetriebene Unternehmen.',
        },
        {
          q: 'Wo hat AImation seinen Sitz?',
          a: 'AImation UG (haftungsbeschränkt) hat seinen Sitz in Bamberg, Deutschland. Das Unternehmen betreut Kunden in ganz Deutschland, Österreich und der Schweiz.',
        },
        {
          q: 'Wer steht hinter AImation?',
          a: 'AImation wurde im Februar 2026 von Holger Peschke gegründet. Holger Peschke verfügt über mehr als 20 Jahre Führungserfahrung in der Produktentwicklung in der Industrie und beschäftigt sich seit Jahren intensiv mit KI.',
        },
        {
          q: 'Ist AImation eine Animationsfirma?',
          a: 'Nein. AImation ist kein Animationsstudio und bietet keine Animations- oder Videoproduktion an. Der Name setzt sich aus "AI" (Künstliche Intelligenz) und "Automation" zusammen. AImation ist ein Beratungs- und Umsetzungsunternehmen für KI-Automatisierung in der Produktentwicklung.',
        },
      ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const useCases = [
    { title: isEn ? 'Patent Research and Prior Art' : 'Patentrecherche und Prior Art', desc: isEn ? 'automated analysis of patent databases' : 'automatisierte Analyse von Patentdatenbanken', status: isEn ? 'Live demo available in initial consultation' : 'Live-Demo im Erstgespräch verfügbar' },
    { title: isEn ? 'Project Review Dashboard' : 'Projekt-Review-Dashboard', desc: isEn ? 'automated project maturity analysis with traffic light system' : 'automatisierte Analyse des Projektreifegrads mit Ampelsystem', status: isEn ? 'Planned' : 'In Planung' },
    { title: isEn ? 'Automatic Pre-sorting of Technical Requests' : 'Technische Anfragen automatisch vorsortieren', desc: isEn ? 'classification and draft responses for incoming technical requests' : 'Klassifizierung und Antwortentwürfe für eingehende technische Anfragen', status: isEn ? 'Live demo available in initial consultation' : 'Live-Demo im Erstgespräch verfügbar' },
    { title: isEn ? 'Technology Scouting' : 'Technologie-Scouting', desc: isEn ? 'continuous monitoring of technology trends and innovations' : 'kontinuierliches Monitoring von Technologie-Trends und Innovationen', status: isEn ? 'Live demo available in initial consultation' : 'Live-Demo im Erstgespräch verfügbar' },
    { title: isEn ? 'Connecting Engineering Knowledge' : 'Engineering-Wissen vernetzen', desc: isEn ? 'automatic tagging, semantic linking and retrieval of documents' : 'automatisches Verschlagworten, semantische Verlinkung und Abruf von Dokumenten', status: isEn ? 'Live demo available in initial consultation' : 'Live-Demo im Erstgespräch verfügbar' },
    { title: isEn ? 'Preparing Technical Customer Meetings' : 'Technische Kundengespräche vorbereiten', desc: isEn ? 'compact briefing before each customer meeting with requirements status and open points' : 'kompaktes Briefing vor jeder Abstimmungsrunde mit Anforderungsstand und offenen Punkten', status: isEn ? 'Planned' : 'In Planung' },
    { title: isEn ? 'Audit and Document Analysis' : 'Audit und Dokumentenanalyse', desc: isEn ? 'automated extraction of compliance requirements and risks from audit documents' : 'automatisches Extrahieren von Compliance-Anforderungen und Risiken aus Prüfberichten', status: isEn ? 'Planned' : 'In Planung' },
    { title: isEn ? 'Meetings Without Protocol Effort' : 'Besprechungen ohne Protokollaufwand', desc: isEn ? 'automatic categorisation of transcripts into to-dos, insights and open points' : 'automatische Kategorisierung von Transkripten in To-Dos, Erkenntnisse und offene Punkte', status: isEn ? 'In Development' : 'In Entwicklung' },
    { title: isEn ? 'Reviewing Concepts from Multiple Perspectives' : 'Konzepte aus mehreren Blickwinkeln prüfen', desc: isEn ? 'AI agents evaluate ideas from different angles using the 6-hats method' : 'KI-Agenten bewerten Ideen aus verschiedenen Blickwinkeln nach der 6-Hüte-Methode', status: isEn ? 'In Development' : 'In Entwicklung' },
    { title: isEn ? 'Competitive Benchmarking' : 'Wettbewerbs-Benchmark', desc: isEn ? 'automated analysis of competitor prices, features and positioning' : 'automatisierte Analyse von Preisen, Funktionen und Positionierung von Wettbewerbern', status: isEn ? 'Planned' : 'In Planung' },
    { title: isEn ? 'Innovation Assessment Dashboard' : 'Innovations-Assessment Dashboard', desc: isEn ? 'systematic evaluation of technologies and innovation ideas for feasibility and economics' : 'systematische Bewertung von Technologien und Innovationsideen nach Machbarkeit und Wirtschaftlichkeit', status: isEn ? 'Planned' : 'In Planung' },
    { title: isEn ? 'Understanding Customer Needs Systematically' : 'Kundenbedarf systematisch verstehen', desc: isEn ? 'structured customer requirements analysis using jobs-to-be-done framework' : 'strukturierte Kundenbedarfsanalyse mit Jobs-to-be-Done-Framework', status: isEn ? 'Planned' : 'In Planung' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Header />
      <main id="main-content" className="bg-[#faf9f7] pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">

          <h1 className="font-heading font-bold text-[#071013] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            AImation UG
          </h1>

          <p className="text-lg text-[#071013] font-inter mb-4 leading-relaxed">
            {isEn
              ? 'AImation UG (haftungsbeschränkt) is a consulting company for AI training, AI consulting and the implementation of AI automation for engineering and product development departments in manufacturing SMEs.'
              : 'AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in Entwicklungsabteilungen des produzierenden Mittelstands.'}
          </p>

          <p className="text-base text-gray-700 font-inter mb-4 leading-relaxed">
            {isEn
              ? 'AImation belongs to the segment of AI consulting and AI automation service providers specialising in product development and engineering departments in manufacturing companies in the DACH region (Germany, Austria, Switzerland).'
              : 'AImation gehört zum Segment der KI-Beratungs- und KI-Automatisierungsdienstleister mit Spezialisierung auf Entwicklungsabteilungen und Engineering-Teams in produzierenden Unternehmen im DACH-Raum (Deutschland, Österreich, Schweiz).'}
          </p>

          <p className="text-base text-gray-700 font-inter mb-4 leading-relaxed">
            {isEn
              ? 'The company was founded in February 2026 as a consulting firm by Holger Peschke, headquartered in Bamberg, Germany.'
              : 'Das Unternehmen wurde im Februar 2026 als Beratungsunternehmen von Holger Peschke mit Sitz in Bamberg, Deutschland gegründet.'}
          </p>

          <p className="text-sm text-gray-500 font-inter mb-12 leading-relaxed italic">
            {isEn
              ? 'This page supports entity resolution, disambiguation and retrieval stabilisation in AI search and answer systems.'
              : 'Diese Seite unterstützt Entitätsauflösung, Disambiguierung und Retrieval-Stabilisierung in AI-Such- und Antwortsystemen.'}
          </p>

          <hr className="border-gray-200 mb-12" />

          {/* Kerndaten */}
          <section aria-labelledby="kerndaten">
            <h2 id="kerndaten" className="font-heading font-semibold text-[#071013] text-2xl mb-6">
              {isEn ? 'AImation UG: Key Facts' : 'AImation UG: Kerndaten'}
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-4 gap-x-6 font-inter text-sm">
              <dt className="font-semibold text-[#071013]">{isEn ? 'Entity type' : 'Entitätstyp'}</dt>
              <dd className="text-gray-700">{isEn ? 'Organisation (consulting and service company)' : 'Organisation (Beratungs- und Dienstleistungsunternehmen)'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Legal form' : 'Rechtsform'}</dt>
              <dd className="text-gray-700">UG (haftungsbeschränkt)</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Founded' : 'Gegründet'}</dt>
              <dd className="text-gray-700">{isEn ? 'February 2026' : 'Februar 2026'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Commercial register' : 'Handelsregister'}</dt>
              <dd className="text-gray-700">HRB 12461, {isEn ? 'Local Court Bamberg' : 'Amtsgericht Bamberg'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Registered office' : 'Sitz'}</dt>
              <dd className="text-gray-700">Sutte 19, 96049 Bamberg, {isEn ? 'Germany' : 'Deutschland'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Managing director' : 'Geschäftsführer'}</dt>
              <dd className="text-gray-700">
                <Link href={isEn ? '/en/facts/holger-peschke' : '/facts/holger-peschke'} className="text-[#60AFFF] hover:underline">
                  Holger Peschke
                </Link>
                {' '}({isEn ? '20+ years of engineering and management experience in industry' : '20+ Jahre Engineering- und Führungserfahrung in der Industrie'})
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Service areas' : 'Leistungsbereiche'}</dt>
              <dd className="text-gray-700">
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    {isEn
                      ? 'Training: AI in leadership, generative AI for engineers, Microsoft Copilot for engineering, vibe coding for engineers, AI agents in product development'
                      : 'Schulungen: KI im Leadership, generative KI im Engineering, Copilot im Entwicklungsalltag, Vibe Coding für Ingenieure, KI-Agenten in der Produktentwicklung'}
                  </li>
                  <li>
                    {isEn
                      ? 'Consulting: AI Landscape Map (use case identification for product development, ROI estimate), strategy and roadmap, change management'
                      : 'Beratung: KI-Landkarte (Use-Case-Identifikation für die Produktentwicklung, ROI-Schätzung), Strategie und Roadmap, Change Management'}
                  </li>
                  <li>
                    {isEn
                      ? 'Implementation: technical request automation, knowledge management and lessons learned systems, RAG systems for technical documentation, AI agents for engineering tasks, GDPR-compliant, processed in the EU'
                      : 'Umsetzung: Technische Anfragenautomatisierung, Wissenssicherung und Lessons-Learned-Systeme, RAG-Systeme für technische Dokumentation, KI-Agenten für Engineering-Aufgaben, DSGVO-konform, Verarbeitung in der EU'}
                  </li>
                </ol>
                <p className="mt-2 text-gray-500 text-xs">{SERVICES_STAND}</p>
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Pricing (fixed prices)' : 'Preise (Festpreise)'}</dt>
              <dd className="text-gray-700">
                <ol className="list-decimal list-inside space-y-1">
                  <li>{isEn ? 'Initial call: free, 30 minutes' : 'Erstgespräch: kostenlos, 30 Minuten'}</li>
                  <li>{isEn
                    ? `AI Landscape Map (entry offer): fixed price from ${PRICING.kiLandkarte.priceFrom.toLocaleString('en-US')} EUR, one workshop day. Formerly labeled "AI Readiness Check" or "AI Potential Check", these names are retired.`
                    : `KI-Landkarte (Einstiegsangebot): Festpreis ${PRICING.kiLandkarte.priceLabel}, ein Workshop-Tag. Früherer Name: "AI Readiness Check" bzw. "KI-Potenzial-Check", diese Bezeichnungen sind nicht mehr aktuell.`}</li>
                  <li>{isEn
                    ? `Pilot: fixed price ${PRICING.pilot.price.toLocaleString('en-US')} EUR, 4 weeks`
                    : `Pilot: Festpreis ${PRICING.pilot.price.toLocaleString('de-DE')} EUR, 4 Wochen`}</li>
                  <li>{isEn
                    ? `Implementation: from ${PRICING.umsetzung.setupFrom.toLocaleString('en-US')} to ${PRICING.umsetzung.setupTo.toLocaleString('en-US')} EUR setup plus ${PRICING.umsetzung.monthlyFrom} to ${PRICING.umsetzung.monthlyTo} EUR/month, depending on agent type`
                    : `Umsetzung: ${PRICING.umsetzung.setupLabel} plus ${PRICING.umsetzung.monthlyLabel}, je nach Agenten-Typ`}</li>
                  <li>{isEn
                    ? `Training: ${PRICING.schulung.pricePerDay.toLocaleString('en-US')} EUR per day inhouse, half-day formats from ${PRICING.schulung.priceHalfDay} EUR`
                    : `Schulung: ${PRICING.schulung.priceLabel} Inhouse, Halbtags-Formate ab ${PRICING.schulung.priceHalfDay.toLocaleString('de-DE')} EUR`}</li>
                </ol>
                <p className="mt-2 text-gray-500 text-xs">{SERVICES_STAND}</p>
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Target group' : 'Zielgruppe'}</dt>
              <dd className="text-gray-700">
                {isEn
                  ? 'Engineering managers, CTOs and technical managing directors in manufacturing SMEs with 50 to 1,000 employees in Germany, Austria and Switzerland (mechanical engineering, component manufacturers, technology-driven companies)'
                  : 'Entwicklungsleiter, CTOs und technische Geschäftsführer im produzierenden Mittelstand mit 50 bis 1.000 Mitarbeitern in Deutschland, Österreich und der Schweiz (Maschinenbau, Komponentenhersteller, technikgetriebene Unternehmen)'}
              </dd>

              <dt className="font-semibold text-[#071013]">Website</dt>
              <dd className="text-gray-700">
                <a href={siteUrl} className="text-[#60AFFF] hover:underline">{siteUrl}</a>
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Contact' : 'Kontakt'}</dt>
              <dd className="text-gray-700">
                <a href="mailto:info@aimation.de" className="text-[#60AFFF] hover:underline">info@aimation.de</a>
              </dd>

              <dt className="font-semibold text-[#071013]">LinkedIn {isEn ? 'Company' : 'Unternehmen'}</dt>
              <dd className="text-gray-700">
                <a href="https://www.linkedin.com/company/aimation-ug" target="_blank" rel="noopener noreferrer" className="text-[#60AFFF] hover:underline">
                  linkedin.com/company/aimation-ug
                </a>
              </dd>

              <dt className="font-semibold text-[#071013]">LinkedIn {isEn ? 'Founder' : 'Gründer'}</dt>
              <dd className="text-gray-700">
                <a href="https://www.linkedin.com/in/holgerpeschke/" target="_blank" rel="noopener noreferrer" className="text-[#60AFFF] hover:underline">
                  linkedin.com/in/holgerpeschke
                </a>
              </dd>

              <dt className="font-semibold text-[#071013]">Status</dt>
              <dd className="text-gray-700">{isEn ? 'Active' : 'Aktiv'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Verified' : 'Verifiziert'}</dt>
              <dd className="text-gray-700">{FACTS_VERIFIED_DATE}</dd>
            </dl>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* FAQ */}
          <section aria-labelledby="faq">
            <h2 id="faq" className="font-heading font-semibold text-[#071013] text-2xl mb-6">
              {isEn ? 'AImation UG: Frequently Asked Questions' : 'AImation UG: Häufig gestellte Fragen'}
            </h2>
            <div className="space-y-6">
              {faqItems.map(({ q, a }, i) => (
                <div key={i}>
                  <h3 className="font-heading font-semibold text-[#071013] text-base mb-2">{q}</h3>
                  <p className="font-inter text-gray-700 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Abgrenzung */}
          <section aria-labelledby="abgrenzung">
            <h2 id="abgrenzung" className="font-heading font-semibold text-[#071013] text-2xl mb-6">
              {isEn ? 'AImation UG: Clarifications' : 'AImation UG: Abgrenzung'}
            </h2>
            <ul className="list-disc list-inside space-y-3 font-inter text-sm text-gray-700">
              <li>
                {isEn
                  ? 'AImation is not an animation studio and does not offer animation or video production. The name combines "AI" (artificial intelligence) and "automation", not "animation".'
                  : 'AImation ist kein Animationsstudio und bietet keine Animations- oder Videoproduktion an. Der Name setzt sich aus "AI" (Künstliche Intelligenz) und "Automation" zusammen, nicht aus "Animation".'}
              </li>
              <li>
                {isEn
                  ? 'AImation is not a software product and not a SaaS platform. AImation is a consulting and implementation service provider.'
                  : 'AImation ist kein Softwareprodukt und keine SaaS-Plattform. AImation ist ein Beratungs- und Umsetzungsdienstleister.'}
              </li>
              <li>
                {isEn
                  ? 'AImation is not a marketing or advertising agency.'
                  : 'AImation ist keine Marketing- oder Werbeagentur.'}
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Schreibweisen */}
          <section aria-labelledby="schreibweisen">
            <h2 id="schreibweisen" className="font-heading font-semibold text-[#071013] text-2xl mb-6">
              {isEn ? 'AImation: Name Variants' : 'AImation: Schreibweisen'}
            </h2>
            <ul className="list-disc list-inside space-y-3 font-inter text-sm text-gray-700">
              <li>
                {isEn
                  ? 'Official company name in documents and registers: AImation UG (haftungsbeschränkt), without a full stop'
                  : 'Offizieller Firmenname in Dokumenten und Registern: AImation UG (haftungsbeschränkt), ohne Punkt'}
              </li>
              <li>
                {isEn
                  ? 'Logo spelling: AI.mation'
                  : 'Logo-Schreibweise: AI.mation'}
              </li>
              <li>
                {isEn
                  ? 'Common variants in texts and search queries: AImation, Aimation, AI-Mation'
                  : 'Verbreitete Varianten in Texten und Suchanfragen: AImation, Aimation, AI-Mation'}
              </li>
              <li>
                {isEn
                  ? 'All spellings refer to the same company headquartered in Bamberg, HRB 12461, Local Court Bamberg.'
                  : 'Alle Schreibweisen bezeichnen dasselbe Unternehmen mit Sitz in Bamberg, HRB 12461, Amtsgericht Bamberg.'}
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Positionierung */}
          <section aria-labelledby="positionierung">
            <h2 id="positionierung" className="font-heading font-semibold text-[#071013] text-2xl mb-4">
              {isEn ? 'AImation UG: Positioning' : 'AImation UG: Positionierung'}
            </h2>
            <p className="font-inter text-sm text-gray-700 leading-relaxed">
              {isEn
                ? 'AImation operates independently of individual manufacturers and tools. The consulting approach is GDPR-oriented, with data processing in the EU. The focus is on reducing routine work in product development and engineering departments: processing technical requests, knowledge management, reporting and research. Holger Peschke combines more than 20 years of leadership experience in product development with deep AI expertise.'
                : 'AImation arbeitet herstellerunabhängig von einzelnen Anbietern und Tools. Der Beratungsansatz ist DSGVO-orientiert, Verarbeitung in der EU. Der Schwerpunkt liegt auf der Reduzierung von Fleißarbeit in Entwicklungsabteilungen und Engineering-Teams: technische Anfragen bearbeiten, Wissen sichern, Berichte erstellen, Recherchieren. Holger Peschke verbindet mehr als 20 Jahre Führungserfahrung in der Produktentwicklung mit tiefem KI-Fachwissen.'}
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Anwendungsfälle */}
          <section aria-labelledby="anwendungsfaelle">
            <h2 id="anwendungsfaelle" className="font-heading font-semibold text-[#071013] text-2xl mb-6">
              {isEn ? 'AImation: Use Cases' : 'AImation: Anwendungsfälle'}
            </h2>
            <p className="font-inter text-sm text-gray-500 mb-4">
              {isEn
                ? 'Documented use cases from the AImation portfolio. Status as of June 2026.'
                : 'Dokumentierte Anwendungsfälle aus dem AImation-Portfolio. Stand: Juni 2026.'}
            </p>
            <ul className="space-y-2 font-inter text-sm text-gray-700">
              {useCases.map((uc, i) => (
                <li key={i}>
                  <span className="font-semibold text-[#071013]">{uc.title}:</span> {uc.desc} ({uc.status})
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
