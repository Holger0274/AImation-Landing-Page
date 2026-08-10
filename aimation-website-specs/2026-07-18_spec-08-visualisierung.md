---
type: spec
campaign: aimation-website-relaunch
spec: 08-visualisierung
date: 2026-07-18
priority: mittel
---

# Spec 08: Visualisierung, Diagramme statt Stock-Fotos, OG-Images, Bild-Hygiene

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen. Diese Spec läuft nach Spec 03 und 04 (nutzt deren Sektionen und Assets).

## Design-Grundlage (verbindlich für alle visuellen Arbeiten)

Quelle: AImation Design System v3 / Visual Identity. Die Website folgt diesem System bereits weitgehend; diese Tokens gelten für alles Neue:

| Token | Wert | Regel |
|---|---|---|
| Accent Magenta | `#f90093` | Ausschließlich klickbare Elemente + genau ein Highlight-Wort pro Headline. Gradient-Buttons: `linear-gradient(135deg, #f90093, #ff4ecd)`. Max. 1 Magenta-CTA pro Viewport. |
| Soft Black | `#071013` | Text, dunkle Sektionen. Nie reines Schwarz. |
| Warm White | `#faf9f7` | Heller Seitenhintergrund (ca. 65% der Fläche). Nie reines Weiß als Seitenhintergrund. |
| Hellblau | `#60AFFF` | Sekundär-Akzent, max. 5%, dezente Icons und Dots. Nie für Text. |
| Display-Font | Space Grotesk | Headlines, Buttons, Navigation, Diagramm-Labels |
| Body-Font | Inter | Fließtext |
| Glow | Magenta-Radial | Nur auf Soft-Black-Hintergrund, nie auf hellen Flächen. |
| Cards | `#ffffff`, Border `#e4e4e7`, Radius 12px | Featured: 3px Magenta-Border |

## 1. Magenta-Disziplin wiederherstellen (Audit)

**Ist:** Magenta wird dekorativ verwendet: Trust-Icons unter dem Hero, Akzente in Fotos, diverse nicht-klickbare Elemente. Das verwässert die Signature-Regel "Magenta = klickbar".

**Soll:** Sitewide-Audit aller Magenta-Vorkommen. Nicht-klickbare Magenta-Elemente auf Hellblau-Dot-Stil oder Soft Black umstellen (Trust-Icons: Hellblau). Erlaubte Ausnahmen: das eine Highlight-Wort pro Headline und der definierte Fokus-Marker in Diagrammen (Punkt 3). Ergebnisliste ins Abschlussprotokoll.

## 2. Hero-Visual: echte Systeme statt Stock-Collage

**Ist:** Der Hero zeigt eine Collage generischer Fotos (Engineering-Schreibtisch, Laptop, Mann am Projektboard mit pinken Post-its). Wirkt austauschbar und beweist nichts. Widerspricht der Build-in-Public-Positionierung.

**Soll:** Die Collage wird als **Beweis-Element** ersetzt durch **einen** echten Produkt-Screenshot im Browser-Rahmen (Wissens-Graph: Frage oben, Antwort mit Quellenangabe darunter, passend zum Anker Wissenssicherung aus Spec 03). Asset kommt aus der TODO-Liste von Spec 04 (Holger liefert). Übergangsregel bis das Asset da ist: aktuelle Collage bleibt, aber im Code als `TODO: replace with real product screenshot` markiert.

**Update 2026-08-10:** Unterscheidung zwischen Beweis-Bildern und Atmosphäre-Bildern eingeführt. **Beweis-Bilder** (Screenshots, die etwas über die Arbeit von AImation behaupten) müssen echt sein: echte System-Screenshots oder echte Fotos von Holger, nie Stock oder KI-generiert. **Ein rein atmosphärisches Hintergrundbild** im Hero (z.B. technische Zeichnung, Blueprint, Bauteil, Code-Ausschnitt), das erkennbar Stimmung erzeugt und nicht als Beweis oder Systemabbildung ausgegeben wird, darf KI-generiert sein, sofern es fotorealistisch, hochwertig und klar dem Brand-Farbsystem (Soft Black/Warm White/Magenta-Akzent, siehe Tabelle oben) untergeordnet ist, insbesondere transparent/niedrige Deckkraft, damit Warm White dominant bleibt und Text lesbar. Weiterhin verboten: generische Stock-/KI-Fotos, die als Beweis präsentiert werden (Menschen am Whiteboard, Handshake-Motive, generische Büroszenen als "so arbeiten wir"-Aussage).

Erlaubte Bildtypen ab jetzt: echte System-Screenshots (Beweis), echte Fotos von Holger (Beweis), Diagramme nach Punkt 3, ein dekoratives KI-generiertes Hero-Hintergrundbild (Atmosphäre, siehe oben).

## 3. Diagramm-System einführen

Der ICP (Ingenieure, Entwicklungsleiter) liest Schaubilder als Muttersprache. Die Site hat aktuell null erklärende Diagramme. Es kommen vier wiederverwendbare SVG-Diagramme im Brand-Stil:

**Stilregeln für alle Diagramme:** Inline-SVG oder optimierte SVG-Dateien (kein PNG), Labels in Space Grotesk, Linien und Formen in Soft Black auf Warm White (helle Sektionen) bzw. helle Linien auf Soft Black (dunkle Sektionen), Hellblau für Sekundär-Elemente. Genau ein Element pro Diagramm darf einen Magenta-Fokus tragen (bewusste, dokumentierte Ausnahme der Klickbar-Regel, um den Kernpunkt zu markieren). Responsive, mit deutschen `<title>`/`aria-label`.

| # | Diagramm | Inhalt | Einsatzort |
|---|---|---|---|
| D1 | Angebots-Treppe | 5 Stufen von Erstgespräch bis Begleitung, Preise aus zentraler Quelle, Magenta-Fokus auf Stufe 2 (KI-Landkarte) | Landkarten-Sektion (Spec 02), Prozess-Sektion, Beratungsseite |
| D2 | QKT-Dreieck | Qualität, Kosten, Timing als Dreieck, kompakt | Showcase-Intro (Spec 03), Use-Case-Detailseiten neben der Konto-Angabe |
| D3 | Wissen: vorher/nachher | Links: Wissen in Köpfen und 5 Silos. Rechts: vernetzter Graph, Antwort mit Quellenangabe. Magenta-Fokus auf dem Knoten "Ingenieur prüft" | Vorher-Nachher-Showcase (Spec 03), Use-Case-Seite Wissen vernetzen |
| D4 | Agent mit Mensch in der Schleife | Fluss: Eingang, Agent sammelt Kontext aus Ihren Systemen, Entwurf, Ingenieur prüft und gibt frei (Magenta-Fokus), Ablage in Lessons Learned | KI-Agenten-Seite, Use-Case-Detailseiten, Umsetzungs-Karte der Drei-Wege-Sektion |

Umsetzungshinweis: Es existieren Bestands-SVGs im Brand-Kontext (Customer Journey, Use-Case-Methodik, Value-Proposition-Canvas). Falls sie im Website-Repo liegen, als Stilreferenz nutzen, nicht 1:1 einbetten (zu dicht für Web). Die vier Diagramme werden web-schlank neu gebaut.

## 4. OG-Images und Social-Sharing (wichtig, Haupt-Traffic kommt von LinkedIn)

**Prüfen:** Haben alle Seiten `og:title`, `og:description`, `og:image` und Twitter-Card-Tags? Wie sieht der LinkedIn-Preview aktuell aus?

**Soll:** Ein OG-Image-Template im Brand-Stil (Soft Black, dezenter Magenta-Glow, Seitentitel in Space Grotesk, AImation-Wortmarke, 1200x630). Pro Kernseite ein statisches OG-Image aus dem Template; für Blog-Artikel automatisiert generiert (Build-Step), falls das Framework das hergibt, sonst ein generisches Blog-OG-Image. Favicon prüfen: vorhanden, brand-konform, auch als SVG/180px-Apple-Touch-Icon.

## 5. Bild- und Zahlen-Hygiene

- Alle `<img>` bekommen deutsche, beschreibende `alt`-Texte (leeres `alt=""` nur für rein dekorative Bilder).
- Bilder unterhalb des Folds mit `loading="lazy"`, moderne Formate (WebP/AVIF) mit Fallback, explizite `width`/`height` gegen Layout-Shift.
- Gewichts-Budget Startseite: initial geladene Bilder zusammen unter 1,5 MB (messen, im Abschlussbericht dokumentieren).
- Zahlenformatierung deutsch: `17,998+` im Hero-Trust-Block wird `18.000+` (runde Zahl, deutsches Format). Sitewide nach englischen Tausendertrennzeichen suchen.
- Kontrast-Stichprobe: Magenta auf Warm White und graue Texte auf Soft Black gegen WCAG AA prüfen (Text-Kontrast mind. 4,5:1); Verstöße über Abdunkeln/Aufhellen der Textfarbe lösen, nicht durch Magenta-Änderung.

## Akzeptanzkriterien

1. Magenta-Audit abgeschlossen, keine dekorativen Magenta-Elemente mehr (außer den zwei definierten Ausnahmen).
2. Vier Diagramme (D1 bis D4) sind gebaut, im Brand-Stil, responsive, mit aria-Labels, und an den definierten Orten eingebunden.
3. Hero-Collage (Beweis-Screenshot) ist ersetzt oder als TODO markiert; keine neuen Stock-/KI-Fotos als Beweis im gesamten Diff. Ein dekoratives, KI-generiertes Hero-Hintergrundbild (Atmosphäre) ist davon ausgenommen, siehe Punkt 2.
4. LinkedIn-Preview (OG-Tags + Bild) funktioniert für Startseite, alle Leistungsseiten und mindestens einen Blog-Artikel (mit einem OG-Debugger oder manuellem Meta-Check verifiziert).
5. Alle Bilder haben alt-Texte, Lazy Loading und Dimensionen; Bild-Budget dokumentiert.
6. `18.000+` statt `17,998+`, keine englischen Zahlenformate mehr in Textknoten.
