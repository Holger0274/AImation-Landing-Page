// Proposed evaluation plans. No measurements or customer outcomes are claimed.
type Comparison = {
  benefit: string; video: string; task: string; owner: string; cta: string;
  next: string; rows: { task: string; before: string; withTool: string; measure: string }[];
};
export const APPLICATION_COMPARISONS: Record<string, { de: Comparison; en: Comparison }> = {
  variants: {
    de: {
      benefit: 'Regelwissen griffbereit. Änderungen mit Überblick.',
      video: 'Sehen Sie, wie aus einer Excel-Liste ein prüfbarer Lösungsraum wird.',
      task: 'Eine Produktfamilie, derselbe Listenstand und eine festgelegte Regeländerung. Bekannte gültige und ungültige Kombinationen bilden den Prüfbestand.',
      owner: 'Konstruktion oder Produktmanagement bestätigt die erwarteten Ergebnisse. Einmaliger Datenimport und Regelaufbau werden getrennt vom wiederkehrenden Prüfaufwand erfasst.',
      cta: 'Variantenliste besprechen',
      next: 'Bringen Sie eine anonymisierte Variantenliste und eine typische Regeländerung ins Gespräch mit. Wir klären, welche Merkmale und Prüfregeln für einen ersten Vergleich fehlen.',
      rows: [
        { task: 'Eine Variante prüfen', before: 'Kombination in der Liste suchen und Ausschlussregeln einzeln abgleichen.', withTool: 'Merkmale wählen und die begründeten Ausschlüsse im Konfigurator prüfen.', measure: 'Bearbeitungszeit einschließlich Kontrolle; übersehene und fälschlich gemeldete Regelverstöße.' },
        { task: 'Eine Regel ändern', before: 'Betroffene Varianten in Excel ermitteln und erneut bewerten.', withTool: 'Die Änderungsvorschau mit dem erwarteten Lösungsraum vergleichen.', measure: 'Zeit bis zur geprüften Änderung; korrekt erkannte betroffene Varianten.' },
      ],
    },
    en: {
      benefit: 'Rules within reach. Changes with context.',
      video: 'See an Excel list become a solution space you can check.',
      task: 'One product family, the same list version and a defined rule change. Known valid and invalid combinations form the test set.',
      owner: 'Engineering or product management confirms the expected results. One-off import and rule setup are recorded separately from recurring review effort.',
      cta: 'Discuss your variant list',
      next: 'Bring an anonymised variant list and a typical rule change to the conversation. We identify missing features and rules for a first comparison.',
      rows: [
        { task: 'Check a variant', before: 'Find the combination in the list and check exclusion rules individually.', withTool: 'Select features and review the explained exclusions in the configurator.', measure: 'Handling time including review; missed and incorrectly flagged rule violations.' },
        { task: 'Change a rule', before: 'Identify affected variants in Excel and reassess them.', withTool: 'Compare the change preview with the expected solution space.', measure: 'Time to a checked change; correctly identified affected variants.' },
      ],
    },
  },
  skills: {
    de: {
      benefit: 'Transfer dort planen, wo Wissen an einer Person hängt.',
      video: 'Sehen Sie Kompetenzabdeckung, Reservewissen und den Ausfall einer Schlüsselperson im Zusammenhang.',
      task: 'Ein Team, ein abgestimmtes Kompetenzmodell und derselbe Datenstand. Eine festgelegte Ausfallsituation bildet den Vergleichsfall.',
      owner: 'Die Teamleitung prüft die fachliche Abdeckung. Datenerhebung und laufende Pflege zählen zum Aufwand. Der Vergleich bewertet die Planung, nicht die Leistung einzelner Beschäftigter.',
      cta: 'Wissensrisiken im Team besprechen',
      next: 'Wählen Sie ein Team und eine Kompetenz, für die heute eine Vertretung fehlt. Im Gespräch klären wir Datenbasis, Beteiligung und einen passenden Einstieg.',
      rows: [
        { task: 'Vertretung finden', before: 'Listen und Rückfragen zusammenführen, um aktive Kompetenzen und Reservewissen zu erfassen.', withTool: 'Abdeckung und Reservewissen für das festgelegte Anforderungsprofil ansehen.', measure: 'Zeit bis zur fachlich bestätigten Übersicht; fehlende oder veraltete Kompetenzangaben.' },
        { task: 'Transfer priorisieren', before: 'Wissenslücken und künftige Anforderungen für die Schulungsplanung zusammenstellen.', withTool: 'Wissensrisiken und Strategie-Abgleich als Grundlage für Transfermaßnahmen nutzen.', measure: 'Fachlich bestätigte Lücken mit benannter Maßnahme und Zuständigkeit; Pflegeaufwand.' },
      ],
    },
    en: {
      benefit: 'Plan transfer where knowledge depends on one person.',
      video: 'See how skills coverage, reserve knowledge and a key person’s absence connect.',
      task: 'One team, an agreed competency model and the same data version. A defined absence scenario forms the comparison case.',
      owner: 'The team lead validates coverage. Data collection and ongoing maintenance count towards effort. The comparison evaluates planning, not individual employee performance.',
      cta: 'Discuss your team’s knowledge risks',
      next: 'Choose a team and a skill that currently lacks backup coverage. We discuss the data, participation and a suitable starting point.',
      rows: [
        { task: 'Find backup coverage', before: 'Combine lists and follow-up questions to establish active and reserve knowledge.', withTool: 'Review coverage and reserve skills for the defined requirement profile.', measure: 'Time to an expert-confirmed overview; missing or outdated skills information.' },
        { task: 'Prioritise transfer', before: 'Collect skills gaps and future requirements for training planning.', withTool: 'Use knowledge risks and the strategy comparison to inform transfer activities.', measure: 'Confirmed gaps with a named action and owner; maintenance effort.' },
      ],
    },
  },
  projects: {
    de: {
      benefit: 'Im Review über Maßnahmen sprechen. Mit nachvollziehbarem Projektstand.',
      video: 'Verfolgen Sie den Weg vom Arbeitspaket über den Engpass zum Berichtsentwurf.',
      task: 'Ein Projektreview mit eingefrorenem Datenstand. Arbeitspakete, Abhängigkeiten, Kapazitäten und Berichtsvorlage sind für beide Durchläufe identisch.',
      owner: 'Die Projektleitung prüft Status, Quellen und Maßnahmen. Datenpflege, Kontrollzeit und Korrekturen am Bericht gehören zur Gesamtzeit, auch wenn der Entwurf schnell vorliegt.',
      cta: 'Ihre Projektsteuerung besprechen',
      next: 'Wählen Sie ein Entwicklungsprojekt und einen wiederkehrenden Statusbericht als Ausgangspunkt. Wir klären, wo Daten zusammengesucht werden, welche Engpässe heute spät auffallen und welche Anpassungen an Ihren Ablauf ein Pilot braucht.',
      rows: [
        { task: 'Engpass erkennen', before: 'Termine, Abhängigkeiten und Kapazitätslisten einzeln für das Review abgleichen.', withTool: 'Zusammenhängende Projektdaten und begründete Risikohinweise prüfen.', measure: 'Erkannte und übersehene Abhängigkeiten; Aufwand zur Prüfung von Risikohinweisen.' },
        { task: 'Bericht vorbereiten', before: 'Statusdaten übertragen, offene Punkte zusammentragen und Formulierungen abstimmen.', withTool: 'Den Berichtsentwurf an den Quellen prüfen und fachlich ergänzen.', measure: 'Gesamtzeit bis zur Freigabe; Zahl und Schwere notwendiger Korrekturen.' },
      ],
    },
    en: {
      benefit: 'Discuss actions in the review. With a traceable project status.',
      video: 'Follow the path from a work package through a bottleneck to the report draft.',
      task: 'One project review with a frozen data version. Work packages, dependencies, capacity and the report template are identical for both runs.',
      owner: 'The project lead checks status, sources and actions. Data maintenance, review and report corrections all count towards total time, even when drafting is fast.',
      cta: 'Discuss your project workflow',
      next: 'Choose one engineering project and a recurring status report as the starting point. We discuss where data is gathered by hand, which bottlenecks currently surface late and how a pilot needs to fit your workflow.',
      rows: [
        { task: 'Identify a bottleneck', before: 'Check schedules, dependencies and capacity lists separately before the review.', withTool: 'Review connected project data and explained risk suggestions.', measure: 'Detected and missed dependencies; effort to check risk suggestions.' },
        { task: 'Prepare the report', before: 'Transfer status data, collect open issues and agree wording.', withTool: 'Check the report draft against sources and add the expert assessment.', measure: 'Total time to approval; number and severity of required corrections.' },
      ],
    },
  },
};
