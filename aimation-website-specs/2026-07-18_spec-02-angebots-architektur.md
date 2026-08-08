---
type: spec
campaign: aimation-website-relaunch
spec: 02-angebots-architektur
date: 2026-07-18
priority: hoch
---

# Spec 02: Angebots-Architektur, ein Einstieg, ein Preissystem

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen, Spec 01 umgesetzt.

## Ziel

Die Website hat aktuell fünf konkurrierende Einstiegs-Labels (Erstgespräch, Pilot, AI Readiness Check, KI-Potenzial-Check, Use Case Workshop) und drei widersprüchliche Preissysteme. Nach dieser Spec gibt es genau eine Angebots-Treppe (Master-Brief Abschnitt 3) und jede Zahl kommt aus einer zentralen Quelle.

## 1. Zentrale Preis-Quelle anlegen

Eine Konstanten-Datei oder CMS-Struktur (je nach Repo-Architektur), die alle Angebots- und Preisdaten hält: Name, Preis, Einheit, Dauer, Kurzbeschreibung je Stufe der Treppe plus die vier Umsetzungs-Level der KI-Agenten-Seite (ab 5.000 / ab 10.000 / ab 20.000 / ab 30.000 EUR Setup, 200 bis 800 EUR/Monat laufend). Alle Komponenten (Startseite, Leistungsseiten, ROI-Rechner, Modals) importieren von dort.

## 2. Umbenennungen (sitewide, Suchen und Ersetzen mit Verstand)

| Alt (entfernen) | Neu |
|---|---|
| "AI Readiness Check" (Startseite, Beratungsseite) | "KI-Landkarte" |
| "KI-Potenzial-Check" (Schulungsseite) | "KI-Landkarte" |
| "Use Case Workshop" (Blog-CTAs) | "KI-Landkarte" |
| "AI Readiness Assessment", "AI Audit", "AI ROI-Potenziale" (Prozess-Schritt 2) | entfällt, siehe Punkt 3 |

CTA-Wortlaut überall, wo bisher diese Labels standen: `Holen Sie sich Ihre KI-Landkarte`.

## 3. Prozess-Sektion der Startseite ("So einfach starten wir") ersetzen

**Ist:** 5 Schritte mit widersprüchlichen Angaben (Schritt 2 "Analyse, 2-4 Wochen, nach Aufwand" gegen anderswo "in 2 Tagen" gegen Positionierung "ein Workshop-Tag").

**Soll:** 5 Schritte, deckungsgleich mit der Angebots-Treppe:

1. **Erstgespräch**: `30 Minuten, kostenlos. Sie erzählen, wo der Schuh drückt. Ich sage Ihnen ehrlich, ob KI hilft, und wenn nein, auch das.` Dauer: 30 Min. Kosten: kostenlos.
2. **KI-Landkarte**: `Ein Workshop-Tag mit Ihrem Team. Ergebnis: 2 bis 3 priorisierte Use Cases mit ROI-Schätzung, intern vorzeigbar. Aus "wir müssten mal was mit KI machen" wird ein Plan mit Preisschild.` Dauer: 1 Tag + Bericht in 3 bis 5 Tagen. Kosten: Festpreis ab 1.900 EUR.
3. **Pilot**: `Ein Prozess, von Ihnen gewählt, wird automatisiert. Festpreis, klarer Zeitrahmen, definiertes Ergebnis. Danach entscheiden Sie, ob mehr daraus wird.` Dauer: 4 Wochen. Kosten: Festpreis 4.900 EUR.
4. **Umsetzung**: `Vom einzelnen Workflow bis zum Multi-Agent-System mit Ihrem Firmenwissen. Die letzte Freigabe bleibt immer bei Ihrem Ingenieur.` Dauer: 2 bis 12 Wochen. Kosten: ab 5.000 EUR, transparent nach Angebot.
5. **Begleitung**: `Nach Go-Live bleibe ich Ansprechpartner für Fragen, Anpassungen und neue Ideen.` Dauer: laufend. Kosten: optional.

Die bestehende Pilot-Sektion ("Der kleinste sinnvolle Start") bleibt erhalten, wird aber umpositioniert: Sie folgt NACH der Landkarten-Logik und beginnt neu mit: `Sie wissen schon genau, welcher Prozess Sie jede Woche Zeit kostet? Dann können Sie die Landkarte überspringen und direkt mit einem Piloten starten.` Rest der Sektion unverändert.

## 4. Neue Landkarten-Sektion auf der Startseite

Position: direkt nach der Schmerz-Sektion ("Kommt Ihnen das bekannt vor?"), vor dem Vorher-Nachher-Showcase.

- Headline: `Der erste Schritt: Ihre KI-Landkarte`
- Body: `Ein Workshop-Tag mit Ihrem Team. Wir sammeln die Schmerzen Ihrer Entwicklung, prüfen Ihre Daten- und Systemlage und priorisieren die 2 bis 3 Use Cases mit dem besten Verhältnis aus Aufwand und Wirkung, jeweils mit ROI-Schätzung. Das Ergebnis können Sie Ihrer Geschäftsführung vorlegen. Festpreis, ein Tag, kein Projekt.`
- Drei Checkmarks: `Priorisierte Use Cases mit ROI-Schätzung` / `Realitäts-Check: Welche Daten und Systeme haben Sie wirklich?` / `Festpreis ab 1.900 EUR, BAFA-Hinweis folgt` (letzter Punkt ohne den BAFA-Teil, solange das Feature-Flag aus dem Master-Brief inaktiv ist: dann nur `Festpreis ab 1.900 EUR, ein Workshop-Tag`)
- CTA: `Holen Sie sich Ihre KI-Landkarte` (öffnet Erstgespräch-Modal, siehe Spec 05)

## 5. Beratungsseite `/ki-beratung-kmu` angleichen

Die "Drei Phasen"-Struktur (Analyse / Strategie / Begleitung) bleibt als Rahmen, aber Phase 1 + 2 werden als KI-Landkarte benannt und beschrieben (Inhalte aus Punkt 4 wiederverwenden), Phase 3 bleibt Begleitung. Alle Check-Labels gemäß Punkt 2 ersetzen. Preis der Landkarte nennen (aus zentraler Quelle).

## 6. ROI-Rechner-Pakete harmonisieren

**Ist:** Rechner Schritt 6 zeigt Starter 6.500 / Professional 9.500 / Enterprise 18.000 EUR Setup. Diese Zahlen kollidieren mit der KI-Agenten-Seite (ab 5.000 / 10.000 / 20.000 / 30.000) und dem Pilot (4.900).

**Soll:** Rechner zeigt drei Stufen mit exakt den Werten der zentralen Preis-Quelle:

| Paket | Setup | Laufend |
|---|---|---|
| Starter (entspricht Pilot / einfacher Agent) | ab 4.900 EUR | ab 200 EUR/Monat |
| Professional (spezialisierter Agent, RAG-System) | ab 10.000 EUR | ab 400 EUR/Monat |
| Enterprise (Multi-System / Multi-Agent) | ab 20.000 EUR | ab 600 EUR/Monat |

Der Hinweistext im Rechner ("Richtwerte zur Orientierung...") bleibt.

## Akzeptanzkriterien

1. Projektweite Suche nach "Readiness", "Potenzial-Check" und "Use Case Workshop" liefert null Treffer in Textknoten.
2. Alle Preise auf allen Seiten und im Rechner stammen aus der zentralen Quelle; grep nach hartkodierten Beträgen (4.900, 6.500, 9.500, 18.000 usw.) findet nur die zentrale Datei.
3. Prozess-Sektion zeigt die 5 neuen Schritte mit konsistenten Dauern und Preisen.
4. Landkarten-Sektion existiert auf der Startseite an der definierten Position.
5. Kein BAFA-Text ist live (Flag aus).
6. EN-Fassung der geänderten Texte nachgezogen oder Abweichung im Abschlussbericht dokumentiert.
