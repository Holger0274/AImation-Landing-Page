# Wenn RICE nicht reicht: Vier Methoden zur Bewertung von KI-Projekten

*Die RICE-Formel ist ein guter Filter, aber sie hat blinde Flecken. Vier ergänzende Ansätze und wann welcher passt, erklärt an denselben Beispielen aus dem Engineering.*

---

Im ersten Teil dieser Serie haben wir fünf KI-Projektvorschläge mit der RICE-Formel durchgerechnet: Patent-Intelligence für Konstrukteure, ein digitales Zeichnungs-Archiv, ein Multi-Agent Innovation-Scout, ein Norm-Checker und ein Datenblatt-Extractor. RICE hat klar entschieden, aber auch Grenzen gezeigt. Das Multi-Agent-System als strategisch wichtigstes Projekt landete auf dem letzten Platz. Der Norm-Checker wurde trotz Compliance-Relevanz niedrig bewertet. Die Formel sieht nur operative Durchschlagkraft pro investiertem Aufwand.

Wenn man dieselben fünf Projekte mit anderen Methoden bewertet, verschiebt sich das Bild. Das ist kein Widerspruch, sondern ein Hinweis: Jede Methode beantwortet eine andere Frage. Hier sind vier, die RICE sinnvoll ergänzen.

## Methode 1: Impact-Effort-Matrix

Die einfachste aller Methoden und oft der beste Workshop-Einstieg. Zwei Achsen, vier Quadranten. Auf der X-Achse der Aufwand, auf der Y-Achse der geschäftliche Nutzen. Jedes Projekt wird als Punkt eingetragen.

Quick Wins sitzen oben links (hoher Nutzen, geringer Aufwand). Big Bets oben rechts (hoher Nutzen, hoher Aufwand). Fill-Ins unten links (geringer Nutzen, geringer Aufwand). Der Quadrant unten rechts heißt je nach Autor "Money Pit" oder schlicht "nicht machen".

Unsere fünf Use Cases finden sich so ein:

Der Datenblatt-Extractor landet als klarer Quick Win im oberen linken Quadranten. Zwei Person-Monate Aufwand, solider Nutzen. Patent-Intelligence und Zeichnungs-Archiv kippen in die Big-Bets-Ecke, weil beide hohen Nutzen bringen, aber auch vier bis fünf Monate Arbeit brauchen. Der Norm-Checker rutscht in den unteren rechten Quadranten: acht Monate Aufwand, moderater Nutzen. Das Multi-Agent-System landet ebenfalls bei den Big Bets.

Die Stärke der Matrix ist ihre Sichtbarkeit. Ein Team, das fünfzehn Ideen auf ein Whiteboard klebt, hat in zehn Minuten einen gemeinsamen Überblick. Die Schwäche ist offensichtlich: Confidence fehlt. Das Multi-Agent-System erscheint hier als attraktives Big Bet, obwohl RICE zeigt, dass die Umsetzungswahrscheinlichkeit heute niedrig ist. Wer die Matrix als alleinige Methode nutzt, investiert in schillernde Projekte mit hohem Ausfallrisiko.

Empfehlung: Impact-Effort-Matrix als Einstieg in ein Priorisierungs-Meeting nutzen, um die Landschaft zu sehen. Danach mit RICE oder einer der folgenden Methoden nachschärfen.

## Methode 2: WSJF (Weighted Shortest Job First)

WSJF stammt aus dem Scaled Agile Framework und wird vor allem in größeren Entwicklungsorganisationen genutzt. Die Formel lautet:

$$\text{WSJF} = \frac{\text{Cost of Delay}}{\text{Job Size}}$$

Cost of Delay setzt sich aus drei Komponenten zusammen: dem geschäftlichen Nutzen, der zeitlichen Dringlichkeit und dem Wert der Risiko-Reduktion oder Gelegenheits-Erschließung. Jede Komponente wird auf einer Skala von 1 bis 10 bewertet, am Ende wird die Summe durch den Aufwand geteilt.

Der entscheidende Unterschied zu RICE: Zeitliche Dringlichkeit ist eine eigene Dimension. Ein Projekt mit Deadline wird anders bewertet als eines ohne.

Beim Norm-Checker wirkt sich das sofort aus. Angenommen, der EU AI Act oder eine neue Maschinenrichtlinie schafft einen konkreten Compliance-Zeitdruck. Business Value 5, Time Criticality 9, Risk Reduction 9, Job Size 8. Der WSJF-Score liegt bei 2,88. Bei RICE lag dasselbe Projekt nur bei 10, also abgeschlagen auf Platz 4. In der WSJF-Bewertung rückt der Norm-Checker in die obere Hälfte der Rangfolge.

Beim Multi-Agent-System ist der Effekt geringer, aber vorhanden. Business Value 9, Time Criticality 5 (nicht akut, aber mittelfristig wichtig), Opportunity Enablement 8, Job Size 8. WSJF-Score 2,75. Etwas besser als bei RICE, aber nicht dramatisch anders, weil die akute Dringlichkeit fehlt.

Empfehlung: WSJF nutzen, wenn Compliance-Themen, Marktfenster oder Wettbewerbsdruck relevant sind. Für operative Quick Wins ohne Zeitdruck bringt die zusätzliche Komplexität wenig.

## Methode 3: Business Value vs. AI Feasibility Matrix

Dieser Ansatz ist speziell für KI-Projekte gedacht und wird in Varianten von Gartner, McKinsey und anderen Beratungen genutzt. Wieder eine Zwei-Achsen-Matrix, diesmal mit einer KI-spezifischen Dimension.

Auf der X-Achse steht die AI Feasibility. Sie setzt sich aus Datenverfügbarkeit, Reifegrad der Modelle, Integrationsaufwand und interner Expertise zusammen. Auf der Y-Achse der Business Value. Die Einordnung der fünf Projekte zeigt ein klares Muster:

Patent-Intelligence sitzt oben rechts. Hoher Business Value, hohe Machbarkeit (Patent-APIs sind dokumentiert, Sprachmodelle für Textverarbeitung ausgereift). Empfehlung: jetzt starten.

Das Zeichnungs-Archiv liegt oben in der Mitte. Hoher Business Value, mittlere Machbarkeit, weil Bilderkennung auf alte Zeichnungen Trainingsarbeit braucht. Empfehlung: als zweites Projekt starten oder sofort parallel laufen lassen.

Der Datenblatt-Extractor liegt rechts unten. Mittlerer Business Value, sehr hohe Machbarkeit. Klassischer Quick Win, der schnell Vertrauen in die Methode aufbaut.

Der Multi-Agent Innovation-Scout sitzt oben links. Hoher Business Value, niedrige Machbarkeit. Das ist der Quadrant "Monitor and prepare". Nicht ignorieren, aber auch nicht mit Vollgas angehen. Ein kleines Team sollte Erfahrung sammeln, ohne den Ruf des ganzen KI-Programms zu riskieren.

Der Norm-Checker liegt links in der Mitte. Mittlerer Business Value, niedrige Machbarkeit durch Copyright-Probleme und Interpretationsschwierigkeiten. Empfehlung: Projekt neu zuschneiden oder anders lösen, zum Beispiel als Bibliothek für menschliche Prüfer statt als voll automatisierter Checker.

Die Stärke dieser Matrix ist ihre KI-Spezifik. Sie zwingt Teams, technische Machbarkeit getrennt vom Wunschdenken zu bewerten. Das ist besonders wertvoll, wenn die Organisation wenig KI-Erfahrung hat und Gefahr läuft, jedes Projekt zu starten, bei dem jemand "mit KI" sagt.

## Methode 4: Weighted Scoring Model

Wenn die drei bisherigen Methoden nicht passen, bleibt das flexibelste Werkzeug: ein gewichtetes Bewertungsmodell mit selbst definierten Kriterien. Man legt fünf bis sieben Kriterien fest, gibt jedem ein Gewicht, bewertet jedes Projekt auf einer Skala von 1 bis 5 und rechnet den gewichteten Mittelwert aus.

Für die fünf Beispielprojekte könnten die Kriterien so aussehen: Compliance-Relevanz mit 25 Prozent, Business Value mit 25 Prozent, technische Machbarkeit mit 20 Prozent, Datenverfügbarkeit mit 15 Prozent und strategischer Fit mit 15 Prozent.

Rechnet man den Norm-Checker mit diesen Gewichten durch, bekommt er einen Score von 3,15 auf einer Skala bis 5. Patent-Intelligence erreicht 3,75 und bleibt Spitzenreiter. Das Multi-Agent-System klettert auf 3,1, weil der strategische Fit hoch bewertet wird. Der Datenblatt-Extractor liegt bei 3,05. Das Zeichnungs-Archiv fällt auf 2,9 zurück, weil es in keinem der gewichteten Kriterien außergewöhnlich abschneidet.

Interessant ist, wie sich die Rangfolge gegenüber RICE verschiebt. Wenn Compliance wichtig ist, rückt der Norm-Checker nach vorne. Wenn strategischer Fit hoch gewichtet wird, profitiert das Multi-Agent-System. Wenn Datenverfügbarkeit entscheidend ist, steigt der Datenblatt-Extractor.

Das ist zugleich die Stärke und die Schwäche der Methode. Die Gewichte bestimmen das Ergebnis. Wer die Gewichte wählt, entscheidet implizit die Rangfolge. Das macht die Methode transparent und angreifbar gleichzeitig. Ein ehrliches Team nutzt das bewusst: Die Diskussion über die Gewichte ist oft wertvoller als die Rechnung danach.

Empfehlung: Weighted Scoring Model für komplexe Entscheidungen mit vielen Interessengruppen. In C-Level-Meetings schlägt sich die Methode besser als RICE, weil sie die strategischen Kriterien explizit macht.

## Zwei weitere, kurz eingeordnet

**MoSCoW** (Must have, Should have, Could have, Won't have) ist eine binäre Methode aus dem Anforderungsmanagement. Für Priorisierung zwischen strategischen Projekten ist sie zu grob, aber gut geeignet, um in einem ersten Schritt die Kann-Projekte von den Muss-Projekten zu trennen. Ein Norm-Checker mit Compliance-Deadline ist ein klarer "Must have" und sollte gar nicht erst in RICE wandern.

**ICE** (Impact, Confidence, Ease) ist die vereinfachte Variante von RICE ohne Reach. Für kleine Teams oder einzelne Experimente schnell anwendbar. Für Mittelstands-Budget-Entscheidungen fehlt die Reach-Dimension, also gerade der Faktor, der in vielen Fällen den Ausschlag gibt.

## Welche Methode wann?

Die ehrliche Antwort ist, dass keine einzelne Methode alle Fragen beantwortet. Eine praktische Orientierung:

Für den **Workshop-Einstieg** mit vielen Ideen eignet sich die Impact-Effort-Matrix, weil sie in zehn Minuten einen Überblick schafft. Für **operative Roadmap-Entscheidungen** ist RICE weiterhin das präziseste Werkzeug. Wenn **Zeitdruck und Compliance** eine Rolle spielen, ist WSJF der richtige Filter. Für **KI-spezifische Priorisierung** passt die Business-Value-vs-AI-Feasibility-Matrix am besten, weil sie die technische Machbarkeit als eigene Dimension ernst nimmt. Bei **strategischen C-Level-Entscheidungen** mit vielen Kriterien ist das Weighted Scoring Model flexibel genug.

Die beste Praxis ist eine Kombination: Impact-Effort-Matrix zur visuellen Filterung, danach RICE oder AI-Feasibility-Matrix für die Top-Kandidaten, ergänzt durch WSJF bei Compliance-Themen und die 70/30-Regel aus dem ersten Artikel für strategische Lerninvestitionen.

Wer nur eine Methode wählt, wird unvollständig priorisieren. Wer alle gleichzeitig einsetzt, diskutiert nur noch Methoden. Der Sweet Spot liegt bei zwei bis drei passenden Werkzeugen, bewusst kombiniert.

---

## Sie priorisieren gerade Ihre eigenen Projekte?

Methoden sind ein Werkzeug, kein Selbstzweck. Die eigentliche Arbeit beginnt mit der ehrlichen Bewertung konkreter Vorschläge in Ihrer Organisation, mit Ihren Daten, Ihren Kriterien und Ihren strategischen Zielen.

**AImation** unterstützt mittelständische Unternehmen dabei, aus einem Sammelsurium von Projektideen eine belastbare Rangfolge zu entwickeln. Nicht nach Lehrbuch, sondern passend zu Ihrer Situation. Im Use-Case-Workshop kombinieren wir die Methoden, die für Ihre Entscheidungen wirklich relevant sind.

→ [Discovery-Gespräch vereinbaren](https://aimation.de/kontakt)

---

*Holger Peschke ist Gründer von AImation und berät mittelständische Unternehmen bei der strategischen Einführung von Automatisierungs- und Assistenzsystemen. Seine Artikel zur KI-Priorisierung bauen aufeinander auf: Der erste Teil behandelt die RICE-Formel, der zweite ergänzt sie durch weitere Methoden.*
