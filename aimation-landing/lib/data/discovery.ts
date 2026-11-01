// Editorial destinations for the shorter homepage. Existing content remains on these pages.
export const DISCOVERY_PAGES = {
  werkstatt: { path: '/entwicklungswerkstatt', de: { title: 'Einblicke in die Entwicklungswerkstatt', label: 'Entwicklungswerkstatt', description: 'CAD, FEM, Patentmodelle, CNC und eigene Anwendungen im Einsatz: Sehen Sie die vollständigen Videos, erkunden Sie Werkzeuge und prüfen Sie den jeweiligen Entwicklungsstand.' }, en: { title: 'Inside our engineering workshop', label: 'Engineering workshop', description: 'CAD, FEM, patent models, CNC and our own applications in action: watch the complete videos, explore the tools and check their current development stages.' } },
  anwendungen: { path: '/ki-anwendungsfaelle', de: { title: 'KI-Anwendungsfälle für Ihre Entwicklung', label: 'Anwendungsfälle', description: 'Wählen Sie einen Entwicklungsbereich und spielen Sie einen Ablauf durch. Die Beispiele zeigen Aufgaben, mögliche Unterstützung durch KI und die nötige fachliche Prüfung.' }, en: { title: 'AI use cases for your engineering team', label: 'Use cases', description: 'Choose an engineering area and walk through a workflow. The examples explain tasks, possible AI support and the engineering review that remains necessary.' } },
  wirtschaftlichkeit: { path: '/wirtschaftlichkeit', de: { title: 'Zeitpotenzial und Wirtschaftlichkeit prüfen', label: 'Wirtschaftlichkeit', description: 'Rechnen Sie mit Ihren eigenen Annahmen: Zeitaufwand, Teamgröße und Stundensatz. Vergleichen Sie anschließend Qualität, Kosten und Timing für einen möglichen Pilot.' }, en: { title: 'Assess time savings and economic viability', label: 'Economic viability', description: 'Calculate with your own assumptions: time spent, team size and hourly cost. Then compare quality, cost and timing for a possible pilot.' } },
  zusammenarbeit: { path: '/zusammenarbeit', de: { title: 'So arbeiten wir zusammen', label: 'Zusammenarbeit', description: 'Vom Erstgespräch über die KI-Landkarte bis zum Pilot und zur Umsetzung: Hier finden Sie den Ablauf, die Preise und die passenden Schulungen für Ihr Team.' }, en: { title: 'How we work together', label: 'Working together', description: 'From the first conversation through the AI roadmap to a pilot and implementation: explore the process, prices and suitable training for your team.' } },
  person: { path: '/ueber-holger-peschke', de: { title: 'Holger Peschke und AImation', label: 'Über Holger Peschke', description: '20 Jahre Automobilentwicklung und Führungserfahrung. Lernen Sie den Gründer von AImation, seinen Weg zur KI und seine Mitgliedschaften und Partnerschaften kennen.' }, en: { title: 'Holger Peschke and AImation', label: 'About Holger Peschke', description: '20 years of automotive engineering and leadership experience. Meet the founder of AImation, explore his path into AI and his memberships and partnerships.' } },
} as const;
export type DiscoveryKey = keyof typeof DISCOVERY_PAGES;

// Fragments from previously shared homepage URLs remain valid after moving the sections.
export const MOVED_HOME_ANCHORS: Record<string, string> = {
  'use-cases': '/ki-anwendungsfaelle', 'landscape-entdecken': '/ki-anwendungsfaelle',
  'development-landscape-video': '/ki-anwendungsfaelle', 'herausforderungen': '/ki-anwendungsfaelle',
  'vorher-nachher': '/ki-anwendungsfaelle', 'zeitpotenzial': '/wirtschaftlichkeit',
  'qualitaet-kosten-timing': '/wirtschaftlichkeit', 'selbst-gebaut': '/entwicklungswerkstatt',
  'ueber-mich': '/ueber-holger-peschke',
  'leistungen': '/zusammenarbeit', 'ki-landkarte': '/zusammenarbeit',
};
export function movedHomeDestination(hash: string): string | undefined {
  const id = hash.replace(/^#/, '');
  const path = MOVED_HOME_ANCHORS[id] ?? (id.startsWith('use-case-') ? '/ki-anwendungsfaelle' : id.startsWith('werkzeug-') ? '/entwicklungswerkstatt' : undefined);
  return path ? `${path}#${id}` : undefined;
}
