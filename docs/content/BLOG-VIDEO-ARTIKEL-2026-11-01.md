# Zwei Fachartikel zu den eigenen Video-Demonstrationen

Veröffentlichungsdatum: 1. November 2026.

## Umfang

- `/blog/ki-cnc-drehprogramm-cad-cam`: CAD-Modell, zwei Aufspannungen, Simulation, zwei NC-Programme und Rüstblatt. Eigenständiges CNC-Beispiel, kein Anschluss an das Patentmodell oder die frühere Welle.
- `/blog/ki-schaltplan-erstellen-pruefen`: Motorabgang aus Teil 1 und eigenständige Wendeschütz-/Fehlerfall-Demonstration aus Teil 2. Modellprüfungen werden nicht als Anlagenversuch oder vollständige Normenprüfung dargestellt.
- Beide Artikel ergänzen die bisherigen zwölf Beiträge. CAD/CAM steht vor Elektrik. Originalbilder, native aufklappbare Ablaufstationen, Inhaltsverzeichnis, FAQs und fachliche Prüffragen.
- Leser gelangen zu den eigenen Videoseiten. Elektrik-Links springen zu vorhandenen Kapiteln. Die drei betreffenden Videoseiten verlinken zurück. Die drei vorhandenen Engineering-Artikel empfehlen auch die neuen Beiträge.
- Kein Video-Duplikat auf den Artikelseiten. Die eigenständigen Watch-Seiten behalten VideoObject und native Player.
- Eigene Suchbeschreibung, BlogPosting mit Autor und tatsächlichem Datum, FAQPage, Breadcrumbs, Canonicals und 1200×630-Sharebilder. Sitemap und llms.txt führen die neuen Artikel. Keine vorgetäuschten englischen Übersetzungen.
- Keine Kundenergebnisse, Einsparungen, Suchvolumen oder Rankings erfunden. Die Vorschläge für einen Versuch sind als Empfehlungen formuliert.

## Quellen

Eigene Videos und vorhandene geprüfte Videodaten. Externe Primärquellen, am 1. November 2026 gelesen:

- Autodesk, Post process a manufacturing operation: https://help.autodesk.com/view/fusion360/ENU/?contextId=MFG-POST-PROCESS-OPERATIONS
- EPLAN, Checking Projects: https://www.eplan.help/en-US/Infoportal/Content/Plattform/2027/Content/htm/msgmanagementgui_h_prueflauf.htm

Die Quellen erläutern allgemeine Grundlagen. Sie werden ausdrücklich nicht als Beleg für den Softwareeinsatz in den Videos verwendet.

## Prüfung vor Veröffentlichung

- Produktionsbuild erfolgreich, 119 generierte Seiten.
- `check-video-articles.mjs`: beide Beiträge, SSR, FAQs, Daten, Quellen, Sharebilder, Canonicals, Sprachweiterleitung, Auffindbarkeit, Videofragmente und Kapitel sowie Rückverlinkungen bestanden.
- `check-engineering-articles.mjs`: drei bisherige Fachartikel und neun ältere Beiträge erhalten.
- `check-seo.mjs`: 86 URLs bestanden.
- `check-preserved-content.py`: 34 geschützte Abschnitte unverändert.
- `check-electrical.mjs`: beide Episoden in DE/EN, Kapitel, Medien und SEO bestanden.
- Browserprüfung Desktop und 390 px: Originalbilder geladen, kein horizontales Überlaufen, Ablaufstationen bedienbar. Link aus Elektrik-Artikel setzt den Player korrekt auf Sekunde 42, ohne Autoplay.
- Gefundene Fehler vor Veröffentlichung behoben: Sharebilder als PNG statt WebP an ImageResponse übergeben; nicht existierenden CNC-Fragmentanker entfernt.

Indexierung und Rankings sind damit nicht nachgewiesen. Besucher und Videoaufrufe werden durch die bestehende Umami-Integration erfasst; tatsächliche Suchsichtbarkeit ist in der Search Console zu beobachten.
