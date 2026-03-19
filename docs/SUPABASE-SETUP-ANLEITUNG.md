# Supabase Einrichtung – Schritt für Schritt

## Was du brauchst
- Einen Browser
- 15 Minuten Zeit

## Was wird gespeichert?

Du hast **2 Formulare** auf der Seite – beide kommen in **dasselbe Supabase-Projekt**, du brauchst nur einmal API Keys:

| Formular | Tabelle | Was wird gespeichert? |
|----------|---------|----------------------|
| ROI-Rechner | `roi_calculations` | Berechnungsdaten + Ergebnisse (auch ohne E-Mail) |
| Kontaktformular | `leads` | Name, Firma, E-Mail, Unternehmensgröße, Herausforderung |

---

## Schritt 1: Supabase Account erstellen

1. Gehe auf **https://supabase.com**
2. Klicke oben rechts auf **"Start your project"**
3. Melde dich mit deinem **GitHub-Account** an (oder erstelle einen neuen Account)

---

## Schritt 2: Neues Projekt erstellen

1. Nach dem Login siehst du das Dashboard
2. Klicke auf **"New project"**
3. Fülle das Formular aus:
   - **Name**: `aimation-landing`
   - **Database Password**: Ein sicheres Passwort eingeben und **irgendwo speichern** (brauchst du ggf. später)
   - **Region**: **Frankfurt (eu-central-1)** auswählen ← wichtig für DSGVO
4. Klicke auf **"Create new project"**
5. Warte ca. 1-2 Minuten bis das Projekt bereit ist (grüner Punkt erscheint)

---

## Schritt 3: Beide Datenbanktabellen erstellen

Du erstellst jetzt **beide Tabellen auf einmal** mit einem einzigen SQL-Befehl.

1. Im linken Menü auf **"SQL Editor"** klicken (das Icon sieht aus wie `</>`)
2. Klicke auf **"New query"**
3. Kopiere den gesamten Text unten und füge ihn in das leere Textfeld ein:

```sql
-- ============================================
-- Tabelle 1: ROI-Rechner Berechnungen
-- ============================================
CREATE TABLE IF NOT EXISTS roi_calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  email TEXT,
  name TEXT,
  company TEXT,
  position TEXT,
  use_case TEXT NOT NULL,
  package TEXT,
  num_employees INTEGER NOT NULL,
  hourly_wage NUMERIC NOT NULL,
  weekly_hours NUMERIC NOT NULL,
  setup_cost NUMERIC NOT NULL,
  monthly_cost NUMERIC NOT NULL,
  timeframe_months INTEGER NOT NULL,
  ramp_up_months INTEGER NOT NULL,
  industry TEXT,
  priority TEXT,
  weekly_savings NUMERIC NOT NULL,
  total_savings NUMERIC NOT NULL,
  total_investment NUMERIC NOT NULL,
  net_benefit NUMERIC NOT NULL,
  roi_percent NUMERIC NOT NULL,
  amortization_months NUMERIC NOT NULL,
  productive_weeks NUMERIC NOT NULL,
  has_email BOOLEAN GENERATED ALWAYS AS (email IS NOT NULL) STORED,
  source TEXT DEFAULT 'roi_calculator'
);

CREATE INDEX IF NOT EXISTS idx_roi_calculations_created_at ON roi_calculations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_roi_calculations_email ON roi_calculations(email) WHERE email IS NOT NULL;

ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'roi_calculations' AND policyname = 'service_role_only'
  ) THEN
    CREATE POLICY "service_role_only" ON roi_calculations
      FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
END
$$;


-- ============================================
-- Tabelle 2: Kontaktformular Leads
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  vorname TEXT NOT NULL,
  nachname TEXT NOT NULL,
  email TEXT NOT NULL,
  firma TEXT NOT NULL,
  unternehmensgroesse TEXT NOT NULL,
  telefon TEXT,
  herausforderung TEXT NOT NULL,
  datenschutz_zugestimmt BOOLEAN NOT NULL DEFAULT true,
  source TEXT DEFAULT 'contact_form'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'leads' AND policyname = 'service_role_only'
  ) THEN
    CREATE POLICY "service_role_only" ON leads
      FOR ALL TO service_role USING (true) WITH CHECK (true);
  END IF;
END
$$;
```

4. Klicke auf den grünen Button **"Run"** (oder Strg+Enter)
5. Unten erscheint: **"Success. No rows returned"** → das ist korrekt!

---

## Schritt 4: Prüfen ob die Tabellen da sind

1. Im linken Menü auf **"Table Editor"** klicken (Tabellen-Icon)
2. Du solltest jetzt zwei Tabellen sehen:
   - `roi_calculations` ✓
   - `leads` ✓

Falls du sie nicht siehst, kurz die Seite neu laden.

---

## Schritt 5: API-Schlüssel kopieren

Du brauchst **3 Werte** – alle aus demselben Projekt, gelten für beide Formulare.

1. Im linken Menü auf **"Project Settings"** klicken (das Zahnrad-Icon ganz unten)
2. Dann auf **"API"** klicken

Du siehst jetzt eine Seite mit mehreren Schlüsseln:

### Wert 1: Project URL
- Unter **"Project URL"**
- Sieht so aus: `https://abcdefghijklm.supabase.co`
- Kopieren und irgendwo zwischenspeichern (z.B. Notepad)

### Wert 2: anon public key
- Unter **"Project API keys"** → **"anon public"**
- Ein sehr langer Text der mit `eyJ` beginnt
- Kopieren und zwischenspeichern

### Wert 3: service_role key
- Ebenfalls unter **"Project API keys"** → **"service_role"**
- Klicke auf **"Reveal"** um ihn sichtbar zu machen
- Ebenfalls ein langer Text der mit `eyJ` beginnt
- Kopieren und zwischenspeichern
- ⚠️ **Diesen Key niemals öffentlich teilen!**

---

## Schritt 6: Keys in die .env.local Datei eintragen

1. Öffne die Datei:
   ```
   C:\Claude Code Projekte\Landing Page AImation\aimation-landing\.env.local
   ```
   (z.B. mit Notepad oder VS Code)

2. Füge am Ende der Datei diese 3 Zeilen hinzu – ersetze die Platzhalter mit deinen kopierten Werten:

```
NEXT_PUBLIC_SUPABASE_URL=https://DEINE-URL.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...dein-anon-key...
SUPABASE_SERVICE_ROLE_KEY=eyJ...dein-service-role-key...
```

3. Datei speichern

---

## Schritt 7: Sag mir Bescheid

Wenn du Schritt 6 erledigt hast, schreib mir einfach **"fertig"** – dann baue ich den Rest (den Code) automatisch für beide Formulare ein.

---

## Überprüfen ob es funktioniert hat

Nachdem ich den Code eingebaut habe, kannst du es so testen:

**ROI-Rechner:**
1. Den ROI-Rechner auf der Website aufrufen und ausfüllen
2. In Supabase → **"Table Editor"** → **"roi_calculations"** → neuer Eintrag erscheint ✓

**Kontaktformular:**
1. Das Kontaktformular auf der Website ausfüllen und absenden
2. In Supabase → **"Table Editor"** → **"leads"** → neuer Eintrag erscheint ✓

---

## Bei Problemen

Falls etwas nicht klappt, mach einfach einen Screenshot und zeig ihn mir.
