/**
 * Structured Data (Schema.org) Components
 *
 * Diese Components fügen JSON-LD Structured Data für Suchmaschinen und AI-Crawler hinzu.
 * Schema.org Markup ist KRITISCH für:
 * - Google Rich Snippets
 * - AI-Citations (ChatGPT, Perplexity, Claude)
 * - Knowledge Graph Integration
 *
 * Referenz: https://schema.org/
 */

interface OrganizationSchemaProps {
  siteUrl?: string;
}

/**
 * Organization Schema - Grundlegende Unternehmensinfos
 *
 * Sollte auf JEDER Seite vorhanden sein (im Layout)
 * Hilft Suchmaschinen zu verstehen:
 * - Wer ist AI.mation?
 * - Kontaktdaten
 * - Social Media Profile
 * - Gründer/Team
 */
export function OrganizationSchema({ siteUrl = 'https://aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI.mation",
    "alternateName": "AImation",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logo/logo-horizontal-light.svg`,
      "width": "400",
      "height": "100"
    },
    "description": "KI-Beratung, Schulungen und Umsetzung für kleine und mittlere Unternehmen im DACH-Raum. 20 Jahre Engineering-Erfahrung, keine Buzzwords, keine Konzernpreise.",
    "slogan": "Automatisierung mit Intelligenz",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Beratung",
      "email": "kontakt@aimation.de",
      "availableLanguage": ["de", "en"],
      "areaServed": "DACH"
    },
    "sameAs": [
      // TODO: Ergänze echte Social-Media-URLs
      "https://www.linkedin.com/in/holger-peschke",
      "https://www.linkedin.com/company/aimation"
    ],
    "founder": {
      "@type": "Person",
      "name": "Holger Peschke",
      "jobTitle": "Gründer & KI-Berater",
      "description": "20+ Jahre Engineering-Erfahrung, 18.000+ LinkedIn-Follower",
      "knowsAbout": [
        "Künstliche Intelligenz",
        "Prozessautomatisierung",
        "Multi-Agent-Systeme",
        "RAG-Systeme",
        "Engineering Leadership"
      ]
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.1657",
        "longitude": "10.4515"
      },
      "geoRadius": "500000",
      "description": "DACH-Region (Deutschland, Österreich, Schweiz)"
    },
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
 * Service Schema - Beschreibt die 3 Service-Säulen
 *
 * Sollte auf Startseite und Service-Seiten verwendet werden
 */
export function ServiceSchema({ siteUrl = 'https://aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "KI-Schulungen für Unternehmen",
          "description": "Von KI-Grundlagen bis zu fortgeschrittenen Techniken. 3 Ebenen: Einstieg & Awareness, Anwendung & Tools, Fortgeschritten & Spezialisiert. Themen: Generative KI, Prompt Engineering, Microsoft Copilot, Multi-Agent-Systeme, Vibe Coding.",
          "provider": {
            "@type": "Organization",
            "name": "AI.mation"
          },
          "areaServed": {
            "@type": "Place",
            "name": "DACH-Region"
          },
          "serviceType": "Training & Schulung",
          "category": "Künstliche Intelligenz Schulung",
          "audience": {
            "@type": "Audience",
            "audienceType": "Kleine und mittlere Unternehmen (10-1000 Mitarbeiter)"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "KI-Beratung für KMUs",
          "description": "3-Phasen-Modell: Analyse (Wo stehen wir?), Strategie (Wo wollen wir hin?), Begleitung (Wie kommen wir dahin?). Module: AI Readiness Assessment, Use Case Identification, AI Roadmap, Change Management, KI-Governance.",
          "provider": {
            "@type": "Organization",
            "name": "AI.mation"
          },
          "areaServed": {
            "@type": "Place",
            "name": "DACH-Region"
          },
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
          "name": "KI-Umsetzung & Automatisierung",
          "description": "Von Workflows über RAG-Systeme bis zu intelligenten Agenten. 4 Lösungswelten: FLOW (Workflows & Prozesse), KNOW (Wissen & Intelligence), THINK (Innovation & Strategie), WORK (Assistenten & Produktivität).",
          "provider": {
            "@type": "Organization",
            "name": "AI.mation"
          },
          "areaServed": {
            "@type": "Place",
            "name": "DACH-Region"
          },
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
 * Person Schema - Holger Peschke (Gründer)
 *
 * Sollte auf About-Sektion verwendet werden
 * Hilft bei Personal Branding und E-E-A-T (Expertise, Experience, Authority, Trust)
 */
export function PersonSchema({ siteUrl = 'https://aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Holger Peschke",
    "jobTitle": "KI-Berater & Gründer",
    "description": "20+ Jahre Engineering-Erfahrung, spezialisiert auf KI-Automatisierung für den Mittelstand. 18.000+ LinkedIn-Follower.",
    "image": `${siteUrl}/images/holger-consulting.png`,
    "url": `${siteUrl}/#ueber-mich`,
    "worksFor": {
      "@type": "Organization",
      "name": "AI.mation"
    },
    "sameAs": [
      // TODO: Ergänze echte LinkedIn-URL
      "https://www.linkedin.com/in/holger-peschke"
    ],
    "knowsAbout": [
      "Künstliche Intelligenz",
      "Prozessautomatisierung",
      "Multi-Agent-Systeme",
      "RAG-Systeme",
      "Engineering Leadership",
      "KI-Beratung",
      "Change Management"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "KI-Berater",
      "occupationLocation": {
        "@type": "Country",
        "name": "Deutschland"
      },
      "description": "Beratung, Schulung und Umsetzung von KI-Projekten für kleine und mittlere Unternehmen"
    }
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
 *
 * Hilft Google bei der Verknüpfung von Site-Search
 */
export function WebSiteSchema({ siteUrl = 'https://aimation.de' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI.mation - KI-Automatisierung für KMUs",
    "url": siteUrl,
    "description": "KI-Beratung, Schulungen und Umsetzung für den Mittelstand. 40% Zeitersparnis durch intelligente Automatisierung.",
    "inLanguage": "de-DE",
    "publisher": {
      "@type": "Organization",
      "name": "AI.mation"
    }
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
 * FAQPage Schema - KRITISCH für AI-Citations!
 *
 * Laut Research: FAQPage Schema hat 78% höhere AI-Citation-Rate
 * Sollte auf jeder Seite mit FAQ-Sektion verwendet werden
 *
 * WICHTIG:
 * - Question-Text muss EXAKT mit H3-Heading übereinstimmen
 * - Answer sollte 40-60 Wörter sein (optimal für Featured Snippets)
 * - Direkte Antwort im ersten Satz
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
