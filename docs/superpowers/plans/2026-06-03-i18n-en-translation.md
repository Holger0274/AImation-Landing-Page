# i18n English Language Version Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add English language support to the AI.mation landing page using next-intl, with a Toggle-Pill language switcher in the header, `/en/` URL prefix for English, and full translations of all landing page sections, pillar pages, and use cases.

**Architecture:** next-intl with `localePrefix: 'as-needed'` so German URLs stay unchanged (no `/de/` prefix). All content moves to `app/[locale]/` except Impressum/Datenschutz which stay at root. Translations live in `messages/de.json` and `messages/en.json`, consumed via `useTranslations()` in each component.

**Tech Stack:** next-intl v3+, Next.js 14/15 App Router, TypeScript, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-06-03-i18n-en-translation-design.md`

---

## File Map

### New Files
| File | Purpose |
|------|---------|
| `aimation-landing/middleware.ts` | Locale routing, matcher excludes static/legal assets |
| `aimation-landing/i18n.ts` | next-intl config: locales, defaultLocale, localePrefix |
| `aimation-landing/messages/de.json` | All German translation strings |
| `aimation-landing/messages/en.json` | All English translation strings |
| `aimation-landing/app/[locale]/layout.tsx` | Full layout with dynamic lang, fonts, metadata, header/footer |
| `aimation-landing/app/[locale]/page.tsx` | Main landing page (moved from app/page.tsx) |
| `aimation-landing/app/[locale]/blog/page.tsx` | Blog index (moved) |
| `aimation-landing/app/[locale]/blog/[slug]/page.tsx` | Blog posts (moved, DE-only) |
| `aimation-landing/app/[locale]/use-cases/page.tsx` | Use cases index (moved) |
| `aimation-landing/app/[locale]/use-cases/[slug]/page.tsx` | Use case detail (moved) |
| `aimation-landing/app/[locale]/ki-automatisierung-mittelstand/page.tsx` | Pillar page (moved) |
| `aimation-landing/app/[locale]/ki-beratung-kmu/page.tsx` | Pillar page (moved) |
| `aimation-landing/app/[locale]/ki-schulungen-mittelstand/page.tsx` | Pillar page (moved) |
| `aimation-landing/app/[locale]/ki-agenten-unternehmen/page.tsx` | Pillar page (moved) |
| `aimation-landing/app/sitemap.xml/route.ts` | Custom XML sitemap with hreflang alternates (replaces sitemap.ts) |
| `aimation-landing/components/ui/LanguageSwitcher.tsx` | Toggle-Pill DE/EN component |

### Modified Files
| File | Change |
|------|--------|
| `aimation-landing/next.config.js` | Add createNextIntlPlugin wrapper + /en/impressum redirect |
| `aimation-landing/app/layout.tsx` | Reduce to minimal shell (no fonts, no metadata, no header) |
| `aimation-landing/components/layout/Header.tsx` | Add LanguageSwitcher, translate nav labels |
| `aimation-landing/components/layout/Footer.tsx` | Translate footer content |
| `aimation-landing/components/sections/Hero.tsx` | useTranslations() for all text |
| `aimation-landing/components/sections/PainPoints.tsx` | useTranslations() |
| `aimation-landing/components/sections/BeforeAfter.tsx` | useTranslations() |
| `aimation-landing/components/sections/Services.tsx` | useTranslations() |
| `aimation-landing/components/sections/Process.tsx` | useTranslations() |
| `aimation-landing/components/sections/SocialProof.tsx` | useTranslations() |
| `aimation-landing/components/sections/About.tsx` | useTranslations() |
| `aimation-landing/components/sections/WhyAImation.tsx` | useTranslations() |
| `aimation-landing/components/sections/FAQ.tsx` + `lib/data/faqs.ts` | useTranslations() |
| `aimation-landing/components/sections/FinalCTA.tsx` | useTranslations() |
| `aimation-landing/components/sections/ProjectShowcase/ProjectShowcase.tsx` | useTranslations() |
| `aimation-landing/app/ki-automatisierung-mittelstand/page.tsx` etc. | Move to [locale]/ |

---

## Task 1: Install next-intl and update next.config.js

**Files:**
- Modify: `aimation-landing/next.config.js`

- [ ] **Step 1: Install next-intl**

```bash
cd aimation-landing && npm install next-intl
```

Expected: next-intl added to package.json dependencies.

- [ ] **Step 2: Wrap next.config.js with createNextIntlPlugin**

Replace the top of `aimation-landing/next.config.js`:

```js
const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@lobehub/icons'],
  async redirects() {
    return [
      { source: '/en/impressum', destination: '/impressum', permanent: true },
      { source: '/en/datenschutz', destination: '/datenschutz', permanent: true },
    ];
  },
  images: { /* ... keep existing ... */ },
  turbopack: { /* ... keep existing ... */ },
  webpack: (config, { webpack }) => { /* ... keep existing ... */ },
};

module.exports = withNextIntl(nextConfig);
```

- [ ] **Step 3: Verify build still compiles**

```bash
cd aimation-landing && npm run build 2>&1 | tail -20
```

Expected: Build succeeds (or only fails on missing i18n.ts — that's fine, we add it next).

- [ ] **Step 4: Commit**

```bash
git add aimation-landing/package.json aimation-landing/package-lock.json aimation-landing/next.config.js
git commit -m "feat(i18n): install next-intl, add plugin wrapper and legal redirects"
```

---

## Task 2: Create i18n config and middleware

**Files:**
- Create: `aimation-landing/i18n.ts`
- Create: `aimation-landing/middleware.ts`

- [ ] **Step 1: Create i18n.ts**

```ts
// aimation-landing/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
```

- [ ] **Step 2: Create middleware.ts**

```ts
// aimation-landing/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',
});

export const config = {
  // Exclude: static files, images, favicon, api routes, legal pages
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|api/|impressum|datenschutz|images/|logos/|sitemap\\.xml).*)',
  ],
};
```

- [ ] **Step 3: Create placeholder message files**

Create `aimation-landing/messages/de.json` with a single key to verify the setup:

```json
{
  "_test": "ok"
}
```

Create `aimation-landing/messages/en.json`:

```json
{
  "_test": "ok"
}
```

- [ ] **Step 4: Verify dev server starts without errors**

```bash
cd aimation-landing && npm run dev 2>&1 | head -30
```

Expected: Server starts on localhost:3000, no next-intl errors.

- [ ] **Step 5: Commit**

```bash
git add aimation-landing/i18n.ts aimation-landing/middleware.ts aimation-landing/messages/
git commit -m "feat(i18n): add next-intl config and middleware with locale routing"
```

---

## Task 3: Restructure app/ directory — create [locale] wrapper

This is the most critical task. The existing `app/layout.tsx` becomes a minimal shell; a new `app/[locale]/layout.tsx` gets the full content.

**Files:**
- Modify: `aimation-landing/app/layout.tsx` (reduce to shell)
- Create: `aimation-landing/app/[locale]/layout.tsx` (full layout)
- Create: `aimation-landing/app/[locale]/page.tsx` (copy of app/page.tsx)

- [ ] **Step 1: Create app/[locale]/ directory**

```bash
mkdir -p aimation-landing/app/\[locale\]
```

- [ ] **Step 2: Reduce app/layout.tsx to minimal shell first**

The root layout owns `<html>` and `<body>` — the `[locale]` layout must NOT re-render these tags (Next.js nests layouts, so two `<html>` would produce invalid HTML and hydration errors).

Replace the entire content of `app/layout.tsx` with a shell that handles the `<html>`/`<body>` wrapper, setting `lang` from the locale segment in the URL. Use `next/headers` to read the locale:

```tsx
// aimation-landing/app/layout.tsx
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], variable: '--font-heading',
  weight: ['400', '500', '600', '700'], display: 'swap',
});
const inter = Inter({
  subsets: ['latin'], variable: '--font-body',
  weight: ['400', '500', '600'], display: 'swap',
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  // For pages outside [locale] (impressum, datenschutz), default to 'de'
  const lang = params?.locale ?? 'de';

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ overflowX: 'hidden', maxWidth: '100vw' }}
    >
      <body className="antialiased" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        {children}
      </body>
    </html>
  );
}
```

**Important:** Next.js root layout does NOT automatically receive `params.locale` — it only gets it if the segment is a direct child. Since `[locale]` is a child segment, the root layout does NOT have access to `params.locale`. The practical approach: keep the root `app/layout.tsx` as a bare minimum shell with `lang="de"` hardcoded (it only serves Impressum/Datenschutz, which are always German). The locale-specific `lang` attribute is set in `[locale]/layout.tsx` — but since only one layout renders `<html>`, they must not conflict.

**Correct pattern — root layout is the ONLY layout with `<html>`/`<body>`:**

```tsx
// aimation-landing/app/layout.tsx — owns <html> and <body>
// The [locale]/layout.tsx must NOT render <html> or <body>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
```

The `[locale]/layout.tsx` then only wraps children with providers — no `<html>` or `<body>`:

- [ ] **Step 3: Create app/[locale]/layout.tsx — providers only, no html/body**

```tsx
// aimation-landing/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {
  OrganizationSchema, LocalBusinessSchema, ServiceSchema,
  WebSiteSchema, PersonSchema,
} from '@/components/StructuredData';

// Keep existing metadata export from app/layout.tsx here (copy it)
export const metadata: Metadata = { /* ... same as current app/layout.tsx ... */ };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

  return (
    <>
      <OrganizationSchema siteUrl={siteUrl} />
      <LocalBusinessSchema siteUrl={siteUrl} />
      <WebSiteSchema siteUrl={siteUrl} />
      <ServiceSchema siteUrl={siteUrl} />
      <PersonSchema siteUrl={siteUrl} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-magenta focus:to-magenta-light focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        {locale === 'de' ? 'Zum Hauptinhalt springen' : 'Skip to main content'}
      </a>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
```

Note: The `lang` attribute on `<html>` will be `"de"` (from root layout) for both locales with this approach. To set it dynamically per locale, next-intl recommends using `next/headers` cookies in the root layout — but for this project (German default, English optional), `suppressHydrationWarning` on `<html>` is an acceptable tradeoff. See next-intl docs for the `setRequestLocale` pattern if dynamic `lang` is required.

- [ ] **Step 4: Create app/[locale]/page.tsx**

Copy `app/page.tsx` to `app/[locale]/page.tsx` exactly as-is (no translation changes yet — we do that in Task 6).

- [ ] **Step 5: Verify / still loads**

```bash
cd aimation-landing && npm run dev
```

Open http://localhost:3000 — landing page should render correctly.
Open http://localhost:3000/en — should also render (same content for now).

- [ ] **Step 6: Commit**

```bash
git add aimation-landing/app/
git commit -m "feat(i18n): create [locale] layout wrapper, reduce root layout to shell"
```

---

## Task 4: Move all routes into app/[locale]/

Move blog, use-cases, pillar pages into the locale folder. Impressum and Datenschutz stay at root.

**Files:** All `app/blog/`, `app/use-cases/`, `app/ki-*/` directories

- [ ] **Step 1: Move blog directory**

```bash
cd aimation-landing && cp -r app/blog app/\[locale\]/blog
```

- [ ] **Step 2: Move use-cases directory**

```bash
cp -r app/use-cases app/\[locale\]/use-cases
```

- [ ] **Step 3: Move pillar pages**

```bash
cp -r app/ki-automatisierung-mittelstand app/\[locale\]/ki-automatisierung-mittelstand
cp -r app/ki-beratung-kmu app/\[locale\]/ki-beratung-kmu
cp -r app/ki-schulungen-mittelstand app/\[locale\]/ki-schulungen-mittelstand
cp -r app/ki-agenten-unternehmen app/\[locale\]/ki-agenten-unternehmen
```

- [ ] **Step 4: Add EN blog redirect**

Create `aimation-landing/app/[locale]/blog/[slug]/page.tsx` — but wait, blog slugs already exist as individual folders. Instead, add a catch-all for EN locale that redirects to DE. Create `app/[locale]/blog/en-redirect/` — actually, handle this in next.config.js redirects:

Add to `next.config.js` redirects():
```js
{ source: '/en/blog/:slug', destination: '/blog/:slug', permanent: false },
```

- [ ] **Step 5: Delete old app/ routes (after verifying [locale] versions work)**

```bash
# Only after verifying routes work:
rm -rf app/blog app/use-cases app/ki-automatisierung-mittelstand
rm -rf app/ki-beratung-kmu app/ki-schulungen-mittelstand app/ki-agenten-unternehmen
rm app/page.tsx  # replaced by [locale]/page.tsx
```

- [ ] **Step 6: Verify all routes still work**

```bash
cd aimation-landing && npm run dev
```

Test these URLs in browser:
- http://localhost:3000/ — landing page ✓
- http://localhost:3000/blog — blog index ✓
- http://localhost:3000/ki-beratung-kmu — pillar page ✓
- http://localhost:3000/impressum — still works (outside [locale]) ✓
- http://localhost:3000/en — English landing page ✓
- http://localhost:3000/en/blog/ki-projekte-scheitern-fundament — redirects to /blog/ki-projekte-scheitern-fundament ✓

- [ ] **Step 7: Commit**

```bash
git add aimation-landing/app/ aimation-landing/next.config.js
git commit -m "feat(i18n): move all routes into [locale] wrapper, add EN blog redirect"
```

---

## Task 5: Build de.json — extract all German strings

This is the largest extraction task. Go through each component and extract hardcoded German strings.

**Files:**
- Create/fill: `aimation-landing/messages/de.json`

- [ ] **Step 1: Build the full de.json**

Create `aimation-landing/messages/de.json` with all strings. Use this structure:

```json
{
  "nav": {
    "leistungen": "Leistungen",
    "schulungen": "KI-Schulungen",
    "schulungenDesc": "Wissen aufbauen – vom Einstieg bis zur Spezialisierung",
    "beratung": "KI-Beratung",
    "beratungDesc": "Strategie & Roadmap – wo stehen Sie, wo wollen Sie hin?",
    "automatisierung": "KI-Automatisierung",
    "automatisierungDesc": "Workflows & Prozesse automatisieren – sofort einsatzbereit",
    "agenten": "KI-Agenten",
    "agentenDesc": "Intelligente Assistenten, die für Sie arbeiten",
    "ueberMich": "Über mich",
    "kontakt": "Kontakt",
    "cta": "Kostenloses Erstgespräch",
    "menuOpen": "Menü öffnen",
    "menuClose": "Menü schließen"
  },
  "hero": {
    "badge": "KI-Beratung für den Mittelstand",
    "headlineStart": "40% der Arbeitszeit Ihrer Mitarbeiter geht für Aufgaben drauf, die",
    "headlineHighlight": "niemand vermissen würde",
    "headlineEnd": ".",
    "subline": "Ob KI dafür die Lösung ist? Das sagen wir Ihnen ehrlich. Auch wenn die Antwort Nein lautet.",
    "cta": "Kostenloses Erstgespräch vereinbaren",
    "ctaSecondary": "Mehr erfahren",
    "trust1": "18.000+ LinkedIn-Follower",
    "trust2": "20 Jahre Engineering-Erfahrung",
    "trust3": "Für Unternehmen von 10-1000 Mitarbeitern"
  },
  "painPoints": {
    "headline": "Kennen Sie das?",
    "item1Title": "Zu viele manuelle Prozesse",
    "item1Desc": "Ihre Mitarbeiter verbringen Stunden mit Aufgaben, die eine KI in Minuten erledigen könnte.",
    "item2Title": "Kein Plan, wo anfangen",
    "item2Desc": "KI ist überall, aber welche Lösung passt zu Ihrem Unternehmen? Ohne Strategie verpuffen Investitionen.",
    "item3Title": "Angst, den Anschluss zu verlieren",
    "item3Desc": "Ihre Mitbewerber experimentieren bereits mit KI. Jeder Tag ohne Strategie ist ein verlorener Tag."
  },
  "services": {
    "headline": "Drei Wege, wie wir zusammenarbeiten",
    "schulungenTitle": "Schulungen",
    "schulungenSubtitle": "Wissen vermitteln",
    "schulungenDesc": "Von KI-Grundlagen bis Multi-Agent-Systeme – maßgeschneidert für Ihr Team.",
    "beratungTitle": "Beratung",
    "beratungSubtitle": "Denken, planen, entscheiden",
    "beratungDesc": "AI Readiness, Use Case Identifikation, Roadmap – damit Sie wissen, wo Sie stehen und wohin Sie wollen.",
    "umsetzungTitle": "Umsetzung",
    "umsetzungSubtitle": "Bauen, implementieren, betreiben",
    "umsetzungDesc": "Workflows, RAG-Systeme, KI-Agenten – konkrete Lösungen, die am nächsten Tag funktionieren.",
    "moreInfo": "Mehr erfahren",
    "flip": "Details"
  },
  "process": {
    "headline": "So einfach geht es",
    "step1Title": "Erstgespräch",
    "step1Desc": "30 Minuten, kostenlos. Wir hören zu, stellen die richtigen Fragen.",
    "step2Title": "Konzept",
    "step2Desc": "Klarer Plan: Was macht Sinn, was nicht. Ohne Buzzwords.",
    "step3Title": "Umsetzung",
    "step3Desc": "Wir bauen. Mit Ihnen, nicht an Ihnen vorbei.",
    "step4Title": "Begleitung",
    "step4Desc": "Nach dem Start sind wir noch da. Bis es läuft."
  },
  "socialProof": {
    "headline": "Zahlen, die für sich sprechen",
    "stat1Value": "20+",
    "stat1Label": "Jahre Engineering-Erfahrung",
    "stat2Value": "18.000+",
    "stat2Label": "LinkedIn-Follower",
    "toolsHeadline": "Wir arbeiten mit den besten Tools"
  },
  "about": {
    "headline": "Der Mensch hinter AI.mation",
    "name": "Holger Peschke",
    "role": "KI-Berater & Automatisierungsexperte",
    "bio": "KI ist nicht mein Job – es ist das Thema, das mein Feuer entfacht. Nach 20 Jahren im Engineering habe ich gesehen, wie viel Potenzial in deutschen Unternehmen brachliegt. Mein Ziel: KI zugänglich machen – ohne Buzzwords, ohne Konzernpreise, mit echtem Verständnis für eure Prozesse.",
    "cta": "Auf LinkedIn verbinden"
  },
  "faq": {
    "headline": "Häufige Fragen"
  },
  "finalCta": {
    "headline": "Bereit für den ersten Schritt?",
    "subline": "30 Minuten Erstgespräch. Kostenlos. Ohne Verkaufsdruck.",
    "cta": "Jetzt Termin buchen",
    "ctaSecondary": "KI-Potenzial-Check herunterladen"
  },
  "footer": {
    "tagline": "Automatisierung mit Intelligenz",
    "nav": "Navigation",
    "legal": "Rechtliches",
    "impressum": "Impressum",
    "datenschutz": "Datenschutz",
    "copyright": "© 2025 AI.mation. Alle Rechte vorbehalten.",
    "slogan": "Erkennen • Automatisieren • Wachsen"
  },
  "blog": {
    "headline": "Blog",
    "readMore": "Weiterlesen",
    "backToBlog": "Zurück zum Blog"
  },
}
```

Note: Do NOT add `enBlogNotice` to `de.json` — those keys are only consumed on the EN blog page and belong only in `en.json`.

- [ ] **Step 2: Commit de.json**

```bash
git add aimation-landing/messages/de.json
git commit -m "feat(i18n): add de.json with all German translation strings"
```

---

## Task 6: Build en.json — English translations

**Files:**
- Create/fill: `aimation-landing/messages/en.json`

- [ ] **Step 1: Create en.json with English translations**

```json
{
  "nav": {
    "leistungen": "Services",
    "schulungen": "AI Training",
    "schulungenDesc": "Build knowledge – from basics to specialization",
    "beratung": "AI Consulting",
    "beratungDesc": "Strategy & roadmap – where are you, where do you want to go?",
    "automatisierung": "AI Automation",
    "automatisierungDesc": "Automate workflows & processes – ready to use immediately",
    "agenten": "AI Agents",
    "agentenDesc": "Intelligent assistants that work for you",
    "ueberMich": "About",
    "kontakt": "Contact",
    "cta": "Free initial consultation",
    "menuOpen": "Open menu",
    "menuClose": "Close menu"
  },
  "hero": {
    "badge": "AI consulting for mid-sized businesses",
    "headlineStart": "40% of your employees' working time goes to tasks",
    "headlineHighlight": "nobody would miss",
    "headlineEnd": ".",
    "subline": "Whether AI is the right solution? We'll tell you straight. Even if the answer is no.",
    "cta": "Book a free initial consultation",
    "ctaSecondary": "Learn more",
    "trust1": "18,000+ LinkedIn followers",
    "trust2": "20 years of engineering experience",
    "trust3": "For companies with 10–1,000 employees"
  },
  "painPoints": {
    "headline": "Sound familiar?",
    "item1Title": "Too many manual processes",
    "item1Desc": "Your employees spend hours on tasks that AI could handle in minutes.",
    "item2Title": "No idea where to start",
    "item2Desc": "AI is everywhere, but which solution fits your company? Without a strategy, investments evaporate.",
    "item3Title": "Fear of falling behind",
    "item3Desc": "Your competitors are already experimenting with AI. Every day without a strategy is a day lost."
  },
  "services": {
    "headline": "Three ways we work together",
    "schulungenTitle": "Training",
    "schulungenSubtitle": "Building knowledge",
    "schulungenDesc": "From AI fundamentals to multi-agent systems – tailored to your team.",
    "beratungTitle": "Consulting",
    "beratungSubtitle": "Think, plan, decide",
    "beratungDesc": "AI readiness, use case identification, roadmap – so you know where you stand and where you're headed.",
    "umsetzungTitle": "Implementation",
    "umsetzungSubtitle": "Build, implement, operate",
    "umsetzungDesc": "Workflows, RAG systems, AI agents – concrete solutions that work the next day.",
    "moreInfo": "Learn more",
    "flip": "Details"
  },
  "process": {
    "headline": "Simple as that",
    "step1Title": "Initial call",
    "step1Desc": "30 minutes, free. We listen and ask the right questions.",
    "step2Title": "Concept",
    "step2Desc": "A clear plan: what makes sense, what doesn't. No buzzwords.",
    "step3Title": "Implementation",
    "step3Desc": "We build. With you, not around you.",
    "step4Title": "Ongoing support",
    "step4Desc": "We're still here after launch. Until it runs."
  },
  "socialProof": {
    "headline": "Numbers that speak for themselves",
    "stat1Value": "20+",
    "stat1Label": "years of engineering experience",
    "stat2Value": "18,000+",
    "stat2Label": "LinkedIn followers",
    "toolsHeadline": "We work with the best tools"
  },
  "about": {
    "headline": "The person behind AI.mation",
    "name": "Holger Peschke",
    "role": "AI consultant & automation expert",
    "bio": "AI isn't my job – it's the topic that lights my fire. After 20 years in engineering, I've seen how much potential lies dormant in German companies. My goal: make AI accessible – no buzzwords, no big-consulting prices, with genuine understanding of your processes.",
    "cta": "Connect on LinkedIn"
  },
  "faq": {
    "headline": "Frequently asked questions"
  },
  "finalCta": {
    "headline": "Ready to take the first step?",
    "subline": "30-minute initial consultation. Free. No sales pressure.",
    "cta": "Book an appointment",
    "ctaSecondary": "Download AI potential check"
  },
  "footer": {
    "tagline": "Automation with intelligence",
    "nav": "Navigation",
    "legal": "Legal",
    "impressum": "Legal notice",
    "datenschutz": "Privacy policy",
    "copyright": "© 2025 AI.mation. All rights reserved.",
    "slogan": "Recognize • Automate • Grow"
  },
  "blog": {
    "headline": "Blog",
    "readMore": "Read more",
    "backToBlog": "Back to blog"
  },
  "enBlogNotice": {
    "headline": "Blog",
    "notice": "Our articles are currently available in German only.",
    "cta": "Go to German version"
  }
}
```

- [ ] **Step 2: Commit en.json**

```bash
git add aimation-landing/messages/en.json
git commit -m "feat(i18n): add en.json with full English translations"
```

---

## Task 7: Build LanguageSwitcher component

**Files:**
- Create: `aimation-landing/components/ui/LanguageSwitcher.tsx`

- [ ] **Step 1: Create LanguageSwitcher.tsx**

```tsx
// aimation-landing/components/ui/LanguageSwitcher.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  isDark?: boolean; // true when header is on dark/hero background
}

export default function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();

  // Safe href calculation — no double slashes
  const deHref = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname;
  const enHref = pathname.startsWith('/en') ? pathname : `/en${pathname}`;

  const pillBg = isDark ? 'bg-[#1a2a2f]' : 'bg-[#e5e7eb]';

  return (
    <div className={`flex ${pillBg} rounded-full p-0.5 gap-0.5`}>
      <Link
        href={deHref}
        className={
          locale === 'de'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors'
        }
        aria-label="Zur deutschen Version wechseln"
      >
        DE
      </Link>
      <Link
        href={enHref}
        className={
          locale === 'en'
            ? 'bg-[#f90093] text-white px-3 py-1 rounded-full text-xs font-bold transition-colors'
            : 'text-gray-500 px-3 py-1 rounded-full text-xs hover:text-gray-800 transition-colors'
        }
        aria-label="Switch to English version"
      >
        EN
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Add LanguageSwitcher to Header**

In `aimation-landing/components/layout/Header.tsx`, import and add the switcher next to the CTA button (both in desktop nav and mobile menu):

```tsx
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

// In desktop nav (right side, before CTA button):
<LanguageSwitcher isDark={false} />

// In mobile menu (at bottom of menu items):
<LanguageSwitcher isDark={false} />
```

The `isDark` prop should be `isScrolled ? false : false` — the current Header uses a light warm-white background in both states, so always `isDark={false}`. If a dark hero variant is added later, pass `isDark={true}`.

- [ ] **Step 3: Verify switcher renders in browser**

```bash
cd aimation-landing && npm run dev
```

Open http://localhost:3000 — Toggle-Pill DE/EN should be visible in header.
Click EN → should navigate to http://localhost:3000/en (same content for now).
Click DE → should navigate back to http://localhost:3000/.

- [ ] **Step 4: Commit**

```bash
git add aimation-landing/components/ui/LanguageSwitcher.tsx aimation-landing/components/layout/Header.tsx
git commit -m "feat(i18n): add LanguageSwitcher Toggle-Pill component to header"
```

---

## Task 8: Wire useTranslations() into landing page sections

Replace hardcoded German strings in each section component with `useTranslations()` calls. Do this one component at a time.

**Files:** All section components + Header + Footer

**Pattern for each component:**
```tsx
// Add at top of component (for 'use client' components):
import { useTranslations } from 'next-intl';

// Inside component:
const t = useTranslations('hero'); // namespace matches de.json key
// Then replace: "Kostenloses Erstgespräch vereinbaren" → t('cta')
```

**For server components** (if any), use `getTranslations` instead:
```tsx
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('hero');
```

- [ ] **Step 1: Update Header.tsx nav labels**

Replace hardcoded strings in `leistungenItems` array and nav links with `t('nav.schulungen')` etc. Since Header is `'use client'`, use `useTranslations('nav')`.

- [ ] **Step 2: Update Hero.tsx**

```bash
# Check how Hero renders the headline — it likely uses split variables for the Magenta highlight:
grep -n "headline\|niemand\|vermissen" aimation-landing/components/sections/Hero.tsx
```

The Hero headline uses a split pattern (`headlineStart`, `headlineHighlight`, `headlineEnd`) to wrap the highlighted word in a Magenta `<span>`. Use **three separate keys** in de.json/en.json — do NOT collapse to a single key or the Magenta highlight will be lost:

In `messages/de.json`, update the hero section:
```json
"hero": {
  "headlineStart": "40% der Arbeitszeit Ihrer Mitarbeiter geht für Aufgaben drauf, die",
  "headlineHighlight": "niemand vermissen würde",
  "headlineEnd": ".",
  ...
}
```

In `messages/en.json`:
```json
"hero": {
  "headlineStart": "40% of your employees' working time goes to tasks",
  "headlineHighlight": "nobody would miss",
  "headlineEnd": ".",
  ...
}
```

In `Hero.tsx`, replace the hardcoded strings with:
```tsx
const t = useTranslations('hero');
// In JSX:
<h1>
  {t('headlineStart')} <span className="highlight">{t('headlineHighlight')}</span>{t('headlineEnd')}
</h1>
```

Verify the actual variable names in the component before replacing — adapt to match whatever split pattern is already there.

- [ ] **Step 3: Update PainPoints.tsx**

Replace pain point titles and descriptions with `t('painPoints.*')`.

- [ ] **Step 4: Update Services.tsx**

Replace service titles, subtitles, descriptions with `t('services.*')`.

- [ ] **Step 5: Update Process.tsx**

Replace step titles and descriptions with `t('process.*')`.

- [ ] **Step 6: Update SocialProof.tsx**

Replace stat labels and headlines with `t('socialProof.*')`.

- [ ] **Step 7: Update About.tsx**

Replace bio text, name, role, CTA with `t('about.*')`.

- [ ] **Step 8: Update FAQ.tsx**

The FAQ component uses a `faqs` data array from `lib/data/faqs.ts`. For now, keep FAQ questions in German only (the data array pattern makes per-locale data harder). Add a note in the component for future locale-aware FAQ data.

Replace only the section headline: `t('faq.headline')`.

- [ ] **Step 9: Update FinalCTA.tsx**

Replace headline, subline, CTA buttons with `t('finalCta.*')`.

- [ ] **Step 10: Update Footer.tsx**

Replace copyright, nav labels, tagline with `t('footer.*')`. Note: footer links to `/impressum` and `/datenschutz` stay as-is (they are locale-independent paths).

- [ ] **Step 11: Audit remaining components for German strings**

Check each of these components for hardcoded German text and add translations as needed:

```bash
grep -n '"[A-ZÄÖÜa-zäöüß]' aimation-landing/components/sections/BeforeAfter.tsx | head -20
grep -n '"[A-ZÄÖÜa-zäöüß]' aimation-landing/components/sections/WhyAImation.tsx | head -20
grep -n '"[A-ZÄÖÜa-zäöüß]' aimation-landing/components/sections/Solution.tsx | head -20
grep -n '"[A-ZÄÖÜa-zäöüß]' aimation-landing/components/sections/MethodBadgeBar.tsx | head -20
grep -rn '"[A-ZÄÖÜa-zäöüß]' aimation-landing/components/sections/ProjectShowcase/ | head -20
```

For each file with German text: add corresponding keys to both `de.json` and `en.json`, then replace with `t('sectionName.*')`.

Note: `Solution.tsx` is not imported in the current `app/page.tsx` — verify whether it's used anywhere before translating.

- [ ] **Step 12: Verify English version renders correctly**

```bash
cd aimation-landing && npm run dev
```

Open http://localhost:3000/en — all text should be in English.
Open http://localhost:3000/ — all text should be in German.

- [ ] **Step 13: Translate pillar page content**

The pillar pages (`ki-beratung-kmu`, `ki-schulungen-mittelstand`, `ki-automatisierung-mittelstand`, `ki-agenten-unternehmen`) were moved to `[locale]/` in Task 4 but their content is still hardcoded German. Add translation keys for each pillar page to `de.json` and `en.json`, then wire `useTranslations()` (or `getTranslations()` for server components) into each pillar page file.

Check if pages are server or client components first:
```bash
grep -l "use client" aimation-landing/app/\[locale\]/ki-*/page.tsx
```

Add a namespace per pillar page (e.g., `"pillarBeratung"`, `"pillarSchulungen"`, etc.) and translate headlines, section titles, and body text.

- [ ] **Step 14: Commit**

```bash
git add aimation-landing/components/ aimation-landing/app/\[locale\]/ki-*/
git commit -m "feat(i18n): wire useTranslations() into all section and pillar page components"
```

---

## Task 9: Add EN blog overview page

**Files:**
- Create: `aimation-landing/app/[locale]/blog/en-overview.tsx` (not needed — handled by locale check in blog/page.tsx)
- Modify: `aimation-landing/app/[locale]/blog/page.tsx`

- [ ] **Step 1: Add locale-aware blog index**

In `app/[locale]/blog/page.tsx`, check the locale and show an EN notice for English visitors. Use `getTranslations` (server-side) to pull from the `enBlogNotice` keys — do NOT hardcode English strings:

```tsx
// This is a server component (no 'use client')
import { getLocale, getTranslations } from 'next-intl/server';

export default async function BlogPage() {
  const locale = await getLocale();

  if (locale === 'en') {
    const t = await getTranslations('enBlogNotice');
    return (
      <main>
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-[#071013] mb-6">{t('headline')}</h1>
          <p className="text-lg text-gray-600 mb-8">{t('notice')}</p>
          <a
            href="/blog"
            className="inline-block bg-gradient-to-r from-[#f90093] to-[#ff4ecd] text-white px-8 py-3 rounded-lg font-semibold"
          >
            {t('cta')}
          </a>
        </div>
        <Footer />
      </main>
    );
  }
  // ... rest of DE blog rendering (unchanged)
}
```

Note: Remove `enBlogNotice` keys from `de.json` — they are only needed in `en.json`. An implementer should keep `de.json` clean of keys that are never consumed on German pages.

- [ ] **Step 2: Verify EN blog page**

Open http://localhost:3000/en/blog — should show English notice with link to German blog.
Open http://localhost:3000/blog — should show normal German blog.

- [ ] **Step 3: Commit**

```bash
git add aimation-landing/app/\[locale\]/blog/page.tsx
git commit -m "feat(i18n): add EN blog overview with notice, redirect individual posts"
```

---

## Task 10: Update metadata and SEO

**Files:**
- Modify: `aimation-landing/app/[locale]/layout.tsx`
- Replace: `aimation-landing/app/sitemap.ts` → `aimation-landing/app/sitemap.xml/route.ts`

- [ ] **Step 1: Make metadata locale-aware in [locale]/layout.tsx**

The metadata export needs to be a `generateMetadata` function that accepts locale params:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isDE = locale === 'de';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isDE
        ? 'KI-Beratung & Automatisierung für KMUs | AI.mation'
        : 'AI Consulting & Automation for SMEs | AI.mation',
      template: '%s | AI.mation',
    },
    description: isDE
      ? 'KI-Beratung, Schulungen & Automatisierung für den Mittelstand. Ehrliche Einschätzung, ob KI hilft. 20 Jahre Engineering-Erfahrung. Kostenloses Erstgespräch.'
      : 'AI consulting, training & automation for mid-sized businesses. Honest assessment of whether AI helps. 20 years engineering experience. Free initial consultation.',
    alternates: {
      canonical: isDE ? '/' : '/en/',
      languages: {
        'de-DE': '/',
        'en': '/en/',
      },
    },
    openGraph: {
      locale: isDE ? 'de_DE' : 'en_US',
      alternateLocale: isDE ? ['en_US'] : ['de_DE'],
      // ... rest of OG config
    },
  };
}
```

- [ ] **Step 2: Create custom XML sitemap**

Delete `app/sitemap.ts` and create `app/sitemap.xml/route.ts`:

```ts
// aimation-landing/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aimation.de';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/ki-beratung-kmu', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-schulungen-mittelstand', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-automatisierung-mittelstand', priority: '0.9', changefreq: 'monthly' },
  { path: '/ki-agenten-unternehmen', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/use-cases', priority: '0.7', changefreq: 'monthly' },
];

const blogSlugs = [
  'ki-projekte-scheitern-fundament',
  'bewertungsmethoden-ki-projekte',
  'ki-projekte-priorisierung-rice',
  'ki-roadmap-illusion-mittelstand',
  'ki-cad-zukunft-jetzt-starten',
  'ki-prompts-die-wirklich-funktionieren',
  'schatten-ki-unternehmen',
  '6-stufen-ki-nutzung',
];

export async function GET() {
  const allPages = [
    ...staticPages,
    ...blogSlugs.map(slug => ({
      path: `/blog/${slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <xhtml:link rel="alternate" hreflang="de" href="${siteUrl}${path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en${path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${path}"/>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
```

- [ ] **Step 3: Delete old sitemap.ts**

```bash
rm aimation-landing/app/sitemap.ts
```

- [ ] **Step 4: Verify sitemap**

Open http://localhost:3000/sitemap.xml — should return valid XML with hreflang alternates.

- [ ] **Step 5: Commit**

```bash
git add aimation-landing/app/
git commit -m "feat(i18n): add locale-aware metadata and custom XML sitemap with hreflang"
```

---

## Task 11: Final testing and verification

- [ ] **Step 1: Build production bundle**

```bash
cd aimation-landing && npm run build 2>&1 | tail -30
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Test all critical paths**

Start prod server: `npm run start`

Test these URLs:
- http://localhost:3000/ → German landing page ✓
- http://localhost:3000/en/ → English landing page ✓
- http://localhost:3000/blog → German blog ✓
- http://localhost:3000/en/blog → English notice page ✓
- http://localhost:3000/en/blog/ki-projekte-scheitern-fundament → 302 redirect to /blog/ki-projekte-scheitern-fundament ✓
- http://localhost:3000/impressum → German Impressum (no locale) ✓
- http://localhost:3000/en/impressum → 301 redirect to /impressum ✓
- http://localhost:3000/ki-beratung-kmu → German pillar page ✓
- http://localhost:3000/en/ki-beratung-kmu → English pillar page ✓
- http://localhost:3000/sitemap.xml → Valid XML with hreflang ✓

- [ ] **Step 3: Check language switcher behavior**

On http://localhost:3000/ — click EN → goes to /en/ ✓
On http://localhost:3000/en/ki-beratung-kmu — click DE → goes to /ki-beratung-kmu ✓
On http://localhost:3000/ — click DE (already DE) → stays on / (no double slash) ✓

- [ ] **Step 4: Check hreflang in page source**

View source of http://localhost:3000/ — should contain:
```html
<link rel="alternate" hreflang="de" href="https://www.aimation.de/" />
<link rel="alternate" hreflang="en" href="https://www.aimation.de/en/" />
```

- [ ] **Step 5: Mobile check**

Open Chrome DevTools → mobile viewport (375px).
Verify Toggle-Pill visible in hamburger menu.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat(i18n): complete English language version with next-intl"
```

---

## Rollback Plan

If the app/ restructuring breaks production unexpectedly:

1. Revert commits back to before Task 3: `git revert HEAD~N`
2. Or: deploy the last working commit on Vercel directly via dashboard
3. The `localePrefix: 'as-needed'` config ensures German URLs never change, so there's no SEO risk from the migration itself.
