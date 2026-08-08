---
type: spec
campaign: aimation-website-relaunch
date: 2026-07-18
status: ready
---

# Master-Brief: Website-Verbesserung aimation.de

**Für: Claude Code (Sonnet), arbeitend im Website-Repository von aimation.de.**
Dieser Brief ist Pflichtlektüre vor jeder der Spezifikationen 01 bis 06. Er enthält den gesamten Business-Kontext. Die Spezifikationen verweisen darauf und wiederholen ihn nicht.

---

## 1. Was AImation ist

AImation UG: KI-Beratung, Schulung und Umsetzung für die **technische Produktentwicklung im DACH-Mittelstand** (Fertigung, Maschinenbau, Automotive, Luft- und Raumfahrt, 10 bis 1.000 Mitarbeiter). Gründer: Holger Peschke, 20+ Jahre Automobilentwicklung, Führungserfahrung, kein IT-Berater. Flaggschiff: Multi-Agent-Systeme mit Firmenwissen, immer mit Mensch in der Schleife.

**Positionierungssatz (Referenz für jede Formulierung):** Für technische Unternehmen im Mittelstand, die KI in ihrer Produktentwicklung einsetzen müssen, aber nicht wissen wo, ist AImation der Partner, der aus über 20 Jahren Automobilentwicklung kommt und KI dorthin bringt, wo wirklich entwickelt wird. Aus der Entwicklung, nicht aus der IT. DSGVO-first. Mit Versprechen, die zuerst selbst gebaut wurden.

**Zielpersonen:**
- Entwicklungsleiter (Haupt-Buyer): denkt in Qualität, Kosten, Timing (QKT), Reifegraden, Terminschienen. Kauft Sicherheit und Entlastung, nicht Technologie. Glaubt Vorführungen, keine Folien.
- Technischer Geschäftsführer (Schnell-Buyer): pragmatisch, geldnah, entscheidet allein in Tagen. Türöffner: Entlastung, Wissen sichern.

## 2. Getroffene Entscheidungen (nicht neu diskutieren)

1. **Einstiegsangebot (Wedge) ist die KI-Landkarte.** Alle anderen Einstiegs-Labels (AI Readiness Check, KI-Potenzial-Check, Use Case Workshop, Analyse-Phase) werden sitewide durch "KI-Landkarte" ersetzt. Details in Spec 02.
2. **Anrede ist durchgehend Sie.** Keine Du-Formen auf der Website.
3. **Anker-Use-Case ist Wissenssicherung.** Hero, Vorher-Nachher-Showcase und Pilot-Beispiel zeigen alle auf diesen einen Use Case. Details in Spec 03.

## 3. Die Angebots-Treppe (einzige gültige Struktur)

| Stufe | Angebot | Preis | Dauer |
|---|---|---|---|
| 1 | Erstgespräch | kostenlos | 30 Min |
| 2 | KI-Landkarte (Workshop + Ergebnisbericht: 2 bis 3 priorisierte Use Cases mit ROI-Schätzung) | Festpreis ab 1.900 EUR | 1 Workshop-Tag, Bericht nach 3 bis 5 Tagen |
| 3 | Pilot (ein Prozess wird automatisiert) | Festpreis 4.900 EUR | 4 Wochen |
| 4 | Umsetzung (Agenten-Systeme) | ab 5.000 bis 30.000 EUR Setup + 200 bis 800 EUR/Monat | 2 bis 12 Wochen |
| 5 | Begleitung | optional, nach Aufwand | laufend |

Parallel zur Treppe, jederzeit buchbar: **Schulung** (Inhouse, 1.800 EUR pro Tag, Details in Spec 07).

**Preis-Regel:** Jede Zahl existiert genau einmal als Quelle der Wahrheit (zentrale Konstante/Config im Code, z. B. `pricing.ts` oder CMS-Feld). Alle Seiten, der ROI-Rechner und alle Modals referenzieren dieselbe Quelle. Keine Seite darf eigene, abweichende Preise hartkodieren.

## 4. Sprach- und Stilregeln (gelten für jede Textzeile)

- Deutsch, Sie-Form, konkret, kurze Sätze. Ton: erfahrener Ingenieur, der erklärt, nicht verkauft.
- **Keine Em-Dashes (Gedankenstriche).** Kommas, Doppelpunkte oder Punkte verwenden.
- Keine Buzzwords (revolutionär, disruptiv, game-changing, nahtlos, ganzheitlich). Kein Hype.
- Schreibweise im Fließtext immer **AImation** (nicht AI.mation, nicht Aimation). Das Logo darf gestalterisch AI.mation zeigen, Text nie.
- CTAs benennen den Nutzen, nicht die Aktion ("Holen Sie sich Ihre KI-Landkarte" statt "Absenden").
- Jede Behauptung muss durch diesen Brief oder die Live-Site gedeckt sein. **Keine erfundenen Kunden, Testimonials, Zahlen oder Ergebnisse. Niemals.** Es gibt aktuell keine zitierfähige Kundenreferenz, der Beweis läuft über selbst gebaute Systeme (Build in Public), siehe Spec 04.
- EU-AI-Act-Aussagen: Schulungspflicht nach Art. 4 gilt seit 02.02.2025, Sanktionen ab 02.08.2026 anwendbar. **Vor Livegang exakt gegen Primärquelle (EUR-Lex, offizielle EU-Seiten) prüfen und die zutreffende, nicht die dramatischste Stufe nennen.**
- BAFA-Förderhinweise (50% Zuschuss) sind vorbereitet, aber **hinter einem Feature-Flag deaktiviert**, bis die BAFA-Zulassung geklärt ist. Nicht live schalten.

## 5. Arbeitsweise im Repo

1. Zuerst Codebase erkunden: Framework, Seitenstruktur, Komponentensystem, wie Texte gepflegt werden (Komponenten, CMS, i18n-Dateien). Bestehende Komponenten wiederverwenden, Design-System nicht verändern.
2. Die Site hat einen DE/EN-Umschalter. Jede DE-Textänderung wird als saubere EN-Übersetzung nachgezogen. Falls EN strukturell veraltet ist, DE fertigstellen und EN-Abweichungen am Ende gesammelt melden.
3. Nach jeder Spec: Build lokal prüfen, alle geänderten Seiten rendern, interne Links testen.
3a. **Mobile ist Pflicht:** Jede geänderte Seite und jedes Modal (Erstgespräch-Formular, ROI-Rechner) im Viewport 390x844 prüfen. Kein horizontales Scrollen, Modals vollständig bedienbar, CTAs erreichbar. Der Haupt-Traffic kommt über LinkedIn und damit mobil.
4. Nichts löschen, was eine Spec nicht ausdrücklich nennt. Bei Widerspruch zwischen Spec und Repo-Realität: Spec-Ziel umsetzen, Abweichung im Abschlussbericht nennen.

## 6. Reihenfolge und Umfang

| Spec | Inhalt | Priorität |
|---|---|---|
| 01 | Technik-Fixes: 404 /use-cases, Naming, Tool-Wand, Sitemap | Sofort |
| 09 | KI-Sichtbarkeit (GEO/AEO): llms.txt, robots.txt, sitewide Meta-Description, BlogPosting-Schema | Hoch |
| 02 | Angebots-Architektur: Landkarte als Wedge, Preis-Harmonisierung, Prozess | Hoch |
| 03 | Startseite: Hero, Anker Wissenssicherung, Kürzung, Dringlichkeit | Hoch |
| 05 | Formulare + ROI-Rechner: Reibung, Presets, Preise, E-Mail-Gate | Hoch |
| 07 | Schulungsseite, FAQ-Inhalte, Facts-Update, Tracking | Hoch |
| 04 | Proof: Build-in-Public-Sektion, Use-Case-Detailseiten, Demo-Platzhalter | Mittel |
| 08 | Visualisierung: Diagramm-System, Magenta-Audit, OG-Images, Bild-Hygiene | Mittel |
| 06 | Blog: Quellen, CTA-Vereinheitlichung, FAQ-Rendering | Mittel |

Empfohlene Reihenfolge: 01, 09, 02, 03, 05, 07, 04, 08, 06. Spec 09 direkt nach 01, weil beide reine Technik ohne Copy-Abhängigkeit sind (llms.txt und robots.txt sind unabhängig schnell shippbar). Spec 09 Punkt 4 (BlogPosting-Schema) im selben Arbeitsschritt wie Spec 06 (identische Dateien), Punkt 3 (Meta-Description) im selben Arbeitsschritt wie Spec 08 Punkt 4 (OG-Tags). Spec 02 vor 03, weil die Startseiten-Copy die neuen Angebotsnamen nutzt. Spec 07 nach 05, weil die FAQ-Preisantworten die zentrale Preis-Quelle nutzen. Der Facts-Update-Teil von Spec 07 läuft als letzter Schritt des Gesamtprojekts, damit er den finalen Stand dokumentiert.
