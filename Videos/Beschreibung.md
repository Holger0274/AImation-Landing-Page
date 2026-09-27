# Skillmatrix – 10 Bilder für Kundengespräche

Alle Bilder zeigen den fiktiven Demo-Datensatz „Musterwerk Mechatronik“. Alle Personen, Produkte und Standorte sind erfunden. Auflösung 2880 × 1800 Pixel (Retina), damit Texte auch verkleinert in Folien lesbar bleiben. Die Matrix-Bilder 02 bis 04 sind nur der Inhaltsbereich, ohne Menü.

## So kommst du selbst dorthin

![Einstieg](00-einstieg-anmeldung.png)

1. `npm run dev:api` und `npm run dev:web` starten (lokal läuft die API derzeit auf Port 3010), dann http://localhost:5173 öffnen.
2. Auf der Anmeldeseite die dunkle Kachel **„Empfohlen für die Vorführung – Entwicklungsleitung“** anklicken. Diese Rolle sieht alle Abteilungen mit Namen.
3. Oben rechts **„Präsentationsmodus (ohne Namen)“ ausgeschaltet** lassen. Nur dann erscheinen „Mitarbeitende“ und „Kompetenzmatrix“ im Menü.
4. Das gelbe Band oben zeigt jederzeit, als wer du angemeldet bist. Mit **„Rolle wechseln“** kommst du zurück zur Anmeldeseite.
5. Ein Team in der Matrix ansehen: oben bei „Auswahl“ eine Abteilung wählen (zum Beispiel „Simulation“), dann links **Kompetenzmatrix** und oben die Rubrik, etwa „CAE-Tools“.

---

## 01 Das Lagebild auf einen Blick
![Lagebild](01-lagebild.png)

**Kernaussage:** In zehn Sekunden sieht die Leitung, wo die Organisation steht.
Vier Ampeln (Kapazität, Wissenssicherung, Standortbalance, Datenreife), fünf Kernaussagen im Klartext, die größten Wissensrisiken mit Score und die Schlüsselpersonen, an denen eine Kompetenz ganz allein hängt.
**Für den Kunden:** Keine Excel-Auswertung mehr vor der Steuerungsrunde. Das Lagebild rechnet sich selbst und begründet jede Aussage.

## 02 Abdeckung je Rubrik
![Abdeckung je Rubrik](02-abdeckung-je-rubrik.png)

**Kernaussage:** Das ganze Kompetenzportfolio auf einer Fläche.
Jedes Kästchen ist eine Kompetenz, die Zahl nennt die Wissensträger. Rot heißt: niemand. Rosa: eine Person. Gelb: zwei. Dann immer dunkler. Ein violetter Rahmen markiert Zukunftstechnologien.
**Für den Kunden:** Lücken springen ins Auge, bevor jemand eine Tabelle liest.

## 03 Kompetenzmatrix eines Teams: Simulation, CAE-Tools
![Matrix Simulation](03-kompetenzmatrix-team-simulation.png)

**Kernaussage:** Wer kann was, wie gut und arbeitet gerade damit?
Zeilen sind Personen, Spalten Kompetenzen. Die Zahl ist das Level 1 bis 5 (Grundkenntnisse bis Key User/Mentor), je dunkler, desto höher. **Gefüllte Kachel:** aktiv im Einsatz. **Weiße Kachel mit Rahmen:** Reserve, also kann es, arbeitet aber gerade nicht damit. Die Fußzeile zählt die Wissensträger: rot bei höchstens einer Person, orange bei zwei.
**Für den Kunden:** Die Reserve ist Gold wert. Sie zeigt, wer im Ernstfall einspringen kann, ohne dass es heute jemand auf dem Schirm hat.

## 04 Kompetenzmatrix eines Teams: Embedded Software
![Matrix Software](04-kompetenzmatrix-team-software.png)

**Kernaussage:** Dieselbe Ansicht für ein anderes Team und eine andere Rubrik, mit einem Klick umgeschaltet.
Hier auffällig: Für Rust gibt es niemanden (Fußzeile rot 0), die Eigenentwicklung TestBench tragen nur zwei Personen (orange). Die Punkte vor den Namen zeigen den Standort.
**Für den Kunden:** Teamleitungen sehen ihr eigenes Team, die Bereichsleitung sieht alle. Das regelt das Rollenmodell, nicht die Disziplin der Nutzer.

## 05 Wissensrisiken mit Begründung
![Wissensrisiken](05-wissensrisiken.png)

**Kernaussage:** Jede Kompetenz bekommt einen Risikoscore von 0 bis 100, und jeder Score hat eine Begründung in Worten.
Die Formel steht offen oben: Besetzungslücke gegen Soll, Erfahrung der Träger, Verteilung über Standorte, gewichtet mit der Relevanz. Darunter die alleinigen Wissensträger als erste Kandidaten für Stellvertretung.
**Für den Kunden:** Nachvollziehbar statt Blackbox. Das ist auch für Betriebsrat und Datenschutz wichtig.

## 06 Kompetenz im Detail: Wer kann das, wer könnte es aufbauen?
![Kompetenzdetail](06-kompetenz-wer-kann-das.png)

**Kernaussage:** Ein Klick auf eine Kompetenz zeigt die Träger und passende Kandidaten für den Aufbau.
Im Beispiel hängt eine Eigenentwicklung an einer einzigen Person. Das System schlägt Kandidaten vor: zuerst die, die schon eine Qualifizierung geplant haben, dann nach Nähe des Profils.
**Für den Kunden:** Aus dem Risiko wird sofort eine Maßnahme. Ausdrücklich ein Vorschlag, kein Urteil über Personen.

## 07 Produkte und ihre Tools je Disziplin
![Produkte](07-produkte-und-tools.png)

**Kernaussage:** Ein Produkt ist erst abgesichert, wenn auch die Tools dahinter sitzen.
Je Produkt die zugeordneten Tools und Methoden, gruppiert nach Konstruktion, Simulation, Software, Elektronik, Versuch und Methode, jeweils mit Ampel. Die Zahl am Tool nennt die Personen, die Produkt **und** Tool beherrschen. Darunter steht, wie viele das Produkt mit allen Pflicht-Tools der Disziplin können.
**Für den Kunden:** Zeigt Lücken, die eine reine Personenliste nie zeigt: Viele kennen das Produkt, aber niemand hat die EMV-Simulation dazu.

## 08 Experten finden: das kleinste Team für ein Anforderungsprofil
![Experten finden](08-experten-finden-team.png)

**Kernaussage:** Anforderungen anklicken, und das System schlägt das kleinste Team vor, das alles abdeckt.
Im Beispiel reichen für Steuergerät, AUTOSAR, funktionale Sicherheit und HiL zwei Personen. Rechts steht, wie dünn jede Anforderung besetzt ist, darunter alle passenden Personen mit Level.
**Für den Kunden:** Projektbesetzung in Minuten statt Rundmail.

## 09 Was wäre wenn: Ausfall einer Schlüsselperson
![Was wäre wenn](09-was-waere-wenn-ausfall.png)

**Kernaussage:** Den Ausfall einer Person durchspielen, ohne echte Daten zu verändern.
Vorher und nachher nebeneinander: hohe Risiken steigen von 9 auf 11, eine Kompetenz geht komplett verloren, zwölf Verantwortungen stehen ohne Person da. Stresstests für ganze Standorte gibt es mit einem Klick.
**Für den Kunden:** Nachfolge- und Vertretungsplanung mit Zahlen statt Bauchgefühl.

## 10 Strategie-Abgleich
![Strategie-Abgleich](10-strategie-abgleich.png)

**Kernaussage:** Was die Strategie bis zum Zieljahr verlangt, gegen das, was heute in der Skillmatrix steht.
Je Strategiethema Deckungsgrad, fehlende Personen und Kompetenzen ohne jeden Träger, dazu wie viele Personen den Aufbau schaffen könnten.
**Für den Kunden:** Die Brücke von der Unternehmensstrategie zur Personalentwicklung, messbar und im selben System.

---

*Zusätzlich im Konzeptdokument (`docs/konzept/README.md`): Tools und Methoden mit Aktiv/Reserve, Legende und Begriffe, Präsentationsmodus ohne Namen, Rollen und Datenschutz.*
