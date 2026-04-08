/**
 * Structured Data (Schema.org) Components
 *
 * WICHTIG: Alle Schema-Komponenten sind Server Components (kein 'use client')
 * damit sie im initialen HTML-Response fuer AI-Crawler sichtbar sind.
 * GPTBot, ClaudeBot, PerplexityBot koennen kein JavaScript ausfuehren!
 *
 * Referenz: https://schema.org/
 */

interface OrganizationSchemaProps {
  siteUrl?: string;
}

/**
 * Organization Schema - Grundlegende Unternehmensinfos
 *
 * Auf JEDER Seite vorhanden (im Layout als Server Component)
 */
export function OrganizationSchema({ siteUrl = 'https://www.aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "AI.mation",
    "alternateName": ["AImation", "AImation UG"],
    "legalName": "AImation UG (haftungsbeschränkt)",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logos/aimation-logo-transparent-light.svg`,
      "width": "185",
      "height": "61"
    },
    "image": `${siteUrl}/images/og-image.png`,
    "description": "KI-Beratung, Schulungen und Umsetzung für kleine und mittlere Unternehmen im DACH-Raum. 20 Jahre Engineering-Erfahrung, keine leeren Versprechen, keine Konzernpreise.",
    "slogan": "Mehr Zeit für das Wesentliche",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sutte 19",
      "addressLocality": "Bamberg",
      "postalCode": "96049",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@aimation.de",
      "availableLanguage": [
        { "@type": "Language", "name": "German" },
        { "@type": "Language", "name": "English" }
      ],
      "areaServed": ["DE", "AT", "CH"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/holgerpeschke/",
      "https://www.linkedin.com/company/aimation"
    ],
    "founder": {
      "@type": "Person",
      "@id": `${siteUrl}/#holger-peschke`,
      "name": "Holger Peschke",
      "jobTitle": "Gründer & KI-Berater",
      "description": "20+ Jahre Engineering-Erfahrung in produzierenden Unternehmen. Spezialisiert auf KI-Automatisierung und -Beratung für den Mittelstand. 18.000+ LinkedIn-Follower.",
      "image": `${siteUrl}/images/holger-consulting.png`,
      "url": `${siteUrl}/#ueber-mich`,
      "sameAs": ["https://www.linkedin.com/in/holgerpeschke/"],
      "knowsAbout": [
        "Künstliche Intelligenz",
        "Prozessautomatisierung",
        "Multi-Agent-Systeme",
        "RAG-Systeme",
        "Engineering Leadership",
        "KI-Beratung",
        "Change Management",
        "Microsoft Copilot",
        "n8n Workflow-Automatisierung"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "KI-Berater",
        "occupationLocation": {
          "@type": "Country",
          "name": "Deutschland"
        }
      }
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Deutschland",
        "@id": "https://www.wikidata.org/wiki/Q183"
      },
      {
        "@type": "Country",
        "name": "Österreich",
        "@id": "https://www.wikidata.org/wiki/Q40"
      },
      {
        "@type": "Country",
        "name": "Schweiz",
        "@id": "https://www.wikidata.org/wiki/Q39"
      }
    ],
    "knowsAbout": [
      "Künstliche Intelligenz",
      "KI-Automatisierung",
      "KI-Beratung für KMUs",
      "KI-Schulungen",
      "RAG-Systeme",
      "Multi-Agent-Systeme",
      "Prozessautomatisierung",
      "n8n Workflows",
      "Microsoft Copilot"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * K4 FIX: LocalBusiness Schema - fuer lokale Sichtbarkeit in DACH
 *
 * Kritisch fuer Google Business Profile Verknuepfung und lokale Suche.
 * AImation UG ist in Bamberg registriert (aus Impressum).
 */
export function LocalBusinessSchema({ siteUrl = 'https://www.aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#localbusiness`,
    "name": "AI.mation",
    "legalName": "AImation UG (haftungsbeschränkt)",
    "description": "KI-Beratung, Schulungen und Automatisierung für kleine und mittlere Unternehmen im DACH-Raum. 20 Jahre Engineering-Erfahrung.",
    "url": siteUrl,
    "telephone": "",
    "email": "info@aimation.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sutte 19",
      "addressLocality": "Bamberg",
      "addressRegion": "Bayern",
      "postalCode": "96049",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.8988",
      "longitude": "10.9028"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "Auf Anfrage",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Rechnung",
    "areaServed": [
      { "@type": "Country", "name": "Deutschland" },
      { "@type": "Country", "name": "Österreich" },
      { "@type": "Country", "name": "Schweiz" }
    ],
    "serviceType": [
      "KI-Beratung",
      "KI-Schulungen",
      "KI-Automatisierung",
      "AI Readiness Assessment"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KI-Services für KMUs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kostenloses KI-Erstgespräch",
            "description": "30-minütiges kostenloses Beratungsgespräch zur Einschätzung des KI-Potenzials in Ihrem Unternehmen."
          },
          "price": "0",
          "priceCurrency": "EUR"
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/aimation",
      "https://www.linkedin.com/in/holgerpeschke/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service Schema - Beschreibt die 3 Service-Säulen
 *
 * Auf Startseite und Service-Seiten verwenden
 */
export function ServiceSchema({ siteUrl = 'https://www.aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "@id": `${siteUrl}/#service-schulungen`,
          "name": "KI-Schulungen für Unternehmen",
          "description": "Von KI-Grundlagen bis zu fortgeschrittenen Techniken. 3 Ebenen: Einstieg & Awareness, Anwendung & Tools, Fortgeschritten & Spezialisiert. Themen: Generative KI, Prompt Engineering, Microsoft Copilot, Multi-Agent-Systeme, Vibe Coding.",
          "provider": {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`
          },
          "url": `${siteUrl}/#leistungen`,
          "areaServed": [
            { "@type": "Country", "name": "Deutschland" },
            { "@type": "Country", "name": "Österreich" },
            { "@type": "Country", "name": "Schweiz" }
          ],
          "serviceType": "Training & Schulung",
          "category": "Künstliche Intelligenz Schulung",
          "audience": {
            "@type": "Audience",
            "audienceType": "Kleine und mittlere Unternehmen (10-1000 Mitarbeiter)"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "KI-Schulungsmodule",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Generative KI verstehen", "description": "Grundlagen der KI für Entscheider und Mitarbeiter" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Microsoft Copilot Training", "description": "Praktischer Umgang mit Microsoft 365 Copilot" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Prompt Engineering", "description": "Fortgeschrittene Prompt-Techniken für Teams" } }
            ]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "@id": `${siteUrl}/#service-beratung`,
          "name": "KI-Beratung für KMUs",
          "description": "3-Phasen-Modell: Analyse (Wo stehen wir?), Strategie (Wo wollen wir hin?), Begleitung (Wie kommen wir dahin?). Module: AI Readiness Assessment, Use Case Identification, AI Roadmap, Change Management, KI-Governance.",
          "provider": {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`
          },
          "url": `${siteUrl}/#leistungen`,
          "areaServed": [
            { "@type": "Country", "name": "Deutschland" },
            { "@type": "Country", "name": "Österreich" },
            { "@type": "Country", "name": "Schweiz" }
          ],
          "serviceType": "Beratung & Strategie",
          "category": "KI-Beratung",
          "audience": {
            "@type": "Audience",
            "audienceType": "KMU-Entscheider, Geschäftsführer, Bereichsleiter"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "@id": `${siteUrl}/#service-umsetzung`,
          "name": "KI-Umsetzung & Automatisierung für KMUs",
          "description": "Von Workflows über RAG-Systeme bis zu intelligenten Agenten. 4 Lösungswelten: FLOW (Workflows & Prozesse), KNOW (Wissen & Intelligence), THINK (Innovation & Strategie), WORK (Assistenten & Produktivität).",
          "provider": {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`
          },
          "url": `${siteUrl}/#leistungen`,
          "areaServed": [
            { "@type": "Country", "name": "Deutschland" },
            { "@type": "Country", "name": "Österreich" },
            { "@type": "Country", "name": "Schweiz" }
          ],
          "serviceType": "Implementierung & Umsetzung",
          "category": "KI-Automatisierung",
          "audience": {
            "@type": "Audience",
            "audienceType": "KMU-Umsetzer, IT-Leiter, Prozessverantwortliche"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * K3 FIX: PersonSchema jetzt als reiner Server-Export fuer Verwendung im Layout
 *
 * Wurde vorher in About.tsx ('use client') eingebunden und war fuer AI-Crawler unsichtbar.
 * Jetzt im layout.tsx als Server Component gerendert.
 */
export function PersonSchema({ siteUrl = 'https://www.aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#holger-peschke`,
    "name": "Holger Peschke",
    "givenName": "Holger",
    "familyName": "Peschke",
    "jobTitle": "KI-Berater & Gründer",
    "description": "20+ Jahre Engineering-Erfahrung in produzierenden Unternehmen. Spezialisiert auf KI-Automatisierung und -Beratung für den Mittelstand. 18.000+ LinkedIn-Follower. Gründer von AI.mation.",
    "image": `${siteUrl}/images/holger-consulting.png`,
    "url": `${siteUrl}/#ueber-mich`,
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "AI.mation"
    },
    "sameAs": [
      "https://www.linkedin.com/in/holgerpeschke/"
    ],
    "knowsAbout": [
      "Künstliche Intelligenz",
      "Prozessautomatisierung",
      "Multi-Agent-Systeme",
      "RAG-Systeme",
      "Engineering Leadership",
      "KI-Beratung",
      "Change Management",
      "Microsoft Copilot",
      "n8n Workflow-Automatisierung"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "KI-Berater",
      "occupationLocation": {
        "@type": "Country",
        "name": "Deutschland"
      },
      "description": "Beratung, Schulung und Umsetzung von KI-Projekten für kleine und mittlere Unternehmen im DACH-Raum"
    },
    "alumniOf": [],
    "award": "18.000+ LinkedIn-Follower im Bereich KI und Automatisierung"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema - Sitewide Search & Navigation
 */
export function WebSiteSchema({ siteUrl = 'https://www.aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": "AI.mation",
    "url": siteUrl,
    "description": "KI-Beratung, Schulungen und Automatisierung für den Mittelstand. 40% Zeitersparnis durch intelligente KI-Implementierung.",
    "inLanguage": "de-DE",
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": siteUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  siteUrl?: string;
}

/**
 * BreadcrumbList Schema - für Unterseiten (Pillar Pages, Blog, Use Cases)
 *
 * Verwendung:
 * <BreadcrumbSchema items={[
 *   { name: 'Startseite', url: '/' },
 *   { name: 'KI-Agenten für Unternehmen', url: '/ki-agenten-unternehmen' },
 * ]} />
 */
export function BreadcrumbSchema({ items, siteUrl }: BreadcrumbSchemaProps) {
  const base = siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${base}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

/**
 * FAQPage Schema - KRITISCH fuer AI-Citations und Featured Snippets
 *
 * K3 FIX: Nicht mehr in 'use client' FAQ.tsx eingebunden.
 * Stattdessen wird dieses Schema in page.tsx (Server Component) verwendet
 * und die FAQ-Daten werden aus FAQ.tsx exportiert und hier konsumiert.
 *
 * WICHTIG: Question-Text muss EXAKT mit H3-Heading uebereinstimmen.
 * Antworten sollten 40-60 Woerter sein (optimal fuer Featured Snippets).
 */
export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
