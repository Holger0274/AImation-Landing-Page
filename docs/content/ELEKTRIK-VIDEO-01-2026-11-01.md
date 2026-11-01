# KI × Elektro 01: Schaltplan und Entwicklungsreise

Stand: 1. November 2026.

## Inhalt und Einordnung

Neue Reihe unter `/ki-elektrik`, eigene Wiedergabeseite `/ki-elektrik/schaltplan-motorabgang`, jeweils Deutsch und Englisch. CAD/FEM bleibt auf der Startseite zuerst. Danach folgen die eigenständigen Patent-/CNC-Beispiele und anschließend Elektrik. Keine Fortsetzung derselben Welle oder des Patentbauteils behauptet. Weitere Elektrikfolgen sind ausdrücklich geplant, nicht als verfügbar dargestellt.

Original: `KI-x-Elektro-Teil-1-Schaltplan-v2.mp4`, vom Nutzer bereitgestellt. Die Originaldatei bleibt unverändert. Webfassung: 112 Sekunden, 1920 × 1080, H.264/AAC, Faststart, 8.784.582 Bytes statt 32.017.387 Bytes. Vorschaubild aus Sekunde 78 der Aufnahme.

Sichtprüfung anhand von Videoframes: Motorabgang für eine 4-kW-Pumpe an 400 V, Direktanlauf. Aufgabenstellung, Rechnung, offengelegte Annahmen, Rückmeldung, Leistungs-/Steuerstromkreis, visualisierte Zustände und acht interne Prüfungen. Die Website beschreibt den gezeigten Entwicklungsablauf. Keine Normkonformität oder technische Freigabe behauptet. Fachliche Prüfung durch eine Elektrofachkraft ist Teil der Einordnung.

## Besucherführung

Großer Elektrik-Einstieg unter den CAD-Erweiterungen auf Startseite, Entwicklungswerkstatt und AI2CAD-Übersicht. Zusätzliche Verweise in Produktentwicklung, Use-Case-Übersicht und Faktenseite.

Native Videowiedergabe mit Ton und ohne Autoplay. Fünf anwählbare Momente: 0:21 Aufgabe, 0:28 Rechnung, 0:49 Annahmen, 1:10 Schaltplan, 1:31 Prüfung. Textliche Zusammenfassungen sind serverseitig sichtbar. Zeitlinks funktionieren auch beim direkten Aufruf; die kanonische Adresse bleibt die Wiedergabeseite ohne Zeitparameter.

## Auffindbarkeit

- Eigene indexierbare Wiedergabeseite mit früh sichtbarem nativem Video, stabiler MP4- und Vorschaubild-URL.
- VideoObject mit Titel, Beschreibung, Autor/Organisation, Dauer, Veröffentlichung, Medienadressen und fünf Clip-Einträgen mit funktionierenden Zeitlinks.
- Videoeinträge in der bestehenden Sitemap, Sprachalternativen und eigene Metadaten/Vorschaubilder.
- Ergänzung der Faktenseite und llms.txt. Letztere ist eine ergänzende Orientierung, kein Indexierungs- oder Rankingversprechen.
- Vorhandene Suchcrawler-Freigaben bleiben erhalten. Middleware nimmt das neue Medienverzeichnis von Sprachweiterleitungen aus.

## Validierung

Produktionsbuild erfolgreich. SEO-Prüfung: 82 URLs. 14 bestehende CAD-/CAE-/CAM-Wiedergabeseiten sowie neue elektrische DE-/EN-Seiten geprüft. Discovery-Prüfung: 12 Seiten und 132 Fragmentlinks. Erhaltungsprüfung: 34 vollständige ursprüngliche Inhaltsbereiche unverändert.

Neuer Check `scripts/check-electrical.mjs` prüft Kapitel, VideoObject, kanonische Zeitlinks, Medien/Byte-Range-Abruf, Sitemap, Verlinkung, CAD-vor-Elektrik-Reihenfolge und Antworten auf Suchcrawler-User-Agents. Diese User-Agent-Tests beweisen keinen Abruf aus den tatsächlichen Bot-IP-Netzen und keine Indexierung.

Im Browser bestätigt: Kapitelwahl startet Wiedergabe, direkter Zeitlink lädt pausiert an der gewählten Stelle (49 Sekunden), Dauer 112 Sekunden. Mobile Videoseite ohne horizontalen Überlauf; Video beginnt bei etwa 308 Pixeln. Desktop und mobile Einstiegsgestaltung geprüft.

## Maßgebliche Suchmaschinen-Dokumentation

- Google Video SEO: https://developers.google.com/search/docs/appearance/video
- Google VideoObject / Clip: https://developers.google.com/search/docs/appearance/structured-data/video
- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- OpenAI crawler policy: https://developers.openai.com/api/docs/bots
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

Technische Erreichbarkeit und Markup schaffen Voraussetzungen. Aufnahme, Darstellung und Rangfolge entscheiden die jeweiligen Suchdienste.
