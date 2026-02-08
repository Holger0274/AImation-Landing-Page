# Post-Registration Update Checklist

**Purpose:** Step-by-step guide for updating legal documents after business registration is complete

---

## When You Receive Your Steuernummer (Tax Number)

### ⚠️ IMPORTANT: Do NOT Publish Your Steuernummer

The regular tax number (Steuernummer) from the Finanzamt is **for internal use only** and should **NOT** be added to your Impressum.

**What to do:**
- ✅ Keep the Steuernummer for invoices and tax correspondence
- ❌ DO NOT add it to the Impressum or privacy policy
- ✅ Remove the placeholder line from the Impressum

**File to Update:** `/aimation-landing/app/impressum/page.tsx`

**Remove this section:**
```tsx
<strong>Steuernummer:</strong> [Wird nach Finanzamtsbescheid ergänzt]<br />
```

---

## When You Receive Your USt-IdNr (VAT ID)

### ✅ This MUST Be Published

The VAT ID (Umsatzsteuer-Identifikationsnummer) is mandatory to include in your Impressum if you have one.

**File to Update:** `/aimation-landing/app/impressum/page.tsx`

**Find this line (around line 27):**
```tsx
<strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong> [Wird nach Erteilung durch das Bundeszentralamt für Steuern ergänzt]
```

**Replace with:**
```tsx
<strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong> DE123456789
```
*(Replace DE123456789 with your actual VAT ID)*

**Also update the note below to remove or adjust:**
```tsx
<p className="text-sm text-gray-600 italic mt-2">
  Hinweis: Das Unternehmen befindet sich derzeit im Anmeldeverfahren. Die steuerlichen Angaben werden nach Erteilung durch die zuständigen Behörden unverzüglich ergänzt.
</p>
```

**Remove this entire note** once registration is complete.

---

## When You Have a Business Phone Number

**File to Update:** `/aimation-landing/app/impressum/page.tsx`

**Find this line (around line 18):**
```tsx
<strong>Telefon:</strong> [Wird nach Geschäftsanmeldung ergänzt]
```

**Replace with:**
```tsx
<strong>Telefon:</strong> +49 951 1234567
```
*(Replace with your actual phone number in international format)*

**Also update in:** `/aimation-landing/app/datenschutz/page.tsx`

**Find this section (around line 26):**
```tsx
<strong>Telefon:</strong> [Wird nach Geschäftsanmeldung ergänzt]
```

**Replace with:**
```tsx
<strong>Telefon:</strong> +49 951 1234567
```

---

## If You Receive Wirtschafts-Identifikationsnummer (W-IdNr.)

The new Business Identification Number (W-IdNr.) was introduced in 2024. If you receive one, it should be published.

**File to Update:** `/aimation-landing/app/impressum/page.tsx`

**Add this line after the USt-IdNr section (around line 28):**
```tsx
<strong>Wirtschafts-Identifikationsnummer (W-IdNr.):</strong> DE123456789<br />
```
*(Replace DE123456789 with your actual W-IdNr. – 9 digits after "DE")*

---

## Complete Example: Final Impressum Tax Section

After receiving all registrations, the tax section should look like this:

```tsx
<section className="mb-8">
  <h2 className="text-2xl font-semibold text-soft-black mb-4">
    Steuerliche Angaben
  </h2>
  <p className="text-soft-black leading-relaxed">
    <strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong> DE987654321<br />
    <strong>Wirtschafts-Identifikationsnummer (W-IdNr.):</strong> DE123456789
  </p>
</section>
```

**Note:** If you do NOT have a USt-IdNr (because you're below the VAT threshold or using Kleinunternehmerregelung), you can keep the placeholder or add:

```tsx
<p className="text-soft-black leading-relaxed">
  <strong>Kleinunternehmer gemäß § 19 UStG:</strong> Aufgrund der Anwendung der Kleinunternehmerregelung wird keine Umsatzsteuer ausgewiesen.
</p>
```

---

## Update Workflow

### Step 1: Edit the File
```bash
cd /mnt/c/Claude Code Projekte/Landing Page AImation/aimation-landing
code app/impressum/page.tsx
```

### Step 2: Make Changes
- Update phone number
- Update USt-IdNr (if applicable)
- Add W-IdNr (if received)
- Remove "im Anmeldeverfahren" note

### Step 3: Update Date Stamp
At the bottom of the Impressum page, the date is automatically updated based on the current date. No manual change needed.

### Step 4: Test Locally
```bash
npm run dev
```
Visit: http://localhost:3000/impressum

### Step 5: Deploy
```bash
git add app/impressum/page.tsx app/datenschutz/page.tsx
git commit -m "Update legal information after business registration"
git push
```

If hosted on Vercel, the deployment will happen automatically.

---

## Timeline Expectations

**Typical German Registration Timeline:**

1. **Gewerbeanmeldung (Trade Registration):**
   - Submit at local Gewerbeamt
   - Usually processed same day or within 1-2 days
   - Receive: Gewerbeschein (trade license certificate)

2. **Fragebogen zur steuerlichen Erfassung (Tax Registration):**
   - Automatically forwarded to Finanzamt OR submit directly if freelancer
   - Processing time: 2-6 weeks
   - Receive: Steuernummer (tax number) – **DO NOT PUBLISH**

3. **USt-IdNr (VAT ID):**
   - Only if you register for VAT or exceed thresholds
   - Request through Bundeszentralamt für Steuern
   - Processing time: 1-4 weeks after tax registration
   - Receive: USt-IdNr starting with "DE" + 9 digits – **MUST PUBLISH**

4. **W-IdNr (Business ID):**
   - Automatically assigned by tax office (new since 2024)
   - You may or may not receive this immediately
   - If received: **MUST PUBLISH**

**Total Expected Timeline:** 4-8 weeks from initial registration to receiving all numbers

---

## Compliance Deadline

**Legal Requirement:** You must update your Impressum **within a reasonable timeframe** after receiving official numbers from authorities.

**Recommended Timeline:** Update within **7 days** of receiving each number.

**Documentation:** Keep copies of all official letters from:
- Gewerbeamt (Gewerbeschein)
- Finanzamt (tax number notification)
- Bundeszentralamt für Steuern (VAT ID confirmation)

---

## What If You're Using Kleinunternehmerregelung?

**Kleinunternehmerregelung (§19 UStG):** Small business regulation for businesses under €22,000/year revenue.

**If you qualify:**
- You will NOT receive a USt-IdNr
- You do NOT charge VAT on invoices
- You SHOULD mention this in the Impressum (optional but recommended)

**Add this section instead of USt-IdNr:**
```tsx
<section className="mb-8">
  <h2 className="text-2xl font-semibold text-soft-black mb-4">
    Steuerliche Angaben
  </h2>
  <p className="text-soft-black leading-relaxed">
    Kleinunternehmer im Sinne von § 19 Abs. 1 UStG. Aufgrund der Kleinunternehmerregelung wird keine Umsatzsteuer berechnet.
  </p>
</section>
```

---

## Questions?

If you're unsure about:
- Whether to publish a specific number
- Which legal form you registered
- VAT registration requirements

**Contact:**
- Your local Gewerbeamt for business registration questions
- Your Finanzamt for tax questions
- A Steuerberater (tax advisor) for personalized advice
- A Fachanwalt für IT-Recht for legal questions

---

## Final Checklist After Registration Complete

- [ ] Steuernummer received (keep private, do NOT add to Impressum)
- [ ] USt-IdNr received (if applicable) → Add to Impressum
- [ ] W-IdNr received (if applicable) → Add to Impressum
- [ ] Business phone number active → Add to Impressum and Datenschutz
- [ ] "Im Anmeldeverfahren" note removed from Impressum
- [ ] Date stamp current (auto-updates)
- [ ] Changes tested locally
- [ ] Changes deployed to production
- [ ] Documentation saved (Gewerbeschein, tax letters, etc.)

---

*Checklist created: 2026-02-08*
*Valid for: German business registration (Einzelunternehmen / Sole Proprietorship)*
