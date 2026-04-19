# Vercel Deployment mit Custom Domain www.aimation.de (IONOS)

## Problem Statement

Die AI.mation Landing Page (Next.js) soll auf Vercel deployed werden. Die Domain `www.aimation.de` liegt bei IONOS und muss auf Vercel zeigen. Zusätzlich müssen alle Umgebungsvariablen (API-Keys) in Vercel konfiguriert werden.

## Ausgangslage

- **GitHub Repo**: `https://github.com/Holger0274/AImation-Landing-Page.git` (bereits vorhanden)
- **Framework**: Next.js mit App Router
- **Domain-Registrar**: IONOS (www.aimation.de)
- **Benötigte ENV-Variablen**: Resend API Key, Calendly URL, n8n Webhook URL

---

## Phase 1: Vercel-Konto und Projekt einrichten

### Schritt 1.1: Vercel-Konto anlegen

1. Gehe auf [vercel.com](https://vercel.com)
2. Klicke **Sign Up**
3. Wähle **Continue with GitHub** (damit Vercel direkt auf dein Repo zugreifen kann)
4. Autorisiere Vercel für dein GitHub-Konto

### Schritt 1.2: Projekt importieren

1. Im Vercel Dashboard: **Add New → Project**
2. Wähle das Repository **`AImation-Landing-Page`**
3. Vercel erkennt Next.js automatisch - keine weitere Konfiguration nötig
4. **Root Directory**: Setze es auf `aimation-landing` (wichtig, da das Next.js-Projekt in einem Unterordner liegt!)
   - Klicke auf **Edit** neben "Root Directory"
   - Gib `aimation-landing` ein
5. **Build & Output Settings**: Vercel erkennt automatisch:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Schritt 1.3: Umgebungsvariablen konfigurieren

Bevor du auf **Deploy** klickst, scrolle zu **Environment Variables** und füge diese Variablen hinzu:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | Dein Resend API Key | Production, Preview |
| `RESEND_FROM_EMAIL` | `noreply@aimation.de` | Production, Preview |
| `RESEND_TO_EMAIL` | Deine E-Mail-Adresse | Production, Preview |
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/holgerpeschke-hp/starter-15-minuten-ai` | Production, Preview |
| `N8N_WEBHOOK_URL` | Deine n8n Webhook URL | Production |

**Hinweis**: Werte findest du in `aimation-landing/.env.local` (diese Datei ist lokal vorhanden, wird aber nicht ins Git eingecheckt).

### Schritt 1.4: Erstes Deployment starten

1. Klicke **Deploy**
2. Vercel baut das Projekt (ca. 2-3 Minuten)
3. Nach erfolgreichem Build: Testlink `*.vercel.app` - dort die Seite prüfen

---

## Phase 2: Custom Domain konfigurieren

### Schritt 2.1: Domain in Vercel hinzufügen

1. Im Vercel-Projekt: **Settings → Domains**
2. Gib `www.aimation.de` ein und klicke **Add**
3. Gib auch `aimation.de` ein (Redirect auf www) und klicke **Add**
4. Vercel zeigt dir nun die benötigten DNS-Einträge an

Vercel wird dir **einen dieser zwei Eintragstypen** anzeigen:

**Option A - CNAME (für www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Option B - A-Record (für Apex/Root aimation.de):**
```
Type: A
Name: @
Value: 76.76.21.21
```

### Schritt 2.2: DNS bei IONOS konfigurieren

1. Gehe auf [mein.ionos.de](https://mein.ionos.de) und logge dich ein
2. Navigiere zu: **Domains & SSL → aimation.de → DNS verwalten**

**CNAME für www.aimation.de:**
- Klicke **Eintrag hinzufügen**
- Typ: `CNAME`
- Hostname: `www`
- Ziel: `cname.vercel-dns.com`
- TTL: `3600` (oder Standard)
- **Speichern**

**A-Record für aimation.de (Apex Domain):**
- Klicke **Eintrag hinzufügen**
- Typ: `A`
- Hostname: `@` (oder leer lassen für Root)
- Ziel: `76.76.21.21`
- TTL: `3600`
- **Speichern**

**Redirect von aimation.de → www.aimation.de:**
Falls IONOS bereits einen Redirect-Eintrag hat, entferne ihn. Vercel übernimmt das Redirect selbst, sobald beide Domains eingetragen sind.

### Schritt 2.3: SSL-Zertifikat abwarten

- Vercel stellt automatisch ein kostenloses SSL-Zertifikat (Let's Encrypt) aus
- DNS-Propagierung dauert **15 Minuten bis 48 Stunden** (meist < 1 Stunde)
- Status im Vercel Dashboard unter **Settings → Domains** prüfen
- Grünes Häkchen = Domain aktiv und SSL vorhanden

---

## Phase 3: Continuous Deployment einrichten

### Automatisches Deployment bei Git Push

Nach dem Setup deployed Vercel **automatisch** bei:
- **Push auf `main`** → Production Deployment (www.aimation.de)
- **Push auf andere Branches** → Preview Deployment (eigene Preview-URL)

Das bedeutet: Einfach Änderungen commiten und pushen, Vercel übernimmt den Rest.

### Workflow für zukünftige Änderungen:
```bash
# Im Projektordner
git add .
git commit -m "feat: update hero section"
git push origin main
# → Vercel deployed automatisch innerhalb von 2-3 Minuten
```

---

## Phase 4: Vercel-Konfigurationsdatei (Optional aber empfohlen)

Erstelle `aimation-landing/vercel.json` für optimale Konfiguration:

```json
{
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

- `"regions": ["fra1"]` = Frankfurt-Rechenzentrum (niedrige Latenz für DACH-Nutzer, DSGVO-freundlich)

---

## Phase 5: Post-Deployment Checks

Nach erfolgreichem Deployment prüfen:

### Funktionale Tests
- [ ] Startseite lädt korrekt auf `www.aimation.de`
- [ ] `aimation.de` redirectet auf `www.aimation.de`
- [ ] HTTPS aktiv (kein Browser-Warning)
- [ ] Kontaktformular funktioniert (Test-E-Mail senden)
- [ ] Calendly-Link öffnet korrekt
- [ ] Alle Bilder und Assets laden
- [ ] Mobile Ansicht korrekt (Browser DevTools)

### Performance Check
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) aufrufen mit `www.aimation.de`
- [ ] Lighthouse Score > 90 prüfen
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1

### SEO Check
- [ ] `robots.txt` erreichbar: `www.aimation.de/robots.txt`
- [ ] Sitemap erreichbar: `www.aimation.de/sitemap.xml`
- [ ] Open Graph Tags korrekt (Social Media Vorschau testen via [opengraph.xyz](https://www.opengraph.xyz/))

---

## Troubleshooting

### Build schlägt fehl
```bash
# Lokal testen ob Build funktioniert:
cd aimation-landing
npm run build
```
Fehlermeldung aus Vercel Build Log kopieren und beheben.

### Domain zeigt noch nicht auf Vercel
- DNS-Propagierung abwarten (bis 48h)
- DNS prüfen mit: `nslookup www.aimation.de` oder [whatsmydns.net](https://www.whatsmydns.net/)
- Bei IONOS: Alte A-Records oder CNAMEs für `www` löschen, falls vorhanden

### SSL-Zertifikat fehlt
- Im Vercel Dashboard → Domains → "Refresh" klicken
- DNS muss korrekt propagiert sein bevor SSL ausgestellt wird

### Umgebungsvariablen fehlen (API-Fehler)
- Vercel Dashboard → Settings → Environment Variables
- Sicherstellen dass alle Variablen für "Production" gesetzt sind
- Nach Änderungen: Neues Deployment triggern (Redeploy-Button)

---

## Kosten

| Service | Kosten |
|---------|--------|
| Vercel Hobby Plan | **Kostenlos** (ausreichend für Landing Page) |
| Vercel Pro Plan | $20/Monat (nötig bei Team, mehr Builds) |
| Vercel Serverless Functions | Im Hobby Plan: 100GB-Stunden/Monat kostenlos |
| Domain bei IONOS | Bereits vorhanden |
| SSL-Zertifikat | Kostenlos (automatisch via Let's Encrypt) |

**Empfehlung**: Hobby Plan ist für diese Landing Page vollkommen ausreichend.

---

## Erfolgs-Kriterien

- [ ] `www.aimation.de` lädt die Landing Page
- [ ] HTTPS aktiv, kein Zertifikatsfehler
- [ ] `aimation.de` redirected zu `www.aimation.de`
- [ ] Alle Formulare und Integrationen funktionieren
- [ ] Automatisches Deployment bei Git Push funktioniert
- [ ] Lighthouse Score > 85

---

## Zeitschätzung

| Phase | Aufwand |
|-------|---------|
| Vercel-Konto + Projekt einrichten | 15 Minuten |
| Umgebungsvariablen konfigurieren | 5 Minuten |
| DNS bei IONOS konfigurieren | 10 Minuten |
| DNS-Propagierung abwarten | 15 Minuten - 2 Stunden |
| Post-Deployment Checks | 15 Minuten |
| **Gesamt** | **~1 Stunde aktive Arbeit** |
