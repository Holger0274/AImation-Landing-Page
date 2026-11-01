# Schriftgrößen und sichtbarer Inhalt, 1. November 2026

Auf Wunsch des Nutzers wurden große Überschriften und ihr Platzbedarf geprüft. Referenz vor der Änderung: decc3ab.

## Anpassungen

Die Schriftgrößen für Startseite, Schulungen, Discovery-Unterseiten, Themenvorlage und Engineering-Blog wurden reduziert. Große Abschnittsüberschriften der Startseite sind ebenfalls zurückgenommen. Der kurze AI2CAD-Schriftzug bleibt als besondere Produktüberschrift größer, skaliert aber jetzt auch mobil statt dort fest 88 px zu verwenden.

Obere Abstände und Breadcrumb-Abstände wurden an den betroffenen Einstiegen gekürzt. Fließtexte und kleine Beschriftungen bleiben erhalten; nur die größere Blogeinleitung wird auf maximal 20 statt 21,6 px begrenzt. Keine Inhalte oder Bilder entfernt, keine Höhenbegrenzung oder Textabschneidung eingeführt. Die bereits passenden Größen von Beratung und Umsetzung bleiben unverändert.

## Messwerte bei 1366 px Breite

| Überschrift | Vorher | Nachher |
|---|---:|---:|
| Startseite | 61,5 px | 51,9 px |
| Schulungen | 65 px | 51,9 px |
| Entwicklungswerkstatt | 68,3 px | 51,9 px |
| Produktentwicklung | 56 px | 47,8 px |
| Engineering-Blog | 56 px | 47,8 px |
| AI2CAD-Schriftzug | 102,5 px | 82 px |

Der lange RAG-Artikeltitel benötigt bei dieser Breite etwa 161 statt 251 px Höhe. Auf der deutschen Startseite bei 390 px Breite beginnt die CAD-Abbildung bei rund 645 statt 723 px. Dies sind konkrete Browsermessungen bei normaler Schrift- und Zoom-Einstellung, keine Garantie für identische Umbrüche auf jedem Gerät.

## Validierung

Produktionsbuild erfolgreich. Inhaltserhaltprüfung: 34 vollständige Abschnittstexte in DE/EN unverändert. `git diff --check` bestanden.

Browserprüfung der sieben Vorlagen Startseite, Schulungen, Produktentwicklung, Werkstatt, Beratung, RAG-Artikel und AI2CAD bei 1366, 1024, 768 und 390 px Breite. Zusätzliche Prüfung bei 375 px für englische Startseite, Umsetzung und Produktentwicklung sowie visuelle Prüfung der Produktentwicklung bei 1920 px. Kein horizontaler Seitenüberlauf in diesen Ansichten. Ausgewählte Screenshots wurden auf die Proportionen zwischen Text, CTA und Bild geprüft.
