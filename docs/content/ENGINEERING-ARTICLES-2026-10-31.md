# Drei neue Fachartikel zur technischen Produktentwicklung

Auftrag: Drei neue Blogartikel mit Visualisierungen. Bestehende Artikel und alle sonstigen Inhalte bleiben erhalten.

| Artikel | Interaktives Beispiel | Fachliche Quelle |
|---|---|---|
| /blog/ki-lastenheft-anforderungen-pruefen | Drei Anforderungssätze; Prüfhinweise und Rückfragen einblenden | NASA, Appendix C: How to Write a Good Requirement |
| /blog/rag-engineering-wissen-versionen-quellen | Passender Dokumentenstand, widersprüchliche Quellen, fehlender Zugriff | Microsoft Learn, RAG und Zugriffskontrolle auf Dokumentebene |
| /blog/ki-aenderungsmanagement-produktentwicklung | Drei Änderungsanträge mit zugeordneten Dokumenten und offenen Prüfaufgaben | NASA, 6.5 Configuration Management |

## Quellenprüfung am 31. Oktober 2026

- https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/ : Eindeutigkeit, Konsistenz, Prüfbarkeit, Rückverfolgbarkeit. Keine Aussage zur Trefferquote eines KI-Modells daraus abgeleitet.
- https://www.nasa.gov/reference/6-5-configuration-management/ : Ausgangsstände, Änderungsbewertung, Genehmigung und Prüfung der Umsetzung. Der Artikel überträgt die Grundlogik redaktionell auf ein fiktives Beispiel.
- https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation : Suche, Ergänzung des Modellkontexts, Antwortentwurf mit Fundstellen.
- https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview : Zugriffskontrolle auf Dokumentebene, u. a. Sicherheitsfilter. Keine pauschale Behauptung, jede Ablage übertrage Berechtigungen automatisch; keine Empfehlung einer Preview-Funktion als Produktionsstandard.

## Redaktionelle Grenzen

Alle Daten, Bauteile, Lastenheft-IDs und Änderungsanträge der interaktiven Beispiele sind fiktiv. Es gibt keine Live-KI, Upload-Funktion oder produktive Systemanbindung in den Visualisierungen. Die Beispiele sind redaktionell hinterlegt. Technische Werte sind keine reale Auslegungsvorgabe. Keine Kundenergebnisse, Einsparversprechen oder erfundenen Erfahrungen ergänzt.

Die vorgeschlagenen 20 bis 30 Anforderungen bzw. 15 Prüffragen sind ausdrücklich redaktionelle Vorschläge für einen Versuch. Keine empirisch belegten Mindestumfänge.

Veröffentlichungsdatum aller drei neuen Artikel ist der tatsächliche gemeinsame Veröffentlichungstag, 31. Oktober 2026. Lesezeit wird aus dem Textumfang berechnet. Eigene PNG-Vorschaubilder werden aus dem Artikelthema gerendert.

Der bestehende Blog ist deutschsprachig. Die drei neuen Beiträge folgen diesem Verhalten: deutsche Canonicals, keine behauptete englische Übersetzung, Weiterleitung der /en/blog/-Adressen auf die deutschen Artikel.

Der aktuelle Nutzerauftrag erlaubt das Verfassen der neuen Artikel ausdrücklich und geht der älteren Einschränkung in Spec 06, Abschnitt 4, vor.

## Prüfung vor Veröffentlichung

- Produktionsbuild erfolgreich; bestehende Inhaltsprüfung bestanden.
- SEO-Prüfung aller 74 URLs bestanden. Eigene Artikelprüfung bestätigt drei neue und neun unverändert erreichbare bisherige Blogartikel, Metadaten, Quellenlinks, FAQ-HTML und Schema, Canonicals, Sitemap, llms.txt, deutsche Sprachweiterleitung und PNG-Vorschaubilder.
- Browserprüfung bei 1280 und 390 Pixeln: Anforderungsprüfung aufgeklappt, Quellenwiderspruch und fehlender Zugriff gewechselt, unvollständigen Änderungsantrag geprüft. Kein horizontaler Seitenüberlauf auf den drei mobilen Artikeln.
- Tastaturbedienung einer Szenarioauswahl geprüft. Kontaktformular geöffnet und ohne Versand mit Escape geschlossen.
- Individuelles Vorschaubild visuell geprüft. Technische Prüfungen sind keine Aussage über erzielte Rankings oder Anfragen.

## Grafische Überarbeitung am 31. Oktober 2026

Auf ausdrücklichen Wunsch ergänzt: eigene technische Vektormotive hinter den Einstiegen mit dunklen transparenten Verläufen; Zeichnung mit markierter Anforderungs-ID, Dokumentennetz mit Versionskontext und überlagerte Bauteilstände. Die drei Motive werden in den interaktiven Beispielen passend zur Auswahl gewechselt und für die Social-Vorschaubilder wiederverwendet.

Die Illustrationen sind schematisch und enthalten keine realen CAD-Auslegungsdaten. Die zugehörige Bedeutung steht als lesbare Bildunterschrift im HTML. Dekorative Grafiken sind für Screenreader ausgeblendet. Es gibt keine externe Bildquelle oder neue Abhängigkeit. Kurze Übergänge respektieren `prefers-reduced-motion`. Bestehende Artikeltexte, Quellen, URLs und Veröffentlichungsdaten bleiben erhalten.

Validierung der Überarbeitung: Produktionsbuild und Artikelprüfung bestanden; SEO-Prüfung aller 74 URLs bestanden. Desktop mit 1440 Pixeln und Smartphone mit 390 Pixeln geprüft, einschließlich Tastaturwechsel und Rückfragen-Aufklappen. Die Vektorgrafiken laden ohne externe Abrufe. Den vollflächigen Hintergrund gegen die globale Breitenbegrenzung korrigiert; kein horizontaler Seitenüberlauf in den geprüften Ansichten. Neues PNG-Vorschaubild visuell geprüft.
