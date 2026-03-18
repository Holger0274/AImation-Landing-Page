# Airtable Integration – Aufräumen & Neuanbindung

## Problem

Die Airtable-Anbindung für den ROI-Rechner existiert im Code, funktioniert aber nicht zuverlässig. Der User möchte den bestehenden (nicht funktionierenden) Code aufräumen und Airtable sauber neu anbinden.

## Ist-Zustand

### Vorhandene Dateien
- `lib/airtable.ts` – Hilfsfunktion `createAirtableRecord()` (REST API, korrekt implementiert)
- `app/api/send-roi-results/route.ts` – Nutzt `createAirtableRecord()` (Email + Airtable)
- `app/api/debug-airtable/route.ts` – Debug-Endpoint (Sicherheitsrisiko in Produktion)
- `e2e/test-roi-airtable.ts` + `.js` – Playwright-Tests (doppelt vorhanden)
- `specs/todo/roi-airtable-integration.md` – Alter Spec (überholt)
- `airtable-import.csv` – Test-Daten (1 Zeile)

### Was funktioniert
- ✅ `lib/airtable.ts` – Code ist korrekt (REST API mit Bearer Token, URL-Encoding für Tabellennamen)
- ✅ `route.ts` – Airtable-Fehler blockieren nicht die E-Mail-Zustellung
- ✅ Feldmapping mit Label-Übersetzung (position → "Geschäftsführer", etc.)

### Was NICHT funktioniert / unklar ist
- ❌ Wahrscheinlich fehlerhafte `.env.local`-Konfiguration (API Key, Base ID)
- ❌ Airtable-Tabelle existiert möglicherweise nicht oder hat falsche Feldnamen
- ❌ PAT-Token hat möglicherweise nicht den Scope `data.records:write`
- ❌ Debug-Endpoint ist ein Sicherheitsrisiko
- ❌ Doppelte Test-Dateien (TS + JS)
- ❌ Alter Spec-File ist überholt

## Ziel

1. Bestehenden Airtable-Code **aufräumen** (Unnötiges löschen)
2. Airtable-Tabelle korrekt einrichten (Anleitung)
3. Verbindung **testen und verifizieren**
4. Debug-Endpoint absichern oder entfernen

---

## Phase 1: Aufräumen – Unnötige Dateien entfernen

### Zu löschende Dateien
```
aimation-landing/app/api/debug-airtable/        → Sicherheitsrisiko, nicht nötig
aimation-landing/e2e/test-roi-airtable.js        → Duplikat (TS-Version reicht)
specs/todo/roi-airtable-integration.md           → Überholt durch diesen Plan
airtable-import.csv                              → Test-Daten, nicht mehr nötig
```

### Zu behaltende Dateien (funktionieren bereits korrekt)
```
aimation-landing/lib/airtable.ts                 → Behalten (Code ist gut)
aimation-landing/app/api/send-roi-results/route.ts → Behalten (Integration ist korrekt)
aimation-landing/e2e/test-roi-airtable.ts        → Behalten (TS-Version)
```

---

## Phase 2: Airtable-Tabelle einrichten (manuell durch User)

### Schritt-für-Schritt-Anleitung für Holger

#### 2.1 Personal Access Token erstellen
1. Gehe zu https://airtable.com/create/tokens
2. Klicke "Create new token"
3. **Name**: `AI.mation Landing Page`
4. **Scopes**:
   - `data.records:write` (Pflicht!)
   - `data.records:read` (für Debugging)
   - `schema.bases:read` (optional, für Debugging)
5. **Access**: Wähle die spezifische Base aus (nicht "All bases")
6. Token kopieren → In `.env.local` als `AIRTABLE_API_KEY` eintragen

#### 2.2 Tabelle "ROI-Rechner Leads" erstellen
In Airtable eine Tabelle mit **exakt** diesen Feldern erstellen:

| Feldname | Feldtyp | Hinweis |
|----------|---------|---------|
| Name | Single line text | |
| E-Mail | Email | |
| Firma | Single line text | |
| Position | Single select | Optionen: Geschäftsführer / Inhaber, Abteilungsleiter, IT-Leiter, Prozessverantwortlicher, Sonstige |
| Branche | Single select | Optionen: Produktion / Fertigung, Dienstleistung, Handel, IT / Software, Handwerk, Sonstige |
| Use Case | Single select | Optionen: Recherche & Analyse, Dokumentation & Reporting, Meeting-Zusammenfassungen, Eigene Werte |
| Paket | Single select | Optionen: Starter, Professional, Enterprise |
| Mitarbeiter | Number (Integer) | |
| Stundenlohn (€) | Number (Integer) | |
| Wochenstunden | Number (Integer) | |
| Setup-Kosten (€) | Number (Integer) | |
| Monatliche Kosten (€) | Number (Integer) | |
| Betrachtungszeitraum (Monate) | Number (Integer) | |
| Anlaufzeit (Monate) | Number (Integer) | |
| Jährliche Einsparung (€) | Number (Integer) | |
| Eingesparte Stunden/Jahr | Number (Integer) | |
| Kostenreduktion (%) | Number (Integer) | |
| ROI-Payback (Monate) | Number (Integer) | |
| Gesamteinsparung im Zeitraum (€) | Number (Integer) | |
| Gesamtkosten (€) | Number (Integer) | |
| Status | Single select | Optionen: Neu, Kontaktiert, Termin vereinbart, Abgeschlossen |

**WICHTIG**: Feldnamen müssen **exakt** übereinstimmen (Groß-/Kleinschreibung, Sonderzeichen, Klammern).

**Alternative**: Felder können auch als "Single line text" oder "Number" (statt Single Select) erstellt werden – dann spart man sich die Optionen-Pflege. Die API schreibt trotzdem korrekt.

#### 2.3 Base ID finden
1. Öffne die Base in Airtable
2. Die URL hat das Format: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Die Base ID ist der `appXXXXXXXXXXXXXX` Teil
4. In `.env.local` als `AIRTABLE_BASE_ID` eintragen

#### 2.4 `.env.local` vervollständigen
```env
# Airtable
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=ROI-Rechner Leads
```

---

## Phase 3: Verbesserungen am bestehenden Code

### 3.1 `lib/airtable.ts` – Besseres Logging hinzufügen

Das bestehende `airtable.ts` ist funktional korrekt, aber wir fügen besseres Error-Logging hinzu, damit man bei Problemen schneller die Ursache findet:

```typescript
export async function createAirtableRecord(
  fields: Record<string, string | number | null>
): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'ROI-Rechner Leads';

  if (!apiKey || !baseId) {
    console.warn('[Airtable] Nicht konfiguriert – AIRTABLE_API_KEY oder AIRTABLE_BASE_ID fehlt');
    return; // Kein Fehler werfen, nur warnen
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`[Airtable] Fehler ${response.status}: ${errorBody}`);
    throw new Error(`Airtable error (${response.status}): ${errorBody}`);
  }

  console.log('[Airtable] Record erfolgreich erstellt');
}
```

**Änderungen:**
- `console.warn` statt `throw` wenn nicht konfiguriert (verhindert Crashes in Dev-Umgebung)
- Statuscode im Error-Log
- Erfolgs-Log zur Bestätigung

### 3.2 `route.ts` – Calendly-URL aus Env-Variable

Zeile 155 hat einen hardcoded `https://calendly.com` Link. Sollte die echte Calendly-URL nutzen:

```typescript
// Vorher:
<a href="https://calendly.com" ...>

// Nachher:
<a href="${process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai'}" ...>
```

---

## Phase 4: Testen

### 4.1 Manueller Test via cURL

Nach dem Setup kann die Airtable-Verbindung direkt getestet werden:

```bash
curl -X POST "https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/ROI-Rechner%20Leads" \
  -H "Authorization: Bearer ${AIRTABLE_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "Name": "Test User",
      "E-Mail": "test@example.com",
      "Status": "Neu"
    }
  }'
```

Erwartete Antwort bei Erfolg: HTTP 200 mit `{ "id": "recXXX", "fields": {...} }`

### 4.2 Typische Fehler und Lösungen

| Fehler | Ursache | Lösung |
|--------|---------|--------|
| `401 Unauthorized` | API Key ungültig | Neuen PAT erstellen |
| `403 Forbidden` | PAT hat keinen Zugriff auf Base | Base in Token-Einstellungen hinzufügen |
| `404 Not Found` | Tabellenname stimmt nicht | Exakten Namen prüfen (Groß-/Kleinschreibung!) |
| `422 Unprocessable` | Feld existiert nicht in Tabelle | Feldnamen in Airtable prüfen |
| `422` mit "INVALID_VALUE_FOR_COLUMN" | Falscher Wert für Single Select | Optionen in Airtable anlegen oder Feldtyp ändern |
| `429 Too Many Requests` | Rate Limit (5 req/s) | Nicht relevant bei einzelnen Leads |

### 4.3 E2E-Test aktualisieren

Der bestehende `test-roi-airtable.ts` Playwright-Test kann genutzt werden. Er testet den kompletten Flow: Calculator ausfüllen → API aufrufen → Prüfen ob 200 zurückkommt.

---

## Phase 5: Vercel Deployment

### Environment Variables in Vercel setzen
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Folgende Variablen hinzufügen:
   - `AIRTABLE_API_KEY` = `patXXX...`
   - `AIRTABLE_BASE_ID` = `appXXX...`
   - `AIRTABLE_TABLE_NAME` = `ROI-Rechner Leads`
3. **Wichtig**: Für alle Environments setzen (Production, Preview, Development)
4. Re-deploy auslösen

---

## Zusammenfassung der Code-Änderungen

| Aktion | Datei | Was |
|--------|-------|-----|
| **Löschen** | `app/api/debug-airtable/` | Sicherheitsrisiko |
| **Löschen** | `e2e/test-roi-airtable.js` | Duplikat |
| **Löschen** | `specs/todo/roi-airtable-integration.md` | Überholt |
| **Löschen** | `airtable-import.csv` | Nicht nötig |
| **Ändern** | `lib/airtable.ts` | Besseres Logging, kein throw bei fehlender Config |
| **Ändern** | `app/api/send-roi-results/route.ts` | Calendly-URL aus Env-Variable |

## Erfolgskriterien

- [ ] Unnötige Dateien gelöscht
- [ ] Airtable-Tabelle in Airtable erstellt (durch User)
- [ ] PAT mit korrektem Scope erstellt (durch User)
- [ ] `.env.local` konfiguriert (durch User)
- [ ] cURL-Test gegen Airtable API erfolgreich
- [ ] ROI-Rechner schreibt Lead in Airtable
- [ ] Vercel Environment Variables gesetzt (für Deployment)
