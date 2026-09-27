# SEO- und KI-Suche: Übergabe

Stand: 27. September 2026. Lokale Änderungen, noch kein Deployment.

## Umgesetzt

- Startseiten-Metadaten für Produktentwicklung neu ausgerichtet; veraltete 40-Prozent-Botschaft aus den globalen Vorschautexten und dem Website-Schema entfernt.
- Gründungsdatum im globalen Schema an die vorhandene Faktenseite angeglichen (Februar 2026). Keine neue registerrechtliche Verifikation behauptet. LinkedIn-Reichweite nicht mehr als Auszeichnung ausgezeichnet.
- Zielgruppengröße der Unternehmens-Faktenseite an den Master-Brief angeglichen: 10 bis 1.000 Mitarbeiter.
- Sitemap wird beim Build aus den statischen öffentlichen Seiten unter `app/[locale]` erzeugt. Enthält auch den zuvor fehlenden Artikel über Prozessdokumentation. Dynamische Routen müssen bei einer späteren Einführung separat aus ihrer Datenquelle ergänzt werden.
- Echte englische Versionen werden in `lib/seo/locales.ts` geführt. Nur diese werden mit eigenen Sitemap-Einträgen und Sprachverweisen beworben. Nicht übersetzte englische Service-, Blog- und Use-Case-Adressen werden vorläufig mit HTTP 307 auf die deutsche Fassung umgeleitet. Nach einer vollständigen Übersetzung die Freigabeliste erweitern und bestehende Blog-Redirects in `next.config.js` anpassen.
- Globale falsche Homepage-Canonicals/Sprachverweise auf Unterseiten entfernt. Die Schulungsseite darf nicht `force-static` setzen, weil dies den Locale-Header des Root-Layouts entfernt; statische Varianten entstehen über `generateStaticParams` im Elternlayout.
- OAI-SearchBot explizit zugelassen, bestehende Regeln für Trainings-Crawler beibehalten. API-Ausschluss in allen spezifischen Crawler-Gruppen ergänzt. Robots-Regeln sind keine Zugriffskontrolle.
- Neuer deutsch-englischer Praxisleitfaden: `/use-cases/excel-powerpoint-berichte`. Ablauf, Meeting-Nacharbeit, Voraussetzungen, menschliche Freigabe und Messkriterien. Bewusst als Beispiel gekennzeichnet, keine erfundenen Kundenergebnisse.
- Interne Links von Startseite, Beratungsseite und Use-Case-Übersicht; Verbindungen zu Schulung/Lernprobe und vorhandenen Praxisfällen. Ergänzung der bestehenden `llms.txt` ohne Ranking-Versprechen.
- Bestehende Hero-Zeichnung und Gestaltung erhalten. Neue Inhalte verwenden die vorhandenen Komponenten und Designvariablen.

## Wiederholbare Prüfungen

Im Verzeichnis `aimation-landing`:

```sh
npm run build
npm run start -- --hostname localhost --port 3011
```

In einem zweiten Terminal:

```sh
npm run check:seo
npm run check:content
node --test scripts/lead-route.test.cjs
```

Der SEO-Check liest nur per HTTP. Er prüft Sitemap-Vollständigkeit, Statuscodes, Canonicals, Sprachverweise, HTML-Sprache, Beschreibungen, Indexierbarkeitssignale, strukturierte Daten, sichtbare FAQ-Texte und Sprach-Redirects. Er misst keine Rankings, keine tatsächliche Google-Indexierung und keine Core Web Vitals. Der Inhaltscheck deckt die Quell-IDs und Katalogstruktur ab, nicht sämtliche redaktionellen Aussagen.

Bei der Umsetzung bestanden: Produktions-Build mit Typprüfung, SEO-Check für 27 URLs, Inhaltsabgleich und 11 isolierte Formular-Tests. Desktop- und mobile Darstellung des neuen Leitfadens im Browser geprüft. Keine echte Kontaktanfrage verschickt. Der Build überspringt laut bestehender Konfiguration Linting; ein vollständiger Lint-Lauf ist damit nicht nachgewiesen.

## Nach Freigabe und Veröffentlichung

1. Änderungen im richtigen Repository prüfen und zusammenhängend committen. Das ungetrackte Verzeichnis `Logo Partnerschaft/` gehört nicht zu diesen SEO-Änderungen und nicht ungeprüft in den Commit übernehmen.
2. Deployment auslösen bzw. vorhandenen Deployment-Prozess verwenden. Ein lokaler Build oder Git-Commit veröffentlicht allein noch nichts.
3. Nach dem Deployment: `npm run check:seo -- https://www.aimation.de`. Die lokale Sitemap muss zur veröffentlichten Version passen.
4. In Google Search Console und Bing Webmaster Tools die Domain bestätigen, Sitemap einreichen und die wichtigsten Seiten per URL-Prüfung kontrollieren. Dafür sind Kontozugang und gegebenenfalls DNS-Berechtigung nötig; hier nicht eingerichtet.
5. Eine Ausgangsmessung für Suchanfragen, Impressionen, Klicks und Anfragen dokumentieren. Zusätzlich Bing-KI-Zitationen und vorhandene KI-Referral-Daten betrachten. Keine automatische Aussage über alle Sprachmodelle möglich.
6. Reale Fallstudien nach Kundenfreigabe ergänzen: Ausgangslage, Datenbasis, gemessener Zeitaufwand einschließlich Prüfung, Grenzen. Keine Beispielzahlen als Referenz veröffentlichen.
7. Mobile Core Web Vitals nach Veröffentlichung mit realen Felddaten bzw. PageSpeed prüfen. Animationen und Bildgrößen bei Bedarf anhand der Messung priorisieren.

## Fachliche Referenzen

- Google: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- OpenAI-Crawler: https://developers.openai.com/api/docs/bots
- Bing AI Performance: https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c

Suchmaschinen bestimmen Indexierung, Darstellung und Rangfolge selbst. Technische Korrektheit und hilfreiche Inhalte verbessern die Voraussetzungen, garantieren aber keine Platzierung oder Erwähnung in KI-Antworten. `llms.txt` ersetzt weder crawlbare Inhalte noch Suchmaschinenmessung.
