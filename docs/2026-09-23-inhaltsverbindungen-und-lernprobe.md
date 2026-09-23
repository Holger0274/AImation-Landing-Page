# Inhaltsverbindungen und Lernprobe

Stand: 23.09.2026. Lokal umgesetzt, nicht veröffentlicht.

## Besucherwege

- QKT → ausgewählter Katalogfall: Qualität → Wiederholfehler-Abgleich; Kosten → Prüfberichts-Erstellung; Timing → Mehrdeutigkeits-Check.
- Alle zwölf kuratierten Fälle haben einen direkten Kursverweis. Die Zuordnung ist eine redaktionelle Empfehlung für Grundlagen, keine Zusage, dass die Schulung das System liefert.
- Absicherung → FEM-Visualizer; Serie/Feld → 5Why. Beide Links sind ausdrücklich als verwandte, eigenständige Werkzeuge gekennzeichnet, nicht als Umsetzung des Katalogfalls.
- Katalogfall und Werkstatt → interaktive Lernprobe → vollständige Kursbeschreibung oder zurück zum Prüfbericht-Beispiel.
- Permanente Hash-Ziele öffnen den ausgewählten Fall auch nach Neuladen. Die Bereichs- und Fallauswahl aktualisiert den Hash ohne zusätzliche History-Einträge.

## Erlebbare Inhalte

Drei aufklappbare Ablaufbeispiele zeigen Eingabe, Prüfhinweise, nächsten Schritt und menschliche Prüfung. Alle Zahlen, IDs und Eingaben darin sind ausdrücklich fiktive Beispieldaten. Die Texte sind redaktionell verfasst, keine echten Modellausgaben, keine Live-Demos und keine Kundenresultate.

Die Lernprobe auf der Schulungsseite basiert auf der Lernmechanik aus:

`Learing Mats/Schulungen/microsoft-365-copilot/modul-1-kickoff-ki-grundlagen/1-2-grundlagen-des-promptens/veredelung/bloecke.md`

Besucher ordnen einen Prompt-Satz einem von vier Bausteinen (Rolle, Ziel, Kontext, Format) zu. Falsche und richtige Antworten erhalten erklärendes Feedback. Ein vollständiger Beispiel-Prompt lässt sich anschließend aufklappen. Verkürzte, eigens formulierte Übertragung auf Versuchsplanung, keine Kopie der vollständigen Lektion. Keine Eingabe persönlicher Daten und keine KI-API erforderlich.

## Pflege und Quellencheck

- `lib/data/training.ts`: zentrale Kursnamen, IDs und Modulzahlen für Schulungsseite und Querverweise.
- `lib/data/application-paths.ts`: QKT-Ziele, Bereich-Kurs-Zuordnungen, verwandte Werkzeuge und Ablaufbeispiele.
- `lib/data/engineering-landscape.ts`: bestehende zwölf Fälle mit Original-Quell-IDs.
- `npm run check:content`: rein lesender Abgleich mit den benachbarten Projekten Development Landscape und Learing Mats. Alternative Pfade können als zwei Argumente übergeben werden.

Geprüft werden Katalogumfang/Bereichszahl, Existenz der zwölf IDs, drei QKT-Ziele, sechs Kurstitel samt Modulzahlen, gültige Kursverweise, die vier Bausteine in der Lernprobenquelle und drei Werkzeugstatus. Fehlende Quellen oder Abweichungen liefern Exitcode 1. Der Check importiert oder veröffentlicht nichts automatisch. Inhaltliche Änderungen innerhalb von Katalogfällen, rechtliche Aussagen, Screenshots und vollständige Lektionen werden dadurch nicht automatisch geprüft.

## Verifikation

- TypeScript ohne Fehler; Produktionsbuild erfolgreich, 51 statische Seiten. Bestehende Build-Konfiguration überspringt ESLint; vorhandene Browserslist-Alterswarnung unverändert.
- Quellencheck erfolgreich: 639 Einträge, 60 Bereiche, zwölf ausgewählte IDs, sechs Lernreihen, drei Werkzeugstatus.
- Alle zwölf Fallauswahlen und Kursziele im Browser geprüft.
- Alle drei QKT-Verbindungen, zwei Werkzeuganker, Lernproben-Hin-/Rückweg und Kursanker geprüft.
- Deutsches und englisches Ablaufbeispiel, falsche/richtige Quizantwort, Enter-Bedienung und aufklappbarer Prompt geprüft.
- Direktlink zum Prüfbericht nach Neuladen geprüft (Auswahl erfolgt nach React-Hydrierung).
- Desktop 1440 px und Mobilansicht 390 px visuell geprüft; Schulungsseite zusätzlich bei 375, 768, 1024 und 1920 px ohne horizontalen Überlauf.
- Keine neuen Browser-Console-Fehler beim Test. Kein Versand von Formularen, kein Deployment.

Hero, Hero-Zeichnung und Reihenfolge der übrigen Startseiten-Sektionen sind unverändert. Der ältere Use-Case-Katalog und dessen absolute Leistungsversprechen sind in diesem Durchgang nicht überarbeitet worden; vor Veröffentlichung bleibt dieser zuvor benannte Inhaltsabgleich offen.
