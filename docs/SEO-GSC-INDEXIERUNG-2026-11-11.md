# Search Console: Indexierungsprüfung am 11. November 2026

## Ergebnis

Die Search Console zeigt 70 indexierte und 39 nicht indexierte URLs, verteilt auf sieben Gründe. Die Berichtsübersicht nennt als letzte Aktualisierung den 6. November; einzelne Beispielzeilen enthalten spätere Daten. Die Anzeige „1 bis 7 von 7“ bezeichnet die sieben Kategorien.

Alle sieben Kategorien wurden einschließlich sämtlicher Beispiel-URLs geöffnet. Die Zahl 39 bezeichnet nicht 39 fehlende Inhaltsseiten.

| Grund | Anzahl | Einordnung |
| --- | ---: | --- |
| Weiterleitung | 7 | HTTP-/Host-Normalisierung, abschließender Slash und Sprach-Fallbacks. Beabsichtigte Weiterleitungen. |
| Alternative mit Canonical | 5 | Vier inzwischen umgeleitete, nicht übersetzte englische Seiten. Eine inzwischen übersetzte Schulungsseite trägt heute einen eigenen Canonical; Googles letzter Crawl stammt noch vom 28. Juli. |
| noindex | 2 | Impressum und Datenschutz. Im Code ausdrücklich beabsichtigt. |
| 404 | 1 | `https://www.aimation.de/$`, zuletzt am 19. Juni gecrawlt. Keine reguläre Inhaltsseite. |
| Duplikat ohne gewählten Canonical | 1 | Elektro-Video mit Zeitparameter `?t=96`. Konkrete Verbesserung der Metadaten-Ausgabe umgesetzt, siehe unten. |
| Gecrawlt, nicht indexiert | 14 | Zehn CSS-Dateien, zwei Schriftdateien und zwei Blogartikel. |
| Gefunden, nicht indexiert | 9 | Neun Inhaltsseiten, bisher ohne Crawl im Bericht. |

## Duplikat: genaue Feststellungen

Betroffen: `https://www.aimation.de/ki-elektrik/kurzschluss-wendeschuetz?t=96`.

URL-Prüfung: letzter Googlebot-Smartphone-Crawl am 3. November um 22:15:10. Abruf erfolgreich, Crawling und Indexierung erlaubt. Nutzer-Canonical laut Google: keiner. Google wählte stattdessen dieselbe Seite mit `?t=12`.

Die Hauptadresse ohne Parameter ist laut gesonderter URL-Prüfung bereits indexiert („URL ist auf Google“). Ein gültiges VideoObject und Breadcrumb-Element wurden erkannt. Der Bericht meldet dort trotzdem „Kein Video indexiert“: Videoindexierung und Seitenindexierung sind getrennte Vorgänge.

Der Live-HTTP-Abruf der `?t=96`-Variante lieferte HTTP 200 und einen korrekten Canonical zur parameterlosen Hauptadresse. Dieser stand jedoch im Roh-HTML außerhalb des initialen `head` (Canonical ab Zeichen 29181, Ende des Kopfes bei Zeichen 2383). Ursache dieser Ausgabe ist Next.js-Metadaten-Streaming. Die bisherige Prüfung suchte Canonicals im gesamten HTML und übersah diese Position. Das ist eine plausible Erklärung für die Google-Meldung, kein Nachweis des internen Google-Verarbeitungsablaufs.

Korrektur: `htmlLimitedBots: /.*/` schaltet Metadaten-Streaming ab. Dadurch wird der Canonical schon im initialen Kopf ausgeliefert, für Browser und Crawler gleichermaßen. Zeitmarken und Videobedienung bleiben erhalten. Metadaten stammen aus lokalen Daten; es kommt keine zusätzliche externe Abfrage hinzu. Der mögliche Nachteil ist eine spätere erste HTML-Ausgabe auf dynamischen Routen; Feld-Performance wurde hier nicht neu gemessen.

## Tatsächlich noch zu beobachtende Inhalte

Zwei Blogartikel unter „Gecrawlt“, letzter Crawl jeweils 12. Juni:

- `/blog/bewertungsmethoden-ki-projekte`
- `/blog/ki-projekte-priorisierung-rice`

Neun Seiten unter „Gefunden“:

- `/en/facts/aimation`
- `/en/facts/holger-peschke`
- `/en/use-cases/variantenmanagement`
- `/en/videos/development-landscape`
- `/en/videos/skillmatrix`
- `/en/videos/varianthub`
- `/use-cases/meeting-transkript-analyse`
- `/use-cases/technologie-scouting`
- `/videos/development-landscape`

Zusätzlich `/en/ki-schulungen-mittelstand`: Die historische URL-Prüfung enthält noch den deutschen Canonical vom Juli. Heute ist die Seite englisch, indexierbar, intern verlinkt, in der Sitemap und selbstkanonisch. Eine erneute Verarbeitung durch Google steht aus.

Die weiteren vier alten Alternativeinträge sind `/en/use-cases`, `/en/ki-automatisierung-mittelstand`, `/en/ki-beratung-kmu` und `/en/ki-agenten-unternehmen`. Diese Sprachvarianten haben keine eigene Übersetzung und werden gemäß bestehender Routing-Regeln auf die deutsche Fassung umgeleitet.

## Verifikation vor Veröffentlichung

- Bestehender Live-SEO-Check: 91 URLs bestanden. Das allein belegt keine tatsächliche Indexierung.
- Neuer Regressionstest reproduzierte den Fehler auf der Live-Seite: Canonical fehlte im initialen Kopf der Zeitmarken-URL.
- Produktionsbuild mit Typprüfung erfolgreich: 125 statische Seiten. Der erste Sandbox-Build scheiterte am blockierten Google-Fonts-Abruf; der Build mit Netzwerkzugriff bestand.
- Verschärfter SEO-Check gegen lokalen Produktionsserver: 91 URLs bestanden. Er prüft nun die vollständige Canonical-URL einschließlich Host/Parametern und die Position im initialen Kopf.
- Neuer `check-canonical-variants.mjs`: 18 Abrufe bestanden, sechs Parameter-Varianten mit Browser-, Googlebot- und OAI-SearchBot-User-Agent. Die User-Agent-Prüfung simuliert HTTP-Abrufe; sie belegt keine echten Bot-Besuche.

## GEO und Grenzen

Die öffentlichen Seiten sind für Suchcrawler erreichbar. `robots.txt`, Sitemap, strukturierte Daten, Sprachverweise, sichtbare FAQs und die Faktenseiten sind vorhanden und werden geprüft. Ein allgemeines GEO-Konformitätszertifikat oder eine Garantie auf KI-Zitationen ergibt sich daraus nicht. Für Googles KI-Funktionen gelten laut Google die üblichen SEO-Grundlagen, ohne zusätzliche technische Spezialanforderungen.

Die neue Metadaten-Ausgabe verbessert die Lesbarkeit auch für Crawler, die kein JavaScript ausführen. Nicht indexierte Inhaltsseiten bleiben eine Beobachtungsaufgabe; ihre Indexierung lässt sich nicht durch einen bestandenen technischen Test garantieren.

## Quellen

- [Google: Seitenindexierungsbericht](https://support.google.com/webmasters/answer/7440203?hl=de)
- [Google: Canonical-Verweise setzen](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Next.js: htmlLimitedBots und Abschalten des Metadaten-Streamings](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots)
- [Google: KI-Funktionen und Websites](https://developers.google.com/search/docs/appearance/ai-features)

Veröffentlichungs- und Google-Validierungsergebnis werden nach der Live-Prüfung ergänzt.
