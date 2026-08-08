---
type: spec
campaign: aimation-website-relaunch
spec: 09-ki-sichtbarkeit
date: 2026-08-08
priority: hoch
---

# Spec 09: KI-Sichtbarkeit (GEO/AEO) — llms.txt, Crawler-Steuerung, Blog-Schema

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen. Ergänzt Spec 01 (Meta-Description Startseite) und Spec 08 (OG-Tags) um die Bausteine, die dort nicht abgedeckt sind. Kein Redesign, keine Copy-Änderungen über das Genannte hinaus.

## Kontext (Ist-Zustand, verifiziert 08.08.2026)

Eine externe Analyse (Cold-Outreach-Audit mit KI-Fitness-Score, 8/10) hat aimation.de auf Sichtbarkeit für KI-Suchmaschinen (ChatGPT, Perplexity, Gemini, Claude) geprüft. Bestätigt per direktem Check: `https://www.aimation.de/robots.txt` und `https://www.aimation.de/llms.txt` liefern beide HTTP 404. Die Seite hat laut Analyse bereits eine überdurchschnittlich starke Schema.org-Basis (Organization, LocalBusiness, Person mit `knowsAbout`, ItemList, 2x FAQPage mit 13 Fragen, BreadcrumbList) — die folgenden Punkte sind die verbleibenden, konkret benannten Lücken.

## 1. llms.txt erstellen

**Ist:** Keine llms.txt im Root, HTTP 404.

**Soll:** `llms.txt` im Root-Verzeichnis, maschinenlesbares Markdown, mit:
- Kurzbeschreibung AImation (Positionierungssatz aus Master-Brief Abschnitt 1)
- Leistungen (Angebots-Treppe aus Master-Brief Abschnitt 3, Preise aus derselben zentralen Preis-Quelle wie der Rest der Site, keine eigene Zahl hartkodieren)
- Die drei Use Cases (Kurzfassung, Link auf Detailseiten)
- DSGVO-Hinweis (DSGVO-first, EU-Hosting wo möglich)
- Geografischer Fokus (DACH-Mittelstand)
- Link auf `/facts/aimation` und `/facts/holger-peschke` für Entity-Grounding
- **Sobald verfügbar:** Link auf die AImation-Schulungsplattform (eigenes Repo/Vercel-Projekt `learning-mats`, separate Spec `projects/mkt-copywriting/schulungsplattform-specs/2026-08-08_spec-01-ki-sichtbarkeit.md`). Erst eintragen, wenn die Plattform unter einer eigenen Domain/Subdomain läuft, nicht unter der vercel.app-Adresse.

Format an gängige llms.txt-Konvention halten (H1 Name, Kurzbeschreibung, Abschnitte mit Markdown-Linklisten).

## 2. robots.txt mit expliziter KI-Crawler-Steuerung erstellen

**Ist:** Keine robots.txt im Root, HTTP 404. Keine Steuerung für Standard- oder KI-Crawler.

**Soll:** `robots.txt` im Root, Standard-Erlaubnis für alle Crawler (`User-agent: *`, `Allow: /`), plus explizite Freigabe für KI-Crawler: `GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `Applebot-Extended`. Sitemap-Referenz (`Sitemap: https://www.aimation.de/sitemap.xml`) ergänzen. Prüfen, ob Admin-/Preview-Routen existieren, die stattdessen gesperrt werden müssen.

## 3. Meta-Description sitewide (Lücke zu Spec 01)

**Ist:** Spec 01 behebt die Meta-Description nur für die Startseite. Alle anderen Seiten (Leistungsseiten, Use-Case-Detailseiten, Blog-Artikel, `/facts`-Seiten) sind ungeprüft.

**Soll:** Jede indexierte Seite bekommt eine eigene, konkrete `<meta name="description">` (kein Duplikat des Title-Tags, 120 bis 160 Zeichen, enthält den Kernnutzen der jeweiligen Seite). Blog-Artikel: Description aus Intro/Hook des Artikels ableiten, nicht generisch. Läuft im selben Arbeitsschritt und Abschlussbericht wie Spec 08 Punkt 4 (OG-Tags), da beide denselben Head-Bereich betreffen.

## 4. BlogPosting-Schema für alle Blog-Artikel

**Ist:** Blog-Übersicht zeigt Datumsangaben visuell, aber keine strukturierten Daten dazu. Spec 06 ergänzt FAQPage-Schema für FAQ-Sektionen, aber kein Article/BlogPosting-Schema für die Artikel selbst.

**Soll:** Jeder Blog-Artikel bekommt `BlogPosting`-JSON-LD mit `headline`, `description`, `datePublished`, `dateModified` (falls vorhanden), `author` (Referenz auf das bestehende Person-Schema Holger Peschke), `publisher` (Referenz auf das bestehende Organization-Schema). Sinnvoll im selben Arbeitsschritt wie Spec 06 (gleiche Dateien, gleicher Rendering-Layer), aber unabhängig davon shippbar.

## Akzeptanzkriterien

1. `llms.txt` liefert HTTP 200, Inhalt deckt sich mit Master-Brief (keine erfundenen Zahlen, keine abweichenden Preise).
2. `robots.txt` liefert HTTP 200, erlaubt `GPTBot`, `ClaudeBot`, `Google-Extended`, `PerplexityBot`, `Applebot-Extended` explizit, referenziert die Sitemap.
3. Jede indexierte Seite hat eine eigene, nicht-generische Meta-Description (Stichprobe: Startseite, alle Leistungsseiten, alle drei Use-Case-Detailseiten, drei Blog-Artikel).
4. Alle 8 Blog-Artikel haben valides `BlogPosting`-Schema (Rich-Results-Test oder Schema-Validator, `datePublished` korrekt aus dem sichtbaren Artikeldatum übernommen).
5. Build grün, `curl -I` auf beide neuen Dateien liefert 200 (nicht nur lokal, auch im Deploy-Preview).
