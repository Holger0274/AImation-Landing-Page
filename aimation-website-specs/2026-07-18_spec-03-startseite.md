---
type: spec
campaign: aimation-website-relaunch
spec: 03-startseite
date: 2026-07-18
priority: hoch
---

# Spec 03: Startseite, Hero, Anker Wissenssicherung, Kürzung, Dringlichkeit

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen, Spec 02 umgesetzt (neue Angebotsnamen existieren).

## Ziel

Die Startseite bekommt eine echte Headline, einen durchgehenden Anker-Use-Case (Wissenssicherung), wird um rund ein Drittel gekürzt und erhält einen legitimen Dringlichkeitsgrund (EU AI Act). Struktur und Design-System bleiben.

## 1. Hero ersetzen

**Ist:** Über der Headline sitzt ein Badge-Pill `KI · Produktentwicklung · Mittelstand`, die H1 ist der Dreiklang `Anfragen sortieren sich selbst. Wissen bleibt im Haus. Ihre Produkte werden schneller reif.` Der Dreiklang ist gut, aber er führt mit Anfragen statt mit dem Anker Wissenssicherung, und es fehlt ein emotionaler Einstieg.

**Soll:** Der Badge-Pill bleibt unverändert. H1 und Subheadline werden ersetzt:

- H1: `Ihr erfahrenster Entwickler geht in Rente. Sein Wissen muss nicht mitgehen.`
- Subheadline: `AImation bringt KI dorthin, wo wirklich entwickelt wird: Wissen bleibt im Haus, Anfragen sortieren sich selbst, Berichte schreiben sich fast von allein. DSGVO-konform, Verarbeitung in der EU.`
- Primär-CTA: `Kostenloses Erstgespräch` (Standard-Modal). Sekundär-CTA: `Was kostet Sie das pro Jahr? ROI berechnen` (öffnet Rechner).
- Trust-Zeile unter den CTAs (einmalig, danach nirgends wiederholen): `20+ Jahre Produktentwicklung und Führung in der Industrie · 18.000+ LinkedIn-Follower · DSGVO-first`

## 2. Schmerz-Sektion ("Kommt Ihnen das bekannt vor?")

Bleibt mit allen 6 Karten, aber: Wissensverlust-Karte steht an Position 1 (ist sie schon) und wird visuell hervorgehoben (Akzent-Rahmen oder Badge `Der teuerste Schmerz`), damit der Anker durchgängig ist. Den schwachen Karten-CTA `Klicken für Bild & Details →` ersetzen durch `Ansehen, wie die Lösung aussieht →`.

## 3. Vorher-Nachher-Showcase auf Wissenssicherung umbauen

**Ist:** Showcase "Von Chaos zu Kontrolle" zeigt Anfragen-Sortierung.

**Soll:** Gleiche Komponente, neuer Inhalt (Anker-Use-Case):

- Einleitung bleibt: `Jede Lösung zahlt auf die drei Konten ein, an denen Entwicklung gemessen wird: Qualität, Kosten, Timing.` Davor ein Satz neu: `QKT, Qualität, Kosten, Timing: das Steuerungsdreieck jeder Entwicklungsabteilung.` (Damit ist das Konten-Vokabular einmal erklärt.)
- **Vorher, "Wissen in Köpfen":** `Drei Jahrzehnte Projekterfahrung stecken in einer Person.` / `Berichte und Protokolle liegen verteilt über fünf Systeme.` / `Beim Renteneintritt beginnt das große Rekonstruieren, oder das Wiederholen alter Fehler.`
- **Nachher, "Wissen im System":** `Berichte, Protokolle und Entscheidungen werden automatisch verschlagwortet und vernetzt.` / `Jede Frage wird in Sekunden beantwortet, mit Quellenangabe.` / `Der Experte prüft und ergänzt, statt alles selbst zu dokumentieren.` / `Jede beantwortete Frage macht die Wissensbasis besser.`
- Ergebnis-Zeile: `✓ Wissen bleibt im Haus, auffindbar in Sekunden statt in Köpfen. Konto: Qualität und Kosten.`

Der bisherige Anfragen-Inhalt des Showcase wandert nicht in den Müll: Er wird die Kurzbeschreibung auf der Use-Case-Karte "Technische Anfragen" (bleibt erhalten).

## 4. Use-Case-Grid kürzen

**Ist:** 12 Karten, davon 7 mit Status "In Planung" (signalisiert: noch nie verkauft).

**Soll:** 6 Karten auf der Startseite, Rest nur auf `/use-cases`:

1. Engineering-Wissen vernetzen (Anker, Position 1)
2. Technische Anfragen automatisch vorsortieren
3. Patentrecherche und Prior Art
4. Technologie-Scouting
5. Besprechungen ohne Protokollaufwand
6. Konzepte aus mehreren Blickwinkeln prüfen

Status-Labels umformulieren: `PoC abgeschlossen` wird `Live-Demo im Erstgespräch verfügbar`. `In Entwicklung` wird `Bei AImation im Aufbau`. Das Label `In Planung` verschwindet von der Startseite komplett. Unter dem Grid: Link `Alle Use Cases ansehen →` auf `/use-cases`.

## 5. Über-uns und "Warum AImation" zusammenlegen

**Ist:** Zwei Sektionen mit stark überlappenden Aussagen (ehrlich, Praxis, schnell) plus dreifach wiederholte Trust-Zahlen.

**Soll:** Eine Sektion. Headline und Kern-Story der bisherigen Über-uns-Sektion bleiben (`20 Jahre Produktentwicklung. Kein Theorieberater.`, Foto, Fließtext "Zwei Welten in einer Person" ungekürzt, der Text ist stark). Darunter genau 4 Punkte (statt bisher 5 + 4):

1. `Ich kenne Ihre Prozesse nicht aus Büchern, sondern weil ich sie 20 Jahre selbst gelebt habe.`
2. `Wenn KI für Sie keinen Sinn ergibt, sage ich Ihnen das. Auch wenn es mich einen Auftrag kostet.`
3. `Für den Mittelstand gebaut: Festpreise, kurze Laufzeiten, läuft nächste Woche statt nächstes Quartal.`
4. `Schulung, Beratung, Umsetzung aus einer Hand. Ein Ansprechpartner, ein Anruf.`

Die separate "Warum AImation / Nicht noch eine KI-Beratung"-Sektion wird entfernt. Ihr AI-Readiness-Check-Block entfällt ersatzlos (die Landkarten-Sektion aus Spec 02 übernimmt diese Rolle).

## 6. Neue Dringlichkeits-Sektion (EU AI Act)

Position: zwischen "Drei Wege, ein Ziel" und der zusammengelegten Über-uns-Sektion. Kompakt, kein Alarmismus:

- Headline: `Nebenbei: Der EU AI Act gilt schon`
- Body: `Seit Februar 2025 verlangt Artikel 4 nachweisbare KI-Kompetenz von Mitarbeitern, die KI einsetzen. Seit August 2026 sind Sanktionen anwendbar. Kein Grund zur Panik, aber ein guter Grund, Schulung nicht auf nächstes Jahr zu schieben.` **(Daten vor Livegang gegen Primärquelle prüfen, siehe Master-Brief Abschnitt 4.)**
- CTA: `Schulungen ansehen` (Link auf `/ki-schulungen-mittelstand`)

## 7. Drei-Säulen-Sektion ("Drei Wege, ein Ziel")

Bleibt inhaltlich, zwei Korrekturen: Die doppelten Link-Zeilen `Mehr erfahren → Use Cases ansehen →` reduzieren auf einen Link pro Karte (`Mehr erfahren →` auf die jeweilige Leistungsseite). In der Beratungs-Karte den Begriff KI-Landkarte verwenden: Vorteil 1 wird `Ihre KI-Landkarte: die größten Hebel priorisiert, mit ROI-Schätzung, in einem Tag statt in Monaten`.

## Akzeptanzkriterien

1. Neue H1 und Subheadline live, Badge-Pill unverändert erhalten. In der neuen H1 wird genau ein Schlüsselwort magenta hervorgehoben (Signature Move des Design-Systems, Empfehlung: `Wissen` bzw. in der H1-Formulierung `Sein Wissen`).
2. Showcase erzählt Wissenssicherung; der Begriff QKT ist genau einmal erklärt.
3. Startseite zeigt 6 Use-Case-Karten, kein Label "In Planung" mehr sichtbar.
4. Genau eine Über-uns-Sektion, die Sektion "Nicht noch eine KI-Beratung" ist entfernt.
5. EU-AI-Act-Sektion vorhanden, Fakten gegen Primärquelle verifiziert (im Abschlussbericht mit Quelle belegen).
6. Trust-Zahlen (20 Jahre, 18.000 Follower) erscheinen maximal zweimal auf der Seite (Hero-Trust-Zeile + Über-uns).
7. Seite ist messbar kürzer (Sektionen-Zahl von 16 auf maximal 12).
