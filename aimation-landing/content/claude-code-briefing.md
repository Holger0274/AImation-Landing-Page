# Claude Code Briefing: aimation.de Pillar Pages + Technische SEO

## Überblick

aimation.de ist eine Next.js-App auf Vercel. Unterseiten-Routing funktioniert bereits (/impressum und /datenschutz existieren als eigene Seiten). Ziel: Pillar Pages, Blog-Artikel und Use-Case-Detailseiten nach demselben Muster hinzufügen, damit Google jede Seite einzeln indexieren kann. Aktuell taucht aimation.de bei Google nicht auf.

---

## PHASE 1: Technische SEO-Basis (ZUERST machen)

### 1.1 sitemap.xml generieren

Automatische sitemap.xml für alle Seiten. In Next.js entweder über `next-sitemap` oder manuell als `app/sitemap.ts`:

```
https://www.aimation.de/
https://www.aimation.de/ki-agenten-unternehmen
https://www.aimation.de/ki-beratung-kmu
https://www.aimation.de/ki-schulungen-mittelstand
https://www.aimation.de/ki-automatisierung-mittelstand
https://www.aimation.de/blog/schatten-ki-unternehmen
https://www.aimation.de/blog/6-stufen-ki-nutzung
https://www.aimation.de/use-cases/patentrecherche-ki
https://www.aimation.de/use-cases/knowledge-graph-management
https://www.aimation.de/use-cases/email-klassifizierung
https://www.aimation.de/impressum
https://www.aimation.de/datenschutz
```

Sitemap muss sich automatisch aktualisieren, wenn neue Seiten hinzukommen.

### 1.2 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://www.aimation.de/sitemap.xml
```

### 1.3 Canonical URLs

Jede Seite braucht eine canonical URL im Head:
```html
<link rel="canonical" href="https://www.aimation.de/ki-agenten-unternehmen" />
```

### 1.4 Open Graph Tags (für LinkedIn-Sharing)

Auf jeder Seite:
```html
<meta property="og:title" content="[Title Tag der Seite]" />
<meta property="og:description" content="[Meta Description der Seite]" />
<meta property="og:url" content="https://www.aimation.de/[slug]" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.aimation.de/og-image.png" />
<meta property="og:locale" content="de_DE" />
```

Ein OG-Image erstellen (1200x630px) mit AImation-Logo und Tagline. Kann auch pro Seite variieren.

### 1.5 Schema Markup (JSON-LD)

Auf der Landing Page:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AI.mation - AImation UG (haftungsbeschränkt)",
  "description": "Autonome KI-Agenten & Automatisierung für den Mittelstand",
  "url": "https://www.aimation.de",
  "email": "info@aimation.de",
  "founder": {
    "@type": "Person",
    "name": "Holger Peschke"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bamberg",
    "addressCountry": "DE"
  },
  "areaServed": ["Franken", "Niedersachsen", "DACH"],
  "serviceType": ["KI-Beratung", "KI-Schulungen", "KI-Automatisierung", "KI-Agenten"]
}
```

Auf Seiten mit FAQ-Sektion:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Frage hier",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antwort hier"
      }
    }
  ]
}
```

---

## PHASE 2: Landing Page Fixes

### 2.1 Title Tag ändern

Aktuell: "KI-Beratung für KMUs: Ehrlich, Praktisch, Bezahlbar"
Neu: "KI-Beratung für KMUs: Klartext, Praxis, bezahlbar | AI.mation"

### 2.2 Navigation erweitern

Aktuelle Nav: Leistungen | Prozess | Über uns | FAQ | Erstgespräch

Neue Nav: Leistungen | Use Cases | Blog | Über uns | Erstgespräch

"Leistungen" wird ein Dropdown/Flyout:
- KI-Schulungen → /ki-schulungen-mittelstand
- KI-Beratung → /ki-beratung-kmu
- KI-Automatisierung → /ki-automatisierung-mittelstand
- KI-Agenten → /ki-agenten-unternehmen

"Use Cases" verlinkt auf /#use-cases (Scroll) oder eine Übersichtsseite

"Blog" verlinkt auf /blog (Übersichtsseite mit allen Artikeln)

"Prozess" und "FAQ" werden zu Anker-Links unter "Über uns" Dropdown oder bleiben im Footer.

### 2.3 Säulen-Karten verlinken

Die drei Säulen-Karten ("Schulungen", "Beratung", "Umsetzung") haben aktuell einen "Mehr erfahren" Button, der nirgendwo hinführt. Verlinken auf:
- Schulungen → /ki-schulungen-mittelstand
- Beratung → /ki-beratung-kmu
- Umsetzung → /ki-automatisierung-mittelstand

Die "Use Cases ansehen" Links auf den Karten-Rückseiten → /#use-cases

### 2.4 Use-Case-Karten verlinken

Die Use-Case-Karten mit Status "PoC abgeschlossen" verlinken auf ihre Detailseiten:
- Patentrecherche → /use-cases/patentrecherche-ki
- Knowledge Graph → /use-cases/knowledge-graph-management
- E-Mail-Klassifizierung → /use-cases/email-klassifizierung
- Technologie-Scouting → /use-cases/technologie-scouting (Detailseite kommt später)

### 2.5 Breadcrumbs auf Unterseiten

Auf jeder Unterseite Breadcrumbs anzeigen:
```
Startseite > KI-Agenten für Unternehmen
Startseite > Blog > Schatten-KI im Unternehmen
Startseite > Use Cases > Patentrecherche
```

---

## PHASE 3: Neue Seiten erstellen (Reihenfolge beachten)

### Reihenfolge:
1. /ki-agenten-unternehmen (Pillar 4, stärkster Differentiator)
2. /blog/schatten-ki-unternehmen (Quick Win Traffic)
3. /blog/6-stufen-ki-nutzung (eigenes Framework)
4. /ki-beratung-kmu (Pillar 2)
5. /ki-schulungen-mittelstand (Pillar 1)
6. /ki-automatisierung-mittelstand (Pillar 3)
7. /use-cases/patentrecherche-ki
8. /use-cases/knowledge-graph-management
9. /use-cases/email-klassifizierung

### Jede Seite braucht:
- Eigene URL (Next.js Route: `app/[slug]/page.tsx`)
- `generateMetadata()` mit Title, Description, OpenGraph, Canonical
- Schema Markup als JSON-LD im Head
- Breadcrumbs
- Mindestens 3 interne Links zu anderen Seiten
- CTA-Sektion am Ende mit Link zu Erstgespräch
- Konsistentes Layout (Header, Footer, Nav wie Landing Page)

### Content-Dateien:
Die Inhalte für alle Seiten stehen in diesen Dateien:
- `pillar-1-schulungen.md` → /ki-schulungen-mittelstand
- `pillar-2-beratung.md` → /ki-beratung-kmu
- `pillar-3-automatisierung.md` → /ki-automatisierung-mittelstand
- `pillar-4-ki-agenten.md` → /ki-agenten-unternehmen
- `blog-schatten-ki.md` → /blog/schatten-ki-unternehmen
- `blog-6-stufen-ki.md` → /blog/6-stufen-ki-nutzung
- `use-cases-detailseiten.md` → /use-cases/*

Jede Datei enthält oben einen META-Block mit allen SEO-Informationen.

---

## PHASE 4: Blog-Übersichtsseite

### URL: /blog

Einfache Übersichtsseite mit allen Blog-Artikeln als Karten:
- Titel
- Kurzbeschreibung (Meta Description)
- Datum
- Link zum Artikel

Sortiert nach Datum (neueste zuerst). Kann später mit Tags/Kategorien erweitert werden.

---

## PHASE 5: Internes Linking auf Landing Page

Wenn die Unterseiten live sind, müssen folgende Links auf der Landing Page aktiviert werden:

| Element auf Landing Page | Verlinkt auf |
|---|---|
| Säule "Schulungen" → Mehr erfahren | /ki-schulungen-mittelstand |
| Säule "Beratung" → Mehr erfahren | /ki-beratung-kmu |
| Säule "Umsetzung" → Mehr erfahren | /ki-automatisierung-mittelstand |
| Use Case Patentrecherche | /use-cases/patentrecherche-ki |
| Use Case Knowledge Graph | /use-cases/knowledge-graph-management |
| Use Case E-Mail-Klassifizierung | /use-cases/email-klassifizierung |
| Navigation "Blog" | /blog |

---

## Schreibregeln (WICHTIG für allen Content)

- Keine Gedankenstriche (em-dash, en-dash). Das ist der am leichtesten erkennbare KI-Schreibmarker.
- Keine parallelen Satzstrukturen
- Keine Buzzwords: "nahtlos", "ganzheitlich", "transformativ", "revolutionär"
- Nicht "ehrlich" schreiben. Stattdessen "Klartext", "offen", "klar", "nüchtern"
- Abwechselnde Satzlängen
- Sprache: Deutsch. Nur Software-Tool-Namen auf Englisch
- Status-Labels immer angeben: "PoC abgeschlossen", "In Entwicklung", "Konzept", "Coming Soon"

---

## Design

### Farben
- Magenta: #F90093 (Primärfarbe, Akzente, CTAs)
- Soft Black: #071013 (Text, Hintergründe)
- Warm White: #FAF9F7 (Seitenhintergrund)
- Hellblau Akzent: #60AFFF (Sekundärakzent)
- Fonts: Space Grotesk (Headings), Inter (Body)
- Unterseiten sollen dasselbe Design wie die Landing Page verwenden (Header, Footer, Farbschema)

### Lösungswelt-Tags

Jede Use-Case-Seite und jeder Use-Case-Abschnitt auf den Pillar Pages bekommt ein Lösungswelt-Tag als visuelles Label (wie auf der Landing Page bereits umgesetzt):

| Tag | Farbe | Bedeutung |
|---|---|---|
| FLOW | Magenta-Rand | Prozesse automatisieren |
| KNOW | Magenta-Rand | Wissen sichern und nutzbar machen |
| THINK | Magenta-Rand | Bessere Entscheidungen treffen |
| WORK | Magenta-Rand | KI-Assistenten für den Alltag |

Die Tags erscheinen als kleine Badges/Pills oberhalb der Überschrift, genau wie auf der Landing Page bei den Use-Case-Karten.

Zuordnung der Use-Case-Detailseiten:
- Patentrecherche → KNOW
- Knowledge Graph → KNOW
- E-Mail-Klassifizierung → FLOW

### Bildgenerierung mit Nanobanana 2

Für jede neue Seite (Pillars, Blog, Use Cases) sollen passende Hero-Bilder und Illustrationen generiert werden. Zugang zu Nanobanana 2 (Infographic-Style Bildgenerierung) ist vorhanden.

**Bildstil-Vorgaben für Prompts:**
- Stil: Clean, modern, infographic-style (wie die bestehenden Bilder auf der Landing Page)
- Primärfarbe in Bildern: Magenta #F90093 als Akzentfarbe (Linien, Highlights, Icons, Grafik-Elemente)
- Sekundärfarbe: Hellblau #60AFFF als zweiter Akzent
- Hintergrund: Soft Black #071013 oder Warm White #FAF9F7 je nach Seitenbereich
- Keine Stock-Foto-Ästhetik. Eher diagrammatisch, technisch, mit Datenfluss-Visualisierungen
- Text in Bildern: Nur wenn nötig, dann in Space Grotesk

**Bild-Anforderungen pro Seitentyp:**

| Seitentyp | Bild | Format |
|---|---|---|
| Pillar Page | Hero-Bild oben (1200x600px) | Breites Banner, thematisch passend |
| Blog-Artikel | Header-Bild (1200x630px, doppelt als OG-Image nutzbar) | Thema des Artikels visualisiert |
| Use-Case-Seite | Prozess-Illustration (800x500px) | Vorher/Nachher oder Workflow-Darstellung |

**Beispiel-Prompts für Nanobanana 2:**

Pillar KI-Agenten:
"Infographic style illustration of autonomous AI agents working together, magenta #F90093 accent lines, dark background #071013, data flow connections, modern tech aesthetic, no text"

Blog Schatten-KI:
"Split illustration: left side dark shadow with hidden smartphone screens showing AI tools, right side bright organized workspace with approved AI systems, magenta #F90093 highlights, clean infographic style"

Blog 6-Stufen:
"Staircase diagram with 6 ascending steps from simple to complex, magenta #F90093 gradient, each step representing increasing AI autonomy, clean infographic style, dark background"

Use Case Patentrecherche:
"AI scanning patent documents with magnifying glass, connected nodes showing related patents, magenta #F90093 connection lines, technical blueprint aesthetic, infographic style"

**Wichtig:** Bilder nach Generierung im Projekt unter `/public/images/` ablegen und auf den jeweiligen Seiten einbinden. Jedes Bild braucht einen beschreibenden alt-Text für SEO.

