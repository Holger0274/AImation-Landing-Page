# SEO/GEO-Prüfung am 2. November 2026

## Ergebnis und Grenzen

Die technische Prüfung der veröffentlichten Website besteht. Das ist kein Nachweis, dass alle URLs bereits indexiert sind oder in KI-Antworten erscheinen. Insbesondere meldet die Google Search Console für `/ki-elektrik/kurzschluss-wendeschuetz` noch „URL ist nicht auf Google“. Ein Indexierungsantrag wurde bereits am 1. November gestellt.

Der Google-Live-Test am 2. November um 18:47 bestätigt erfolgreichen Abruf, „Seite kann indexiert werden“, „Video erkannt“ und einen gültigen VideoObject-Eintrag. Zwei nicht kritische Hinweise betreffen das Datumsformat und die fehlende Zeitzone von uploadDate.

## Durchgeführte Prüfungen

- `check-seo.mjs https://www.aimation.de`: 87 URLs, HTTP-Status, Canonical, Sprache, Metadaten, Indexierungsfreigaben, strukturierte Daten, sichtbare FAQs, Sitemap, Sprachverweise und Weiterleitungen bestanden.
- `check-development-article.mjs`: neuer Produktentwicklungsartikel, fünf Stationen, zwölf interne Ziele, Quellen, FAQ, Vorschaubild und eingehende Verlinkung bestanden.
- `check-video-articles.mjs`: CNC- und Elektroartikel einschließlich Vorschaubildern, FAQs und Videoverweisen bestanden.
- `check-ai2cad.mjs`: 14 Video-Seiten (DE/EN), native Medienquellen, Schema, Sitemap, Verknüpfungen und Medien bestanden.
- `check-demo-videos.mjs`: acht Video-Seiten (DE/EN), Wiedergabequellen, Schema, Sitemap, Verknüpfungen und Medien bestanden.
- `check-electrical.mjs`: vier Video-Seiten (DE/EN), zwölf Kapitelverweise, Canonical, Schema, Sitemap, HTTP-Range und Auffindbarkeit bestanden.
- Live-robots.txt erlaubt die geprüften öffentlichen Artikel- und Medienpfade für Googlebot, Googlebot-Video, bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot und Perplexity-User. llms.txt ist mit HTTP 200 erreichbar. Die robots-Prüfung belegt keine tatsächlichen Bot-Besuche oder Zitationen.

Die 26 Video-Seiten entsprechen 13 Videos in zwei Sprachfassungen. Im Blog sind 15 Artikel vorhanden. HTTP-Prüfungen führen das Umami-JavaScript nicht aus.

## Korrektur

Alle vier VideoObject-Erzeuger verwenden nun `lib/seo/video-date.ts`. Bestehende Datumseinträge werden als Tagesbeginn in Europe/Berlin mit korrektem Sommer-/Winterzeit-Offset ausgegeben. Die Quelle enthält nur den Veröffentlichungstag; Mitternacht ist eine Formatierungskonvention und keine behauptete gemessene Upload-Uhrzeit. Explizite Zeitstempel bleiben unverändert. Sichtbare Daten und Inhalte wurden nicht geändert.

Produktionsbuild inklusive Typprüfung und die drei Video-Prüfskripte gegen den lokalen Produktionsserver bestanden. Zusätzlich wurden Sommerzeit, Winterzeit, Zeitumstellungstage und unveränderte Übernahme genauer Zeitstempel geprüft.

## Nach Veröffentlichung bestätigt

Commit `2bd9cec` wurde erfolgreich über Vercel veröffentlicht. Alle drei Video-Prüfskripte bestehen anschließend auch gegen `https://www.aimation.de` (26 Video-Seiten).

Der erneute Google-Live-Test um 18:55 bestätigt erfolgreichen Crawl um 18:55:35, Indexierbarkeit, erkanntes Video und einen gültigen VideoObject-Eintrag ohne die beiden bisherigen Warnungen.

Der neue Artikel `/blog/ki-produktentwicklung-lastenheft-cad-fertigung` ist bei der URL-Prüfung ebenfalls noch nicht indexiert. Google hat den heute gestellten Indexierungsantrag bestätigt und die URL der bevorzugten Crawling-Warteschlange hinzugefügt. Dies ist keine Bestätigung einer bereits erfolgten Indexierung.

## Nicht durch diese Prüfung belegt

- Vollständige Google-/Bing-Indexierung, Suchpositionen oder Erwähnungen durch KI-Suchdienste.
- Neue Besucher als kausale Folge einer einzelnen SEO-Änderung.
- Aktuelle Lighthouse-Werte oder Core Web Vitals.

## Offizielle Referenzen

- [Google: KI-Funktionen und Ihre Website](https://developers.google.com/search/docs/appearance/ai-features): bestehende SEO-Grundlagen gelten, keine gesonderten technischen GEO-Anforderungen und keine Indexierungsgarantie.
- [Google: Video-SEO](https://developers.google.com/search/docs/appearance/video): Seitenerfassung und Videoindexierung sind getrennte Vorgänge.
- [Google: VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video): uploadDate als ISO-8601-Datum/Uhrzeit, Zeitzonenangabe empfohlen.
