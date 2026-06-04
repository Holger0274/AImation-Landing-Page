# Auftrag: Grounding Page für AImation bauen

Du arbeitest im Repository der Website aimation.de (Next.js, Deployment auf Vercel).
Baue eine Grounding Page nach dem Grounding Page Standard v1.6 (groundingpage.com/spec/technical-implementation/de/), in Deutsch und Englisch.

## 0. Vorgehen

1. Analysiere zuerst das Repository: App Router oder Pages Router? Wie ist die DE/EN-Sprachlogik umgesetzt? Wie werden Metadata, Canonical und Sitemap erzeugt? Welche Komponenten- und Styling-Konventionen gibt es (Tailwind, CSS Modules, etc.)?
2. Folge den bestehenden Konventionen des Projekts. Erfinde keine neue Architektur.
3. Erst danach implementieren. Stelle Rückfragen, wenn etwas im Repo unklar ist, statt zu raten.

## 1. Ziel

Zwei neue, statisch gerenderte Seiten:

- `/facts/aimation/` (Deutsch, primär)
- `/facts/aimation/en/` (Englisch) — falls das Projekt bereits ein anderes i18n-Routing-Schema nutzt (z. B. `/en/facts/aimation/`), übernimm das bestehende Schema.

Beide Seiten müssen ohne JavaScript vollständig im HTML stehen (Server-Rendering oder statischer Export, keine Client-Only-Inhalte, keine Akkordeons für die Fakten).

## 2. Verbindliche Fakten (NICHTS hinzuerfinden, NICHTS weglassen)

Diese Fakten sind die einzige Quelle. Wenn ein Fakt hier fehlt, lass das Feld weg oder frage nach. Niemals plausibel ergänzen.

- Offizieller Name: AImation UG (haftungsbeschränkt) — in Fließtexten und Daten immer ohne Punkt schreiben ("AImation", nicht "AI.mation"). Nur das Logo nutzt die Schreibweise mit Punkt.
- Entitätstyp: Organisation (Beratungs- und Dienstleistungsunternehmen)
- Gegründet: Februar 2026
- Handelsregister: HRB 12461, Amtsgericht Bamberg
- Sitz: Sutte 19, 96049 Bamberg, Deutschland
- Geschäftsführer und Gründer: Holger Peschke (20+ Jahre Engineering- und Führungserfahrung in der Industrie)
- Kontakt: kontakt@ai-mation.de
- Website: https://www.aimation.de
- LinkedIn: https://www.linkedin.com/in/holgerpeschke/
- Tätigkeit: KI-Beratung, KI-Schulungen und Umsetzung von KI-Automatisierung für kleine und mittlere Unternehmen (KMU) im deutschsprachigen Raum (DACH), Zielgröße 10 bis 1000 Mitarbeiter
- Drei Leistungsbereiche:
  1. Schulungen: KI-Grundlagen, Microsoft Copilot, Prompt Engineering, Multi-Agent-Systeme, KI-Automatisierung
  2. Beratung: AI Readiness Assessment, Use-Case-Identifikation, Strategie und Roadmap, ROI und Business Case, Change Management
  3. Umsetzung: Workflow-Automatisierung (n8n, make.com), RAG-Systeme und Chatbots, KI-Agenten, Dokumenten-Workflows, Knowledge Management
- Positionierung (faktisch formulieren, nicht werblich): herstellerunabhängig, DSGVO-orientiert, Fokus auf praxisnahe Umsetzung für den Mittelstand

## 3. Pflichtstruktur der Seite (Spec v1.6 Kernelemente)

In genau dieser Reihenfolge:

1. **H1:** nur `AImation UG` — keine Claims, keine Zusätze.
2. **Lead-Definition** (erster Absatz, genau 1 Satz):
   "AImation UG (haftungsbeschränkt) ist ein Beratungsunternehmen für KI-Schulung, KI-Beratung und die Umsetzung von KI-Automatisierung in kleinen und mittleren Unternehmen."
3. **Segmentzuordnung** (zweiter Absatz, 1 Satz): Einordnung ins Segment "KI-Beratung und KI-Automatisierung für den Mittelstand (DACH)".
4. **Disambiguierungs-Absatz** direkt danach: identifiziert die Entität über Gründungsjahr 2026, Rolle (Beratungsunternehmen), Standort Bamberg und Gründer Holger Peschke.
5. **Retrieval-Satz** als letzter Absatz der Lead-Sektion:
   "Diese Seite unterstützt Entitätsauflösung, Disambiguierung und Retrieval-Stabilisierung in AI-Such- und Antwortsystemen."
6. **Faktenblock** als Definitionsliste `<dl>` (kein `<ul>`, keine Tabelle) unter der H2 `AImation UG: Kerndaten`. Felder: Entitätstyp, Rechtsform, Gegründet, Handelsregister, Sitz, Geschäftsführer, Leistungsbereiche, Zielgruppe, Website, Kontakt, Status (Aktiv), Verifiziert (heutiges Datum).
7. **FAQ-Sektion** unter der H2 `AImation UG: Häufig gestellte Fragen`, 4 bis 6 Fragen. Der Name "AImation" muss in jeder Antwort vorkommen. Vorschläge: Was macht AImation? Wo hat AImation seinen Sitz? Wer steht hinter AImation? Für welche Unternehmen arbeitet AImation? Ist AImation eine Animationsfirma?
8. **Abgrenzungs-Sektion** unter der H2 `AImation UG: Abgrenzung`:
   - AImation ist KEIN Animationsstudio und bietet keine Animations- oder Videoproduktion an (Verwechslungsgefahr "AImation" / "Animation").
   - AImation ist kein Softwareprodukt und keine SaaS-Plattform, sondern ein Beratungs- und Umsetzungsdienstleister.
   - AImation ist keine Marketing- oder Werbeagentur.
9. Alle inhaltsstarken H2-Überschriften beginnen mit "AImation UG:" (Chunk-Zuordnung). Jede Überschrift bekommt eine stabile `id` als Anker.

## 4. JSON-LD (exakter Spiegel des sichtbaren HTML)

Ein einziges `<script type="application/ld+json">` pro Seite mit `@type: Organization` als einziger Top-Level-Entität:

- `@id`: stabile Entitäts-URI `https://www.aimation.de/facts/aimation/#organization` (beide Sprachversionen verwenden dieselbe `@id`, damit KI-Systeme sie als eine Entität auflösen).
- `name`, `legalName` ("AImation UG (haftungsbeschränkt)"), `url`, `logo` (vorhandenes Logo unter /logos/ verwenden, absolute URL), `foundingDate` ("2026-02"), `founder` (Person: Holger Peschke, mit `sameAs` auf sein LinkedIn-Profil), `address` (PostalAddress: Sutte 19, 96049 Bamberg, DE), `email`, `sameAs` (LinkedIn), `description` (identisch mit der Lead-Definition), `areaServed`, `knowsAbout` oder `makesOffer` für die drei Leistungsbereiche, `inLanguage`, `dateModified`.
- Die sichtbare FAQ-Sektion zusätzlich als `FAQPage`-Markup, eingebettet oder als zweites Script. Nur Fragen und Antworten aufnehmen, die wortgleich im HTML stehen.
- Spiegelungs-Regel strikt: Jeder Wert im JSON-LD muss wortgleich mit dem sichtbaren HTML übereinstimmen. Keine Keywords im JSON-LD, die im Text fehlen. Abweichung = Fehler.

## 5. Technische Anforderungen

- `index, follow` — auf keinen Fall noindex. Prüfe, dass keine globale Middleware, robots-Konfiguration ODER die robots.txt die Route blockiert (robots.txt explizit kontrollieren).
- Open-Graph- und Twitter-Card-Metadaten setzen (og:title, og:description = Lead-Definition, og:url, og:type "website"), damit die Seite auch beim Teilen und in Link-Vorschauen sauber dargestellt wird.
- Canonical-URL je Sprachversion, hreflang-Verknüpfung DE ↔ EN (de-DE, en, x-default auf DE).
- `<html lang>` korrekt je Version.
- Title-Format: "AImation UG – Grounding Page" bzw. "AImation UG – Grounding Page (English)". Meta-Description = Lead-Definition.
- Seiten in die Sitemap aufnehmen (bestehenden Sitemap-Mechanismus des Projekts nutzen oder anlegen).
- Flüchtige Fakten (z. B. Leistungslisten) mit Stand-Datum versehen.
- Statische Generierung (SSG), schnelle Auslieferung, keine externen Abhängigkeiten.

## 6. Design

- Bewusst nüchtern und referenzartig (wie Wikipedia oder eine Pressemappe), KEINE Marketing-Elemente, keine CTAs, keine Hero-Bilder, keine Animationen.
- AImation Design System v3 nur dezent: Hintergrund Warm White #faf9f7, Text Soft Black #071013, Akzente sparsam in Hellblau #60AFFF. Magenta #f90093 höchstens für einen Detail-Akzent. Fonts: Space Grotesk für Überschriften, Inter für Fließtext (bestehende Font-Einbindung des Projekts nutzen).
- Das Fact-Grid (`<dl>`) zweispaltig und gut lesbar (dt links, dd rechts), mobil einspaltig.

## 7. Sprachregeln für alle Texte

- Keine Gedankenstriche / Em-Dashes. Stattdessen Punkt, Komma oder Doppelpunkt.
- Keine Adjektive in Faktensätzen, ein Fakt pro Satz, deskriptiv statt persuasiv.
- Keine Marketing-Formulierungen ("führend", "innovativ", "ehrlich"). Diese Seite klärt, sie verkauft nicht.
- Englische Version: vollständige, fachlich saubere Übersetzung derselben Struktur und derselben Fakten, kein zusätzlicher Inhalt.

## 8. Zusatzaufgaben im Bestand

1. **Footer-Link:** Auf allen Seiten im Footer neben Impressum und Datenschutz einen Link "Fakten zu AImation" auf `/facts/aimation/` ergänzen (in der EN-Variante "AImation Facts" auf die EN-Version).
2. **E-Mail-Konsistenz:** Im Footer steht aktuell info@aimation.de, im Impressum kontakt@ai-mation.de. Korrekt ist kontakt@ai-mation.de. Vereinheitliche die Adresse überall auf der Website auf kontakt@ai-mation.de.
3. **llms.txt:** Lege im Public-Verzeichnis eine `llms.txt` an (erreichbar unter https://www.aimation.de/llms.txt). Inhalt: ein H1 mit "AImation UG", die Lead-Definition als Kurzbeschreibung, danach eine kommentierte Linkliste der wichtigsten Seiten (Grounding Page DE und EN zuerst, dann die drei Leistungsseiten, Use Cases, Blog). Format gemäß llmstxt.org, reiner Markdown-Text.
4. Nichts anderes an bestehenden Seiten verändern.

## 9. Abnahmekriterien (vor Abschluss selbst prüfen)

- [ ] `npm run build` (bzw. das Build-Kommando des Projekts) läuft fehlerfrei durch.
- [ ] Beide Seiten rendern vollständig ohne JavaScript (curl auf die gerenderte HTML-Ausgabe, alle Fakten und FAQ-Antworten sind im Quelltext sichtbar).
- [ ] H1 enthält nur "AImation UG".
- [ ] `<dl>` mit allen Kerndaten vorhanden.
- [ ] JSON-LD validiert (gültiges JSON, eine Top-Level-Organization) und spiegelt das HTML wortgleich.
- [ ] FAQPage-Markup enthält nur sichtbare Fragen/Antworten.
- [ ] Kein noindex, robots.txt blockiert die Routen nicht, Canonical und hreflang gesetzt, Sitemap enthält beide URLs.
- [ ] llms.txt liegt im Public-Verzeichnis und ist gültiger Markdown-Text.
- [ ] Footer-Link auf allen Seiten vorhanden.
- [ ] Kein Gedankenstrich in den neuen Texten.
- [ ] E-Mail-Adresse überall einheitlich kontakt@ai-mation.de.

Gib am Ende eine kurze Zusammenfassung: welche Dateien neu, welche geändert, und den gerenderten HTML-Quelltext der DE-Seite zur Kontrolle.
