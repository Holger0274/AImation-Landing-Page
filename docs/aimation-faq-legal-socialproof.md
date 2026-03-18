# AI.mation – FAQ, Rechtliches & Social Proof

---

## 1. FAQ-Fragen (nach Persona sortiert)

> Diese FAQs nehmen typische Einwände vorweg und führen zur Handlung.

### Für den Entscheider (GF/Inhaber)

**„Was kostet das?"**
> Die Investition richtet sich nach Umfang und Komplexität. Ein Erstgespräch ist kostenlos – dort klären wir, was für Ihr Unternehmen sinnvoll ist und welches Budget realistisch wäre. Keine Überraschungen.

**„Wie schnell sehe ich Ergebnisse?"**
> Bei Schulungen sofort – Ihr Team kann das Gelernte am nächsten Tag anwenden. Bei Automatisierungsprojekten rechnen wir mit 2-6 Wochen bis zum ersten funktionierenden Prototyp, je nach Komplexität.

**„Brauche ich dafür eine IT-Abteilung?"**
> Nein. Wir arbeiten mit dem, was da ist. Viele unserer Kunden haben keine dedizierte IT – genau dafür sind wir da. Von der Strategie bis zur Umsetzung aus einer Hand.

---

### Für den Umsetzer (Abteilungsleiter/IT)

**„Funktioniert das mit unseren bestehenden Systemen?"**
> In der Regel ja. Wir arbeiten tool-agnostisch und finden Lösungen, die sich in Ihre bestehende Infrastruktur integrieren – ob Microsoft 365, Google Workspace, SAP oder branchenspezifische Software.

**„Müssen meine Mitarbeiter programmieren können?"**
> Nein. Die Schulungen sind für Anwender konzipiert, nicht für Entwickler. Ziel ist, dass Ihr Team KI-Tools souverän einsetzen kann – ohne eine Zeile Code.

---

### Für den Skeptiker (Controller/QM)

**„Wie messen wir den ROI?"**
> Vor jedem Projekt definieren wir gemeinsam messbare Ziele: Zeitersparnis in Stunden, reduzierte Fehlerquoten, eingesparte Kosten. Nach der Umsetzung messen wir gegen diese Baseline.

**„Was passiert mit unseren Daten?"**
> Datenschutz ist nicht verhandelbar. Wir arbeiten DSGVO-konform, bevorzugen europäische oder lokale Lösungen wo möglich, und sensible Daten verlassen Ihr Unternehmen nur, wenn Sie es explizit freigeben.

---

### Bonus-FAQ (allgemein)

**„Warum sollten wir mit Ihnen arbeiten statt mit einer großen Beratung?"**
> Große Beratungen schicken Junior-Consultants und rechnen nach Tagessätzen ab. Bei uns bekommen Sie 20 Jahre Engineering-Erfahrung direkt – ohne Overhead, ohne PowerPoint-Schlachten. Wir setzen um, nicht nur beraten.

---

## 2. Impressum & Datenschutz – Was rein muss

> ⚠️ **Wichtig:** Diese Übersicht ersetzt keine Rechtsberatung. Nutze einen Generator wie eRecht24, IT-Recht Kanzlei oder lass die Texte von einem Anwalt prüfen.

### Impressum (Pflichtangaben nach §5 TMG)

| Pflichtangabe | Deine Daten |
|---------------|-------------|
| Vollständiger Name | Holger [Nachname] |
| Anschrift | Straße, PLZ, Ort |
| E-Mail-Adresse | kontakt@aimation.de (o.ä.) |
| Telefonnummer | +49 ... |
| Rechtsform | Einzelunternehmer / GbR / UG / GmbH? |
| USt-IdNr. | Falls vorhanden (bei Kleinunternehmer: Hinweis) |
| Berufsbezeichnung | Falls relevant (z.B. Ingenieur) |
| Verantwortlich für Inhalt (§55 RStV) | Holger [Nachname], Anschrift |

**Zusätzlich empfohlen:**
- Hinweis auf EU-Streitschlichtungsplattform (Pflicht bei B2C)
- Haftungsausschluss für externe Links

---

### Datenschutzerklärung (DSGVO-Pflichtangaben)

**Muss enthalten sein:**

1. **Verantwortlicher** – Name, Anschrift, Kontakt
2. **Welche Daten werden erhoben?**
   - Server-Logs (IP, Browser, Zeitstempel)
   - Kontaktformular-Daten
   - Calendly-Buchungsdaten
   - Newsletter (falls vorhanden)
3. **Rechtsgrundlage** – Art. 6 DSGVO (berechtigtes Interesse, Einwilligung, Vertragserfüllung)
4. **Zweck der Verarbeitung**
5. **Speicherdauer**
6. **Empfänger/Dritte** – Hosting-Anbieter, Calendly, ggf. Analytics
7. **Rechte der Betroffenen** – Auskunft, Löschung, Widerspruch, Beschwerde
8. **Cookies** – Welche, wofür, wie ablehnen

**Drittanbieter die du wahrscheinlich nutzt:**

| Dienst | Datenschutz-Relevanz |
|--------|---------------------|
| Hosting (Vercel/Netlify) | Server-Logs, IP-Adressen |
| Calendly | Terminbuchung, Name, E-Mail |
| Google Fonts | IP-Übertragung an Google (selbst hosten empfohlen!) |
| LinkedIn Pixel | Falls du Tracking nutzt |
| Analytics | Plausible/Fathom (DSGVO-freundlich) oder GA4 (Einwilligung!) |

**Meine Empfehlung:**
1. Google Fonts lokal einbinden (keine Übertragung an Google)
2. Plausible oder Fathom statt Google Analytics (kein Cookie-Banner nötig)
3. Calendly in Datenschutz erwähnen (US-Dienst → Standardvertragsklauseln)

---

### Generator-Empfehlungen

| Anbieter | Kosten | Qualität |
|----------|--------|----------|
| [eRecht24](https://www.e-recht24.de/muster-datenschutzerklaerung.html) | Kostenlos (Basis) / Premium | Gut, weit verbreitet |
| [IT-Recht Kanzlei](https://www.it-recht-kanzlei.de) | Ab ~10€/Monat | Sehr gut, mit Updates |
| [Datenschutz-Generator.de](https://datenschutz-generator.de) | Kostenlos | Solide für einfache Seiten |
| Anwalt | 200-500€ einmalig | Am sichersten |

---

## 3. Social Proof – Elegant einbauen

### Variante A: Badge im Hero

```html
<div class="social-proof-badge">
  <svg><!-- LinkedIn Icon --></svg>
  <span>18.000+ Follower vertrauen meinen KI-Einschätzungen</span>
</div>
```

**Styling passend zum Design-System:**
- Hintergrund: `rgba(255, 255, 255, 0.08)` (auf dunklem Hero)
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Border-radius: `100px` (Pill-Form)
- Font: Inter, 14px, leicht muted

---

### Variante B: Trust-Leiste unter Hero

```
───────────────────────────────────────────────
  [LinkedIn Icon] 18.000+ Follower  •  [Icon] 20+ Jahre Engineering  •  [Icon] DACH-Fokus
───────────────────────────────────────────────
```

Drei Punkte nebeneinander, dezent, auf `Gray-50` Hintergrund.

---

### Variante C: In der "Über mich"-Sektion

> „Über 18.000 Menschen folgen mir auf LinkedIn, um über KI-Trends und praktische Automatisierungslösungen auf dem Laufenden zu bleiben."
> 
> [→ Auf LinkedIn folgen]

Link öffnet dein Profil in neuem Tab.

---

### Textoptionen für Social Proof

| Formulierung | Wirkung |
|--------------|---------|
| „18.000+ LinkedIn-Follower" | Fakten, neutral |
| „18.000+ vertrauen meinen KI-Einschätzungen" | Vertrauen, Autorität |
| „Eine der größten deutschen KI-Stimmen auf LinkedIn" | Positionierung (mutig) |
| „Mein Netzwerk: 18.000+ Entscheider und KI-Interessierte" | Zielgruppen-Relevanz |

**Meine Empfehlung:** Variante 2 – „vertrauen meinen KI-Einschätzungen" – es ist konkret und zeigt Relevanz, ohne überheblich zu wirken.

---

### Zukünftige Social-Proof-Erweiterungen

Sobald verfügbar, ergänzen:

- [ ] „Schulungen bei X Unternehmen durchgeführt" (wenn Freigabe da)
- [ ] Kurze Testimonial-Zitate (1-2 Sätze reichen)
- [ ] „Bekannt aus: [Podcast/Vortrag/Artikel]" falls relevant
- [ ] Kunden-Logos (mit Erlaubnis)

---

## Zusammenfassung: Nächste Schritte

| Was | Wer | Priorität |
|-----|-----|-----------|
| FAQ-Texte finalisieren/anpassen | Du | Hoch |
| Impressum ausfüllen | Du | Pflicht vor Launch |
| Datenschutz-Generator nutzen | Du | Pflicht vor Launch |
| Google Fonts lokal einbinden | Claude Code | Mittel |
| Social-Proof-Badge in Hero | Claude Code | Hoch |
| Calendly-Konto einrichten | Du | Hoch |

---

*Erstellt: Januar 2025*
