# Entwicklungsserie: Teil 6 und 7, 1. November 2026

## Redaktion und Struktur

Die vom Nutzer gelieferten Videos erweitern die Serie als eigenständige Entwicklungsbeispiele. Teil 6 visualisiert eine Patentschrift als 3D-Baugruppe. Teil 7 zeigt die Vorbereitung eines CNC-Drehprogramms mit Aufspannungen, Werkzeugbewegungen, Simulation und Rüstunterlagen. Der Nutzer hat ausdrücklich festgelegt, dass diese Beispiele weder aufeinander noch auf der bisherigen Wellen-Demonstration aufbauen.

Die ursprünglichen fünf CAD-/FEM-Schritte bleiben unverändert in ihrem vorhandenen Player. Ein zusätzlicher Bereich mit zwei Vorschaubildern erscheint auf Startseite, Entwicklungswerkstatt und AI2CAD-Übersicht. Jede neue Aufnahme hat eine eigene Videoseite in DE/EN:

- `/ai2cad/patent-zu-3d`, Teil 06, 2:42 Minuten.
- `/ai2cad/cnc-drehprogramm`, Teil 07, 2:22 Minuten.

Die Datensammlung `ENGINEERING_EXTENSIONS` hält eigenständige Beispiele getrennt vom ursprünglichen Ablauf. Die gemeinsame Sammlung `AI2CAD_VIDEOS` versorgt Detailseiten, Video-Sitemap, Sprachpfade, Faktennachweise und `llms.txt`. Eine FAQ erklärt die Unabhängigkeit der neuen Teile. CNC wird als Programmvorbereitung und Simulation beschrieben; eine reale Fertigung wird nicht behauptet.

Elektrische Schaltpläne sind laut Nutzer als nächster Fachbereich vorgesehen. Dafür kann später ein weiterer eigenständiger Datensatz mit Fachbereich, Video, Vorschaubild, Beschreibung und Grenzen ergänzt werden. Überschrift und Einführung des zusätzlichen Bereichs werden dann um Elektrik erweitert. Es wird jetzt kein noch nicht vorhandenes Elektrikvideo oder fertiger Anwendungsfall veröffentlicht.

## Medien

Quellen: `KI-x-CAD-Teil-6-Patent-zu-3D-v1.mp4` und `KI-x-CAD-Teil-7-CNC-Drehprogramm-v2.mp4` aus dem vom Nutzer genannten iCloud-Verzeichnis. Die Originale bleiben unverändert.

Webfassungen: H.264, 1920 × 1080, CRF 25, AAC 128 kbit/s, MP4 mit Faststart. Ton und vollständige Laufzeit bleiben erhalten. Patent: 17.766.872 Byte / 162,005 Sekunden. CNC: 15.142.330 Byte / 142,016 Sekunden. Zusammen etwa 32,9 MB statt 110,9 MB. Poster sind echte Videoeinzelbilder bei 70 Sekunden (Patent) und 44 Sekunden (CNC), als WebP exportiert. Keine erfundenen Produktabbildungen.

Die Übersicht lädt Vorschaubilder. Videoseiten verwenden native Controls und `preload="none"`, ohne Autoplay. Das Veröffentlichungsdatum der neuen Seiten ist 2026-11-01; die bisherigen Veröffentlichungsdaten bleiben erhalten.

## Prüfung

- Produktionsbuild und `git diff --check` bestanden.
- `check-ai2cad.mjs`: 14 DE/EN-Videoseiten, native Videoquellen, acht FAQs je Sprache, sichtbare neue Einstiege, VideoObject, Sitemap, `llms.txt` und Mediendateien bestanden.
- `check-seo.mjs`: 78 URLs bestanden.
- `check-discovery.mjs`: 12 Seiten, 132 Fragmentlinks bestanden.
- `check-preserved-content.py`: 34 ursprüngliche Abschnittstexte in DE/EN unverändert.
- Sichtprüfung der neuen Startseitenkarten auf Desktop (1366 px) und Mobilgerät (390 px), kein horizontaler Überlauf.
- Patentvideo im Desktopbrowser und CNC-Video in mobiler Ansicht gestartet. Beide erreichten `readyState=4`, laufende Wiedergabe und korrekte Dauer, ohne Medienfehler. Danach pausiert.

Die Inhaltsbeschreibungen beruhen auf den gelieferten Videos und der Einordnung des Nutzers, nicht auf einer fachlichen Validierung der Konstruktion oder des NC-Codes.
