# Video-Demos im Bereich „Selbst gebaut“

## Einbau

- Position: nach der Development-Landscape, vor den bestehenden Werkzeugen.
- Anker: `/#selbst-gebaut`, englisch `/en#selbst-gebaut`.
- Neue Komponente: `aimation-landing/components/sections/ApplicationDemos.tsx` mit eigener CSS-Datei.
- Auswahl: PM Demonstrator, VariantHub, Skillmatrix. Jeweils ein großer Player mit Beschreibung und Entwicklungsstand.
- 5Why, FEM-Visualizer und Ideen-Agentensystem bleiben unverändert und sichtbar. Ihre Screenshot-Dialoge bleiben erhalten.
- Kontaktbutton nutzt das vorhandene Erstgespräch-Formular. Keine neue externe Integration.
- Deutsche und englische Begleittexte. Die Videoaufnahmen selbst sind deutsch und als solche beschriftet.

## Quellen und inhaltliche Grenzen

Originale und Beschreibungen liegen unverändert in `Videos/`.

- PM: `PM-Demonstrator-Kurzbeschreibung.md`, `pm-demonstrator-90s.mp4`.
- VariantHub: `VariantHub-Kurzbeschreibung.md`, `varianthub-produktvideo_2026-09-26_13-27-33.mp4`.
- Skillmatrix: `Beschreibung.md`, `skillmatrix-aimation-90s.mp4`.

Der PM-Film zeigt KI-Risiko-Radar und Berichtsentwurf als live; das Dokument führt den KI-Assistenten als Ausbaustufe. Deshalb beschreibt die Website ausdrücklich den gezeigten Demonstrationsstand und verspricht keinen produktiven Funktionsumfang. Vor einem öffentlichen Produktversprechen diesen Unterschied mit Holger auflösen.

VariantHubs Kern ist regelbasiert; KI-Regelvorschläge werden als geplante Erweiterung bezeichnet. Skillmatrix wird nicht pauschal als KI-Entscheidungssystem beworben. Die Beispiele sind Eigenentwicklungen mit Demodaten, keine Kundenreferenzen oder Belege für garantierte Einsparungen.

Die Vorschauen sind echte Frames der gelieferten Filme, keine generierten Bilder. Daher keine Kennzeichnung „KI-generiertes Bild“. Die Videos wurden inhaltlich nicht verändert. Eingebrannte Texte bleiben enthalten; separate Untertitelspuren oder ein wortgetreues Audiotranskript wurden nicht erstellt. Die Website enthält eine textliche Funktionszusammenfassung, keinen vollständigen Ersatz für die Tonspur.

## Medienaufbereitung

Web-Dateien: `aimation-landing/public/videos/demos/`.

- Alle Filme bleiben Full HD (1920 × 1080), rund 90 Sekunden, mit Audio.
- H.264, CRF 22, preset slow, yuv420p, AAC 128 kbit/s, MP4 faststart.
- Zusammen ca. 62,7 MB statt 125,2 MB der Originale.
- WebP-Vorschaubilder mit 1600 Pixel Breite, Qualität 86.
- Frame-Auswahl: PM bei Sekunde 20, VariantHub bei Sekunde 35, Skillmatrix bei Sekunde 27.
- MP4-Dateien werden vor dem ausdrücklichen Abspielklick nicht in das DOM eingebunden. Kein automatischer Start beim Scrollen oder beim Wechsel der Anwendung.
- Ein Wechsel entfernt und pausiert den vorherigen Player. Native Wiedergabesteuerung, Lautstärke und Vollbild bleiben verfügbar.
- Die Middleware nimmt `/videos/` vom Sprachrouting aus. Byte-Range-Anfragen liefern 206 statt einer Sprachweiterleitung.

## Prüfung

- Produktionsbuild inklusive TypeScript erfolgreich.
- `node scripts/check-demos.mjs`: DE/EN, alle sechs Anwendungen, kein initiales Videoelement, MP4/Poster-MIME, Byte-Ranges und faststart geprüft.
- `npm run check:seo`: 27 URLs erfolgreich.
- `npm run check:content`: bestehende Quellen-/Werkzeug-Prüfung erfolgreich.
- Browser: alle drei Filme tatsächlich gestartet, jeweils nur ein Player; bei Tabwechsel kein Videoelement bis zum nächsten Abspielklick.
- Tastaturauswahl und Fokus geprüft, mobiler Überlauf geprüft.
- Bestehender 5Why-Dialog und neuer Kontaktbutton geöffnet und geschlossen; kein Formular abgesendet.

Kein Commit, Push oder Deployment in diesem Arbeitsschritt. Lokale Vorschau: Port 3011.
