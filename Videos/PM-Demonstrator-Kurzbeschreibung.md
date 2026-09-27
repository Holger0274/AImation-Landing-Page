# PM Demonstrator – Kurzbeschreibung

*Projekt- und Ressourcensteuerung für Entwicklungsabteilungen · Stand: September 2026*

## Worum es geht

Der PM Demonstrator ist ein Werkzeug zur **Projekt- und Ressourcensteuerung für technische Entwicklungsabteilungen** in der Industrie, also für Projekte mit Phasen von der Anforderung bis zur Serienfreigabe, mit Werkzeugbau, Prüfungen und Zertifizierung.

Er ist von Monday.com inspiriert (Boards, mehrere Sichten auf dieselben Daten, Zusammenarbeit direkt am Arbeitspaket), aber bewusst **kein Baukasten**. Das Datenmodell ist fest und fachlich, und jede Kennzahl kann erklären, wie sie zustande kommt.

**Das Versprechen:** Eine Projektleiterin legt ein Projekt an, plant Arbeitspakete, weist Personen und Aufwand zu, erkennt Termin- und Kapazitätsprobleme, verfolgt Risiken und Entscheidungen und erzeugt daraus einen Management-Statusbericht. Alles in einem System, ohne Schattenlisten in Excel.

```
Projekt → Arbeitspaket → Person → Zeitraum → Aufwand → Abhängigkeit → Risiko / Entscheidung → Bericht
```

## Was das Tool kann

| Bereich | Kurz gesagt |
|---|---|
| **Meine Arbeit** | Persönliche Startseite: heute fällig, überfällig, blockiert, anstehende Reviews, Erwähnungen, eigene Auslastung der nächsten Wochen. |
| **Portfolio** | Eine Zeile pro Projekt: Phase, Ampel, Fortschritt, nächster Meilenstein, Top-Risiko, Kapazitätsengpass, Eskalation. Alles automatisch berechnet. |
| **Projektcockpit** | Die Seite für den Lenkungskreis: Ampel mit Begründung plus Systemvorschlag mit „Warum?“, Terminabweichung, Meilensteine, kritische Pakete, Risiken, offene Entscheidungen, Team-Auslastung. |
| **Board** | Arbeitspakete nach Phasen gruppiert, Inline-Bearbeitung, Statusregeln (z. B. „Blockiert“ nur mit Grund), eigene Felder, Filter, gespeicherte Ansichten, Massenaktionen. Detailansicht mit Kommentaren, @-Erwähnungen, Abhängigkeiten und lückenloser Änderungshistorie. |
| **Timeline (Gantt)** | Balken, Meilensteine mit Baseline vs. Prognose, Abhängigkeitslinien, verletzte Abhängigkeiten rot markiert, Verschieben per Drag mit Bestätigung. |
| **Meilensteine** | Baseline, Prognose, Ist-Termin, Status (geplant / gefährdet / verpasst / erreicht), Baseline-Historie. |
| **Workload** | Heatmap Personen/Teams × Kalenderwochen. Rechnet Vertragsstunden minus Urlaub minus Linienanteil gegen geplante Stunden. Jede Zelle per Klick erklärt, Umverteilung direkt aus der Ansicht. |
| **Risiken, Issues, Entscheidungen** | Drei eigene Register mit eigenem Lebenszyklus: Risikomatrix 5×5, eingetretenes Risiko wird zum Issue, Eskalationsstufen bis ins Portfolio, Entscheidungen mit Optionen und Pflicht-Begründung. |
| **Statusberichte** | Entwurf wird automatisch aus den Live-Daten erzeugt; die Projektleitung ergänzt nur Ampel und Einschätzung. Nach dem Einfrieren ist der Bericht unveränderlich und druckbar. |
| **Benachrichtigungen** | Glocke mit zehn Kategorien, täglicher Automatiklauf mit acht festen Regeln (fällig, überfällig, Meilenstein gefährdet, Risiko kritisch, Überlast, veralteter Bericht usw.). |
| **Administration** | Nutzer und Rollen, Teams, Arbeitszeitmodelle, Abwesenheiten, Sicherheits-Audit, CSV-Export (Excel-tauglich). |

## KI-Assistent (Ausbaustufe)

Sechs KI-Funktionen auf Basis der strukturierten Projektdaten: **Statusbericht-Entwurf**, **„Frag das Projekt“** (Fragen in natürlicher Sprache mit Belegen), **Risiko-Radar** (erkennt unerfasste Risiken in Kommentaren), **Umplanungsvorschlag** bei Überlast, **Projektplan aus Lastenheft** und **Entscheidungsvorlage**.

Grundregel: **Die KI schlägt vor, sie schreibt nie selbst.** Jede Übernahme läuft über dieselben Bestätigungen, Rechte und Protokolle wie eine manuelle Änderung.

## Was im Hintergrund zählt

- **Sechs Rollen** (Admin, PMO, Projektleitung, Mitglied, Management-Betrachter, Gast), serverseitig durchgesetzt. Vertrauliche Projekte bleiben auch für das Management unsichtbar.
- **Nachvollziehbarkeit:** Aktivitätsprotokoll (wer hat was wann geändert) und getrenntes Sicherheits-Audit, inklusive jeder abgelehnten Aktion.
- **Keine stillen Überschreibungen:** Ändern zwei Personen dasselbe, wird der Konflikt erkannt.
- **Auslastung ist eine Planungs-, keine Leistungskennzahl.** Personen werden nicht bewertet.
- **Barrierefrei:** Ampeln nie nur über Farbe, Tastaturbedienung, ausreichende Kontraste.
- **Mandantenfähig** von Anfang an; Oberfläche auf Deutsch.

## Stand und Abgrenzung

- **Proof of Concept**, vollständig gebaut und automatisiert getestet, mit fiktiven Demodaten (5 Projekte, 127 Arbeitspakete, 24 Personen in 5 Teams) und sechs Demo-Personas zum Durchklicken statt Login.
- Technik: TypeScript, Next.js, Postgres, Hosting in der EU.
- **Bewusst noch nicht enthalten:** Login/SSO, Datei-Uploads (nur Links), Zeiterfassung, Abrechnung, mobile App, frei konfigurierbare Dashboards.
- Zielgröße für einen Piloten: 10–15 Nutzer, später 50–70.

## Nächster Schritt

Der Demonstrator zeigt, **was möglich ist**. Bevor daraus ein Pilot wird, ist mit dem Kunden zu klären, **was gebraucht wird**: Ziel und Erfolgskriterien, Nutzerzahl und Teamstruktur, Phasenmodell und Pflichtfelder, Anmeldung und Schnittstellen (z. B. SAP, Jira, SharePoint) sowie die Abstimmung mit **Betriebsrat und Datenschutz**, bevor echte Mitarbeiterdaten geladen werden.

---

*Ausführliche Funktionsbeschreibung mit Screenshots: `PM-Demonstrator-Funktionsbeschreibung.md`*
