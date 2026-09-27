# Development-Landscape-Video

## Integration

Der bereits im Arbeitsverzeichnis begonnene Einbau wurde weitergeführt, nicht ersetzt. Der Film steht im bestehenden Bereich `#use-cases`, vor der interaktiven Landkarte. Direkter Anker: `#development-landscape-video`.

Der Film führt in den Katalog ein. Der anschließende Link „Landkarte erkunden“ pausiert die Wiedergabe und führt zu `#landscape-entdecken`. Alle bisherigen Phasen, Beispiele, Lernpfade, drei Anwendungsdemos sowie 5Why, FEM-Visualizer und Ideen-Agentensystem bleiben erhalten.

Die zweispaltige Einleitung übernimmt die vorhandenen Design-Tokens und wird auf Mobilgeräten einspaltig. DE/EN-Texte verwenden `LANDSCAPE_SNAPSHOT` für die Katalogzahlen. Schwerpunkt: technische Produktentwicklung und angrenzende Aufgabenfelder. Keine Gleichsetzung von Katalogeinträgen und abgeschlossenen Kundenprojekten.

## Medien

- Original: `Videos/development-landscape-140s_2026-09-27_19-44-42.mp4`, 1920 × 1080, 140 Sekunden, 62,3 MB.
- Bereits vorbereitete Web-Version weiterverwendet: `aimation-landing/public/videos/demos/development-landscape.mp4`, 1280 × 720, H.264/AAC, 140,01 Sekunden, 7,7 MB, faststart.
- Vorhandenes WebP mit echtem Videoframe weiterverwendet. Keine KI-generierte Illustration.
- Videodatei wird erst nach einem Abspielklick eingebunden. Native Steuerung, Ton und Vollbild verfügbar.
- Gemeinsamer Helfer `lib/media/playback.ts`: Beim Start eines Videos pausieren andere HTML-Videos auf der Seite. Auch in `ApplicationDemos` eingebunden, um überlagerte Tonspuren zu verhindern.
- Keine Transkription oder neue Untertitelspur erstellt. Die Beschreibung ist eine Zusammenfassung, kein vollständiges Audiotranskript.

## Verifikation

- Produktionsbuild mit TypeScript erfolgreich.
- `node scripts/check-demos.mjs`: um das vierte Video, Einbaureihenfolge und Landkarten-Link ergänzt. DE/EN-Markup, erhaltene Anwendungen, Poster, MIME-Typen, HTTP-Byte-Ranges und faststart erfolgreich geprüft.
- `npm run check:seo`: 27 Seiten erfolgreich.
- `npm run check:content`: Quellenprüfung erfolgreich.
- Browser: Wiedergabe mit fortschreitender Zeit, Pausierung beim Start der PM-Demo, Link zur Landkarte und Auswahl „Absicherung“ getestet.
- Desktop und Mobilansicht geprüft. Kein horizontaler Überlauf in den getesteten Breiten.

Andere bereits vorhandene Änderungen an SEO-Metadaten und strukturierten Daten wurden nicht bearbeitet. Kein Commit, Push oder Deployment in diesem Arbeitsschritt.
