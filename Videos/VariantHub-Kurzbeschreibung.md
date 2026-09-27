# VariantHub – Kurzbeschreibung

## In einem Satz

VariantHub ersetzt endlose Excel-Variantenlisten durch ein Regelwerk aus Merkmalen und Regeln. So sieht man sofort, welche Produktvarianten technisch machbar sind, welche nicht, und warum.

## Das Problem

In der technischen Entwicklung werden Produktvarianten fast überall in Excel gepflegt. Die Listen wachsen auf hunderte Zeilen und enthalten Schreibvarianten, Dubletten und unzulässige Kombinationen. Viele Regeln stehen nirgends geschrieben, sie stecken nur in den Köpfen einzelner Mitarbeiter. Dazu kommen Varianten, die gepflegt und dokumentiert werden, aber seit Jahren keinen Auftrag mehr hatten.

## Die Lösung

Statt jede Variante als Zeile zu führen, beschreibt man das Produkt einmal über:

- **Merkmale** (z. B. Leistung, Spannung, Werkstoff, Einsatzbereich)
- **Ausprägungen** (z. B. 4 kW, 400 V, Edelstahl, Lebensmittel)
- **Regeln** („Wenn Lebensmittel, dann Edelstahl“, „0,75 kW schließt Federdruckbremse aus“)

VariantHub prüft daraus automatisch jede Kombination und berechnet den gültigen Lösungsraum.

## Was das Tool kann

- **Excel-Röntgen:** Bestehende Variantenlisten einlesen und durchleuchten. Schreibvarianten, Dubletten, Regelverstöße, Ausreißer und Varianten ohne Auftrag werden sichtbar. Außerdem schlägt das Tool „ungeschriebene Regeln“ vor, also Kombinationen, die nie verkauft wurden. Der Mensch entscheidet, ob daraus eine Regel wird.
- **Komplexitätsanalyse:** Pareto-Auswertung (welche wenigen Varianten bringen 80 % der Stückzahl), Brachflächen (erlaubt, aber nie verkauft) und Marktabdeckung.
- **Regelwerk verstehen:** Regel-Netz, Lösungsraum-Grafik und Verträglichkeitsmatrix. Auch versteckte Verbote werden sichtbar, die erst aus dem Zusammenspiel mehrerer Regeln entstehen.
- **Konfigurator:** Nur Machbares ist wählbar. Gesperrte Werte werden mit der verursachenden Regel begründet, Konflikte lassen sich per Klick auflösen, Pflichtfolgen werden automatisch ergänzt.
- **Typschlüssel:** Aus der Konfiguration entsteht ein Typschlüssel, und umgekehrt lässt sich ein Code entschlüsseln und prüfen (Tippfehler, Altlasten mit Regelverstoß).
- **Variantenvergleich und Reparaturvorschläge:** Für ungültige Altvarianten schlägt das Tool die nächstgelegene gültige Variante vor.
- **Änderungen steuern:** Vor jeder Regeländerung zeigt eine Live-Vorschau, wie viele Varianten wegfallen. Alle gespeicherten Varianten werden bei jeder Änderung neu geprüft.
- **Excel rein und raus:** Import von Variantenmatrix oder Merkmalsliste mit Spaltenzuordnung, Probelauf und Prüfbericht. Export von Varianten, gültigen Kombinationen, Merkmalen und Regeln.

## Wofür es gut ist (Nutzen)

- **Weniger Fehler:** Der Vertrieb kann nichts mehr anbieten, was die Konstruktion nicht bauen kann.
- **Wissen sichern:** Regeln stehen nicht mehr nur in Köpfen oder Excel-Formeln, sondern nachvollziehbar im System.
- **Komplexität senken:** Man sieht, welche Varianten sich lohnen und welche nur Pflegeaufwand verursachen.
- **Sicher ändern:** Die Folgen einer Regeländerung sind vor der Freigabe sichtbar.
- **Schneller Einstieg:** Bestehende Excel-Listen werden eingelesen, niemand muss bei null anfangen.

## Zielgruppe

Entwicklungs- und Konstruktionsabteilungen, Produktmanagement und Vertrieb in Unternehmen mit variantenreichen Produkten (z. B. Antriebe, Motoren, Getriebe, Maschinenbau).

## Einsatz von KI

Der Kern von VariantHub ist bewusst **keine KI**, sondern eine nachvollziehbare Regel-Engine: Jede Sperre und jede Prüfung ist eindeutig begründet und reproduzierbar. Das ist wichtig, weil technische Entscheidungen belastbar sein müssen.

KI kommt dort ins Spiel, wo sie echten Mehrwert bringt, ohne die Nachvollziehbarkeit zu gefährden (geplante Ausbaustufe):

- **Regelvorschläge aus Excel-Altbeständen:** KI analysiert bestehende Listen und schlägt Regeln vor, die der Fachexperte bestätigt oder verwirft.
- **Datenbereinigung:** Schreibvarianten erkennen und zusammenführen („IP 55“, „IP55“, „ip-55“).
- **Erklärungen in Klartext:** Warum ist eine Kombination nicht möglich, verständlich formuliert für Vertrieb und Kunden.

Grundsatz: **Die KI schlägt vor, der Mensch entscheidet.**

## Stand und nächste Schritte

- **Heute:** Lauffähiger Prototyp (Web-App) mit Regel-Engine, Konfigurator, Lösungsraum-Analyse sowie Excel-Import und -Export, dazu eine Vorführ-Version mit Demo-Daten.
- **Als Nächstes:** Stücklisten je Variante (150 %-Stückliste), Login mit Mandanten und Rollen, Versionierung des Regelwerks, Schnittstellen zu ERP/PLM, Freigabe-Workflows und KI-Regelvorschläge.
