# ROI-Rechner: Supabase Datenbankintegration

## Problem & Ziel

Aktuell werden ROI-Berechnungen nur per E-Mail versendet und danach verworfen. Es gibt keine persistente Speicherung der Daten. Das Ziel ist es, **jeden ROI-Rechner-Eintrag** in Supabase zu speichern – auch wenn der User keine E-Mail-Adresse angibt.

**Nutzen:**
- Lead-Tracking und Analyse (Welche Branchen? Welche Paketgrössen? Welches Einsparpotenzial?)
- Anonyme Einträge (User ohne E-Mail) werden nicht verloren
- Basis für zukünftige Admin-Dashboard oder CRM-Export

---

## Technischer Ansatz

### Architektur

```
Frontend ROICalculator
        ↓
  calculateROI() (client-side)
        ↓
  /api/save-roi-calculation (NEU - Supabase)
        ↓
  Supabase: Tabelle "roi_calculations"
        ↓ (falls E-Mail vorhanden)
  /api/send-roi-results (bestehend - E-Mail via Resend)
```

**Wichtig**: Die Datenbankspseicherung erfolgt in einem **neuen, separaten API-Endpunkt** (`/api/save-roi-calculation`). Der bestehende E-Mail-Endpunkt (`/api/send-roi-results`) bleibt unverändert.

### Trigger-Zeitpunkt

Der Datenbankeintrag wird beim Klick auf **"Ergebnis berechnen"** geschrieben – d.h. sobald das Formular abgeschlossen und die Berechnung durchgeführt wird. Das geschieht in `handleComplete()` in `ROICalculator.tsx`.

- Bei Usern **mit E-Mail** (Schritt 8 ausgefüllt): Daten + Kontaktinfo + Ergebnisse werden gespeichert
- Bei Usern **ohne E-Mail** (Schritt 8 übersprungen / kein Email-Schritt): Nur Eingabedaten + Ergebnisse, `email = null`

---

## Phase 1: Supabase Setup

### 1.1 Supabase-Projekt

Supabase ist bereits im Tech Stack von AI.mation vorgesehen (laut CLAUDE.md). Falls noch kein Projekt existiert:

1. Auf [supabase.com](https://supabase.com) einloggen
2. Neues Projekt erstellen (Name: `aimation-landing`)
3. Region: `eu-central-1` (Frankfurt) für DSGVO
4. Passwort sichern

### 1.2 Datenbanktabelle erstellen

Im Supabase SQL-Editor folgenden SQL ausführen:

```sql
-- Tabelle für ROI-Rechner Einträge
CREATE TABLE roi_calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Kontaktdaten (optional – können leer sein)
  email TEXT,
  name TEXT,
  company TEXT,
  position TEXT,

  -- Eingabewerte
  use_case TEXT NOT NULL,           -- 'research' | 'documentation' | 'meetings' | 'custom'
  package TEXT,                     -- 'starter' | 'professional' | 'enterprise'
  num_employees INTEGER NOT NULL,
  hourly_wage NUMERIC NOT NULL,
  weekly_hours NUMERIC NOT NULL,
  setup_cost NUMERIC NOT NULL,
  monthly_cost NUMERIC NOT NULL,
  timeframe_months INTEGER NOT NULL,
  ramp_up_months INTEGER NOT NULL,
  industry TEXT,                    -- Branche (optional)
  priority TEXT,                    -- Schwerpunkt-Aufgabe (optional)

  -- Berechnete Ergebnisse
  weekly_savings NUMERIC NOT NULL,
  total_savings NUMERIC NOT NULL,
  total_investment NUMERIC NOT NULL,
  net_benefit NUMERIC NOT NULL,
  roi_percent NUMERIC NOT NULL,
  amortization_months NUMERIC NOT NULL,
  productive_weeks NUMERIC NOT NULL,

  -- Metadaten
  has_email BOOLEAN GENERATED ALWAYS AS (email IS NOT NULL) STORED,
  source TEXT DEFAULT 'roi_calculator'
);

-- Index für häufige Abfragen
CREATE INDEX idx_roi_calculations_created_at ON roi_calculations(created_at DESC);
CREATE INDEX idx_roi_calculations_email ON roi_calculations(email) WHERE email IS NOT NULL;
CREATE INDEX idx_roi_calculations_use_case ON roi_calculations(use_case);

-- Row Level Security aktivieren (wichtig für DSGVO)
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- Policy: Nur Service-Role darf lesen/schreiben (kein public Zugriff)
-- Der API-Endpunkt verwendet die service_role key, nicht den anon key
CREATE POLICY "service_role_only" ON roi_calculations
  FOR ALL TO service_role USING (true) WITH CHECK (true);
```

### 1.3 Environment Variables

In `aimation-landing/.env.local` hinzufügen:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Wichtig**: Für den API-Endpunkt wird der `SUPABASE_SERVICE_ROLE_KEY` verwendet (server-side only), nicht der anon key. Nie den service role key auf dem Client verwenden.

In Vercel unter Settings → Environment Variables dieselben Werte eintragen.

---

## Phase 2: Supabase Client installieren

### 2.1 Package installieren

```bash
cd aimation-landing
npm install @supabase/supabase-js
```

### 2.2 Supabase Client-Helper erstellen

Neue Datei: `aimation-landing/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

// Server-side client mit service role (für API-Routes)
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase environment variables not configured');
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
```

---

## Phase 3: Neuer API-Endpunkt

### 3.1 Datei erstellen

Neue Datei: `aimation-landing/app/api/save-roi-calculation/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

interface SaveROIRequest {
  // Kontaktdaten (alle optional)
  email?: string;
  name?: string;
  company?: string;
  position?: string;
  industry?: string;

  // Eingabewerte (required)
  input: {
    useCase: string;
    package?: string;
    numEmployees: number;
    hourlyWage: number;
    weeklyHours: number;
    setupCost: number;
    monthlyCost: number;
    timeframMonths: number;
    rampUpMonths: number;
    priority?: string;
  };

  // Berechnete Ergebnisse (required)
  results: {
    weeklySavings: number;
    totalSavings: number;
    totalInvestment: number;
    netBenefit: number;
    roiPercent: number;
    amortizationMonths: number;
    productiveWeeks: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const data: SaveROIRequest = await request.json();

    // Minimal validation
    if (!data.input || !data.results) {
      return NextResponse.json(
        { error: 'Missing required fields: input and results' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { error } = await supabase.from('roi_calculations').insert({
      // Kontaktdaten (nullable)
      email: data.email || null,
      name: data.name || null,
      company: data.company || null,
      position: data.position || null,
      industry: data.industry || null,

      // Eingabewerte
      use_case: data.input.useCase,
      package: data.input.package || null,
      num_employees: data.input.numEmployees,
      hourly_wage: data.input.hourlyWage,
      weekly_hours: data.input.weeklyHours,
      setup_cost: data.input.setupCost,
      monthly_cost: data.input.monthlyCost,
      timeframe_months: data.input.timeframMonths,
      ramp_up_months: data.input.rampUpMonths,
      priority: data.input.priority || null,

      // Ergebnisse
      weekly_savings: data.results.weeklySavings,
      total_savings: data.results.totalSavings,
      total_investment: data.results.totalInvestment,
      net_benefit: data.results.netBenefit,
      roi_percent: data.results.roiPercent,
      amortization_months: data.results.amortizationMonths,
      productive_weeks: data.results.productiveWeeks,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save calculation' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Save ROI calculation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## Phase 4: Frontend Integration

### 4.1 ROICalculator.tsx anpassen

In `aimation-landing/components/ROICalculator/ROICalculator.tsx` die `handleComplete` Funktion erweitern.

**Aktuell** sendet `handleComplete` nur an `/api/send-roi-results` (E-Mail).

**Neu**: Zuerst an `/api/save-roi-calculation` (Datenbank), dann (falls E-Mail vorhanden) an `/api/send-roi-results`.

Der relevante Bereich in `handleComplete()` (ab Zeile 54):

```typescript
// ERSETZEN: den try-catch Block ab Zeile 54

// Save to database (always, regardless of email)
try {
  await fetch('/api/save-roi-calculation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      name,
      company,
      position,
      industry,
      input: calculatorInput,
      results: calculatedResults,
    }),
  });
  // Non-blocking: Fehler werden geloggt aber nicht angezeigt
} catch (error) {
  console.error('Error saving to database:', error);
}

// Send email (only if email provided)
if (email) {
  try {
    const response = await fetch('/api/send-roi-results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name,
        company,
        position,
        industry,
        input: calculatorInput,
        results: calculatedResults,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
```

**Hinweis**: Beide Calls sind "fire-and-forget" aus UX-Sicht – Fehler werden nur geloggt, nie dem User angezeigt. Die Ergebnisanzeige erscheint unabhängig davon ob die Speicherung erfolgreich war.

---

## Phase 5: CalculatorSteps – E-Mail-Feld als Optional prüfen

Aktuell ist in `CalculatorSteps.tsx` (Schritt 8) die E-Mail als Pflichtfeld definiert. Prüfen ob:

1. Die E-Mail-Validierung wirklich required ist (Zeile suchen: `email` in CalculatorSteps.tsx)
2. Falls ja: E-Mail-Feld auf optional setzen (User kann ohne E-Mail abschließen)
3. In `handleComplete` wird dann `email` als `undefined` oder leer übergeben

**Recherche-Aufgabe**: `CalculatorSteps.tsx` lesen und den Email-Validierungs-Code identifizieren. Dann entscheiden:
- Ist das Email-Feld aktuell optional? → Nichts ändern
- Ist es required? → `required`-Constraint entfernen oder separate "Ergebnis anzeigen ohne E-Mail"-Option hinzufügen

---

## Testplan

### Manuelle Tests

1. **Test mit E-Mail**: Formular komplett ausfüllen inkl. E-Mail → Supabase-Tabelle prüfen: Eintrag vorhanden mit allen Feldern
2. **Test ohne E-Mail**: Formular ausfüllen ohne E-Mail (falls optional) → Supabase-Tabelle prüfen: Eintrag vorhanden, `email = null`
3. **Fehlerfall**: Supabase URL falsch setzen → ROI-Rechner zeigt trotzdem Ergebnis, nur Consolenlog-Fehler
4. **Datenvalidierung**: Supabase-Tabelle prüfen ob alle Felder korrekt gemappt sind (snake_case vs camelCase)

### Supabase-Dashboard Checks

Nach erstem Test im Supabase Dashboard unter Table Editor → `roi_calculations`:
- Eintrag vorhanden? ✓
- `created_at` korrekt? ✓
- `has_email` computed column korrekt? ✓
- Alle Zahlenwerte korrekt gespeichert? ✓

---

## Erfolgskriterien

- [ ] Supabase-Tabelle `roi_calculations` existiert mit korrektem Schema
- [ ] Jeder ROI-Rechner-Abschluss erzeugt einen Datenbankeintrag
- [ ] Einträge ohne E-Mail werden gespeichert (`email = null`)
- [ ] Einträge mit E-Mail bekommen zusätzlich die E-Mail gesendet (bestehende Logik bleibt)
- [ ] Fehler bei der DB-Speicherung unterbrechen nicht die Benutzerführung
- [ ] Service Role Key nur server-side verwendet (nie im Client)
- [ ] Row Level Security aktiv (keine public Lesbarkeit der Daten)

---

## Datenschutz / DSGVO-Hinweise

- Supabase Region: **eu-central-1 (Frankfurt)** wählen (EU-Server)
- In der Datenschutzerklärung: Speicherung von ROI-Berechnungsdaten in Supabase (EU) erwähnen
- Keine IP-Adressen werden gespeichert
- E-Mail-Adressen nur bei expliziter Eingabe gespeichert
- Daten können auf Anfrage gelöscht werden (DSGVO Art. 17)

---

## Datei-Übersicht der Änderungen

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `lib/supabase.ts` | NEU | Supabase Server-Client Helper |
| `app/api/save-roi-calculation/route.ts` | NEU | API-Endpunkt für DB-Speicherung |
| `components/ROICalculator/ROICalculator.tsx` | ÄNDERN | `handleComplete()` – DB-Call hinzufügen |
| `components/ROICalculator/CalculatorSteps.tsx` | PRÜFEN | E-Mail-Feld optional machen (falls nötig) |
| `.env.local` | ÄNDERN | Supabase Env-Vars hinzufügen |
| Supabase Dashboard | SETUP | Tabelle + RLS erstellen |
