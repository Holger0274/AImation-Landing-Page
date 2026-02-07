# ROI Calculator Setup Guide

## Overview

Der ROI-Kalkulator ist jetzt vollständig in die Landing Page integriert. Besucher können in 2 Minuten ihr KI-Einsparpotenzial berechnen.

## Features

✅ **Multi-Step Form** - 5 Schritte: Willkommen → 4 Fragen → Email-Gate → Ergebnis
✅ **Email Lead Magnet** - Automatischer Versand der Ergebnisse per Email
✅ **Design System Compliant** - Magenta gradient buttons, glow effects, responsive
✅ **Mobile-First** - Optimiert für alle Gerätegrößen
✅ **Teaser Integration** - Link in Pain Points Section

## Platzierung

### 1. **Final CTA Section**
- **Primary CTA**: "Kostenloses Erstgespräch buchen" (Magenta)
- **Secondary CTA**: "ROI selbst berechnen" (Ghost Button)
- Öffnet Modal mit Calculator

### 2. **Pain Points Teaser**
- Link: "ROI-Rechner starten →"
- Scrollt zu Final CTA Section
- Triggert automatisch den Calculator

## Setup Instructions

### 1. Email Service konfigurieren (Resend)

**Resend Account erstellen:**
1. Gehe zu https://resend.com
2. Erstelle einen Account
3. Hole dir einen API Key: https://resend.com/api-keys

**Domain verifizieren (optional, aber empfohlen):**
1. Füge deine Domain hinzu (z.B. ai-mation.de)
2. Füge die DNS-Einträge hinzu (SPF, DKIM)
3. Warte auf Verifizierung (kann 24h dauern)

### 2. Environment Variables setzen

Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```bash
cp .env.local.example .env.local
```

Bearbeite `.env.local` und füge deine Werte ein:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@ai-mation.de
RESEND_TO_EMAIL=holger@ai-mation.de
```

**Erklärung:**
- `RESEND_API_KEY`: Dein Resend API Key
- `RESEND_FROM_EMAIL`: Absender-Adresse (muss verifiziert sein)
- `RESEND_TO_EMAIL`: Deine Email für Lead-Benachrichtigungen

### 3. Calendly URL aktualisieren

Öffne `components/sections/FinalCTA.tsx` und ersetze die Calendly URL:

```typescript
<ROICalculator
  isOpen={isCalculatorOpen}
  onClose={() => setIsCalculatorOpen(false)}
  calendlyUrl="https://calendly.com/DEIN-USERNAME/erstgespraech" // ← Hier deine URL
/>
```

### 4. Development Server starten

```bash
npm run dev
```

Öffne http://localhost:3000 und teste:
1. Scroll zu "Bereit für den nächsten Schritt?"
2. Klicke "ROI selbst berechnen"
3. Gehe durch den Calculator
4. Prüfe ob Email ankommt

### 5. Production Deployment

**Vercel (empfohlen):**
```bash
vercel
```

**Environment Variables in Vercel setzen:**
1. Gehe zu deinem Projekt in Vercel Dashboard
2. Settings → Environment Variables
3. Füge hinzu:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`

## ROI Calculation Logic

### Formel

```javascript
const automationPotential = {
  documentation: 0.5,  // 50% automatisierbar
  email: 0.45,         // 45% automatisierbar
  research: 0.55,      // 55% automatisierbar
  reporting: 0.5,      // 50% automatisierbar
};

const annualHoursSaved = weeklyHours * automationFactor * 48; // 48 Arbeitswochen
const annualSavings = annualHoursSaved * hourlyWage;
const roiMonths = 15000 / (annualSavings / 12); // €15k Implementation Cost
```

### Anpassungen möglich

**Automation Factors** ändern in `components/ROICalculator/calculations.ts`:
```typescript
const AUTOMATION_POTENTIAL = {
  documentation: 0.6,  // Von 50% auf 60% erhöhen
  // ...
};
```

**Implementation Cost** ändern:
```typescript
const implementationCost = 20000; // Von €15k auf €20k
```

## Email Templates

### User Email
- **Subject**: "Ihr KI-Potenzial: €XXX.XXX Einsparpotenzial"
- **Content**: Ergebnis-Breakdown + CTA zu Calendly
- **Design**: AI.mation Branding (Magenta gradient, logo)

### Lead Notification Email (an dich)
- **Subject**: "Neuer ROI-Rechner Lead: email@firma.de"
- **Content**: Kontaktdaten + eingegebene Werte
- **Zweck**: Sofortige Lead-Benachrichtigung

Beide Templates sind in `app/api/send-roi-results/route.ts`.

## Testing Checklist

### Desktop
- [ ] Calculator öffnet sich (Modal)
- [ ] Alle 5 Schritte funktionieren
- [ ] Validation funktioniert (ungültige Eingaben)
- [ ] Email wird versendet
- [ ] Ergebnis wird korrekt berechnet
- [ ] Calendly Link öffnet sich
- [ ] Teaser in Pain Points funktioniert

### Mobile
- [ ] Full-screen Modal
- [ ] Inputs sind groß genug (Touch-friendly)
- [ ] Buttons sind mindestens 44x44px
- [ ] Scrollen funktioniert smooth
- [ ] Keyboard navigation funktioniert

### Accessibility
- [ ] Tab-Navigation funktioniert
- [ ] Escape schließt Modal
- [ ] Focus trap im Modal
- [ ] Screen reader announcements
- [ ] Reduced motion wird respektiert

## Troubleshooting

### "Email not sent" Error

**Mögliche Ursachen:**
1. `RESEND_API_KEY` nicht gesetzt oder ungültig
2. `RESEND_FROM_EMAIL` nicht verifiziert
3. Rate limit erreicht (Resend Free: 100 emails/day)

**Lösung:**
```bash
# API Key prüfen
echo $RESEND_API_KEY

# Logs checken
vercel logs <deployment-url>

# Manuell testen
curl -X POST https://DEINE-URL/api/send-roi-results \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com", "input":{...}, "results":{...}}'
```

### Build Errors

**"Cannot find module '@/components/ROICalculator/ROICalculator'"**
```bash
# Prüfe ob Datei existiert
ls components/ROICalculator/

# TypeScript Cache löschen
rm -rf .next
npm run build
```

### Styling Issues

**Modal zu klein auf Mobile:**
- Check `DialogContent` className in `components/ui/dialog.tsx`
- Sollte `max-w-2xl` haben, nicht `max-w-lg`

**Glow effects fehlen:**
- Check `globals.css` für `.glow-magenta` class
- Modal muss `bg-softblack` haben, nicht `bg-white`

## Customization Ideas

### A/B Testing
```typescript
// In CalculatorSteps.tsx
const variant = Math.random() > 0.5 ? 'A' : 'B';

// Variant A: Email gate AFTER questions (current)
// Variant B: Email gate BEFORE questions (test)
```

### Additional Questions
```typescript
// In CalculatorSteps.tsx, add step 6:
{currentStep === 6 && (
  <div>
    <h3>Welches Budget steht zur Verfügung?</h3>
    <Input ... />
  </div>
)}
```

### PDF Download
```typescript
// In ResultsDisplay.tsx
<Button onClick={() => generatePDF(results)}>
  PDF herunterladen
</Button>
```

Verwende Libraries wie `jsPDF` oder `react-pdf`.

## Analytics (Optional)

### Google Analytics Events
```typescript
// In ROICalculator.tsx
import { gtag } from '@/lib/gtag';

const handleComplete = async (data) => {
  // ... existing code ...

  // Track calculator completion
  gtag.event({
    action: 'calculator_completed',
    category: 'engagement',
    label: 'roi_calculator',
    value: calculatedResults.annualSavings,
  });
};
```

### Plausible Analytics
```typescript
// window.plausible already available if script is in <head>
window.plausible('Calculator Completed', {
  props: {
    annualSavings: results.annualSavings,
    priority: inputData.priority
  }
});
```

## Support

Bei Problemen:
1. Check Browser Console für JavaScript errors
2. Check Vercel Logs für API errors
3. Check Resend Dashboard für Email delivery logs

## Next Steps

1. ✅ Setup Resend Account
2. ✅ Add Environment Variables
3. ✅ Update Calendly URL
4. ✅ Test Calculator Flow
5. ✅ Deploy to Production
6. 🔄 Monitor Email Deliverability
7. 🔄 Track Conversion Metrics
8. 🔄 Collect Feedback & Iterate
