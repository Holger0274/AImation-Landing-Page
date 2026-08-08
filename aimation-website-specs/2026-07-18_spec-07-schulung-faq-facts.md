---
type: spec
campaign: aimation-website-relaunch
spec: 07-schulung-faq-facts
date: 2026-07-18
priority: hoch
---

# Spec 07: Schulungsseite, FAQ-Inhalte, Facts-Seiten, Tracking

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen, Spec 02 umgesetzt (Angebotsnamen, zentrale Preis-Quelle).

## 1. Schulungsseite `/ki-schulungen-mittelstand` aufwerten

Die Seite hat gute Struktur (3 Ebenen, 9 Module), aber keinen Preis, keine Entscheidungshilfe und keinen EU-AI-Act-Bezug. Das Muster der stärksten Seite der Site (`/ki-agenten-unternehmen`: ehrliche Preise, Entscheidungsmatrix) wird übertragen.

**a) Preis nennen.** Neue Zeile bei jeder Modul-Ebene oder als eigener Block: `Inhouse-Schulung: 1.800 EUR pro Tag, unabhängig von der Teilnehmerzahl. Halbtags-Formate ab 990 EUR.` (Beträge in die zentrale Preis-Quelle aus Spec 02 aufnehmen. Falls der Halbtags-Preis nicht gehalten werden soll, nur den Tagessatz nennen; im Abschlussbericht vermerken.)

**b) Entscheidungshilfe "Welche Schulung für wen".** Kompakte Matrix-Komponente nach dem Vorbild der Agenten-Seite:

| Rolle | Empfohlener Einstieg |
|---|---|
| Ingenieure, Konstrukteure, Berechner | Einstieg generative KI im Engineering, danach Copilot im Entwicklungsalltag |
| Entwicklungsleiter, Teamleiter | KI im Leadership, danach KI-Agenten in der Produktentwicklung |
| Geschäftsführung | KI im Leadership (Kompaktformat), danach KI-Landkarte als nächster Schritt |
| Skeptiker im Team | Einstieg generative KI, an eigenen Aufgaben, keine Folienschlacht |

**c) EU-AI-Act-Block.** Die Dringlichkeits-Sektion aus Spec 03 Punkt 6 (gleiche Komponente wiederverwenden) erscheint auch hier, direkt vor dem End-CTA. Gleiche Faktencheck-Pflicht (Master-Brief Abschnitt 4).

**d) Brücke zur Landkarte.** Nach der Modul-Übersicht ein Zwei-Zeilen-Block: `Nicht sicher, ob Schulung der richtige erste Schritt ist? Die KI-Landkarte beantwortet genau das: ein Workshop-Tag, der zeigt, wo Schulung reicht und wo Automatisierung mehr bringt.` CTA: `Holen Sie sich Ihre KI-Landkarte`.

## 2. FAQ-Antworten gegen die Einwandbehandlung abgleichen

Die 7 FAQ-Fragen der Startseite existieren, die Antworten (Akkordeon) müssen die folgenden Kernbotschaften enthalten. Vorgehen: bestehende Antworten lesen, fehlende Botschaften ergänzen, Widersprüche zugunsten dieser Liste auflösen. Nicht blind überschreiben, vorhandene gute Formulierungen behalten.

| Frage | Muss enthalten |
|---|---|
| Was passiert mit unseren Konstruktions- und Projektdaten? | Verarbeitung in der EU. Ihre Daten bleiben Ihre. **Ein Auftragsverarbeitungsvertrag (AV-Vertrag) liegt unterschriftsreif bereit.** |
| Sind die Lösungen DSGVO-konform? | DSGVO-first als Auswahlkriterium jedes Tools, EU-Hosting, tool-neutral. Verweis auf AV-Vertrag. |
| Funktioniert das mit bestehenden Systemen (M365, SharePoint, ERP)? | Ja, Integration über Standard-Schnittstellen; genau das prüft der Realitäts-Check der KI-Landkarte, bevor Geld in Umsetzung fließt. |
| Ersetzt das unsere Ingenieure? | Nein. **Human in the Loop ist nicht optional: Die letzte Freigabe bleibt immer beim Ingenieur.** KI übernimmt Fleißarbeit, nicht Entscheidungen. **Für Gespräche mit dem Betriebsrat stelle ich Unterlagen bereit.** |
| Wie schnell sehen wir Ergebnisse? | Landkarte: Ergebnis nach einem Workshop-Tag plus 3 bis 5 Tage Bericht. Pilot: 4 Wochen. Schulung: anwendbar am nächsten Arbeitstag. |
| Was kostet das? | Die Angebots-Treppe mit konkreten Zahlen aus der zentralen Preis-Quelle (Landkarte ab 1.900, Pilot 4.900, Umsetzung ab 5.000 EUR). Keine ausweichende Antwort. |
| Unterschied Automatisierung vs. KI-Agent? | Bestehende Antwort prüfen, mit der Erklärung der KI-Agenten-Seite konsistent halten, dorthin verlinken. |

Zusätzlich prüfen: Bieten die Leistungsseiten-FAQs dieselben Botschaften? Abweichungen angleichen. (FAQ-Rendering und Schema-Markup: siehe Spec 06 Punkt 3.)

## 3. Facts-Seiten nach dem Relaunch aktualisieren

`/facts/aimation` und `/facts/holger-peschke` sind Entity-Grounding-Seiten für KI-Suchmaschinen. Nach den Umbenennungen aus Spec 02 müssen sie die neue Realität dokumentieren, sonst zitieren KI-Suchmaschinen die alte Angebotsstruktur:

- Angebots-Abschnitt aktualisieren: KI-Landkarte (Einstiegsangebot, Festpreis-Workshop), Pilot, Umsetzung, Schulung mit den Kernpreisen aus der zentralen Quelle.
- Alte Labels (AI Readiness Check usw.) entfernen bzw. als "früherer Name der KI-Landkarte" in den Klarstellungs-Abschnitt aufnehmen.
- Die dokumentierten Schreibvarianten (AImation / AI.mation) bleiben unangetastet (siehe Ausnahme in Spec 01).
- "Zuletzt aktualisiert"-Datum setzen.

## 4. Conversion-Messung (nur falls Analytics existiert)

Prüfen, ob die Site bereits ein Analytics-Setup hat. **Falls ja:** Events ergänzen für Erstgespräch-Modal geöffnet, Formular abgesendet, Rechner gestartet, Rechner abgeschlossen, Rechner-E-Mail eingetragen, Pilot-Calendly geklickt. **Falls nein: kein neues Tracking-Tool einführen.** Stattdessen im Abschlussbericht eine Empfehlung notieren (DSGVO-schonende Option wie Plausible oder Matomo, Entscheidung liegt bei Holger).

## Akzeptanzkriterien

1. Schulungsseite zeigt Preise (aus zentraler Quelle), Rollen-Matrix, EU-AI-Act-Block und Landkarten-Brücke.
2. Alle 7 Startseiten-FAQ-Antworten enthalten die definierten Kernbotschaften; AV-Vertrag, Human in the Loop und Betriebsrat kommen wörtlich vor.
3. Facts-Seiten dokumentieren die neue Angebots-Treppe, Varianten-Dokumentation intakt, Aktualisierungsdatum gesetzt.
4. Tracking: Events implementiert ODER begründet übersprungen mit Empfehlung im Abschlussbericht.
