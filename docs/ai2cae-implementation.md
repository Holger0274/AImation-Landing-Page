# AI2CAE als fünftes Kapitel

Stand: 10. Oktober 2026.

Die bestehende Startseiten-Kachel wurde um AI2CAE erweitert. Es gibt weiterhin genau eine gemeinsame Kachel für die CAD-/CAE-Reihe. Sie zeigt das tatsächliche FEM-Ergebnis als Vorschaubild, kündigt fünf Videos an und verlinkt weiter auf `/ai2cad`. Das dunkle Engineering-Design bleibt erhalten.

Die bestehende Unterseite führt die Reihe bis zur FEM-Berechnung fort. Kapitel 05 heißt „Vom Bauteil zur FEM-Prüfung“. Eine zusätzliche Videoseite unter `/ai2cad/fem-nachweis` enthält den nativen Player, VideoObject-Daten und die Beschreibung. Alle Ergänzungen existieren auf Deutsch und Englisch; die Aufnahme selbst bleibt deutsch.

## Inhalt und Einordnung

Grundlage sind das gelieferte Video und die angehängte Erläuterung zur Handrechnung. Die darin enthaltene Frage nach einer PDF-Erweiterung wurde als Quelltext behandelt, nicht als Auftrag. Es wurde kein neuer PDF-Bericht erstellt.

Die Website beschreibt Last und Lagerung, drei Netzfeinheiten, Vergleich mit der Handrechnung und Dokumentation. Eine Tabelle zeigt Lagerkräfte, Durchbiegung, Lagerneigung und die lokale Spannung am Freistich F1. Das LLM steuert den Ablauf; das CAE-System führt die numerische Rechnung aus.

Die Zahlen sind Ergebnisse der gelieferten Demonstration. Das ursprüngliche FE-Modell und die Solverdateien wurden nicht unabhängig nachgerechnet. Pauschale Aussagen wie „die Welle ist sicher“, „Momente bestätigen den E-Modul“ oder „die Abweichung ist kein Fehler“ wurden nicht als geprüfte Tatsachen übernommen. Die fachliche Einordnung benennt lineare Elastizität, statischen Lastfall, Lageridealisierung, Netzkonvergenz und den fehlenden Ermüdungsnachweis.

Methodische Gegenprüfung: [Netzverfeinerungsstudien](https://www.comsol.com/support/knowledgebase/1261) und [Singularitäten durch lokale Lasten oder Zwangsbedingungen](https://www.comsol.com/blogs/singularities-in-finite-element-models-dealing-with-red-spots). Diese Quellen stützen die Einordnung der Methode, nicht die konkreten Zahlen der Aufnahme. Sie legen kein verwendetes Produkt der Demo fest.

## Medien

Quelle: `KI-x-CAD-Teil-5-FEM-Nachweis.mp4`, 151 Sekunden, 1920 × 1080 Pixel, 30 fps. Original unverändert. Alle 4.530 Originalbilder wurden mit lokaler Apple-Vision-Texterkennung untersucht. Produktnamen wurden bildgenau mit neutralen Begriffen ersetzt; Hintergründe stammen aus angrenzenden Pixeln desselben Frames. Keine statischen schwarzen Abdeckflächen.

Die Website-Fassung ist wie die vorherigen CAD-Kapitel ohne Ton; dieser Zustand ist an den Playern gekennzeichnet. Das verhindert ungeprüfte gesprochene Produktnamen. Keine Audiotranskription, keine Übertragung der Originalaufnahme an einen externen Mediendienst. Poster aus der anonymisierten Fassung bei 85 Sekunden.

Die nachgelagerte OCR-Stichprobe mit zwei Bildern pro Sekunde fand in 302 Bildern keine gesuchten Produktnamen. Dies ist keine Vollbildgarantie der OCR. Sichtkontrolle von Kontaktbogen und ausgewählten Einzelbildern. Prüfsummen und Exportdaten in `ai2cae-media-manifest.json`.

## Prüfung

- Produktionsbuild und TypeScript erfolgreich.
- Inhaltsquellen-Check erfolgreich.
- AI2CAD-Regressionsprüfung: zehn Sprachfassungen der fünf Videoseiten, sieben FAQs je Sprache, korrekte Veröffentlichungsdaten, Medien, Sitemap und llms.txt erfolgreich.
- Allgemeiner SEO-Check: 61 URLs erfolgreich.
- Browser: Kapitel 5 spielbar, Dauer 151 Sekunden, Pfeil-rechts wechselt von Kapitel 5 zu Kapitel 1. Mobile Ansicht bei 390 × 844 ohne horizontalen Seitenüberlauf, Desktop bei 1440 × 900 geprüft. Eine Startseiten-Kachel und ihr Link zur Unterseite geprüft.

Die neue Videoseite ist in Video-Sitemap und llms.txt enthalten. Das ist noch kein Beleg für eine Aufnahme in den Google-Index.
