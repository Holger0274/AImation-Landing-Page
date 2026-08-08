---
type: spec
campaign: aimation-website-relaunch
spec: 05-formulare-rechner
date: 2026-07-18
priority: hoch
---

# Spec 05: Erstgespräch-Formular und KI-ROI-Rechner

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen, Spec 02 umgesetzt (zentrale Preis-Quelle existiert).

## Kontext (verifizierter Ist-Zustand, 18.07.2026)

- Alle `#kontakt`-CTAs öffnen ein Modal "Ihr Weg zum KI-Erstgespräch" mit 6 Pflichtfeldern (Vorname, Nachname, E-Mail, Firmenname, Unternehmensgröße, Datenschutz-Checkbox) plus Pflicht-Freitext "Ihre größte Herausforderung" (min. 10 Zeichen). Danach Weiterleitung zum Kalender.
- Der Pilot-CTA verlinkt dagegen direkt auf Calendly ohne Formular. Die Reibung ist damit genau falsch verteilt: höchste Hürde vor dem unverbindlichsten Angebot.
- Der ROI-Rechner ist ein 8-Schritte-Wizard mit E-Mail-Gate am Ende. Headline dort: "Wohin sollen wir Ihr persönliches ROI-Ergebnis senden?", Button: "Ergebnis anzeigen". Widerspruch.
- Rechner-Presets sind Office-generisch, Branchenliste enthält Handel und Handwerk (nicht ICP).

## 1. Erstgespräch-Formular entschlacken

**Soll:**

Pflichtfelder nur noch: **Name** (ein Feld statt Vorname/Nachname, falls das Backend das erlaubt, sonst beide behalten), **E-Mail**, **Datenschutz-Checkbox**.

Optional (klar als optional markiert): Firmenname, Unternehmensgröße, Telefon und der Freitext. Freitext-Label neu: `Woran denken Sie gerade? (optional)` mit Hilfstext `Ein Satz reicht und hilft mir, mich auf unser Gespräch vorzubereiten.` Mindestlängen-Validierung entfernen.

Modal-Subheadline neu: `Kurz eintragen, Termin wählen, fertig. Antwort kommt von mir persönlich, nicht von einem Vertriebsteam.`

Das Hintergrund-Stockfoto (generische Berater-Szene) aus dem Modal entfernen: neutraler Hintergrund im Design-System oder das vorhandene Porträtfoto von Holger, falls es als Asset im Repo liegt. Kein neues Stockfoto.

Button bleibt `Termin jetzt buchen`, der Hinweis `Nach dem Absenden werden Sie direkt zum Kalender weitergeleitet` bleibt.

## 2. ROI-Rechner: Presets auf Produktentwicklung umstellen

**Schritt 1, Branchenliste ersetzen durch:** Maschinenbau / Automotive / Luft- und Raumfahrt / Elektrotechnik und Elektronik / Medizintechnik / Ingenieur- und Entwicklungsdienstleistung / Sonstige Fertigung / Sonstige. (Handel, Handwerk, generische Dienstleistung entfernen.)

**Schritt 2, Use-Case-Presets ersetzen durch (Werte-Vorbelegungen sinnvoll aus den bestehenden Presets ableiten):**

| Preset | Beschreibung |
|---|---|
| Wissenssicherung | `Berichte, Protokolle und Erfahrungswissen auffindbar machen, bevor es das Haus verlässt` |
| Technische Anfragen und Änderungsanträge | `Eingehende Anfragen klassifizieren, Kontext sammeln, Antwortentwurf erstellen` |
| Recherche: Patente, Normen, Markt | `Systematische Recherchen in Stunden statt Tagen` |
| Berichte und Dokumentation | `Statusberichte, Protokolle und Doku automatisch erstellen` |
| Eigene Werte | `Individuelle Konfiguration für Ihren Fall` |

## 3. ROI-Rechner: E-Mail-Gate begradigen

**Soll:** Das Ergebnis wird nach Klick **sofort angezeigt** (Schritt 8 wird zur Ergebnisseite). Die E-Mail-Abfrage wandert auf die Ergebnisseite als optionales Angebot:

- Ergebnisseite oben: die Berechnung (Einsparpotenzial, Empfehlung, Paket aus der zentralen Preis-Quelle).
- Darunter Box: `Ergebnis als PDF erhalten? Tragen Sie Ihre E-Mail ein, ich schicke Ihnen die Berechnung mit einer kurzen persönlichen Einordnung.` E-Mail-Feld + Button `Ergebnis zusenden`. DSGVO-Hinweis bleibt.
- Primär-CTA der Ergebnisseite: `Ergebnis im Erstgespräch besprechen` (Standard-Modal).

Falls die Sofort-Anzeige architektonisch zu teuer ist (erst prüfen): Minimalvariante ist die Konsistenz-Korrektur, Headline `Fast geschafft: Wohin dürfen wir Ihr Ergebnis senden?` und Button `Ergebnis per E-Mail erhalten`. Die Sofort-Anzeige ist die bevorzugte Lösung, weil sie das Anti-Hype-Versprechen (`kein Verkaufsgespräch, kein Blabla`) einlöst.

## 4. Rechner-Paketpreise

Bereits durch Spec 02 Punkt 6 abgedeckt (zentrale Quelle). Hier nur verifizieren, dass der Rechner sie nutzt.

## Akzeptanzkriterien

1. Erstgespräch-Modal hat maximal 3 Pflichtelemente (Name, E-Mail, Checkbox); Freitext ist optional ohne Mindestlänge.
2. Stockfoto ist aus dem Modal entfernt.
3. Rechner Schritt 1 und 2 zeigen die neuen ICP-Listen; kein Preset heißt mehr "Meeting-Automatisierung" oder "Dokumentenverarbeitung" in der alten generischen Form.
4. Ergebnis ist ohne E-Mail-Eingabe sichtbar (oder dokumentierte Minimalvariante mit konsistentem Wording).
5. Rechner-Preise kommen aus der zentralen Preis-Quelle (Stichprobe: Wert in Quelle ändern, Rechner zeigt Änderung).
6. Formular-Submit und Kalender-Weiterleitung funktionieren nach dem Umbau (manuell im Build-Preview getestet).
