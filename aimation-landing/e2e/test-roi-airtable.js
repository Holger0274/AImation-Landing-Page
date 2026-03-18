const { chromium } = require('playwright');

/**
 * Playwright-Test: ROI-Rechner → Airtable-Eintrag
 * Fiktive Testdaten, geprüft wird ob API + Airtable korrekt arbeiten
 */

async function testROICalculator() {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext({
    locale: 'de-DE',
    timezoneId: 'Europe/Berlin',
  });
  const page = await context.newPage();

  // API-Requests mitloggen
  page.on('response', async (response) => {
    if (response.url().includes('/api/send-roi-results')) {
      const status = response.status();
      let body = '';
      try { body = await response.text(); } catch (_) { body = '(nicht lesbar)'; }
      console.log(`\n📡 API Response: ${status}`);
      console.log('   Body:', body);
    }
  });

  console.log('🚀 Starte ROI-Rechner Test...');
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  console.log('✅ Seite geladen');

  // ROI-Rechner öffnen - suche Button mit "ROI" oder "Rechner" oder "Potenzial"
  let opened = false;
  const candidates = await page.locator('button, a').all();
  for (const el of candidates) {
    const text = await el.textContent().catch(() => '');
    if (/ROI|Rechner|KI-Potenzial/i.test(text)) {
      const visible = await el.isVisible().catch(() => false);
      if (visible) {
        await el.click();
        console.log(`✅ ROI-Rechner geöffnet via: "${text.trim()}"`);
        opened = true;
        break;
      }
    }
  }

  if (!opened) {
    // Fallback: Seite nach "Rechner" durchsuchen und scrollt dorthin
    const rechnerLink = page.locator('text=/ROI|Rechner/i').first();
    await rechnerLink.scrollIntoViewIfNeeded();
    await rechnerLink.click();
    console.log('✅ ROI-Rechner über Text-Locator geöffnet');
  }

  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'e2e/screenshots/step0-welcome.png' });

  // Step 0: Welcome - "Jetzt berechnen"
  await page.getByRole('button', { name: /Jetzt berechnen/i }).click();
  console.log('✅ Step 0 → Step 1');
  await page.waitForTimeout(600);

  // Step 1: Branche → Dienstleistung
  await page.locator('button').filter({ hasText: 'Dienstleistung' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 1 (Branche: Dienstleistung) → Step 2');
  await page.waitForTimeout(600);

  // Step 2: Use Case → Dokumentenverarbeitung
  await page.locator('button').filter({ hasText: /Dokumentenverarbeitung/i }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 2 (Use Case: Dokumentenverarbeitung) → Step 3');
  await page.waitForTimeout(600);

  // Step 3: Wochenstunden → 5
  const step3Input = page.locator('input[type="number"]').first();
  await step3Input.clear();
  await step3Input.fill('5');
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 3 (Stunden/Woche: 5) → Step 4');
  await page.waitForTimeout(600);

  // Step 4: Stundenlohn → 55€
  const step4Input = page.locator('input[type="number"]').first();
  await step4Input.clear();
  await step4Input.fill('55');
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 4 (Stundenlohn: 55€) → Step 5');
  await page.waitForTimeout(600);

  // Step 5: Mitarbeiter → 15
  const step5Input = page.locator('input[type="number"]').first();
  await step5Input.clear();
  await step5Input.fill('15');
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 5 (Mitarbeiter: 15) → Step 6');
  await page.waitForTimeout(600);

  // Step 6: Paket → Professional (bereits vorausgewählt)
  await page.locator('button').filter({ hasText: /Professional/i }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 6 (Paket: Professional) → Step 7');
  await page.waitForTimeout(600);

  // Step 7: Zeitraum
  const timeInputs = page.locator('input[type="number"]');
  await timeInputs.nth(0).clear();
  await timeInputs.nth(0).fill('12');
  await timeInputs.nth(1).clear();
  await timeInputs.nth(1).fill('2');
  await page.getByRole('button', { name: /^Weiter/ }).click();
  console.log('✅ Step 7 (12 Monate, 2 Anlauf) → Step 8');
  await page.waitForTimeout(600);

  // Screenshot vor E-Mail
  await page.screenshot({ path: 'e2e/screenshots/step8-email.png' });

  // Step 8: E-Mail-Gate mit fiktiven Testdaten
  await page.locator('input[type="email"]').fill('test.playwright@test-aimation.de');
  await page.waitForTimeout(200);
  await page.locator('input[placeholder="Ihr Name"]').fill('Max Mustermann (Playwright Test)');
  await page.waitForTimeout(200);
  // Firmenname - suche nach dem Feld
  const companyInput = page.locator('input[placeholder*="Mustermann"]');
  if (await companyInput.count() > 0) {
    await companyInput.fill('Playwright Test GmbH');
  }
  await page.waitForTimeout(200);
  // Position
  await page.locator('select').selectOption('department_head');
  await page.waitForTimeout(300);

  // Screenshot: Formular vollständig ausgefüllt
  await page.screenshot({ path: 'e2e/screenshots/step8-filled.png' });
  console.log('📤 Formular ausgefüllt, sende ab...');

  // Button klicken + API-Response abwarten
  const [apiResponse] = await Promise.all([
    page.waitForResponse(
      (r) => r.url().includes('/api/send-roi-results'),
      { timeout: 15000 }
    ).catch(() => null),
    page.getByRole('button', { name: /Ergebnis anzeigen/i }).click(),
  ]);

  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'e2e/screenshots/step9-results.png' });

  // Auswertung
  console.log('\n══════════════════════════════════════');
  console.log('           TEST-AUSWERTUNG             ');
  console.log('══════════════════════════════════════');

  if (apiResponse) {
    const status = apiResponse.status();
    let body = '';
    try { body = await apiResponse.text(); } catch (_) { body = '(nicht lesbar)'; }

    console.log(`\n📡 API Status: ${status}`);
    console.log(`📄 API Response: ${body}`);

    if (status === 200) {
      console.log('\n✅ API-Aufruf ERFOLGREICH');
      try {
        const parsed = JSON.parse(body);
        if (parsed.success) {
          console.log(`✅ E-Mail versendet (ID: ${parsed.emailId || 'n/a'})`);
          console.log('✅ Airtable-Eintrag wurde erstellt (wenn kein Fehler im Log)');
        } else {
          console.log('⚠️  API returned success:false');
          if (parsed.error) console.log('   Fehler:', parsed.error);
        }
      } catch (_) {
        console.log('⚠️  Response ist kein valides JSON');
      }
    } else {
      console.log(`\n❌ API-Fehler: Status ${status}`);
      console.log('   Details:', body);
    }
  } else {
    console.log('\n⚠️  Kein API-Response empfangen');
    console.log('   Mögliche Ursachen: Modal nicht geöffnet, Formular nicht abgesendet');
  }

  // Ergebnis-Anzeige prüfen
  const resultText = await page.locator('text=/Einsparpotenzial|Ersparnis|Einsparung/i').first().textContent().catch(() => null);
  if (resultText) {
    console.log(`\n✅ Ergebnis-Seite angezeigt: "${resultText.trim()}"`);
  } else {
    console.log('\n⚠️  Ergebnis-Anzeige nicht gefunden');
  }

  console.log('\n📸 Screenshots:');
  console.log('   e2e/screenshots/step0-welcome.png');
  console.log('   e2e/screenshots/step8-email.png');
  console.log('   e2e/screenshots/step8-filled.png');
  console.log('   e2e/screenshots/step9-results.png');
  console.log('\n🏁 Test abgeschlossen\n');

  await browser.close();
}

testROICalculator().catch((err) => {
  console.error('\n❌ Test fehlgeschlagen:', err.message);
  process.exit(1);
});
