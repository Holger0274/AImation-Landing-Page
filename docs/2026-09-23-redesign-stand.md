# AImation: Stand des dunklen Redesigns

Stand: 23. September 2026

## Auftrag und Gestaltung

Der Nutzer hat in der Aufgabe „Website analysieren und umgestalten“ die vollständige Umsetzung des dunklen Entwurfs freigegeben und sichtbare Zwischenstände gewünscht. Die Fortsetzung erfolgte in „Arbeit fortsetzen“.

Referenz: `Kunden/Wieland/Brand/Design-Glaenzendes-Schwarz/DESIGN-GLAENZENDES-SCHWARZ.md` und die dortige HTML-Vorlage. Für diesen Entwurf wurde ausdrücklich die dunkle Fassung gewählt. Die ältere Vorgabe eines überwiegend warmweißen Hintergrunds beschreibt daher nicht diesen beauftragten Stand. Magenta, Space Grotesk und Inter bleiben erhalten. Inhaltliche Relaunch-Spezifikationen gelten weiter.

## Umsetzung

- Dunkle Grundflächen mit Lichtreflexen, technischem Raster und zwei SVG-Zeichnungen aus der gelieferten Vorlage.
- Zeichnungen reagieren dezent auf Mausbewegungen. Touchgeräte und die Einstellung für reduzierte Bewegung deaktivieren diese Reaktion.
- Neuer Hero mit direkt erreichbarem Gesprächsbutton, technischer Zeichnung und Wissenssicherung als Hauptthema.
- Glaskarten mit mausabhängigem Licht, gegliederte KI-Landkarte, aufklappbarer Prozess und Leistungszeilen statt Flip-Karten.
- Dunkle Farben auch für Leistungsseiten, Blog, Use Cases, Faktenseiten, Formulare und Rechtstexte.
- Kontaktdialog nutzt Radix für Fokusbegrenzung, Escape, Scrollsperre und Rückkehr zum Auslöser. Fehler werden im Formular angezeigt; Pflichtfeldmeldungen haben `role="alert"`.
- Desktop-Dropdown öffnet per Klick und schließt außerhalb, beim Verlassen mit Tab oder per Escape. Tablet zeigt das mobile Menü.
- Footer-Anker führen über locale-bewusste Links zur Startseite zurück.
- ROI-Dialog und Paketpreise umbrechen auf kleinen Displays. Eingabefelder haben zugängliche Namen; der Dialog behält seinen Titel auch im Ergebnis.
- Geschlossene FAQ-Antworten bleiben im HTML, sind für Screenreader jedoch ausgeblendet.
- Dunkle Beschriftung auf Magenta-Verläufen verbessert den Kontrast. Die hellen WORK-/THINK-Filter nutzen ebenfalls dunkle Schrift.
- Gemeinsame Dialoge geben den Fokus an den Auslöser zurück; Demo-Kacheln verwenden dafür Radix DialogTrigger.

## Zentrale Dateien

- `aimation-landing/app/engineering.css`: neue Designtokens und Layouts.
- `aimation-landing/components/visuals/`: Hintergrund, Zeichnung, Spotlight-Hilfen.
- `aimation-landing/public/images/engineering-connector.svg` und `engineering-spring.svg`.
- `aimation-landing/components/sections/`: Startseitenbereiche.
- `aimation-landing/components/layout/`: Navigation und Footer.
- `aimation-landing/components/LeadFormModal.tsx` und `components/ui/dialog.tsx`: Dialoge.
- `aimation-landing/components/ROICalculator/`: mobile Darstellung und zugängliche Eingaben.

## Durchgeführte Prüfung

- `npm run build`: erfolgreich, einschließlich TypeScript-Prüfung und Erzeugung aller 51 statischen Seiten. Für Google Fonts benötigte der Build Netzwerkzugriff außerhalb der Sandbox.
- `tsc --noEmit`: erfolgreich bei der Zwischenprüfung; der abschließende Build prüfte die späteren Änderungen erneut.
- `git diff --check`: erfolgreich.
- Startseite in der gebauten Version bei 375, 768, 1024 und 1920 Pixeln: kein horizontaler Seitenüberlauf; Hero-CTA im ersten Bildschirm.
- Handyprüfung von Umsetzung, KI-Agenten, Use-Case-Übersicht, Blog-Übersicht, Artikel „Prozessdokumentation“, Unternehmensfakten, Impressum und Datenschutz: kein horizontaler Überlauf bei den geprüften Texten/Buttons.
- Beratungsseite auf Desktop und Schulungsseite auf Tablet visuell kontrolliert.
- Mobiles Menü, Untermenü, Desktop-Dropdown, Öffnen des Kontaktformulars, leere Pflichtfelder, Tab-Zyklus, Escape und Fokus-Rückgabe geprüft.
- ROI-Rechner mit Maschinenbau/Wissenssicherung und Voreinstellungen bis zum Ergebnis durchlaufen; Ergebnis wird ohne E-Mail angezeigt. Mobiles Ergebnis ohne horizontalen Dialogüberlauf.
- FAQ auf-/zugeklappt, Herausforderungsdialog inklusive geladener Illustration geprüft, Sprachwechsel auf Englisch geprüft.
- Nach dem abschließenden Build: Demo-Kachel per Maus geöffnet und mit Escape geschlossen; Fokus landet wieder auf der Kachel. Fokusrückgabe des ROI-Dialogs ebenfalls geprüft.

## Grenzen und Übergabe

Keine echte Kontaktanfrage, E-Mail oder Kalenderbuchung wurde versendet. Die externen Integrationen wurden nicht Ende zu Ende getestet. Kein Lighthouse-Lauf und keine vollständige Prüfung über mehrere Browser-Engines.

Die vorhandene E2E-Suite wurde nicht als Nachweis verwendet: Sie erwartet teilweise den alten 40%-Hero, getrennte Vor-/Nachnamensfelder und früher verpflichtende Unternehmensdaten. Diese Tests müssen separat an den aktuellen Relaunch angepasst werden. Der Build überspringt ESLint gemäß vorhandener Next-Konfiguration.

Alle Änderungen liegen lokal im gemeinsamen Projektordner und werden als Git-Checkpoint auf `codex/glossy-engineering-redesign` gesichert. Es wurde kein Push oder Deployment ausgeführt. Die bereits vorhandenen unversionierten Dateien `AGENTS.md` und `Logo Partnerschaft/` wurden nicht verändert.

Die Vorschau läuft mit `npm run start -- --hostname localhost --port 3010` auf http://localhost:3010/. Sie zeigt den Produktions-Build. Für weitere Codeänderungen diesen Server stoppen und `npm run dev -- --hostname localhost --port 3010` starten.
