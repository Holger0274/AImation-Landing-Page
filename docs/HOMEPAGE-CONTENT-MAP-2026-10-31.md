# Inhaltserhalt bei der neuen Startseite

Ausgangsstand: 821db4f. Keine Quellkomponente, Mediendatei oder bisherige Seite wird gelöscht.

| Bisheriger Bereich | Vollständiger Inhalt nach Umbau | Einstieg auf Startseite |
|---|---|---|
| Hero, FounderIntro, LinkedIn-Beleg | Startseite, unverändert früh | Direkt sichtbar |
| ExperienceRoute | Startseite mit aktualisierten Zielen | Sprungnavigation |
| AI2CADTeaser inklusive fünf Kapitel | /entwicklungswerkstatt#entwicklung-erleben, bestehendes /ai2cad und Einzelseiten bleiben | Interaktive Kapitelvorschau |
| EarlyDemos inklusive drei Anwendungsvideos | /entwicklungswerkstatt#anwendungsdemos | Drei bebilderte Anwendungseinstiege |
| PainPoints | /ki-anwendungsfaelle#herausforderungen | Aufgabenwahl |
| BeforeAfter | /ki-anwendungsfaelle#vorher-nachher | Aufgabenwahl |
| DevelopmentLandscape inklusive Video, zwölf Fälle, Walkthroughs | /ki-anwendungsfaelle#landscape-entdecken | Aufgabenwahl |
| TimeEstimate und detaillierter ROI-Rechner | /wirtschaftlichkeit#zeitpotenzial | Rechner-Einstieg und Hero-Link |
| QktImpact | /wirtschaftlichkeit#qualitaet-kosten-timing | Wirtschaftlichkeit |
| Process samt Preisstufen und Detailtexten | /zusammenarbeit#prozess | Kompakter Ablauf |
| Services | /zusammenarbeit#leistungen | Schulung, Beratung, Umsetzung |
| EuAiActNotice | /zusammenarbeit#ki-kompetenz | Zusammenarbeit |
| SelfBuilt, drei eigene Werkzeuge und Tool-Wand | /entwicklungswerkstatt#selbst-gebaut | Werkstatt-Link |
| About | /ueber-holger-peschke#ueber-mich | Gründer-Link direkt unter Hero |
| Partnership einschließlich ADN | /ueber-holger-peschke#partnerschaften | Mitgliedschaft und Partner-Link |
| FAQ, FinalCTA, Footer | Startseite | Unverändert erreichbar |

Alle fünf Vertiefungsseiten erhalten deutsche und englische Fassungen, Canonical/Hreflang, eine H1, Brotkrumennavigation, strukturierte Daten und Sitemap-Einträge. Alte Startseitenfragmente zu ausgelagerten Bereichen werden auf ihre neuen Ziele weitergeführt; aktuelle interne Links zeigen direkt dorthin. Die auf der Startseite weiterhin vorhandenen Fragmente bleiben dort nutzbar.

SEO/GEO: Textinhalte und normale Links bleiben im Server-HTML. Keine erfundenen Referenzen oder Resultate, kein zusätzliches Versprechen zu Rankings. Grundlage: https://developers.google.com/search/docs/appearance/ai-features

## Nachweise

- Produktionsbuild mit Typprüfung bestanden.
- `check-preserved-content.py`: 34 vollständige Abschnittstexte (17 Bereiche × DE/EN) stimmen mit der vorherigen Live-Seite auf Commit 821db4f überein. Der Test vergleicht normalisierte Texte anhand archivierter SHA-256-Werte. Dynamisch eingeblendete Zustände sind zusätzlich durch Wiederverwendung der vorhandenen Komponenten erhalten.
- `check-discovery.mjs`: 12 Seiten, 130 interne Fragmentlinks, eindeutige IDs, frühe Gründer-/LinkedIn-Platzierung und alle fünf Startseiteneinstiege geprüft.
- `check-seo.mjs`: 71 URLs mit Canonical, Sprachen, Sitemap, strukturierten Daten, SSR-FAQ, Weiterleitungen und robots.txt bestanden.
- `check-demos.mjs`, `check-demo-videos.mjs`, `check-ai2cad.mjs`: vorhandene Anwendungen, zehn CAD-/FEM- und acht weitere Video-Seiten in DE/EN, Mediendateien und Streaming bestanden.
- Browser: Kapitelwechsel, tatsächlicher Videostart, Tastaturauswahl, direkter Sprung zum ausgewählten Beispiel, interaktiver Prüfbericht, alter englischer Partnerschaftslink und Rechner mit Übergabe in die ROI-Detailrechnung geprüft.
- Keine Kundenergebnisse, zusätzlichen Use Cases oder fremden Logos ergänzt.

Die technische Prüfung ist kein Nachweis einer höheren Conversion-Rate oder eines besseren Rankings.
