# ROI-Rechner → Airtable Integration

## Ziel

Alle Daten, die ein Nutzer im ROI-Rechner eingibt, sowie die berechneten Ergebnisse werden automatisch in eine Airtable-Datenbank übertragen. So hat Holger eine strukturierte Lead-Übersicht mit allen relevanten Informationen.

---

## Phase 1: Airtable-Datenbank einrichten

### 1.1 Airtable Account & Base erstellen

1. Gehe zu https://airtable.com und logge dich ein (oder erstelle kostenlosen Account)
2. Erstelle eine neue **Base** mit dem Namen: `AI.mation Leads`
3. Erstelle darin eine **Table** mit dem Namen: `ROI-Rechner Leads`

### 1.2 Spalten (Fields) anlegen

Lege folgende Felder in dieser Reihenfolge an:

| Feldname | Airtable-Typ | Beschreibung |
|---|---|---|
| `Name` | Single line text | Vor- und Nachname (optional vom User) |
| `E-Mail` | Email | E-Mail-Adresse (Pflichtfeld) |
| `Firma` | Single line text | Firmenname (optional) |
| `Position` | Single select | Rolle im Unternehmen |
| `Branche` | Single select | Branche des Unternehmens |
| `Use Case` | Single select | Ausgewählter Use Case |
| `Paket` | Single select | Ausgewähltes Paket (Starter/Professional/Enterprise) |
| `Mitarbeiter` | Number | Anzahl betroffener Mitarbeiter |
| `Stundenlohn (€)` | Number | Durchschnittlicher Bruttostundenlohn |
| `Wochenstunden` | Number | Einsparbare Stunden pro Woche/MA |
| `Setup-Kosten (€)` | Number | Einmalige Implementierungskosten |
| `Monatliche Kosten (€)` | Number | Laufende monatliche Kosten |
| `Betrachtungszeitraum (Monate)` | Number | Gesamtzeitraum für ROI-Berechnung |
| `Anlaufzeit (Monate)` | Number | Monate bis volle Produktivität |
| `Jährliche Einsparung (€)` | Number | Berechnetes Einsparpotenzial/Jahr |
| `Eingesparte Stunden/Jahr` | Number | Gesamte Arbeitsstunden gespart |
| `Kostenreduktion (%)` | Number | Prozentualer Kostenrückgang |
| `ROI-Payback (Monate)` | Number | Monate bis Amortisation |
| `Gesamteinsparung im Zeitraum (€)` | Number | Einsparung über den vollen Zeitraum |
| `Gesamtkosten (€)` | Number | Setup + monatliche Kosten gesamt |
| `Erstellt am` | Date | Automatisch: Datum des Eintrags |
| `Status` | Single select | Lead-Status (neu/kontaktiert/abgeschlossen) |
| `Notizen` | Long text | Interne Notizen für Holger |

**Single Select-Optionen:**

*Position:*
- Geschäftsführer / Inhaber
- Abteilungsleiter
- IT-Leiter
- Prozessverantwortlicher
- Sonstige

*Branche:*
- Produktion / Fertigung
- Dienstleistung
- Handel
- IT / Software
- Handwerk
- Sonstige

*Use Case:*
- Recherche & Analyse
- Dokumentation & Reporting
- Meeting-Zusammenfassungen
- Eigene Werte

*Paket:*
- Starter
- Professional
- Enterprise

*Status:*
- Neu
- Kontaktiert
- In Gespräch
- Abgeschlossen
- Nicht qualifiziert

---

## Phase 2: Airtable API Key beschaffen

### 2.1 Personal Access Token erstellen

1. Gehe zu https://airtable.com/create/tokens
2. Klicke auf **"Create new token"**
3. Name: `AI.mation Landing Page`
4. Scopes (Berechtigungen) auswählen:
   - `data.records:write` (Datensätze schreiben)
   - `data.records:read` (optional, zum Testen)
5. Access: Wähle die Base `AI.mation Leads`
6. Klicke **"Create token"**
7. **Token sofort kopieren!** Er wird nur einmal angezeigt.

### 2.2 Base ID herausfinden

1. Öffne deine Airtable Base im Browser
2. Die URL sieht so aus: `https://airtable.com/appXXXXXXXXXXXXXX/tblXXXXXXXXXXXXXX/...`
3. Die **Base ID** beginnt mit `app` - z.B. `appABC123`
4. Die **Table ID** beginnt mit `tbl` - z.B. `tblXYZ789`
   - Alternativ: Einfach den Tabellennamen `ROI-Rechner Leads` verwenden (funktioniert auch)

### 2.3 API Keys in .env.local speichern

Die API Keys kommen in die Datei `aimation-landing/.env.local` (diese Datei ist in `.gitignore` und wird NICHT nach GitHub gepusht - sicher!).

Füge folgende Zeilen hinzu:

```
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX   # Dein Personal Access Token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX   # Base ID aus der URL
AIRTABLE_TABLE_NAME=ROI-Rechner Leads  # Name der Tabelle
```

**Wichtig für Vercel-Deployment:**
In Vercel unter Settings → Environment Variables dieselben drei Variablen eintragen. Ohne das funktioniert die Integration auf der Live-Seite nicht.

---

## Phase 3: Code-Implementierung

### 3.1 Airtable-Hilfsfunktion erstellen

Neue Datei: `aimation-landing/lib/airtable.ts`

```typescript
interface AirtableRecord {
  fields: Record<string, string | number | null>;
}

export async function createAirtableRecord(fields: AirtableRecord['fields']): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'ROI-Rechner Leads';

  if (!apiKey || !baseId) {
    throw new Error('Airtable not configured');
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Airtable error: ${error}`);
  }
}
```

### 3.2 API-Route erweitern

Datei: `aimation-landing/app/api/send-roi-results/route.ts`

Die bestehende POST-Funktion wird um den Airtable-Call ergänzt. Nach dem erfolgreichen E-Mail-Versand (oder unabhängig davon) wird ein Record in Airtable erstellt.

**Mapping der Daten zu Airtable-Feldern:**

```typescript
import { createAirtableRecord } from '@/lib/airtable';

// In der POST-Funktion nach dem E-Mail-Versand:
const useCaseLabels: Record<string, string> = {
  research: 'Recherche & Analyse',
  documentation: 'Dokumentation & Reporting',
  meetings: 'Meeting-Zusammenfassungen',
  custom: 'Eigene Werte',
};

const packageLabels: Record<string, string> = {
  starter: 'Starter',
  professional: 'Professional',
  enterprise: 'Enterprise',
};

const positionLabels: Record<string, string> = {
  ceo: 'Geschäftsführer / Inhaber',
  department_head: 'Abteilungsleiter',
  it_head: 'IT-Leiter',
  process_owner: 'Prozessverantwortlicher',
  other: 'Sonstige',
};

const industryLabels: Record<string, string> = {
  production: 'Produktion / Fertigung',
  service: 'Dienstleistung',
  trade: 'Handel',
  it: 'IT / Software',
  craft: 'Handwerk',
  other: 'Sonstige',
};

try {
  await createAirtableRecord({
    'Name': data.name || null,
    'E-Mail': data.email,
    'Firma': data.company || null,
    'Position': positionLabels[data.position || ''] || data.position || null,
    'Branche': industryLabels[data.industry || ''] || null,
    'Use Case': useCaseLabels[data.input.useCase] || data.input.useCase,
    'Paket': packageLabels[data.input.package] || data.input.package,
    'Mitarbeiter': data.input.numEmployees,
    'Stundenlohn (€)': data.input.hourlyWage,
    'Wochenstunden': data.input.weeklyHours,
    'Setup-Kosten (€)': data.input.setupCost,
    'Monatliche Kosten (€)': data.input.monthlyCost,
    'Betrachtungszeitraum (Monate)': data.input.timeframMonths,
    'Anlaufzeit (Monate)': data.input.rampUpMonths,
    'Jährliche Einsparung (€)': data.results.annualSavings,
    'Eingesparte Stunden/Jahr': data.results.hoursSaved,
    'Kostenreduktion (%)': data.results.costReduction,
    'ROI-Payback (Monate)': data.results.roiMonths,
    'Gesamteinsparung im Zeitraum (€)': data.results.totalSavings || null,
    'Gesamtkosten (€)': data.results.totalCosts || null,
    'Status': 'Neu',
  });
} catch (airtableError) {
  // Fehler loggen aber nicht nach außen propagieren
  // E-Mail-Ergebnis soll auch bei Airtable-Fehler angezeigt werden
  console.error('Airtable sync failed:', airtableError);
}
```

### 3.3 TypeScript-Interface erweitern

Das `ROIResultsRequest`-Interface in `route.ts` muss um die fehlenden Felder erweitert werden:

```typescript
interface ROIResultsRequest {
  email: string;
  name?: string;
  company?: string;
  position?: string;
  industry?: string;
  input: {
    useCase: string;
    package: string;
    numEmployees: number;
    hourlyWage: number;
    weeklyHours: number;
    setupCost: number;
    monthlyCost: number;
    timeframMonths: number;
    rampUpMonths: number;
  };
  results: {
    annualSavings: number;
    hoursSaved: number;
    costReduction: number;
    roiMonths: number;
    weeklyHoursSaved: number;
    totalSavings?: number;
    totalCosts?: number;
  };
}
```

---

## Phase 4: Testen

### 4.1 Lokaler Test

```bash
# .env.local muss befüllt sein, dann:
cd aimation-landing
npm run dev
```

1. ROI-Rechner im Browser öffnen
2. Alle Schritte durchgehen und absenden
3. In Airtable prüfen: Erscheint der neue Datensatz?
4. Konsole auf Fehler prüfen

### 4.2 Fehlerszenarien prüfen

- Airtable offline → E-Mail trotzdem gesendet, kein Absturz
- Fehlende optionale Felder (Name, Firma) → `null`-Werte akzeptiert
- Falsches API Key → Fehler wird geloggt, User sieht trotzdem Ergebnis

---

## Erfolgs-Kriterien

- [ ] Airtable Base mit allen Feldern angelegt
- [ ] Personal Access Token erstellt und in `.env.local` eingetragen
- [ ] `lib/airtable.ts` erstellt
- [ ] `api/send-roi-results/route.ts` erweitert
- [ ] Lokaler Test erfolgreich: Datensatz erscheint in Airtable
- [ ] Airtable-Fehler verhindert nicht die Anzeige des ROI-Ergebnisses
- [ ] Vercel Environment Variables gesetzt (für Live-Betrieb)

---

## Wichtige Hinweise

**Sicherheit:**
- API Keys NIEMALS in den Code schreiben
- Nur in `.env.local` (lokal) und Vercel Environment Variables (live)
- `.env.local` ist bereits in `.gitignore` - wird nicht nach GitHub gepusht

**Kosten:**
- Airtable Free Plan: bis zu 1.000 Records pro Base - reicht für den Start
- Bei mehr Leads: Airtable Plus Plan (~10 $/Monat)

**Datenschutz (DSGVO):**
- Airtable speichert Daten auf US-Servern
- Im Impressum/Datenschutz erwähnen: "Daten werden in Airtable gespeichert"
- Alternativ: Make.com als Zwischenschicht für mehr Kontrolle

---

## Nächster Schritt

```
/build specs/todo/roi-airtable-integration.md
```
