# Themenseiten: lokaler Umsetzungsstand vom 29.09.2026

## Umfang

Erste Umsetzung aus der Angebots- und Suchthemenmatrix. Keine Veröffentlichung, kein Commit und kein Push. Die restlichen Themen der Matrix sind weiterhin Planung.

Neue Seiten, jeweils vollständig auf Deutsch und Englisch:

- `/ki-produktentwicklung`: Engineering-Überblick, Qualität/Kosten/Timing, sechs ausgewählte Katalogphasen, Demonstratoren und Einstieg.
- `/schulungen/microsoft-365-copilot`: Lernprobe, neun Module aus dem vorhandenen Lernmaterial, Voraussetzungen und Inhouse-Abstimmung.
- `/use-cases/variantenmanagement`: VariantHub mit Video, Regelprüfung, Voraussetzungen und klarer Trennung geplanter Erweiterungen.
- `/use-cases/skillmatrix-entwicklung`: Video, Kompetenzabdeckung und Wissenstransfer, keine automatische Leistungsbewertung.
- `/use-cases/projektsteuerung-entwicklung`: PM Demonstrator mit Video, Abhängigkeiten, Kapazitäten und fachlicher Prüfung.

Die vorhandene Seite `/use-cases/excel-powerpoint-berichte` enthält zusätzlich einen interaktiven, vorbereiteten Beispielablauf. Er verwendet fiktive Daten, führt keine KI-Abfrage aus und exportiert keine Datei. Zahlen, fehlender Verantwortlicher und Quellenbezug sind bewusst getrennt dargestellt.

## Gestaltung und Integration

Der Skill `redesign-existing-projects` wurde für die Weiterentwicklung im bestehenden Erscheinungsbild genutzt: bestehende Schriftarten, dunkle technische Bildsprache, lesbare Texte, nummerierte Abläufe und responsive Gestaltung. Keine neuen externen Schriftarten, Bilddienste oder Abhängigkeiten.

- Gemeinsamer Seitenrahmen: `components/pages/TopicPage.tsx` und CSS-Modul.
- Demonstrator-Inhalte: `lib/data/application-pages.ts`, gemeinsames `ApplicationDetailPage.tsx`.
- Vorhandener Videoplayer wird wiederverwendet. Videos laden erst nach einer ausdrücklichen Wiedergabeaktion.
- Neue Links im Leistungsmenü, bei den Startseiten-Demos, der Development Landscape, im Use-Case-Verzeichnis und im Copilot-Eintrag der Schulungsübersicht.
- Die Hero-Zeichnung, alle vier bestehenden Videos, 5Why, FEM Visualizer und Ideen-Agenten bleiben erhalten.
- Die englischen Routen wurden in `ENGLISH_PATHS` aufgenommen. Sitemap-Ermittlung bleibt automatisch. Jede neue Seite hat eigene Metadaten, Canonical, Sprachalternativen, Breadcrumb- und FAQ-Daten.
- `llms.txt` enthält die neuen Themen mit sachlichen Statusangaben. Dies ist keine Garantie für Indexierung oder KI-Zitationen.

## Prüfungen

- Produktionsbuild erfolgreich. Das bestehende Build-Setup überspringt Linting; kein vollständiger Lint- oder Lighthouse-Lauf.
- TypeScript-Prüfung erfolgreich.
- Quellenabgleich erfolgreich: 639 Katalogeinträge, 60 Bereiche, kuratierte IDs, Lernreihen und bestehende Werkzeugstatus.
- SEO-Prüfung auf 37 öffentlichen URLs erfolgreich. Der Test umfasst zusätzlich alle neuen DE-/EN-Seiten, sichtbare FAQ-Inhalte, einzelne H1, Breadcrumb-Daten, kontextuelle Links und verzögertes Video-Laden.
- 11 isolierte Lead-Route-Tests erfolgreich. Keine echte Anfrage versendet.
- Browser-Prüfung der sechs Themenseiten bei 375, 768, 1024 und 1920 Pixeln ohne horizontalen Inhaltsüberlauf. Englische Fassungen zusätzlich bei 375 Pixeln.
- Lernprobe, Prompt-Aufklappen, Kontaktmodal und Escape-Schließen, mobile Navigation und Deep-Link zur Lastenheft-Analyse geprüft.
- Alle drei Anwendungsvideos lassen sich abspielen. Berichtsreiter funktionieren per Klick und Pfeiltaste.

## Bewusst unverändert und offen

- Schulungspreis am 29.09.2026 bestätigt: Die Inhouse-Schulung wird aus den konkreten Anwendungsfällen, Rollen und Werkzeugen des Teams zusammengestellt. Nach Abstimmung von Inhalt, Dauer und Format gilt ein Festpreis, unabhängig von der Teilnehmerzahl. Es wird kein öffentlicher Tages- oder Halbtagessatz genannt. Zentrale Preisquelle, Master-Brief, AGENTS und Spec 07 sind synchronisiert.
- Keine neuen Aussagen über fertige Unternehmensintegration, Zertifizierung, garantierte Einsparung oder Kundenreferenzen.
- Suchnachfrage, tatsächliche Google-Positionen und LLM-Zitationen sind dadurch noch nicht gemessen. Nach Freigabe und Deployment: Search Console/Bing prüfen, Sitemap einreichen und erste Indexierungs- und Suchdaten auswerten.
- Nutzerfreigabe der Darstellung und Inhalte steht aus. Öffentliche Zieladressen für das vollständige Lernportal und die vollständige Landscape sind weiterhin offen; Links führen zu den vorhandenen lokalen Website-Inhalten.
- Ungetrackte Originalvideos im Ordner `Videos` wurden nicht verändert oder in Git aufgenommen.

## Ergänzung: Nutzen und Belege geschärft

Auf Nutzerfreigabe nach der Bewertung der ersten Ausbaustufe wurden die drei Anwendungsseiten weiter überarbeitet:

- Nutzenorientierte Einstiege für VariantHub, Skillmatrix und PM Demonstrator in DE/EN.
- Wiederholte Abgrenzungsabsätze im Hauptteil entfernt; Entwicklungsstand und Grenzen stehen gebündelt beim Video. Fachliche FAQ-Antworten bleiben vorhanden.
- Anwendungsspezifische Kontakttexte mit einem konkreten Ausgangsfall für das Erstgespräch.
- Je Anwendung ein öffentlicher Vergleichsplan mit zwei Aufgaben, bisherigem Ablauf, Ablauf mit Anwendung und Messkriterien. Ausdrücklich noch keine Messergebnisse oder Kundenreferenz.
- Interne Vorlage `docs/PRAXISVERGLEICH-MESSPROTOKOLL.md` zur Erfassung realer Werte einschließlich Datenvorbereitung, Prüfung, Korrektur und einmaliger Einrichtung. Die drei vorliegenden Toolbeschreibungen enthalten keinen gemessenen Vorher-Nachher-Nachweis.
- Vergleichsinhalte in `lib/data/application-comparisons.ts`; gemeinsame Darstellung im vorhandenen Seitenrahmen. Keine neuen Abhängigkeiten oder Medien.
- Erneut erfolgreicher Produktionsbuild, Quellenabgleich und SEO-Test für 37 URLs. Die SEO-Prüfung prüft nun auch die ausdrückliche Kennzeichnung der Vergleichspläne.
- Neue Ansichten bei 375, 768 und 1440 Pixeln ohne horizontalen Überlauf geprüft, Englisch zusätzlich bei 375 Pixeln. Kontaktaufruf und Escape-Schließen geprüft. Keine reale Anfrage versendet.

## Ergänzung: Entwicklungswissen / Knowledge Graph

Die bestehende deutsche Unterseite `/use-cases/knowledge-graph-management` nutzt nun denselben Seitenrahmen wie die neuen Themenseiten. Einstieg: „Entwicklungswissen finden. Entscheidungen nachvollziehen.“ Vorhandene Illustration, Quellen-Grafik, Vorher-Nachher-Grafik, QKT und Demo-Hinweis sind erhalten. Die breite Quellen-Grafik hat auf kleinen Bildschirmen eine lesbare HTML-Entsprechung; das Wissensdiagramm wird auf dieser Seite ohne Animation gerendert. Andere Verwendungen behalten ihr bisheriges Verhalten.

Neue Inhalte: konkreter Entwicklungsfall, vier Schritte zum Wissensbestand, KI versus feste Regeln, geplante Datenbank-/Rechte-/Versionsanbindung, Voraussetzungen und Vergleichsplan ohne Messergebnisse. Drei sichtbare FAQs mit Schema sowie Breadcrumb-Schema ergänzt. Kontakt nutzt das gemeinsame Formular statt eines separaten externen Calendly-Links. Unbelegte Sekunden-/Vollständigkeitsversprechen auch im zugehörigen Katalogeintrag entfernt. `llms.txt` beschreibt den tatsächlichen Prototyp-Umfang.

Diese bestehende Unterseite bleibt deutschsprachig; keine englische Übersetzung oder neue englische Indexierung behauptet. Der bisherige Sprach-Fallback bleibt erhalten. Mobile Ansicht und Kontaktmodal ohne Versand geprüft, TypeScript und Quellenprüfung erfolgreich. Kein neuer Produktionsbuild oder Lighthouse-Lauf für diese Einzelprüfung.

## Aktuelle Vorschau

### Ergänzung: Patentrecherche mit KI

Die bestehende deutsche Seite `/use-cases/patentrecherche-ki` nutzt jetzt den gemeinsamen Seitenrahmen. Hero: „Patente gezielt sichten. Fundstellen nachvollziehen.“ Vorhandene KI-Illustration mit Herkunftslabel, Merkmalsgrafik, Agent-Mensch-Ablauf, Demo-Vorschau und QKT sind erhalten. Breite Ablaufgrafiken haben auf Mobilgeräten lesbare HTML-Entsprechungen. Der Agent-Mensch-Ablauf wird hier ohne Animation dargestellt; andere Verwendungen bleiben unverändert.

Inhalte: technische Vorrecherche mit Quellenbezug, vier Arbeitsschritte, deterministische Regeln vor KI, geplante Datenbankanbindung mit Recherche- und Änderungshistorie. Interner Prototyp, künftige Schnittstellen und mögliche Monitoring-Erweiterung sind getrennt beschrieben. Unbelegte Zeit-/Vollständigkeitsversprechen wurden auf der Seite, im Projektkatalog, in DE-/EN-Kartentexten und in `llms.txt` ersetzt. Keine FTO-Prüfung zugesichert; EPA und WIPO sind als fachliche Einordnung direkt verlinkt. Drei sichtbare FAQs samt Schema und Breadcrumb-Schema ergänzt.

Die Unterseite bleibt deutschsprachig mit bisherigem Sprach-Fallback. Desktop- und Mobilansicht (390 Pixel), Sprungmarke und Kontaktmodal ohne Versand geprüft. TypeScript, Quellenabgleich und Diff-Prüfung erfolgreich. SEO-Test um Prüfungen für Prototyp-Kennzeichnung, Historie, Grenzen und unbelegte Versprechen erweitert; alle 37 URLs bestanden nach einem anfänglichen Timeout im Entwicklungsbetrieb. Kein erneuter Produktionsbuild oder Lighthouse-Lauf.

### Ergänzung: Technische Anfragen und E-Mail-Klassifizierung

Die bestehende deutsche Seite `/use-cases/email-klassifizierung` nutzt nun ebenfalls den gemeinsamen Seitenrahmen. Der Inhalt ist auf technische Kundenanfragen und Änderungsanträge fokussiert. Hero: „Anfragen richtig einordnen. Antworten fundiert vorbereiten.“ Vorhandene KI-Illustration mit Herkunftslabel, Anfragegrafik, Agent-Mensch-Ablauf, Demo-Vorschau und QKT bleiben erhalten. Breite Grafiken besitzen auf kleinen Bildschirmen eine lesbare HTML-Entsprechung.

Der Ablauf trennt feste Routing-Regeln, KI-Klassifizierung und fachliche Freigabe. Datenbankanbindung, Statusmodell und Änderungshistorie sind als Pilotumfang beschrieben. Automatischer Versand gehört nicht zum gezeigten Prototyp. Outlook, Exchange, CRM, Ticketsystem und PLM werden nicht als bereits fertige Anschlüsse dargestellt. Unbelegte Aussagen zu Personalstellen, manueller Überlegenheit, 60 Prozent Einsparung und Antworten am selben Tag wurden auf Seite, Projektkarte, DE-/EN-Kartentexten und in `llms.txt` entfernt. Drei sichtbare FAQs samt Schema behandeln Versand, Systemanbindungen und den Umgang mit Korrekturen.

Die Seite bleibt deutschsprachig mit bisherigem Sprach-Fallback. Desktop und Mobilansicht bei 390 Pixeln ohne horizontalen Überlauf geprüft. Kontaktmodal geöffnet und ohne Versand geschlossen. TypeScript, Quellenabgleich und Diff-Prüfung erfolgreich. SEO-Test enthält neue Prüfungen für Prototyp-Status, Historie, menschliche Freigabe und entfernte Versprechen. Kein erneuter Produktionsbuild oder Lighthouse-Lauf.

### Neue Unterseite: Technologie-Scouting

Für die bislang nur als Kachel und angekündigten Link vorhandene Route `/use-cases/technologie-scouting` wurde eine deutsche Unterseite im gemeinsamen Seitenrahmen angelegt. Hero: „Neue Technologien erkennen. Produktbezug belegen.“ Die vorhandene technische Radar-Grafik wird als Prinzipdarstellung verwendet; das ältere KI-Bild mit fehlerhaftem Fantasietext kommt nicht zum Einsatz.

Inhalte: enger technischer Suchraum, erlaubte Quellen, regelbasierte Erfassung, KI-Vorstrukturierung, fachliche Bewertung, Datenbank und Änderungshistorie. Ein illustratives Beispiel führt vom Fachaufsatz über den möglichen Produktbezug zur dokumentierten Entscheidung. Vergleichsplan nach Qualität, Kosten und Timing sowie drei sichtbare FAQs ergänzt. Die Entscheidung über Technologieeinsatz bleibt ausdrücklich beim Fachteam. Aussagen wie „wöchentlich ohne Suchaufwand“ und „bevor die Konkurrenz“ wurden in Projektkarte, DE-/EN-Kartentexten und `llms.txt` entfernt. Die Kachel verlinkt nun auf die neue Detailseite; der Faktenbereich bezeichnet den Stand als internen Prototyp.

Die Seite bleibt zunächst deutschsprachig mit Sprach-Fallback. Desktop und Mobilansicht bei 390 Pixeln ohne horizontalen Überlauf geprüft. Kontaktmodal geöffnet und ohne Versand geschlossen. TypeScript, Quellenabgleich und Diff-Prüfung erfolgreich. Der SEO-Test prüft Route, FAQ-/Breadcrumb-Schema, Prototyp-Status, Historie, menschliche Entscheidung und entfernte Versprechen. Kein Produktionsbuild oder Lighthouse-Lauf.

### Neue Unterseite: Meeting-Protokolle mit KI

Für die bisher nur als Kachel und Inhaltsverweis vorhandene Route `/use-cases/meeting-transkript-analyse` wurde eine deutsche Unterseite angelegt. Hero: „Entscheidungen festhalten. Aufgaben mit Kontext übergeben.“ Die vorhandene technische Transkript-Grafik wird verwendet; das ältere KI-Meetingbild mit eingeblendeten englischen Fantasiedaten kommt nicht zum Einsatz.

Inhalte: freigegebenes Transkript, Sprecher und Zeitstellen, KI-Vorschläge für Entscheidungen, Aufgaben und offene Punkte sowie menschliche Bestätigung vor der Übergabe. Datenbank, Zugriffsrechte und Änderungshistorie sind als Pilotumfang beschrieben. Der aktuelle Projektstatus „im Aufbau“ bleibt erhalten; produktive Anbindungen an Teams, Zoom, Jira, Planner oder Projektablagen werden nicht behauptet. Vergleichsplan nach Qualität, Kosten und Timing sowie drei sichtbare FAQs zu Aufnahme, Erkennungsqualität und Zielsystemen ergänzt. Unbelegte Aussagen zu 80 Prozent Verlust, Zeitersparnis und sofort fertigen Aufgaben wurden nicht übernommen. Projektkarte, DE-/EN-Kartentexte, Faktenbereich und `llms.txt` wurden angepasst.

Die Seite bleibt zunächst deutschsprachig mit Sprach-Fallback. Desktop und Mobilansicht bei 390 Pixeln ohne horizontalen Überlauf geprüft. Kontaktmodal geöffnet und ohne Versand geschlossen. TypeScript, Quellenabgleich und Diff-Prüfung erfolgreich. Der SEO-Test prüft Route, FAQ-/Breadcrumb-Schema, Entwicklungsstatus, Historie, menschliche Freigabe und entfernte Versprechen. Kein Produktionsbuild oder Lighthouse-Lauf.

Die Projektkachel verlinkt trotz des weiterhin sichtbaren Status „im Aufbau“ auf die neue Detailseite. Die gemeinsame Kachelkomponente nutzt eine vorhandene Detail-URL jetzt unabhängig vom Fertigstellungsstatus. Technologie-Scouting und Meeting-Seite sind auf der Use-Case-Übersicht erreichbar. Abschließender SEO-Test: 39 URLs bestanden.

Für die laufende gemeinsame Seitenprüfung läuft aktuell der Entwicklungsserver auf Port 3011 (`npm run dev -- --hostname localhost --port 3011`). Vor einem Produktionsbuild diesen Server beenden, damit Build und Entwicklung nicht gleichzeitig `.next` schreiben.

Vorschau: `http://localhost:3011/ki-produktentwicklung`.

Projektordner: `aimation-landing`. Build mit `npm run build`, Vorschau mit `npm run start -- --hostname localhost --port 3011`, Prüfungen mit `npm run check:seo`, `npm run check:content` und `node --test scripts/lead-route.test.cjs`.

## Ergänzung: Einzelprüfung Projektsteuerung und Berichte

**Aktuelle Positionierung nach Nutzerkorrektur:** Die Excel-/PowerPoint-Seite behandelt die Ablösung dateibasierter Arbeit durch eigene Apps, Dashboards und BI, nicht primär die schnellere Erstellung von Folien. Die bisherige URL bleibt für bestehende Verweise erhalten. Hero, Metadaten, Ablauf, FAQ, Voraussetzungen, Messkriterien, CTA, Use-Case-Übersicht, Themenverweise und `llms.txt` wurden inhaltlich angepasst. Vorhandene Kalkulationstabellen und Excel-Tools liefern die geprüfte Fachlogik für die neue Anwendung. PowerPoint ist nur ein optionaler Export.

Das interaktive Beispiel hat jetzt sechs Ansichten: Daten, Prüfung, Dashboard, App, Historie und Export. Startansicht ist das Dashboard. Die App erlaubt eine ausdrücklich fiktive Zuordnung an die Projektleitung; diese bleibt nur im React-Zustand der geöffneten Seite und erscheint in der Historienansicht. Keine KI-Abfrage, Datenbank, Nachricht oder dauerhafte Speicherung. Die früheren Vier-Reiter-Angaben unten dokumentieren einen überholten Zwischenstand. Desktop-/Mobilprüfung, TypeScript, Quellenprüfung und SEO-Checks für 37 URLs nach der Neuausrichtung erfolgreich.

- Gemeinsamer Seitenabschluss beschreibt den Umsetzungsgrundsatz: deterministische Regeln zuerst, gezielte KI-Integration, Datenbankanbindungen und gesondert geplante Änderungshistorien. Drei Anwendungsseiten nennen zusätzlich ihre konkrete KI-Rolle und den jeweiligen Entwicklungsstand.
- Projektsteuerung: präziserer Einstieg zu Terminen, Auslastung und offenen Entscheidungen; eigener vierstufiger Ablauf in `ProjectReviewFlow`. Ein verschobener Versuch wird über regelbasierte Prüfung und KI-Berichtsentwurf zur fachlichen Freigabe verfolgt. Explizit schematisch, kein Kundenfall. Anpassungen für einen Pilot werden abgestimmt, kein pauschales Versprechen einer bereits fertigen Integration.
- Excel-/PowerPoint-Seite: konkreter Einstieg, Kontaktaufruf im Hero und vierter Reiter „Historie“. Planstand und Prognose bleiben im fiktiven Beispiel getrennt. Die Anzeige ist vorbereitet, stellt keine KI-Abfrage und keine Datenbankverbindung her und speichert nichts.
- Die Tastaturnavigation der Berichtsreiter berücksichtigt jetzt alle vier Ansichten. Auf schmalen Bildschirmen stehen die vier Reiter in einer Zeile ohne Nummern.
- DE und EN gemeinsam aktualisiert. Bestehende Videos, Vergleichspläne und Inhalte bleiben erhalten.
- TypeScript, Quellenprüfung und SEO-Checks für 37 URLs erfolgreich. Projektablauf auf Desktop und mobil geprüft, Kontaktmodal nach Client-Initialisierung geöffnet und ohne Versand geschlossen. Berichtsreiter einschließlich Pfeiltasten und End-Taste geprüft. Diese Ergänzung wurde am Entwicklungsserver geprüft; noch kein erneuter Produktionsbuild oder Lighthouse-Lauf.
