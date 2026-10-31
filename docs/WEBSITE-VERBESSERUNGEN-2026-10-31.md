# Besucherführung und Vertrauensbelege, 31. Oktober 2026

## Umgesetzt

- Drei direkte Einstiege im Hero: Wissen sichern, CAD/FEM und Projektsteuerung. Die Links sind sprachabhängig und haben mindestens 44 Pixel hohe Klickflächen. Bestehender deutscher Fallback für die englische Wissensseite bleibt erhalten.
- Das Erstgespräch benennt konkret, was besprochen wird. Freiwillige Firmenangaben und Telefon sind im Formular aufklappbar. Name, E-Mail, Anliegen und Datenschutzzustimmung bleiben direkt sichtbar; Autofill ergänzt.
- Wiederholte Hinweise auf fehlende Kundenergebnisse aus den Use-Case-Karten entfernt. Eigene Entwicklungsarbeit, Prototypstatus und fachliche Prüfschritte bleiben erkennbar.
- Der alte Blogartikel über Prozessdokumentation enthielt eine Kundenprojektbehauptung und eine unbelegte 80-Prozent-Angabe. Nach der ausdrücklichen Auskunft des Inhabers, noch keine Kunden zu haben, ist er als Beispielablauf formuliert. Metadaten, Blogübersicht, FAQ und Diagramm angepasst. Zeitangaben dienen nun ausdrücklich als Planungsbeispiel.
- Doppelte React-Schlüssel für Walkthrough und Werkzeughinweise in der Development Landscape behoben. Beide Elemente behalten ihre getrennte Identität beim Wechsel des Anwendungsfalls.

## Autodesk: konkrete Platzierung vorbereitet, Teilnahmebezeichnung offen

Der Inhaber berichtet die Aufnahme in ein Autodesk-Startup-Programm. Die genaue Programmbezeichnung und der aufgenommene Teilnehmer (AImation oder Holger Peschke) sind angefragt. Bis zur Klärung keine Partnerschaft behaupten und kein Partnerlogo veröffentlichen.

Vorgeschlagene Darstellung nach Klärung: ein kurzer Teilnahmehinweis beim AI2CAD-/AI2CAE-Bereich und ein Eintrag im bestehenden Netzwerkbereich mit Label „Startup-Programm“. Unternehmens- oder Personen-Faktenseite entsprechend ergänzen. Formulierung anhand des tatsächlichen Namens, beispielsweise: „AImation ist Teilnehmer im Programm Autodesk Fusion for startups.“ Das ist ein Formulierungsvorschlag, keine bestätigte Programmzuordnung.

[Autodesk Fusion for startups](https://www.autodesk.com/products/fusion-360/startups) beschreibt ein Bewerbungs- und Softwarezugangsprogramm. [Autodesks Co-Branding-Regeln](https://brand.autodesk.com/co-branding/) unterscheiden ausdrücklich berechtigte Partner und Partnerlogos. Die Teilnahme allein wird deshalb nicht als Zertifizierung, Kundenreferenz oder Empfehlung durch Autodesk dargestellt.

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
