# Supabase Keys in Vercel eintragen

## Das Problem

Deine Website läuft auf Vercel. Vercel kennt deine lokalen Dateien **nicht** — alle geheimen Keys müssen dort **manuell** eingetragen werden.

---

## Schritt 1: In Vercel einloggen

1. Gehe zu **vercel.com** und logge dich ein
2. Klicke auf dein Projekt **aimation-landing**

---

## Schritt 2: Zu Environment Variables navigieren

1. Klicke oben auf **Settings** (Einstellungen)
2. Im linken Menü klicke auf **Environment Variables**

---

## Schritt 3: Diese 3 Keys prüfen / eintragen

Du brauchst genau diese Keys (die Werte findest du unten):

| Name | Wert |
|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://oaysghdhsabghakgvvzv.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` (langer Text) |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGci...` (anderer langer Text) |

Die genauen Werte stehen in deiner lokalen Datei `.env.local` im Projekt-Ordner — offne sie mit einem Texteditor (z.B. VS Code oder Notepad).

**So tragst du einen Key ein:**

1. Klicke auf **Add New**
2. Bei **Name**: den Key-Namen einfugen (z.B. `SUPABASE_SERVICE_ROLE_KEY`)
3. Bei **Value**: den Wert einfugen
4. Stelle sicher, dass alle drei Umgebungen ausgewahlt sind: **Production**, **Preview**, **Development**
5. Klicke **Save**

---

## Schritt 4: Neu deployen

Nach dem Eintragen der Keys muss die Website einmal neu gebaut werden:

1. Klicke oben auf **Deployments**
2. Klicke beim neuesten Deployment auf die **drei Punkte** (...)
3. Wahle **Redeploy**
4. Bestatige mit **Redeploy**

---

## Schritt 5: Testen

1. Gehe auf deine Live-Website
2. Fulle ein Formular aus (z.B. Lead-Formular oder ROI-Rechner)
3. Prufe in Supabase → **Table Editor** → Tabelle `leads` ob ein neuer Eintrag erscheint

---

## Falls es immer noch nicht klappt

Gehe in Vercel → **Deployments** → klicke auf das neueste → **Functions** → `/api/lead` → dort siehst du die Fehlermeldungen in Echtzeit.
