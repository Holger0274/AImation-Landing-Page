# Design: Englische Sprachversion (i18n)

**Datum:** 2026-06-03  
**Status:** Approved  
**Scope:** Volle Übersetzung der Landing Page auf Englisch via next-intl

---

## Ziel

Die AI.mation Landing Page soll neben Deutsch auch auf Englisch verfügbar sein. Zielgruppe für die EN-Version sind internationale Besucher und englischsprachige Entscheider in DACH-Unternehmen.

---

## Architektur

### i18n-Library
**next-intl** (bereits in CLAUDE.md als geplante Dependency gelistet)

- Locale-basiertes Routing über Next.js App Router
- Middleware für automatische Spracherkennung
- Übersetzungen in JSON-Dateien
- `useTranslations()`-Hook in Komponenten

### URL-Struktur
```
aimation.de/          → Deutsch (Standard, kein Prefix)
aimation.de/en/       → Englisch
aimation.de/en/blog   → Blog EN
aimation.de/impressum → DE-only (kein Locale-Prefix)
aimation.de/datenschutz → DE-only (kein Locale-Prefix)
```

Konfiguration: `localePrefix: 'as-needed'` in next-intl — `/de/` wird nicht generiert, nur `/` für Deutsch und `/en/` für Englisch. Die Middleware erkennt Browser-Sprache, setzt aber Deutsch als Fallback.

### Impressum & Datenschutz (DE-only)
Diese Seiten bleiben **außerhalb von `app/[locale]/`** in `app/` direkt. Der Middleware-Matcher schließt sie explizit aus. Requests auf `/en/impressum` werden per 301 auf `/impressum` weitergeleitet.

### Root Layout Split
Nach der Migration existieren zwei Layout-Ebenen:
- `app/layout.tsx` (Root) — minimales Shell-Layout für Impressum/Datenschutz (kein `lang`-Attribut, kein `<html>`-Wrapper-Konflikt)
- `app/[locale]/layout.tsx` — vollständiges Layout mit `lang={locale}`, Fonts, Metadata, Header/Footer

Die Root-Layout muss weiterhin existieren damit Impressum/Datenschutz gerendert werden können. Sie setzt `lang="de"` statisch (diese Seiten sind immer Deutsch).

### Locale Detection & Cookie
Mit `localePrefix: 'as-needed'` wird `/` immer als Deutsch geserved — das ist gewollt (Zielmarkt DACH). Keine automatische Accept-Language-Erkennung. Der EN-Toggle setzt ein `NEXT_LOCALE` Cookie via next-intl, sodass der gewählte Locale bei Hard Refresh erhalten bleibt.

### Redirect-Strategie für bestehende indexierte URLs
Da aktuell `/blog/*`, `/ki-beratung-kmu` etc. ohne Locale-Prefix indexiert sind, und nach der Migration unter `app/[locale]/` landen (aber dank `localePrefix: 'as-needed'` weiterhin ohne `/de/`-Prefix erreichbar), entstehen **keine Breaking Changes für bestehende deutsche URLs**. Nur `/en/`-Routen sind neu.

---

## Verzeichnisstruktur

### Neue Dateien
```
aimation-landing/
├── middleware.ts              # Locale-Routing
├── i18n.ts                    # next-intl Konfiguration
├── messages/
│   ├── de.json                # Alle deutschen Texte
│   └── en.json                # Alle englischen Texte
```

### Umstrukturierung app/
```
app/
├── [locale]/                  # Neuer Locale-Wrapper
│   ├── layout.tsx             # Verschoben von app/layout.tsx
│   ├── page.tsx               # Hauptseite
│   ├── blog/                  # Alle bestehenden Routen
│   ├── ki-agenten-unternehmen/
│   ├── ki-automatisierung-mittelstand/
│   ├── ki-beratung-kmu/
│   ├── ki-schulungen-mittelstand/
│   └── use-cases/
├── impressum/                 # Außerhalb [locale], DE-only
├── datenschutz/               # Außerhalb [locale], DE-only
├── sitemap.ts                 # Aktualisiert für beide Locales
└── api/                       # Bleibt ohne Locale
```

---

## Sprachumschalter

### Design: Toggle-Pill (Variante A)
```tsx
// Im Header, rechts neben dem CTA-Button
// Korrekte href-Logik: kein doppelter Slash, keine falschen Prefixes
const deHref = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname
const enHref = pathname.startsWith('/en') ? pathname : `/en${pathname}`

<div className="flex bg-[#1a2a2f] rounded-full p-0.5 gap-0.5">
  <Link
    href={deHref}
    className={locale === 'de'
      ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold'
      : 'text-gray-400 px-3 py-1 rounded-full text-xs hover:text-white transition-colors'}
  >DE</Link>
  <Link
    href={enHref}
    className={locale === 'en'
      ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold'
      : 'text-gray-400 px-3 py-1 rounded-full text-xs hover:text-white transition-colors'}
  >EN</Link>
</div>
```

### Verhalten
- Beim Sprachwechsel bleibt der Nutzer auf der gleichen Seite (nur Locale wechselt)
- Auf dunklem Header (Hero): Toggle-Pill auf `#1a2a2f` Hintergrund
- Auf hellem Header (nach Scroll): Pill-Hintergrund wechselt zu `#e5e7eb`
- Mobile: Toggle-Pill im Hamburger-Menü

---

## Übersetzungsumfang

### Übersetzt (DE + EN)
- Landing Page (`/`) — alle Sektionen
- Pillar Pages (ki-automatisierung-mittelstand, ki-beratung-kmu, ki-schulungen-mittelstand, ki-agenten-unternehmen)
- Use Cases
- Navigation, Header, Footer

### Blog-Strategie
Blog-Artikel sind individuelle `page.tsx`-Dateien mit hartkodiertem Inhalt — eine vollständige Übersetzung via `useTranslations()` ist unpraktisch. **Entscheidung: Blog bleibt initial DE-only.**

- `/en/blog/` → EN-Übersichtsseite mit Hinweis "Articles available in German"
- `/en/blog/[slug]` → **302-Redirect auf `/blog/[slug]`** (verhindert Thin-Content-Penalty, Googlebot folgt auf DE-Artikel)
- Alle Blog-Slugs in der Sitemap nur unter DE-URLs gelistet
- `<link rel="canonical">` auf DE-Version bei Redirects

Übersetzung einzelner Blogartikel ist ein separates Future-Scope-Item.

### Nicht übersetzt (DE-only)
- Impressum — deutsches Recht
- Datenschutzerklärung — deutsches Recht

### Übersetzungsprinzipien
1. **Hero-Headline**: Inhaltlich treu, für internationales Publikum leicht angepasst. Das "40% Arbeitszeit"-Konzept und die Ehrlichkeits-USP bleiben erhalten.
2. **Ton**: Professional, direct, no buzzwords — gleiche Markenstimme wie DE
3. **Anti-KI-Text-Spec gilt auch für EN**: Keine generischen Floskeln, konkrete Anker, variable Satzlängen
4. **CTAs**: Direkt übersetzt ("Free initial consultation")
5. **Zahlen/Stats bleiben**: "20 Jahre" → "20 years", "18.000+ LinkedIn-Follower" unverändert

### messages/ Struktur
```json
{
  "hero": {
    "headline": "...",
    "subline": "...",
    "cta": "..."
  },
  "nav": {
    "services": "...",
    "about": "...",
    "contact": "..."
  },
  "painPoints": { ... },
  "services": { ... }
}
```
Verschachtelt nach Sektion. Kein Pluralisierungsbedarf für diese Inhalte. Rich Text (HTML-Spans für Magenta-Highlights) wird über next-intl's `rich()` API gehandhabt.

---

## SEO & Metadata

- `hreflang="de"` und `hreflang="en"` auf allen Seiten
- `<html lang="de">` / `<html lang="en">` via next-intl automatisch
- `og:locale: 'de_DE'` / `og:locale: 'en_US'` in OpenGraph-Metadata — locale-aware generiert
- Sitemap: `MetadataRoute.Sitemap` unterstützt keine `xhtml:link`-Alternates nativ. Stattdessen: `app/sitemap.xml/route.ts` als custom XML-Route, die raw XML mit `<xhtml:link rel="alternate">` für beide Locales ausgibt.
- Canonical URLs werden nach Migration geprüft und auf Locale-Prefix angepasst

---

## Implementierungsreihenfolge

1. `next-intl` installieren; `next.config.js` mit `createNextIntlPlugin()` wrappen:
   ```ts
   import createNextIntlPlugin from 'next-intl/plugin'
   const withNextIntl = createNextIntlPlugin()
   export default withNextIntl(nextConfig)
   ```
   Turbopack-Kompatibilität mit next-intl prüfen (next-intl v3+ unterstützt App Router Turbopack).
2. `i18n.ts` mit `localePrefix: 'as-needed'` anlegen
3. `middleware.ts` mit präzisem Matcher (anchored, keine Substring-Matches):
   ```ts
   export const config = {
     matcher: ['/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|api/|impressum|datenschutz|images/|logos/).*)']
   }
   ```
4. `/en/impressum` und `/en/datenschutz` Redirects in `next.config.js` `redirects()` eintragen (da diese URLs die Middleware nie erreichen):
   ```ts
   redirects: async () => [
     { source: '/en/impressum', destination: '/impressum', permanent: true },
     { source: '/en/datenschutz', destination: '/datenschutz', permanent: true },
   ]
   ```
5. `app/layout.tsx` zu minimalem Shell reduzieren (nur `<html lang="de"><body>{children}</body></html>` ohne Fonts/Metadata). Fonts, Header, Footer, Structured Data in `app/[locale]/layout.tsx`.
6. `app/` nach `app/[locale]/` umstrukturieren (Impressum/Datenschutz außen lassen)
7. `messages/de.json` aus bestehenden Komponenten befüllen
8. `messages/en.json` erstellen (Claude übersetzt alle Texte)
9. Alle Section-Komponenten auf `useTranslations()` umstellen
10. Toggle-Pill in Header einbauen — korrekte `href`-Logik:
    ```tsx
    // DE: entfernt /en-Prefix wenn vorhanden, sonst unverändert
    const deHref = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname
    // EN: fügt /en-Prefix hinzu wenn noch nicht vorhanden
    const enHref = pathname.startsWith('/en') ? pathname : `/en${pathname}`
    ```
11. Metadata locale-aware machen (hreflang, og:locale, canonical)
12. `app/sitemap.ts` durch `app/sitemap.xml/route.ts` (custom XML) ersetzen — mit `xhtml:link`-Alternates für beide Locales
13. Test: Sprachwechsel, alle Routen, SEO-Tags, Mobile, Redirects `/en/impressum → /impressum`

---

## Risiken & Mitigationen

| Risiko | Mitigation |
|--------|-----------|
| Umstrukturierung `app/` bricht bestehende Routen | `localePrefix: 'as-needed'` erhält alle DE-URLs ohne Änderung |
| Impressum/Datenschutz außerhalb Locale | Explizit in Middleware-Matcher ausschließen |
| Blog: zu viele Dateien zum Übersetzen | Blog initial DE-only, EN-Übersicht mit Hinweis |
| Turbopack-Kompatibilität mit next-intl | next-intl v3+ unterstützt App Router Turbopack; bei Problemen Turbopack temporär deaktivieren |
| OpenGraph locale falsch | Metadata-Generierung locale-aware wrappen |
| `/en/impressum` liefert 404 | Redirect in `next.config.js` redirects() (nicht in Middleware) |
| `//`-Bug im Toggle-Pill | `pathname.slice(3) || '/'` statt Regex mit führendem Slash |
| Fehlender `createNextIntlPlugin`-Wrapper | next.config.js anpassen als ersten Schritt |
