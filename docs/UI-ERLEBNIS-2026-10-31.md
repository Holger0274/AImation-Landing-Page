# AImation: erste Erlebnis-Runde, 31. Oktober 2026

Ziel: Die Startseite führt früher in die vorhandene Entwicklungsarbeit. Besucher können echte Ergebnisse auswählen, die Videos direkt auf der Startseite ansehen und anschließend zu passenden Anwendungen wechseln.

## Änderungen

- Interaktiver Einstieg mit Originalansichten von Skizze, Zeichnung und FEM. Die Auswahl zeigt jeweils eine fachliche Kurzbeschreibung. Kein simuliertes CAD-System und keine erfundenen Ergebnisse.
- Vier direkte Einstiege zu CAD/FEM, Anwendungen, Entwicklungskatalog und Zusammenarbeit.
- Fünf CAD-/CAE-Kapitel direkt auf der Startseite, mit Bildauswahl, Laufzeiten, technischen Erläuterungen und Weiter-Schaltfläche. Bestehender Kapitelplayer wird wiederverwendet.
- Anwendungsdemos folgen direkt auf die CAD-Reise. Nach Nutzerfeedback steht die persönliche Vorstellung wieder direkt unter dem Hero, vor der Erlebnisnavigation und den Demonstrationen: Der Ansprechpartner und seine Erfahrung sollen früh sichtbar sein.
- Auf schmalen Bildschirmen erscheint die interaktive Vorschau vor den ergänzenden Pilot- und Themenhinweisen.
- Autodesk-Mitgliedschaft als größere typografische Karte bzw. Banner, mit Startup-Kategorie und bestätigtem Datum. Kein Autodesk-Logo eingebunden.
- Deutsche und englische Texte umgesetzt. Bestehende URL-Struktur, Preise und Kontaktformulare bleiben erhalten.

## Autodesk-Logo

Autodesk nennt das Developer Logo ausdrücklich als ADN-Leistung:
https://aps.autodesk.com/blog/maximise-your-adn-membership-2025-mid-year-tips

Logo-Verwendung setzt die passende Berechtigung und Vereinbarung voraus:
https://www.autodesk.com/company/legal-notices-trademarks/trademarks/guidelines-for-use
https://images.autodesk.com/adsk/files/autodesk_logo_license_agreement.pdf

Die vom Nutzer erwähnte Freigabeanfrage ist weiterhin offen. Die konkrete Berechtigung und Originaldatei aus dem Mitgliedszugang liegen für diese Umsetzung nicht vor. Die Karte nutzt AImation-Typografie und eine dekorative Rasterfläche, keine nachgebaute Autodesk-Wortmarke. Keine E-Mail verschickt und keine Lizenz angenommen.

## Prüfung

- Produktionsbuild einschließlich TypeScript erfolgreich.
- check:content erfolgreich.
- check-demos: DE/EN, drei Anwendungsdemos plus fünf CAD-Kapitel, kein anfängliches Videoelement, Medienauslieferung erfolgreich.
- check-ai2cad: zehn Videoseiten, Quellen, Metadaten, FAQ und Sprachvarianten erfolgreich.
- check-seo: 61 URLs, Canonicals, Sprachen, Sitemap, strukturierte Daten und Weiterleitungen erfolgreich.
- Browser: DE/EN, Hero-Auswahl, Kapitelwahl per Tastatur (Home/End), Weiter-Schaltfläche, native Wiedergabe und Anwendungswechsel geprüft. Beim Start eines Anwendungsvideos pausiert das laufende CAD-Video.
- Desktop 1440, Laptop 1024, Tablet 768 und Smartphone 390 Pixel: kein horizontaler Seitenüberlauf. Mobile Wiedergabe und Öffnen/Schließen des Kontaktfensters geprüft; keine Testanfrage versendet.
- Animationen respektieren prefers-reduced-motion. Kein automatischer Videostart beim Seitenaufruf und keine neue Abhängigkeit.

Keine Aussage über eine gemessene Steigerung der Anfragen oder Ladegeschwindigkeit. Diese Runde verbessert Darstellung und Bedienung; die geschäftliche Wirkung ist noch offen.
