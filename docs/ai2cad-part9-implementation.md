# AI2CAD Teil 9: Baugruppe zur Montageanleitung

Stand: 11. November 2026. Lokal umgesetzt und geprüft, noch nicht veröffentlicht. Ersetzt den Teil-9-Ausblick aus der Teil-8-Umsetzung.

## Inhalt und Einordnung

Teil 9 setzt die Baugruppe aus Teil 8 fort. Die Videoseite `/ai2cad/baugruppe-zu-montageanleitung` und ihre englische Übersetzung zeigen einen nativen Player, fünf Kapitelmarken, Beschreibung und fachliche Einordnung. Die zentrale Datenquelle ist `aimation-landing/lib/data/assembly-instructions-video.ts`.

Belegt im Video: 14 Schritte, drei Montageabschnitte, 45 Modellbilder und 31 Teile. Die Montagefolge enthält Vormontage der Lagereinheit, Endmontage am Lagerbock und Montage der Riemenscheiben. Die Anleitung unterscheidet Modellmessungen, sechs Annahmen und eine fehlende Angabe. Eine Passfeder fehlt in Stückliste und Modell. Der dargestellte Prüfbericht meldet 11 von 11 Fügebewegungen als kollisionsfrei und behandelt den elastischen Sicherungsring separat. Diese Aussagen werden als Inhalt des Videos wiedergegeben, nicht als eigene technische Verifikation.

Die Anleitung ist als nicht freigegebenes Muster eingeordnet. Anzugsmomente aus Annahmen werden nicht als einsatzfähige Vorgaben übernommen. Keine garantierte Bearbeitungszeit, praktische Montage oder Fertigungsfreigabe behauptet.

## Darstellung und Auffindbarkeit

Der bisherige Ausblick ist durch eine kompakte verlinkte Vorschau ersetzt. Auf Startseite, Entwicklungswerkstatt und AI2CAD-Übersicht bleiben Teil 8 und 9 zusammen. Die Videoseiten verlinken direkt aufeinander. Teil 9 ist als Fortsetzung gekennzeichnet, nicht als unabhängiges Beispiel. Die bisherigen sieben Videos bleiben erhalten.

Übersicht und FAQ nennen neun Folgen. DE/EN-Metadaten, Social-Media-Vorschaubild, Canonical, Sprachverweise, `VideoObject` und `Clip` sind vorhanden. Videoverzeichnis, Sitemap, Faktennachweis und `llms.txt` übernehmen die Folge aus dem zentralen Datensatz. Kapitelmarken: 0, 28, 53, 64 und 73 Sekunden. Der Uploadtag ist auf den vorgesehenen Erst-Livegang am 11. November 2026 gesetzt und bei späterer Veröffentlichung anzupassen.

## Medien und Prüfung

Das Original bleibt unverändert. Die Webfassung mit 1920 × 1080 Pixeln und 30 fps ist 13,06 MiB groß gegenüber 39,96 MiB im Original. H.264 CRF 22, AAC 160 kbit/s, faststart, Ton erhalten. Poster aus Sekunde 60 als WebP. Prüfsummen und Verarbeitung: `ai2cad-part9-media-manifest.json`.

Kontaktbogen im Abstand von sechs Sekunden sowie Texttafeln und Produktionszeitmarken geprüft. Keine vollständige Audiotranskription oder Einzelbildprüfung behauptet.

- Produktionsbuild einschließlich TypeScript erfolgreich.
- AI2CAD-Test: 18 lokalisierte Videoseiten, native Medien, zehn FAQ-Antworten je Sprache, Kapitelmarken und gegenseitige Verlinkung erfolgreich.
- SEO-Test: 91 URLs erfolgreich.
- Browser: mobile Prüfung bei 390 × 844 für Videoseite DE/EN, Übersicht, Startseite und Entwicklungswerkstatt; kein horizontaler Seitenüberlauf in den geprüften Ansichten. Desktop-Videoseite bei 1440 × 1000 geprüft.
- Klick auf die Kapitelmarke 53 Sekunden startet die Wiedergabe bei der Anleitung. Direkter englischer Aufruf mit `?t=64#video` positioniert das Video bei 64 Sekunden ohne Autoplay.
- Keine beobachteten Browserfehler. `git diff --check` erfolgreich.

Keine Veröffentlichung und keine Änderungen an externen Konten. Vorbestehende Änderungen in fremden Audit-Dokumenten bleiben erhalten.
