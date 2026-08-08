---
type: progress-tracker
campaign: aimation-website-relaunch
updated: 2026-08-08
---

# Fortschritt: aimation.de Relaunch

Dieses Dokument ist der Übergabe-Stand für eine neue Claude Code Session. Ziel: alle Specs in `aimation-website-specs/` nacheinander umsetzen (siehe `2026-07-18_00-master-brief.md` Abschnitt 6 für die empfohlene Reihenfolge).

## Erledigt (in dieser Reihenfolge umgesetzt)

- [x] **CLAUDE.md** an den Master-Brief angepasst (neuer Verweis-Block oben in der Datei, markiert wo die alten Inhalte überholt sind).
- [x] **Spec 01** (Technik-Fixes): `/use-cases` Übersichtsseite gebaut, AI.mation → AImation sitewide (außer `/facts/*`-Varianten-Doku und Logo-Alt-Text), Tool-Wand auf 8 Einträge, Homepage-Meta-Description, globaler `LeadFormProvider` behebt kaputte `#kontakt`-CTAs auf Unterseiten (Middleware-Matcher-Fix nötig gewesen).
- [x] **Spec 09** (KI-Sichtbarkeit): `app/llms.txt/route.ts` und `app/robots.txt/route.ts` neu (ersetzen alte, durch Middleware blockierte statische Dateien in `public/`), BlogPosting-Schema für alle 8 Blog-Artikel, Meta-Descriptions sitewide auf 120-160 Zeichen geprüft.
- [x] **Spec 02** (Angebots-Architektur): `lib/data/pricing.ts` als zentrale Preisquelle angelegt (inkl. `UMSETZUNG_LEVELS`, `ROI_PACKAGES`), sitewide Umbenennung "AI Readiness Check" etc. → "KI-Landkarte", Prozess-Sektion und neue `KiLandkarte.tsx`-Sektion auf der Startseite, ROI-Rechner-Pakete harmonisiert.
- [x] **Spec 03** (Startseite): Neue Hero-H1/Subline/CTAs, Wissensverlust-Karte hervorgehoben, Vorher-Nachher-Showcase auf Wissenssicherung umgebaut (QKT erklärt), Use-Case-Grid auf 6 Karten reduziert, About + WhyAImation zusammengelegt (WhyAImation.tsx bleibt als Datei liegen, ist aber nicht mehr in `page.tsx` eingebunden), neue `EuAiActNotice.tsx`-Sektion, Doppel-Links in der Drei-Säulen-Sektion bereinigt.
- [x] **Spec 05** (Formulare + ROI-Rechner): Erstgespräch-Modal auf 3 Pflichtfelder reduziert (Name/E-Mail/Datenschutz), Backend `/api/lead` entsprechend angepasst, Stockfoto entfernt, ROI-Rechner-Branchenliste und Use-Case-Presets auf die neuen ICP-Werte umgestellt. **Bekannte Lücke:** Punkt 3 (Sofort-Anzeige des Rechnerergebnisses ohne E-Mail-Gate) wurde NICHT umgesetzt, nur die von der Spec erlaubte Minimalvariante (Wording-Konsistenz "Fast geschafft..." / "Ergebnis per E-Mail erhalten"). Die architektonische Umstellung auf Sofort-Anzeige steht noch aus, falls gewünscht.
- [x] **Spec 07** (Schulung/FAQ/Facts): Schulungsseite bekam Preisblock, Rollen-Matrix, EU-AI-Act-Block (wiederverwendete Komponente), Landkarten-Brücke. Alle 7 Startseiten-FAQs überarbeitet (AV-Vertrag, Human-in-the-Loop, Betriebsrat wörtlich enthalten). `/facts/aimation` mit neuer Preistreppe aktualisiert. **Bekannte Lücken:** `/facts/holger-peschke` nicht angefasst; FAQ-Verweis auf KI-Agenten-Seite ist nur Text, kein Link; kein Tracking eingebaut (kein bestehendes Analytics-Setup gefunden trotz Erwähnung in der Datenschutzerklärung — das ist ein bestehender Widerspruch, den jemand mit Entscheidungsbefugnis klären sollte).

## Noch offen

- [ ] **Spec 04** (Proof): Build-in-Public-Sektion, Use-Case-Detailseiten, Demo-Platzhalter. Noch nicht begonnen.
- [ ] **Spec 08** (Visualisierung): Diagramm-System, Magenta-Audit, OG-Images, Bild-Hygiene. Noch nicht begonnen.
- [ ] **Spec 06** (Blog): Quellen, CTA-Vereinheitlichung, FAQ-Rendering. Noch nicht begonnen. Hinweis: beim Auditieren der Blog-Artikel sind mehrfach Em-Dashes (`–`) und mindestens ein "Nicht X, sondern Y"-Muster in Titeln aufgefallen (Anti-KI-Text-Spec-Verstoß), die bisher nicht bereinigt wurden, weil außerhalb des expliziten Scopes von Spec 01/09. Sollte im Rahmen von Spec 06 mit erledigt werden.
- [ ] Sofort-Anzeige-Umbau des ROI-Rechners (siehe Spec 05 oben, optionale Nacharbeit).
- [ ] `/facts/holger-peschke` Preistreppen-Update analog zu `/facts/aimation` (siehe Spec 07 oben, optionale Nacharbeit).

## Wichtiger Kontext für die nächste Session

- **Zentrale Preisquelle**: `aimation-landing/lib/data/pricing.ts` — jede neue Preis-Nennung sollte von dort importieren oder zumindest mit den dortigen Werten übereinstimmen.
- **Lead-Formular öffnen**: `useLeadForm()` Hook aus `components/LeadFormProvider.tsx` verwenden (`const { openLeadForm } = useLeadForm()`), nicht mehr `href="#kontakt"` neu einführen (funktioniert zwar noch global via Klick-Interception, aber der Hook ist die sauberere Variante für neuen Code).
- **Alle bisherigen Änderungen sind uncommitted im Arbeitsverzeichnis**, bis auf das, was diese Session ggf. noch committet. Mit `git log` und `git diff` prüfen, was tatsächlich schon im Repo-Verlauf steckt.
- **Build-Check**: `cd aimation-landing && npm run build` sollte nach jeder Spec grün sein. Für manuelle Checks: `npm run start -- -p <port>` und mit `curl`/Python-Skripten prüfen (Playwright-Browser-Download ist in dieser Sandbox blockiert, funktioniert aber ggf. in anderen Umgebungen).
- **Reihenfolge weiter wie im Master-Brief**: 04, dann 08, dann 06 (Sitemap-Aktualisierung/BlogPosting-Schema-Arbeit aus Spec 09 überschneidet sich mit Spec 06, ist aber schon erledigt).
- Der Nutzer arbeitet im Modus "Spec für Spec, mit Checkpoint": nach jeder Spec kurz Status geben und auf Bestätigung warten, bevor die nächste Spec startet.
