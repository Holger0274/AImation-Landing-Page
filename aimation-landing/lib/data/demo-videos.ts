import { LANDSCAPE_SNAPSHOT } from './engineering-landscape';

export const DEMO_PATHS = {
  'pm-demonstrator': '/use-cases/projektsteuerung-entwicklung',
  varianthub: '/use-cases/variantenmanagement',
  skillmatrix: '/use-cases/skillmatrix-entwicklung',
} as const;

// Source descriptions and original recordings: /Videos, September 2026.
// AI shown in a recording is described as such, not as a production guarantee.
export const APPLICATION_DEMOS = [
  {
    id: 'pm-demonstrator', name: 'PM Demonstrator',
    de: {
      topic: 'Projekte & Kapazitäten', status: 'Proof of Concept',
      headline: 'Projekte steuern. Den Überblick behalten.',
      description: 'Arbeitspakete, Termine und Kapazitäten laufen in einem System zusammen. Das Video zeigt, wie daraus begründete Projektampeln und ein Statusbericht entstehen.',
      features: ['Terminabweichungen und Abhängigkeiten erkennen', 'Engpässe in der Teamplanung nachvollziehen', 'Berichtsentwürfe prüfen und freigeben'],
      note: 'Im Video: KI-Risiko-Radar und KI-Berichtsentwurf. Gezeigt wird ein Demonstrationsstand mit fiktiven Projektdaten. Funktionsumfang, Anmeldung und Schnittstellen werden für einen Piloten abgestimmt.',
      poster: 'PM Demonstrator: Projektportfolio mit Statusampeln und hervorgehobenem Lieferverzug',
    },
    en: {
      topic: 'Projects & capacity', status: 'Proof of concept',
      headline: 'Manage projects. Keep the overview.',
      description: 'Work packages, schedules and capacity come together in one system. The video shows how they inform explained project indicators and a status report.',
      features: ['Identify schedule deviations and dependencies', 'Understand bottlenecks in team planning', 'Review and approve draft reports'],
      note: 'Shown in the video: AI risk radar and AI report drafts. This is a demonstration using fictional project data. Pilot scope, authentication and integrations need to be agreed.',
      poster: 'PM Demonstrator: project portfolio with status indicators and a highlighted supplier delay',
    },
  },
  {
    id: 'varianthub', name: 'VariantHub',
    de: {
      topic: 'Varianten & Regeln', status: 'Lauffähiger Prototyp',
      headline: 'Varianten prüfen, bevor Fehler entstehen.',
      description: 'Welche Kombination ist technisch machbar? VariantHub prüft Merkmale und Regeln, erklärt Ausschlüsse und zeigt die Folgen einer Änderung vor der Freigabe.',
      features: ['Excel-Variantenlisten einlesen und prüfen', 'Unzulässige Kombinationen mit Begründung erkennen', 'Auswirkungen von Regeländerungen vorab sehen'],
      note: 'Mit KI entwickelt. Der fachliche Kern prüft deterministisch anhand von Regeln. KI-Regelvorschläge sind als Erweiterung vorgesehen. Das Video zeigt Demodaten.',
      poster: 'VariantHub: Kreisdiagramm des gültigen Lösungsraums aus Leistung, Einsatzbereich und Schutzart',
    },
    en: {
      topic: 'Variants & rules', status: 'Working prototype',
      headline: 'Check variants before errors arise.',
      description: 'Which combination is technically feasible? VariantHub checks features and rules, explains exclusions and shows the impact of a change before approval.',
      features: ['Import and check Excel variant lists', 'Identify invalid combinations with explanations', 'Preview the impact of rule changes'],
      note: 'Developed with AI. The core uses deterministic rule checks. AI-generated rule suggestions are a planned extension. The video uses demo data.',
      poster: 'VariantHub: radial chart of valid combinations of power, application and protection class',
    },
  },
  {
    id: 'skillmatrix', name: 'Skillmatrix',
    de: {
      topic: 'Wissen & Teams', status: 'Demo mit Beispieldaten',
      headline: 'Wissen sichtbar machen, bevor es fehlt.',
      description: 'Welche Kompetenzen trägt das Team, und wo hängt Wissen an einzelnen Personen? Die Skillmatrix verbindet Teamübersicht, Wissensrisiken und den Abgleich mit künftigen Anforderungen.',
      features: ['Kompetenzen nach Team und Standort überblicken', 'Wissenslücken und einzelne Wissensträger erkennen', 'Wissenstransfer und Schulung gezielt planen'],
      note: 'Mit KI entwickelt. Gezeigt wird das fiktive Unternehmen Musterwerk Mechatronik. Die Auswertungen unterstützen die Kompetenzplanung und sind keine Leistungsbewertung von Personen.',
      poster: 'Skillmatrix: Verteilung von Entwicklungskapazitäten zwischen Standorten und Produktlinien',
    },
    en: {
      topic: 'Knowledge & teams', status: 'Demo with sample data',
      headline: 'Make knowledge visible before it is missing.',
      description: 'Which skills does the team hold, and where does knowledge depend on one person? Skillmatrix connects team coverage, knowledge risks and future requirements.',
      features: ['See skills by team and location', 'Identify knowledge gaps and single knowledge holders', 'Plan knowledge transfer and targeted training'],
      note: 'Developed with AI. The demonstration uses the fictional company Musterwerk Mechatronik. These views support skills planning, not individual performance evaluation.',
      poster: 'Skillmatrix: engineering capacity flows between locations and product lines',
    },
  },
] as const;

// Existing recordings were added to the public site on 27 September 2026.
// Dates describe the recordings, not the later creation of their watch pages.
export const DEMO_VIDEOS = [
  ...APPLICATION_DEMOS.map(demo => ({
    ...demo, path: `/videos/${demo.id}`, related: DEMO_PATHS[demo.id],
    seconds: 90, duration: '1:30', width: 1920, height: 1080,
    uploadDate: '2026-09-27',
  })),
  {
    id: 'development-landscape', name: 'Development Landscape',
    path: '/videos/development-landscape', related: '/#landscape-entdecken',
    seconds: 140, duration: '2:20', width: 1280, height: 720,
    uploadDate: '2026-09-27',
    de: {
      topic: 'KI-Anwendungsfälle in der Produktentwicklung', status: 'Katalog mit Anwendungsideen',
      headline: 'Den passenden Einstieg für Ihre Entwicklung finden.',
      description: `Das Video führt durch ${LANDSCAPE_SNAPSHOT.cases} Anwendungsideen in ${LANDSCAPE_SNAPSHOT.areas} Bereichen der Produktentwicklung und angrenzender Aufgaben. Sie sehen den Katalog, eigene Werkzeuge und die Bewertung von Ideen.`,
      features: ['Anwendungsfälle entlang der Entwicklungsphasen erkunden', 'Eigene Werkzeuge aus der Entwicklung ansehen', 'Ideen für den eigenen Arbeitsablauf einordnen'],
      note: `Der Katalog enthält Anwendungsideen, keine ${LANDSCAPE_SNAPSHOT.cases} umgesetzten Kundenprojekte. Welche Aufgabe zu Ihrem Unternehmen passt, hängt von Ihren Daten, Abläufen und nötigen Prüfschritten ab.`,
      poster: `Development Landscape: ${LANDSCAPE_SNAPSHOT.cases} Anwendungsideen entlang der Entwicklungsphasen`,
    },
    en: {
      topic: 'AI use cases in product development', status: 'Catalogue of application ideas',
      headline: 'Find a starting point for your engineering team.',
      description: `The video tours ${LANDSCAPE_SNAPSHOT.cases} application ideas across ${LANDSCAPE_SNAPSHOT.areas} areas of product development and related work. See the catalogue, our own tools and how ideas are assessed.`,
      features: ['Explore use cases across development phases', 'See tools from our own development work', 'Assess ideas for your own workflow'],
      note: `The catalogue contains application ideas, not ${LANDSCAPE_SNAPSHOT.cases} delivered customer projects. Suitability depends on your data, workflows and required review steps.`,
      poster: `Development Landscape: ${LANDSCAPE_SNAPSHOT.cases} application ideas across development phases`,
    },
  },
] as const;
