# Bildvarianz, Entwicklungslandkarte und Schulungskatalog

Stand: 23. September 2026. Umsetzung nach Holgers Freigabe „Okay, dann, let's go“.

## Unverändert

- Hero-Botschaft „Schneller entwickeln. Weil KI Ihrem Team Arbeit abnimmt.“
- Hero-Unterzeile, technische Zeichnung und deren dezente Mausbewegung.
- Persönlicher Bereich bleibt hinten. Keine erfundenen Beschleunigungsfaktoren.
- Vorhandene Änderungen anderer Aufgaben, insbesondere Blog und ältere Diagrammdateien, nicht zurückgesetzt.

## Sichtbare Änderungen

1. Herausforderungen: Ein vorhandenes Motiv zur Wissensübergabe, drei neu erzeugte Fotografien (Berichtsstapel, Zeichnungsrevision, Fertigungslinie) und zwei responsive technische Illustrationen (Dokumentstände und Recherche-Radar). Kein Austausch des Hero-Motivs. Die alten Assets bleiben erhalten.
2. Vorher/Nachher: drei auswählbare Arbeitsabläufe mit jeweils zwei verbundenen Prozesszeilen. Text ist HTML und bleibt mobil 14 px groß, statt mit einem SVG zu schrumpfen. Menschliche Prüfung und Grenzen sind ausdrücklich genannt.
3. Entwicklungslandkarte: sechs auswählbare Bereiche, jeweils zwei Anwendungsideen. Sie ersetzt das Startseiten-Karussell; die Use-Case-Übersicht und Detailseiten bleiben erreichbar. 639 Einträge und 60 Bereiche bezeichnen den zugrunde liegenden Katalog, nicht realisierte Kundenprojekte. Kein vollständiger Import des Astro-Projekts.
4. Selbst gebaut: Original-Screenshots von 5Why, FEM-Visualizer und Ideen-Agentensystem, vergrößerbar in Tastatur-bedienbaren Dialogen. Status laut eigenem Referenzkatalog: zweimal „Fertig gebaut“, einmal „In Erprobung“. Keine Behauptung persönlich getesteter Funktionsfähigkeit oder gemessener Ergebnisse.
5. Schulungen: sechs vorhandene Lernreihen aus dem Portal, separate Kennzeichnung der Reihen in Vorbereitung. Lernmaterial und Inhouse-Workshop werden unterschieden, ohne Portal-Abonnement oder Zugangsdauer zu erfinden. Preisangaben einschließlich FAQ kommen aus PRICING. Deutsche und englische Inhalte, Metadaten und FAQ-Schema sind synchronisiert.
6. Startseiten-Schulungszeile verweist nun auf sechs Lernreihen statt auf das pauschale Zwei-Tage-Versprechen.

## Quellen und Grenzen

Nur lesend ausgewertet:

- `../Development Landscape/src/content/usecases/*.json`: 639 eindeutige Einträge, 60 Kombinationen aus Ebene und Bereich. 12 ausgewählte IDs stehen in `aimation-landing/lib/data/engineering-landscape.ts`. Die öffentliche Kurzfassung übernimmt keine ungeprüften Forschungs-Prozentwerte.
- `../Development Landscape/src/data/referenzen.ts`: Projektstatus und Beschreibungen.
- `../Development Landscape/src/assets/referenzen/5why-start.png`, `fem-visualizer.png`, `ideenrat.png`: sichtgeprüfte Screenshots, ohne erkennbare Kundenidentitäten, unverändert kopiert.
- `../Learing Mats/Schulungen/portal.html`: sechs vorhandene Lernreihen, Modulzahlen und Reihen in Vorbereitung. Keine Behauptung eigenständig geprüfter Lehrinhalte.

Die Originalprojekte wurden nicht verändert. Keine Kundentranskripte, Kontaktlisten oder CRM-Daten übernommen. Videos sind nicht eingebunden; die Beispiele zeigen echte Screenshots, keine vorgetäuschten Videodemos. Für vollständige öffentliche Verlinkung des Lernportals bzw. der eigenständigen Entwicklungslandkarte fehlt noch eine bestätigte öffentliche Zieladresse.

## Bilddateien und Prompts

Mit dem eingebauten `image_gen` erzeugt und im Projekt gespeichert:

- `aimation-landing/public/images/editorial/reporting-v2.png`
- `aimation-landing/public/images/editorial/requests-v2.png`
- `aimation-landing/public/images/editorial/competition-v2.png`

Vollständige Prompts: `docs/image-direction/2026-09-23-varianz-prompts.json`.
Die Bildgenerierung ergänzt die vorhandene Bildwelt. Der Redesign-Skill leitete die gezielten Verbesserungen an Hierarchie, Lesbarkeit und responsiven Komponenten an; das bestehende Next.js-System und die bestätigte Gestaltung bleiben erhalten.

## Prüfungen

- Zwei erfolgreiche Produktionsbuilds mit Typprüfung und 51 erzeugten statischen Seiten. ESLint wird gemäß bestehender Konfiguration übersprungen; die bestehende Browserslist-Warnung bleibt.
- Separater Zwischenlauf `npx tsc --noEmit` erfolgreich, `git diff --check` erfolgreich.
- Alle zwölf Kombinationen der Landkarte im Browser angeklickt und zugehörige Detailüberschrift geprüft.
- Gesprächsbutton öffnet den Kontaktdialog; Escape schließt ihn und gibt den Fokus zurück. Keine Anfrage abgesendet.
- Alle drei Vorher-/Nachher-Abläufe geprüft. Mobile Textgröße 14 px statt skalierter SVG-Beschriftung.
- Alle drei Original-Screenshot-Dialoge geöffnet; mobiler FEM-Dialog und korrigierter Ideen-Dialog visuell geprüft. Fokus kehrt zum Auslöser zurück.
- Startseite: 375, 390, 768, 1024, 1440 und 1920 px geprüft. Neue Bereiche ohne seitlichen Überlauf; Desktop-Landkarte und Bildmotive visuell geprüft.
- Schulungskatalog bei 390 und 1440 px visuell geprüft, einschließlich langem Kursnamen. Sechs Kurse gerendert, kein horizontaler Überlauf. Kontaktbutton funktioniert.
- Echter Sprachwechsel von DE nach EN, englischer Schulungskatalog und Preis-FAQ geprüft; englische Startseite mit Landkarte und Vorher/Nachher gerendert. Keine Browser-Console-Fehler bei dieser Prüfung.
- Abschließender Build nach den letzten Text- und Dialogkorrekturen im Browser erneut geladen. Beim zwischenzeitlichen Stoppen des Servers entstanden erwartbare Prefetch-Fehlermeldungen im bereits offenen Tab; die Seiten wurden danach erfolgreich neu geladen. Der Link zur vollständigen Use-Case-Übersicht wurde ebenfalls geöffnet und die Zielseite bestätigt.

## Weiterarbeit

### Ergänzung: QKT wieder auf der Startseite

Auf Holgers Wunsch ist die bestehende QKT-Visualisierung wieder groß auf der Startseite sichtbar, direkt nach den Herausforderungen und vor dem Ablauf. `QktImpact.tsx` verbindet das Dreieck mit drei auswählbaren Schwerpunkten: Qualität, Kosten und Timing. Je Auswahl ändern sich die markierte Ecke, der Nutzenansatz und eine konkrete Prüffrage für den Pilot. Timing ist zunächst ausgewählt. Es werden keine Zeitersparnis oder Kostensenkung erfunden.

Der Redesign-Skill führte hier zur bewussten visuellen Unterbrechung der längeren Text- und Kartenfolgen. Die ursprüngliche SVG-Komponente bleibt erhalten und wurde um optionale Sprache, Auswahl und abschaltbare Animation ergänzt. SVG-IDs sind pro Instanz eindeutig; Beschriftungen haben mehr Rand. Auf der Startseite keine dauerhafte SVG-Animation, Übergänge respektieren reduzierte Bewegung. Hero, bisherige Vorher/Nachher-Abläufe und andere Visualisierungen bleiben erhalten.

Prüfung dieser Ergänzung: `tsc --noEmit`, `git diff --check` und Produktionsbuild mit 51 statischen Seiten erfolgreich. Alle drei Auswahlen samt hervorgehobener SVG-Beschriftung im Browser geprüft, Aktivierung mit Enter getestet. Desktop bei 1440 px und Mobil bei 390 px visuell geprüft; zusätzliche Breiten 375, 768 und 1024 px ohne horizontalen Seitenüberlauf. Englische Texte und Grafikbeschriftungen geprüft. Lokale Vorschau neu gestartet, kein Push oder Deployment.

Vorschau: `http://localhost:3010/`, Produktionsserver mit `npm run start -- --hostname localhost --port 3010`.
Änderungen liegen im gemeinsamen Projektordner und sind für Claude Code unmittelbar verfügbar. In dieser Runde kein neuer Commit, kein Push und kein Deployment; vorhandener gemischter Arbeitsstand blieb erhalten. Kein Lighthouse-Lauf, keine vollständige Cross-Browser-Prüfung, keine externe Formularübermittlung.
