# AI2CAD: Umsetzung und Mediennachweis

Stand: 8. Oktober 2026. Lokale Umsetzung, noch keine Veröffentlichung.

## Einstieg und Inhalt

Die Startseite zeigt nach der persönlichen Vorstellung einen vollständig verlinkten Teaser: „Ein CAD-Modell. Null Mausklicks.“ Die Unterseite `/ai2cad` enthält vier Kapitel, sechs Fragen und Antworten sowie den Hinweis auf die fachliche Prüfung. Die Aussage zur Bedienung ohne manuellen Mausklick im CAD stammt ausdrücklich vom Auftraggeber. Vorgaben, Rückfragen und Freigaben im Dialog bleiben im Text sichtbar.

Das bestehende dunkle Engineering-Design wurde übernommen. Das tatsächliche Zeichnungsblatt bleibt hell. Die neuen öffentlichen Texte nennen generisch ein CAD-System und ein Large Language Model. Bestehende Artikel und die allgemeine Werkzeugliste der Website wurden nicht umgeschrieben.

## Medien

Es wurden ausschließlich die vier neuen `KI-x-CAD-Teil-*.mp4` aus dem bereitgestellten CAD_AI-Ordner verwendet. Die beiden alten Videos wurden nicht eingebunden. Originaldateien blieben unverändert.

| Quelle | Website-Fassung | Dauer |
| --- | --- | --- |
| KI-x-CAD-Teil-1-Prompt-zum-Bauteil.mp4 | /videos/ai2cad/prompt.mp4 | 90 s |
| KI-x-CAD-Teil-2-Skizze-zum-Bauteil.mp4 | /videos/ai2cad/skizze.mp4 | 90 s |
| KI-x-CAD-Teil-3-Entwurf-zum-Drehteil.mp4 | /videos/ai2cad/drehteil.mp4 | 122 s |
| KI-x-CAD-Teil-4-Bauteil-zur-Zeichnung.mp4 | /videos/ai2cad/zeichnung.mp4 | 140 s |

Produktnamen in den Bildern wurden anhand lokaler Apple-Vision-Texterkennung mit zeitlich begrenzten Flächen verdeckt. Die Website-Fassungen enthalten keinen Ton; diese Entscheidung vermeidet ungeprüfte gesprochene Produktnamen und ist direkt am Player gekennzeichnet. Es fand keine Audiotranskription statt. Die Medien wurden lokal verarbeitet, ohne Upload an einen externen Dienst.

`ai2cad-media-manifest.json` dokumentiert SHA-256-Prüfsummen der Originale und Ausgaben sowie die Masken der Teile 1 bis 3. Teil 4 verwendet die bildgenauen Ersetzungen aus `ai2cad-part4-replacements.json`. Ausgabe: H.264, CRF 22, yuv420p, faststart, ohne Audio und übernommene Metadaten. Poster stammen aus diesen Fassungen. Das Zeichnungsbild wurde aus der gelieferten Vorschau erstellt.

### Korrektur von Teil 4 am 9. Oktober 2026

Die erste Website-Fassung enthielt störende, zeitlich zu weit ausgedehnte Abdeckungen. Besonders bei Scrollbewegungen verdeckten diese auch benachbarten Inhalt. Diese Fassung wurde ersetzt. Die Sequenzen 8 bis 31, 54 bis 60 und 123 bis 130 Sekunden wurden mit 30 Bildern pro Sekunde untersucht (1.080 Bilder). Erkannte Namen erhalten nun neutrale Ersatztexte direkt im jeweiligen Bild. Der Hintergrund stammt aus benachbarten Bildbereichen desselben Frames. Zusammengesetzte Begriffe wie CAD-Bemaßungen behalten ihren fachlichen Inhalt. Es gibt in Teil 4 keine statischen, über mehrere Frames weiterlaufenden schwarzen Rechtecke mehr. Dauer und Auflösung bleiben 140 Sekunden und 1920 × 1080 Pixel; das Original ist unverändert.

Die Sichtprüfung verwendet Kontaktbögen und Originalbilder. Die ergänzende OCR-Prüfung untersucht zwei Bilder pro Sekunde auf die zu verdeckenden Produktnamen. Ergebnis: keine Treffer in 884 geprüften Bildern der abschließenden Fassungen (180, 180, 244 und 280 Bilder). Das ist eine Stichprobenprüfung, kein Nachweis für jedes einzelne Videobild.

## Suchmaschinen und Auffindbarkeit

Jedes Kapitel besitzt eine eigene Videoseite mit sichtbarem nativen Video, Beschreibung und `VideoObject`. Die Hauptseite enthält crawlbare Kapitelbeschreibungen, Antworten, Autorenzuordnung und interne Links. Hinzu kommen Canonicals, DE/EN-Verweise, Social-Media-Metadaten, Video-Sitemap und Einträge in `llms.txt`.

Grundlage: [Google zu Video-SEO](https://developers.google.com/search/docs/appearance/video), [VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video), [Google zu KI-Suchfunktionen](https://developers.google.com/search/docs/appearance/ai-features). `llms.txt` ist eine ergänzende Orientierung, keine Garantie auf Aufnahme in Such- oder KI-Antworten. Ranking und Indexierung lassen sich lokal nicht belegen.

Nach Veröffentlichung: Sitemap in der bestehenden Search Console prüfen, Indexierung der Hauptseite und Videoseiten kontrollieren sowie Video-Indexierungsbericht beobachten. Kein externer Account wurde in dieser Umsetzung verändert.

## Prüfung

Im Verzeichnis `aimation-landing`:

```sh
npm run build
npm run check:seo -- http://localhost:3010
node scripts/check-ai2cad.mjs http://localhost:3010
```

Build erfolgreich. Der allgemeine SEO-Test prüft 51 URLs. Der AI2CAD-Test prüft acht lokalisierte Videoseiten, Videoquellen ohne JavaScript, strukturierte Daten, Sprachverweise, FAQ-Inhalte, Medien und Sitemap. Browserprüfung: dunkler Auftritt, Startseiten-Teaser auf Mobilgerät und Desktop, Navigation zur Unterseite, Kapitelwahl und Videowiedergabe.
