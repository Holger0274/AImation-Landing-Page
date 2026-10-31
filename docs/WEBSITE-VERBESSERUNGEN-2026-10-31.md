# Besucherführung und Vertrauensbelege, 31. Oktober 2026

## Umgesetzt

- Drei direkte Einstiege im Hero: Wissen sichern, CAD/FEM und Projektsteuerung. Die Links sind sprachabhängig und haben mindestens 44 Pixel hohe Klickflächen. Bestehender deutscher Fallback für die englische Wissensseite bleibt erhalten.
- Das Erstgespräch benennt konkret, was besprochen wird. Freiwillige Firmenangaben und Telefon sind im Formular aufklappbar. Name, E-Mail, Anliegen und Datenschutzzustimmung bleiben direkt sichtbar; Autofill ergänzt.
- Wiederholte Hinweise auf fehlende Kundenergebnisse aus den Use-Case-Karten entfernt. Eigene Entwicklungsarbeit, Prototypstatus und fachliche Prüfschritte bleiben erkennbar.
- Der alte Blogartikel über Prozessdokumentation enthielt eine Kundenprojektbehauptung und eine unbelegte 80-Prozent-Angabe. Nach der ausdrücklichen Auskunft des Inhabers, noch keine Kunden zu haben, ist er als Beispielablauf formuliert. Metadaten, Blogübersicht, FAQ und Diagramm angepasst. Zeitangaben dienen nun ausdrücklich als Planungsbeispiel.
- Doppelte React-Schlüssel für Walkthrough und Werkzeughinweise in der Development Landscape behoben. Beide Elemente behalten ihre getrennte Identität beim Wechsel des Anwendungsfalls.

## Autodesk Developer Network

Holger Peschke hat am 31.10.2026 die Bezeichnung „Autodesk Developer Network (ADN)“, Kategorie „Startup“, Mitglied seit 23.10.2026 angegeben. Die vorherige Vermutung „Fusion for startups“ ist damit ersetzt. Die Mitgliedschaft wird entsprechend seiner persönlichen Angabe Holger Peschke zugeordnet; keine separate Unternehmensmitgliedschaft wird behauptet.

Texthinweis auf der Startseite bei CAD/FEM und im Netzwerkbereich, zusätzlich auf der CAD-Übersichtsseite und der Personen-Faktenseite, jeweils DE/EN. Wortlaut: „Mitglied im Autodesk Developer Network“. Kategorie und Datum kommen aus einer gemeinsamen Konstante. Die ursprüngliche Stammdaten-Verifikation vom Juni wird nicht auf ein neues Datum gesetzt.

Kein Autodesk-Logo, Partner-Badge, Zertifizierungs- oder Empfehlungsclaim. Die Logo-Anfrage ist laut Inhaber noch als E-Mail-Entwurf vorhanden; diese Änderung liest, bearbeitet oder versendet keine E-Mail.

Die [offizielle ADN-Seite](https://aps.autodesk.com/adn) dient als Link zum Programm, nicht als unabhängiger Beleg für die einzelne Mitgliedschaft. [Autodesks Mitgliedschaftsübersicht](https://aps.autodesk.com/developer/overview/autodesk-developer-network-membership) beschreibt auch die Kategorie für Startup-Entwickler. Die konkrete Mitgliedschaft und das Eintrittsdatum beruhen auf der Auskunft des Inhabers.

## Prüfung

- Mobile Vorschau 390 × 844: Startseite DE/EN, Use-Case-Übersicht, Faktenseite DE/EN, Blogübersicht und korrigierter Blogartikel ohne horizontalen Seitenüberlauf. Das breite Prozessdiagramm bleibt innerhalb seines eigenen horizontal scrollbaren Containers.
- Startseite zusätzlich bei 1440 × 1000 visuell geprüft.
- Kontaktformular DE/EN: optionale Angaben zunächst geschlossen, aufklappbar, eingegebener Firmenname bleibt nach erneutem Einklappen erhalten. Leere Pflichtfelder blockieren den Versand. Schließen gibt den Fokus an den auslösenden Button zurück. Keine Testanfrage an den produktiven Versand gesendet.
- Produktionsbuild einschließlich TypeScript, Inhaltsprüfung und SEO-Check gegen die lokale Produktionsvorschau erfolgreich: 61 URLs. Lint wird durch die bestehende Build-Konfiguration übersprungen. `git diff --check` erfolgreich.

## Nächste messbare Verbesserungen

1. Mobile Ladezeit und Barrierefreiheit auf Startseite, CAD-Seite und Kontaktweg in einem eigenen reproduzierbaren Audit messen. Noch kein Lighthouse-Score für diese Änderung erhoben.
2. Die Startseite enthält derzeit 17 Inhaltskomponenten. Mit fünf passenden Testpersonen prüfen, ob sie in 30 Sekunden Angebot, relevantes Beispiel und nächsten Schritt finden. Danach wiederholte Inhalte gezielt zusammenführen, vorhandene Detailinformationen auf den Fachseiten erhalten.
3. Einen datensparsamen Messplan für Demo-Aufruf, Kontaktformular-Öffnung, erfolgreichen Formularversand und tatsächlich gebuchten Termin aufstellen. Versand und Buchung getrennt zählen; derzeit keine neue Tracking-Software eingerichtet. Zusätzlich Anfragen nach bekannter Herkunft Google, LinkedIn oder Empfehlung zuordnen.
4. Eigene Entwicklungsbelege weiter ausbauen: pro Video eine konkrete Ausgangsaufgabe, sichtbares Ergebnis und fachliche Prüfschritte. Das funktioniert bereits vor dem ersten Kundenprojekt.

## Veröffentlichung

Commit `0fa020f` auf `main` veröffentlicht. Beide Vercel-Deployments erfolgreich. Der SEO-Check auf `https://www.aimation.de` besteht mit 61 URLs. Neue Einstiege und verkürztes Kontaktformular auch live im Browser bestätigt. Dieser Abschlussstatus wurde nach dem Deployment lokal ergänzt. Der ADN-Hinweis wurde anschließend anhand der nachgereichten Angaben ergänzt; dessen Veröffentlichung wird separat geprüft.

ADN-Prüfung: Startseite, CAD-Übersichtsseite und Personen-Faktenseite jeweils DE/EN bei 390 × 844 geprüft. Alle sechs Seiten ohne horizontalen Überlauf; Datum `2026-10-23`, Kategorie Startup, offizieller Programm-Link und Verzicht auf Logo kontrolliert. Produktionsbuild, Inhaltsprüfung und lokaler SEO-Check mit 61 URLs erfolgreich.
