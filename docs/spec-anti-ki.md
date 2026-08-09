# Anti-KI-Text-Spec

Diese Spec ist die Pflichtprüfung für **jeden** Text auf der AImation-Website: Hero, Sektionen, Blog-Artikel, FAQ, E-Mails, Facts-Seiten. Referenziert aus `CLAUDE.md` Abschnitt "Content Guidelines". Ziel: Texte lesen sich wie von einem erfahrenen Ingenieur geschrieben, der erklärt statt verkauft, nicht wie KI-generierter Blog-Content.

## Hinweis zur Historie dieser Datei

`CLAUDE.md` verweist seit dem Relaunch-Start auf "17 benannte Muster" in dieser Spec. Die Datei selbst existierte im Repo nie, nur die Zusammenfassung in `CLAUDE.md`. Diese Version rekonstruiert die **12 dort tatsächlich benannten Muster** vollständig mit Beispielen. Falls es ursprünglich 5 weitere Muster gab, sind sie nicht mehr auffindbar (nicht in Git-Historie, keine referenzierten Quellen). Wer die fehlenden 5 kennt, sollte sie ergänzen, sonst gilt diese 12er-Liste als aktueller Stand.

## Geltungsbereich

- Alle Fließtexte auf der Website (Sektionen, Blog, FAQ, Facts-Seiten)
- E-Mail-Vorlagen (z.B. `app/api/send-roi-results/route.ts`)
- Marketing-Texte außerhalb der Website (LinkedIn, Ads), sofern nicht anders vereinbart

Ausgenommen: Der gesperrte Hero-Text (siehe `docs/AI-mation_Hero-Headline.md` bzw. Spec 03), strukturierte Daten (JSON-LD), Rechtstexte (Impressum, Datenschutz).

## Verbotene Muster

### 1. Em-Dash-Inflation
Gedankenstriche (`—`, `–`) als universelles Verbindungszeichen für alles. Typisches KI-Tell.
- ❌ "Die Roadmap wirkt logisch — bis die Realität dazwischenkommt."
- ✅ "Die Roadmap wirkt logisch, bis die Realität dazwischenkommt."

### 2. Fragmentierter Dreiklang
Drei Ein-Wort- oder Kurz-Sätze hintereinander als rhetorischer Effekt.
- ❌ "Effizienz. Fokus. Erfolg."
- ✅ "Wer hier Effizienz will, braucht zuerst Fokus, nicht mehr Tools."

### 3. Adjektiv-Trio
Drei Adjektive in Serie vor einem Substantiv.
- ❌ "Eine ganzheitliche, innovative, maßgeschneiderte Lösung."
- ✅ "Eine Lösung, die zu Ihrer Stückliste passt."

### 4. Binäre Kontrastierung
"Nicht X, sondern Y" bzw. "Es geht nicht um X, es geht um Y" als Standard-Rhetorikfigur.
- ❌ "Es geht nicht um Tools, es geht um Haltung."
- ✅ "Wichtiger als das Tool ist, ob das Team es überhaupt nutzt." *(siehe echter Fix in `ki-roadmap-illusion-mittelstand/page.tsx`, Commit 8840641)*

### 5. Mehr-als-nur-Falle
"Mehr als nur X, es ist Y"-Konstruktion.
- ❌ "Das ist mehr als nur ein Workshop, es ist eine Transformation."
- ✅ "Der Workshop liefert eine priorisierte Liste, keine Folienshow."

### 6. Epochen-Einleitung
Einstieg mit generischem Zeitgeist-Framing.
- ❌ "Im heutigen digitalen Zeitalter, in dem KI allgegenwärtig ist..."
- ✅ "Ihre Konstrukteure verbringen jede Woche Stunden mit Suchen statt Konstruieren."

### 7. Rhetorische Frage als Eröffnung
Text beginnt mit "Hast du dich jemals gefragt...".
- ❌ "Haben Sie sich jemals gefragt, wie viel Potenzial in Ihren Daten steckt?"
- ✅ Direkter Einstieg mit einer konkreten Beobachtung, einem Zahlenwert oder einem Namen.

### 8. Strukturelle Platzhalter
Übergänge ohne Inhalt, nur zur Gliederung.
- ❌ "Ein weiterer wichtiger Aspekt ist die Datenqualität."
- ✅ "Die Datenqualität entscheidet, ob das Modell in drei Monaten noch brauchbar ist."

### 9. Abschluss-Floskeln
Zusammenfassende Sätze ohne neue Information am Textende.
- ❌ "Zusammenfassend lässt sich sagen, dass KI viele Chancen bietet."
- ✅ Text endet mit einer konkreten nächsten Handlung oder einer offenen Kante, keiner Zusammenfassung.

### 10. Geschmeidigkeitsverben
Vage Verben, die nichts Konkretes behaupten: "ermöglichen", "gewährleisten", "sicherstellen", "optimieren" ohne konkreten Bezug.
- ❌ "Wir ermöglichen eine optimierte Prozesslandschaft."
- ✅ "Wir reduzieren die Bearbeitungszeit pro Anfrage von 20 auf 4 Minuten."

### 11. Bullet-Inflation mit Fett+Doppelpunkt
Listen im Muster `**Begriff**: Erläuterung` statt echter Sätze.
- ❌ "**Skalierbarkeit**: Wächst mit Ihrem Unternehmen. **Flexibilität**: Passt sich an."
- ✅ Fließtext oder Liste mit vollständigen Sätzen ohne Fett-Doppelpunkt-Schema.

### 12. Buzzword-Cluster
Begriffe wie "ganzheitlich", "innovativ", "revolutionär", "skalierbar", "nahtlos", "transformativ", "disruptiv", "agil", "Synergie", "Mehrwert", "Potenziale heben", "Exzellenz", "Paradigmenwechsel", "maßgeschneidert" als Füllwörter ohne konkrete Bedeutung.
- ❌ "Eine ganzheitliche, skalierbare KI-Strategie mit echtem Mehrwert."
- ✅ "Eine KI-Landkarte mit 2 bis 3 Use Cases, die sich innerhalb von 4 Wochen umsetzen lassen."

## Positive Marker (sollen im Text vorkommen)

- **Konkrete Anker**: Namen, Zahlen, Orte, Daten — mindestens 3 pro Textblock (z.B. "IATF 16949", "Amtsgericht Bamberg", "4.900 EUR", "Februar 2025")
- **Variable Satzlängen (Burstiness)**: kurze Sätze (3-4 Wörter) neben längeren mischen
- **Kante zeigen**: pro Abschnitt eine Meinung, der nicht jeder zustimmen würde
- **Subtext**: pro Abschnitt eine Sache unerklärt lassen, dem Leser etwas zutrauen
- **Kleine Unregelmäßigkeiten**: Umgangssprachliches, Satzfragmente, wo es zur Stimme passt

## Checkliste vor Veröffentlichung

1. Enthält der Text eines der 12 verbotenen Muster? → umformulieren
2. Mindestens 3 konkrete Anker pro Block vorhanden?
3. Satzlängen variieren spürbar?
4. Mindestens eine Kante (eine Position, kein Konsens-Text)?
5. Sie-Form durchgehend, "AImation" korrekt geschrieben (nicht "AI.mation" im Fließtext)?
6. Keine Preiszahl hartkodiert, die nicht aus `lib/data/pricing.ts` stammt?
