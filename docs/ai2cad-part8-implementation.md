# AI2CAD Teil 8: Zeichnung zur Baugruppe

Stand: 11. November 2026. Lokal umgesetzt und geprüft, noch nicht veröffentlicht.

Nachtrag: Teil 9 ist inzwischen eingebunden. Der unten dokumentierte Ausblick beschreibt den Zwischenstand; der aktuelle Stand steht in `ai2cad-part9-implementation.md`.

## Inhalt und Aufbau

Die Reihe umfasst acht veröffentlichungsfertige Videos. Teil 1 bis 5 bleiben im bisherigen Kapitelplayer, einschließlich FEM. Teil 6 und 7 bleiben eigenständige Patent- und CNC-Beispiele. Teil 8 erhält den prominenten Einstieg auf `/ai2cad` und eine hervorgehobene Vorschau auf Startseite und Entwicklungswerkstatt. Die bisherigen URLs bleiben bestehen.

Neue Videoseite: `/ai2cad/zeichnung-zu-baugruppe`, vollständig übersetzt unter `/en/ai2cad/zeichnung-zu-baugruppe`. Zentrale Inhalte stehen in `aimation-landing/lib/data/assembly-video.ts`. Der Datensatz wird in das bestehende Videoverzeichnis aufgenommen. Dadurch erscheinen die neue Folge und ihre Übersetzung auch in der Navigation der Videoseiten, im Faktennachweis, in der Video-Sitemap und in `llms.txt`.

Der Text unterscheidet die vorherige Modellierung der Einzelteile vom eigentlichen Montageauftrag. Im Film liegen die Einzelteile zu diesem Zeitpunkt bereits modelliert und geprüft vor. Gezeigt werden Zeichnungsanalyse, Stückliste SL-0002 mit 15 Positionen und 31 Teilen, Bestätigung, Zusammenbau und Prüfbericht. Der Bericht meldet 7 von 8 Prüfpunkten als bestanden; drei Verschraubungen bleiben zur Sichtprüfung offen. Die Seite übernimmt keine allgemeine Fertigungsfreigabe oder garantierte Bearbeitungszeit.

Teil 9 ist ein ausdrücklich als „In Arbeit“ gekennzeichneter Ausblick auf die Montageanleitung. Es gibt dafür noch keine Route, Videodatei oder strukturierten Videodaten. Sobald die finale Datei vorliegt, sind Inhalt und tatsächlicher Ablauf zu prüfen und der Ausblick durch den Videoeintrag zu ersetzen.

## Medien

Original: `KI-x-CAD-Teil-8-Zeichnung-zur-Baugruppe-v1.mp4`, unverändert.

Webfassung: `aimation-landing/public/videos/ai2cad/baugruppe.mp4`, 1920 × 1080, 30 fps, rund 90 Sekunden. H.264 CRF 22, AAC 160 kbit/s, faststart, Ton erhalten. Dateigröße von 45,17 MiB auf 12,38 MiB reduziert. Poster bei Sekunde 79, WebP mit 79,8 KiB. Prüfsummen und Verarbeitung stehen in `ai2cad-part8-media-manifest.json`.

Bildinhalt anhand eines Kontaktbogens im Abstand von sechs Sekunden geprüft und mit den Texttafeln sowie der lokalen Produktionsvorlage abgeglichen. Keine vollständige Audiotranskription oder Einzelbildprüfung behauptet. Der Player lädt die Videodatei erst beim Abspielen oder beim Aufruf einer Kapitelmarke.

## SEO und KI-Suche

Die Videoseite enthält einen direkt sichtbaren nativen Player, eigene Metadaten und Vorschaubilder für Social Media, Canonical und DE/EN-Sprachverweise, Breadcrumbs sowie `VideoObject`. Fünf sichtbare Kapitelmarken bei 0, 10, 28, 46 und 67 Sekunden sind als `Clip` ausgezeichnet. URLs mit `?t=…#video` springen zum jeweiligen Zeitpunkt. FAQ-Frage und Antwort zur Baugruppenerstellung stehen sichtbar auf der Übersicht und im FAQ-Schema.

Die Umsetzung folgt den bestehenden technischen Grundlagen für [VideoObject und Kapitelmarken](https://developers.google.com/search/docs/appearance/structured-data/video). Für [KI-Suchfunktionen gelten laut Google dieselben SEO-Grundlagen](https://developers.google.com/search/docs/appearance/ai-features); eine besondere GEO-Zertifizierung oder garantierte Aufnahme in Suchantworten gibt es hier nicht. `llms.txt` ergänzt die Orientierung. Indexierung und Suchdarstellung können erst nach Veröffentlichung kontrolliert werden. Das Uploaddatum ist auf den vorgesehenen Veröffentlichungstag 11. November 2026 gesetzt und bei späterem Erst-Livegang anzupassen.

## Prüfung

- `npm run build`: erfolgreich, einschließlich TypeScript-Prüfung.
- `node scripts/check-ai2cad.mjs http://localhost:3010`: 16 lokalisierte Videoseiten, Medien, Kapitelmarken, FAQ, Sitemap und Verlinkung erfolgreich.
- `npm run check:seo -- http://localhost:3010`: 89 URLs erfolgreich.
- Browserprüfung bei 1440 × 1000 und 390 × 844: Übersicht, neue Videoseite, gemeinsamer Einstieg auf Startseite und Entwicklungswerkstatt sowie englische mobile Videoseite. Kein horizontaler Seitenüberlauf in den geprüften Ansichten.
- Kapitelwahl bei 46 Sekunden startet die Wiedergabe am Zusammenbau. Direktaufruf mit `?t=28#video` lädt die Stückliste bei 28 Sekunden und bleibt bis zur Benutzeraktion pausiert.
- Keine Browserfehler bei der geprüften Entwicklungswerkstatt. `git diff --check` erfolgreich.

Die lokale Vorschau muss mit `npm run start -- --hostname localhost --port 3010` gestartet werden. Bei Bindung an `127.0.0.1` trat eine lokale Hostname-Redirect-Schleife auf; mit `localhost` laufen die unveränderten Sprachweiterleitungen und alle Prüfungen erfolgreich.

Vorhandene fremde Änderungen in den SEO-Audit-Dokumenten und `docs/reviews/` wurden nicht verändert. Kein Deployment und keine Änderung an externen Konten.
