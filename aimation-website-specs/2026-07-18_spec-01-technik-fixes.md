---
type: spec
campaign: aimation-website-relaunch
spec: 01-technik-fixes
date: 2026-07-18
priority: sofort
---

# Spec 01: Technik-Fixes

Voraussetzung: `2026-07-18_00-master-brief.md` gelesen.

## Ziel

Vier verifizierte technische Mängel beheben. Kein Redesign, keine Copy-Änderungen über das Genannte hinaus.

## 1. `/use-cases` liefert 404 (kritisch)

**Ist:** `https://www.aimation.de/use-cases` antwortet mit HTTP 404 (verifiziert am 18.07.2026, mit und ohne Trailing Slash). Die URL steht in der Sitemap und ist das Ziel der "Use Cases ansehen"-CTAs. Die Detailseiten existieren: `/use-cases/patentrecherche-ki`, `/use-cases/knowledge-graph-management`, `/use-cases/email-klassifizierung`. Die Hauptnavigation verlinkt auf den Homepage-Anker `/#use-cases`.

**Soll:** Eine echte Übersichtsseite unter `/use-cases` bauen:

- H1: `So sieht KI in der Produktentwicklung konkret aus`
- Intro (2 Sätze): `Anwendungsfälle aus dem Entwicklungsalltag, von der Patentrecherche bis zur Wissenssicherung. Jeder Fall zeigt Problem, Lösung und den Effekt auf Qualität, Kosten und Timing.`
- Grid aller Use-Case-Karten (Daten aus der bestehenden Homepage-Sektion wiederverwenden), Karten mit Detailseite verlinken dorthin.
- Kategorie-Filter (KNOW, THINK, FLOW, WORK) nur, wenn das Komponentensystem das ohne großen Aufwand hergibt. Sonst weglassen.
- Finale CTA-Sektion: Erstgespräch (Standard-Modal).

Falls das Repo statisch generiert und eine neue Seite unverhältnismäßig wäre (erst prüfen, dann entscheiden): minimal ein 301-Redirect von `/use-cases` auf `/#use-cases` UND Korrektur der Sitemap. Die echte Seite ist die bevorzugte Lösung.

## 2. Schreibweise vereinheitlichen

**Ist:** Mischung aus "AI.mation" (Logo, Footer, teils Text) und "AImation". Zusätzlich existiert mindestens ein Tippfehler "Almation" (ohne I) im Hero-Beschreibungstext der Startseite.

**Soll:** Im gesamten Fließtext, in Meta-Tags, Title-Tags und im Footer-Copyright: **AImation**. Nur die Logo-Grafik darf AI.mation zeigen. Projektweite Suche nach `AI.mation` in Textknoten durchführen und ersetzen (Grafiken/SVG-Logos ausgenommen).

**Wichtige Ausnahme:** Die Seiten `/facts/aimation` und `/facts/holger-peschke` dokumentieren die Schreibvarianten absichtlich (Entity-Grounding für KI-Suchmaschinen, "Normalisierung von AImation / AI.mation auf eine Organisation"). Dort bleiben die Varianten-Nennungen unverändert stehen. Nur der übrige Fließtext dieser Seiten folgt der AImation-Schreibweise.

## 3. Tool-Wand bereinigen

**Ist:** Sektion "Wir arbeiten mit den besten Tools" listet 18 Tools, darunter **DeepSeek**. Für eine DSGVO-first-Positionierung ist DeepSeek ein Glaubwürdigkeitsrisiko beim IT-Gatekeeper. Zusätzlich verwirrende Labels ("Cline: Claude Code", "Claude Code: Kollaboration").

**Soll:** Liste auf 8 Einträge kürzen, Labels korrigieren:

| Tool | Label |
|---|---|
| Claude | LLM |
| ChatGPT (OpenAI) | LLM |
| Mistral | LLM, EU-Anbieter |
| Microsoft Copilot | Enterprise |
| Google Workspace + Gemini | Enterprise |
| n8n | Automatisierung, self-hosted möglich |
| Supabase | Datenbank, EU-Hosting möglich |
| Obsidian / Notion | Wissensmanagement |

Begleittext behalten, letzten Satz schärfen: `Bei der Auswahl zählt neben der Leistung immer, ob ein Tool DSGVO-konform betrieben werden kann. Im Zweifel gewinnt die EU-taugliche Option.`

## 4. Sitemap und Meta prüfen

- Sitemap: `/use-cases` muss nach Fix 1 erreichbar sein. Nicht existierende Seiten dürfen nicht gelistet sein, existierende (z. B. Blog-Artikel) müssen vollständig drin sein.
- Meta-Description der Startseite ist aktuell nur der Titel. Ersetzen durch: `KI für die technische Produktentwicklung im Mittelstand: Wissenssicherung, Anfragen-Automatisierung, Recherche. DSGVO-konform, aus 20 Jahren Entwicklungspraxis. Einstieg mit der KI-Landkarte zum Festpreis.`

## Akzeptanzkriterien

1. `curl -I https://.../use-cases` (lokal: Build-Preview) liefert 200, Seite rendert mit allen Use-Case-Karten.
2. Kein Textknoten im Projekt enthält noch `AI.mation` oder den Tippfehler `Almation` (Grafiken und die /facts-Varianten-Dokumentation ausgenommen). Suchliste: `AI.mation`, `Almation`, `AImation UG` (letzteres bleibt, nur Kontrolle auf Konsistenz).
3. Tool-Wand zeigt exakt die 8 definierten Einträge, DeepSeek ist entfernt.
4. Sitemap enthält keine 404-URLs; Meta-Description ist gesetzt.
5. Build ist grün, keine toten internen Links (Link-Check über alle Seiten laufen lassen).
6. Alle `#kontakt`-CTAs auf ALLEN Unterseiten (nicht nur Startseite) öffnen das Erstgespräch-Modal. Auf jeder Seite manuell im Build-Preview geklickt, insbesondere auf `/ki-agenten-unternehmen` (dort wurde ein auffälliges `Erstgespräch #kontakt`-Linkziel beobachtet).
7. `/facts/*`-Seiten sind unangetastet bis auf reguläre Fließtext-Schreibweise (Varianten-Dokumentation intakt).
