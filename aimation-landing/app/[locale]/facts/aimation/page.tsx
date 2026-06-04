import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';
const VERIFIED_DATE = '2026-06-04';
const SERVICES_STAND = 'Stand: Juni 2026';

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

  const title = isEn ? 'AImation UG – Grounding Page (English)' : 'AImation UG – Grounding Page';
  const description = isEn
    ? 'AImation UG (haftungsbeschränkt) is a consulting company for AI training, AI consulting and the implementation of AI automation in small and medium-sized enterprises.'
    : 'AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in kleinen und mittleren Unternehmen.';

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
    name: 'AImation UG',
    legalName: 'AImation UG (haftungsbeschränkt)',
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-horizontal-light.svg`,
    foundingDate: '2026-02',
    founder: {
      '@type': 'Person',
      name: 'Holger Peschke',
      sameAs: 'https://www.linkedin.com/in/holgerpeschke/',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sutte 19',
      postalCode: '96049',
      addressLocality: 'Bamberg',
      addressCountry: 'DE',
    },
    email: 'kontakt@aimation.de',
    sameAs: [
      'https://www.linkedin.com/company/aimation-ug',
      'https://www.linkedin.com/in/holgerpeschke/',
    ],
    description: isEn
      ? 'AImation UG (haftungsbeschränkt) is a consulting company for AI training, AI consulting and the implementation of AI automation in small and medium-sized enterprises.'
      : 'AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in kleinen und mittleren Unternehmen.',
    areaServed: ['DE', 'AT', 'CH'],
    knowsAbout: isEn
      ? [
          'AI consulting for SMEs',
          'AI training and workshops',
          'AI workflow automation',
          'RAG systems and chatbots',
          'AI agents',
          'Microsoft Copilot',
          'Prompt engineering',
        ]
      : [
          'KI-Beratung für KMUs',
          'KI-Schulungen und Workshops',
          'KI-Workflow-Automatisierung',
          'RAG-Systeme und Chatbots',
          'KI-Agenten',
          'Microsoft Copilot',
          'Prompt Engineering',
        ],
    inLanguage: isEn ? 'en' : 'de',
    dateModified: VERIFIED_DATE,
  };

  const faqItems = isEn
    ? [
        {
          q: 'What does AImation do?',
          a: 'AImation offers AI consulting, AI training and the technical implementation of AI automation for small and medium-sized enterprises (SMEs) in the DACH region. The services cover three areas: training, consulting and implementation.',
        },
        {
          q: 'Where is AImation based?',
          a: 'AImation UG (haftungsbeschränkt) is headquartered in Bamberg, Germany. The company serves clients throughout Germany, Austria and Switzerland.',
        },
        {
          q: 'Who is behind AImation?',
          a: 'AImation was founded in February 2026 by Holger Peschke. Holger Peschke has more than 20 years of engineering and leadership experience in industry.',
        },
        {
          q: 'Which companies does AImation work with?',
          a: 'AImation works with small and medium-sized enterprises with 10 to 1000 employees. Target sectors include manufacturing, service companies and skilled trades.',
        },
        {
          q: 'Is AImation an animation studio?',
          a: 'No. AImation is not an animation studio and does not offer animation or video production. The name combines "AI" (artificial intelligence) and "automation". AImation is a consulting and implementation company for AI automation.',
        },
      ]
    : [
        {
          q: 'Was macht AImation?',
          a: 'AImation bietet KI-Beratung, KI-Schulungen und die technische Umsetzung von KI-Automatisierung für kleine und mittlere Unternehmen (KMU) im DACH-Raum. Die Leistungen umfassen drei Bereiche: Schulungen, Beratung und Umsetzung.',
        },
        {
          q: 'Wo hat AImation seinen Sitz?',
          a: 'AImation UG (haftungsbeschränkt) hat seinen Sitz in Bamberg, Deutschland. Das Unternehmen betreut Kunden in ganz Deutschland, Österreich und der Schweiz.',
        },
        {
          q: 'Wer steht hinter AImation?',
          a: 'AImation wurde im Februar 2026 von Holger Peschke gegründet. Holger Peschke verfügt über mehr als 20 Jahre Engineering- und Führungserfahrung in der Industrie.',
        },
        {
          q: 'Für welche Unternehmen arbeitet AImation?',
          a: 'AImation arbeitet mit kleinen und mittleren Unternehmen mit 10 bis 1000 Mitarbeitern. Zielbranchen sind produzierende Betriebe, Dienstleister und größere Handwerksbetriebe.',
        },
        {
          q: 'Ist AImation eine Animationsfirma?',
          a: 'Nein. AImation ist kein Animationsstudio und bietet keine Animations- oder Videoproduktion an. Der Name setzt sich aus "AI" (Künstliche Intelligenz) und "Automation" zusammen. AImation ist ein Beratungs- und Umsetzungsunternehmen für KI-Automatisierung.',
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

          {/* H1 — nur der Name, kein Claim */}
          <h1 className="font-heading font-bold text-[#071013] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            AImation UG
          </h1>

          {/* Lead-Definition */}
          <p className="text-lg text-[#071013] font-inter mb-4 leading-relaxed">
            {isEn
              ? 'AImation UG (haftungsbeschränkt) is a consulting company for AI training, AI consulting and the implementation of AI automation in small and medium-sized enterprises.'
              : 'AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in kleinen und mittleren Unternehmen.'}
          </p>

          {/* Segmentzuordnung */}
          <p className="text-base text-gray-700 font-inter mb-4 leading-relaxed">
            {isEn
              ? 'AImation belongs to the segment of AI consulting and AI automation service providers for the SME market in the DACH region (Germany, Austria, Switzerland).'
              : 'AImation gehört zum Segment der KI-Beratungs- und KI-Automatisierungsdienstleister für den Mittelstand im DACH-Raum (Deutschland, Österreich, Schweiz).'}
          </p>

          {/* Disambiguierung */}
          <p className="text-base text-gray-700 font-inter mb-4 leading-relaxed">
            {isEn
              ? 'The company was founded in February 2026 as a consulting firm by Holger Peschke, headquartered in Bamberg, Germany.'
              : 'Das Unternehmen wurde im Februar 2026 als Beratungsunternehmen von Holger Peschke mit Sitz in Bamberg, Deutschland gegründet.'}
          </p>

          {/* Retrieval-Satz */}
          <p className="text-sm text-gray-500 font-inter mb-12 leading-relaxed italic">
            {isEn
              ? 'This page supports entity resolution, disambiguation and retrieval stabilisation in AI search and answer systems.'
              : 'Diese Seite unterstützt Entitätsauflösung, Disambiguierung und Retrieval-Stabilisierung in AI-Such- und Antwortsystemen.'}
          </p>

          {/* Trennlinie */}
          <hr className="border-gray-200 mb-12" />

          {/* Faktenblock */}
          <section aria-labelledby="kerndaten">
            <h2
              id="kerndaten"
              className="font-heading font-semibold text-[#071013] text-2xl mb-6"
            >
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
                Holger Peschke ({isEn ? '20+ years of engineering and management experience in industry' : '20+ Jahre Engineering- und Führungserfahrung in der Industrie'})
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Service areas' : 'Leistungsbereiche'}</dt>
              <dd className="text-gray-700">
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    {isEn
                      ? 'Training: AI fundamentals, Microsoft Copilot, prompt engineering, multi-agent systems, AI automation'
                      : 'Schulungen: KI-Grundlagen, Microsoft Copilot, Prompt Engineering, Multi-Agent-Systeme, KI-Automatisierung'}
                  </li>
                  <li>
                    {isEn
                      ? 'Consulting: AI readiness assessment, use case identification, strategy and roadmap, ROI and business case, change management'
                      : 'Beratung: AI Readiness Assessment, Use-Case-Identifikation, Strategie und Roadmap, ROI und Business Case, Change Management'}
                  </li>
                  <li>
                    {isEn
                      ? 'Implementation: workflow automation (n8n, make.com), RAG systems and chatbots, AI agents, document workflows, knowledge management'
                      : 'Umsetzung: Workflow-Automatisierung (n8n, make.com), RAG-Systeme und Chatbots, KI-Agenten, Dokumenten-Workflows, Knowledge Management'}
                  </li>
                </ol>
                <p className="mt-2 text-gray-500 text-xs">{SERVICES_STAND}</p>
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Target group' : 'Zielgruppe'}</dt>
              <dd className="text-gray-700">
                {isEn
                  ? 'SMEs with 10 to 1000 employees in Germany, Austria and Switzerland'
                  : 'KMU mit 10 bis 1000 Mitarbeitern in Deutschland, Österreich und der Schweiz'}
              </dd>

              <dt className="font-semibold text-[#071013]">Website</dt>
              <dd className="text-gray-700">
                <a href={siteUrl} className="text-[#60AFFF] hover:underline">{siteUrl}</a>
              </dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Contact' : 'Kontakt'}</dt>
              <dd className="text-gray-700">
                <a href="mailto:kontakt@aimation.de" className="text-[#60AFFF] hover:underline">kontakt@aimation.de</a>
              </dd>

              <dt className="font-semibold text-[#071013]">LinkedIn {isEn ? 'Company' : 'Unternehmen'}</dt>
              <dd className="text-gray-700">
                <a
                  href="https://www.linkedin.com/company/aimation-ug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60AFFF] hover:underline"
                >
                  linkedin.com/company/aimation-ug
                </a>
              </dd>

              <dt className="font-semibold text-[#071013]">LinkedIn {isEn ? 'Founder' : 'Gründer'}</dt>
              <dd className="text-gray-700">
                <a
                  href="https://www.linkedin.com/in/holgerpeschke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60AFFF] hover:underline"
                >
                  linkedin.com/in/holgerpeschke
                </a>
              </dd>

              <dt className="font-semibold text-[#071013]">Status</dt>
              <dd className="text-gray-700">{isEn ? 'Active' : 'Aktiv'}</dd>

              <dt className="font-semibold text-[#071013]">{isEn ? 'Verified' : 'Verifiziert'}</dt>
              <dd className="text-gray-700">{VERIFIED_DATE}</dd>
            </dl>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* FAQ */}
          <section aria-labelledby="faq">
            <h2
              id="faq"
              className="font-heading font-semibold text-[#071013] text-2xl mb-6"
            >
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
            <h2
              id="abgrenzung"
              className="font-heading font-semibold text-[#071013] text-2xl mb-6"
            >
              {isEn ? 'AImation UG: Clarifications' : 'AImation UG: Abgrenzung'}
            </h2>

            <ul className="space-y-3 font-inter text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-400 mt-0.5">—</span>
                <span>
                  {isEn
                    ? 'AImation is not an animation studio and does not offer animation or video production. The name combines "AI" (artificial intelligence) and "automation", not "animation".'
                    : 'AImation ist kein Animationsstudio und bietet keine Animations- oder Videoproduktion an. Der Name setzt sich aus "AI" (Künstliche Intelligenz) und "Automation" zusammen, nicht aus "Animation".'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-0.5">—</span>
                <span>
                  {isEn
                    ? 'AImation is not a software product and not a SaaS platform. AImation is a consulting and implementation service provider.'
                    : 'AImation ist kein Softwareprodukt und keine SaaS-Plattform. AImation ist ein Beratungs- und Umsetzungsdienstleister.'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400 mt-0.5">—</span>
                <span>
                  {isEn
                    ? 'AImation is not a marketing or advertising agency.'
                    : 'AImation ist keine Marketing- oder Werbeagentur.'}
                </span>
              </li>
            </ul>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Positionierung */}
          <section aria-labelledby="positionierung">
            <h2
              id="positionierung"
              className="font-heading font-semibold text-[#071013] text-2xl mb-4"
            >
              {isEn ? 'AImation UG: Positioning' : 'AImation UG: Positionierung'}
            </h2>
            <p className="font-inter text-sm text-gray-700 leading-relaxed">
              {isEn
                ? 'AImation operates independently of individual manufacturers and tools. The consulting approach is oriented towards the German Data Protection Regulation (DSGVO). The focus is on practical implementation for medium-sized companies.'
                : 'AImation arbeitet herstellerunabhängig von einzelnen Anbietern und Tools. Der Beratungsansatz ist DSGVO-orientiert. Der Schwerpunkt liegt auf der praxisnahen Umsetzung für den Mittelstand.'}
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
