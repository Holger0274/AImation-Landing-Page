import { LANDSCAPE_PHASES } from './engineering-landscape';
import { TRAINING_COURSES } from './training';

// Editorial connections, not claims that a training course delivers the named system.
// Source IDs stay intact so the local content check can detect catalogue drift.
export const QKT_CASES = {
  quality: '06-serienphase--feldbeobachtung--wiederholfehler-abgleich',
  cost: '04-absicherung--emv-umweltpruefung--pruefberichts-erstellung',
  timing: '02-fruehe-phase--anforderungen--mehrdeutigkeits-check',
} as const;

export const PHASE_PATHS = {
  requirements: { course: 'aufbau', de: 'Dokumente auswerten und Ergebnisse gegenprüfen.', en: 'Review documents and cross-check results.', project: null },
  design: { course: 'tools', de: 'Werkzeuge für Recherche und Wissensarbeit kennenlernen.', en: 'Explore tools for research and knowledge work.', project: null },
  validation: { course: 'copilot', de: 'Dokumente zusammenfassen und mit Daten arbeiten.', en: 'Summarise documents and work with data.', project: 'fem' },
  launch: { course: 'aufbau', de: 'Eigene Dokumente nutzen und eine Prüfroutine entwickeln.', en: 'Use your own documents and develop a review routine.', project: null },
  series: { course: 'aufbau', de: 'Ergebnisse mit Quellen und Fachpersonen gegenprüfen.', en: 'Cross-check results with sources and domain experts.', project: '5why' },
  changes: { course: 'copilot', de: 'Informationen suchen und für Entscheidungen zusammenfassen.', en: 'Find information and summarise it for decisions.', project: null },
} as const satisfies Record<typeof LANDSCAPE_PHASES[number]['id'], {
  course: typeof TRAINING_COURSES[number]['id']; de: string; en: string; project: 'fem' | '5why' | null;
}>;

// Fictional, authored walkthroughs based on the selected catalogue tasks.
// These are NOT model outputs, customer data, or demos of the actual applications.
export const CASE_WALKTHROUGHS = [
  {
    caseId: QKT_CASES.timing,
    de: { input: 'LH-017: „Die Halterung muss hohe Temperaturen aushalten und schnell montierbar sein.“', findings: ['„Hohe Temperaturen“: Bereich und Einwirkdauer fehlen.', '„Schnell montierbar“: Zielzeit und Montagebedingungen fehlen.'], result: 'Rückfrage an den Auftraggeber: Welcher Temperaturbereich gilt, für welche Dauer? Unter welchen Bedingungen wird die Montagezeit gemessen?', check: 'Konstruktion und Auftraggeber legen Werte und Nachweis fest. Die KI darf fehlende Zielwerte nicht erfinden.' },
    en: { input: 'SPEC-017: “The bracket must withstand high temperatures and be quick to install.”', findings: ['“High temperatures”: range and duration are missing.', '“Quick to install”: target time and assembly conditions are missing.'], result: 'Question for the customer: What temperature range and duration apply? Under what conditions is assembly time measured?', check: 'Design engineers and the customer agree on values and verification. AI must not invent missing targets.' },
  },
  {
    caseId: QKT_CASES.cost,
    de: { input: 'Versuchsnotiz V-042: Bauteil B, drei Prüflinge. Messdatei vorhanden. Prüftemperatur und Kalibrierbeleg fehlen.', findings: ['Bauteil, Prüflingszahl und Messdatei dem Bericht zuordnen.', 'Prüftemperatur und Kalibrierbeleg als offen kennzeichnen.'], result: 'Berichtsentwurf V-042: Prüfumfang vorbereitet, Messdatei referenziert. Bewertung bleibt offen, bis Prüfbedingungen und Kalibrierung geklärt sind.', check: 'Die Prüfabteilung kontrolliert Datenübernahme, Randbedingungen und Bewertung. Ein vollständiger Text ist noch kein freigegebener Bericht.' },
    en: { input: 'Test note T-042: Component B, three samples. Measurement file available. Test temperature and calibration record missing.', findings: ['Assign component, sample count and measurement file to the report.', 'Mark test temperature and calibration record as unresolved.'], result: 'Draft report T-042: test scope prepared, measurement file referenced. Assessment remains open until conditions and calibration are clarified.', check: 'The test team checks data transfer, conditions and assessment. A complete text is not an approved report.' },
  },
  {
    caseId: QKT_CASES.quality,
    de: { input: 'Neue Beanstandung: Rastnase bricht bei der Montage. Ein älterer 8D-Bericht beschreibt ein ähnliches Schadensbild.', findings: ['Den alten Bericht mit Fundstelle als Vergleich anbieten.', 'Material, Geometrie und Montagebedingungen gegenüberstellen.'], result: 'Prüfhinweis: Der frühere Fall ist ein möglicher Anhaltspunkt. Eine gemeinsame Ursache ist damit noch nicht belegt. Unterschiede müssen untersucht werden.', check: 'Das Team prüft die Ursache am Bauteil. Der 5Why-Coach kann die Fragen strukturieren, ersetzt aber keinen Versuch.' },
    en: { input: 'New complaint: snap-fit breaks during assembly. An earlier 8D report describes similar damage.', findings: ['Offer the earlier report with a source reference for comparison.', 'Compare material, geometry and assembly conditions.'], result: 'Review note: the earlier case may be relevant. A shared root cause has not been established. Differences require investigation.', check: 'The team checks the cause on the component. The 5Why coach can structure questions but cannot replace testing.' },
  },
] as const;
