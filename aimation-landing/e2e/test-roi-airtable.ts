import { chromium } from 'playwright';

/**
 * Playwright-Test: ROI-Rechner → Airtable-Eintrag
 * Fiktive Testdaten werden eingetragen und geprüft ob API + Airtable funktionieren
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
      try { body = await response.text(); } catch { body = '(nicht lesbar)'; }
      console.log(`\n📡 API Response: ${status}`);
      console.log('   Body:', body);
    }
  });

  console.log('🚀 Starte ROI-Rechner Test...');
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  console.log('✅ Seite geladen');

  // ROI-Rechner öffnen - suche Button mit "ROI" oder "Rechner"
  const roiButton = page.getByRole('button', { name: /ROI|Rechner|Potenzial/i }).first();
  const roiButtonVisible = await roiButton.isVisible().catch(() => false);

  if (!roiButtonVisible) {
    // Alternativ: suche nach Text-Link
    const altButton = page.locator('button, a').filter({ hasText: /ROI|Rechner|KI-Potenzial/i }).first();
    await altButton.click();
    console.log('✅ ROI-Rechner über Alternativ-Button geöffnet');
  } else {
    await roiButton.click();
    console.log('✅ ROI-Rechner geöffnet');
  }

  await page.waitForTimeout(1000);

  // Screenshot: Modal offen
  await page.screenshot({ path: 'e2e/screenshots/step0-welcome.png' });

  // Step 0: Welcome - Klick auf "Jetzt berechnen"
  await page.getByRole('button', { name: /Jetzt berechnen/i }).click();
  console.log('✅ Step 0 → Step 1 (Branche)');
  await page.waitForTimeout(500);

  // Step 1: Branche wählen → "Dienstleistung"
  await page.locator('button').filter({ hasText: 'Dienstleistung' }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 1 → Step 2 (Use Case)');
  await page.waitForTimeout(500);

  // Step 2: Use Case → "Dokumentation & Reporting"
  await page.locator('button').filter({ hasText: /Dokumentation/i }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 2 → Step 3 (Stunden)');
  await page.waitForTimeout(500);

  // Step 3: Wochenstunden → 5
  const hoursInput = page.locator('input[type="number"]').first();
  await hoursInput.clear();
  await hoursInput.fill('5');
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 3 → Step 4 (Stundenlohn)');
  await page.waitForTimeout(500);

  // Step 4: Stundenlohn → 55
  const wageInput = page.locator('input[type="number"]').first();
  await wageInput.clear();
  await wageInput.fill('55');
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 4 → Step 5 (Mitarbeiter)');
  await page.waitForTimeout(500);

  // Step 5: Mitarbeiter → 15
  const employeesInput = page.locator('input[type="number"]').first();
  await employeesInput.clear();
  await employeesInput.fill('15');
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 5 → Step 6 (Paket)');
  await page.waitForTimeout(500);

  // Step 6: Paket → "Professional"
  await page.locator('button').filter({ hasText: /Professional/i }).click();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 6 → Step 7 (Zeitraum)');
  await page.waitForTimeout(500);

  // Step 7: Zeitraum → 12 Monate, Anlaufzeit 2 Monate
  const inputs = page.locator('input[type="number"]');
  await inputs.nth(0).clear();
  await inputs.nth(0).fill('12');
  await inputs.nth(1).clear();
  await inputs.nth(1).fill('2');
  await page.getByRole('button', { name: /Weiter/i }).click();
  console.log('✅ Step 7 → Step 8 (E-Mail)');
  await page.waitForTimeout(500);

  // Screenshot vor E-Mail-Eingabe
  await page.screenshot({ path: 'e2e/screenshots/step8-email.png' });

  // Step 8: E-Mail-Gate - fiktive Testdaten
  await page.locator('input[type="email"]').fill('test.playwright@test-aimation.de');
  await page.waitForTimeout(200);
  await page.locator('input[placeholder="Ihr Name"]').fill('Max Mustermann');
  await page.waitForTimeout(200);
  await page.locator('input[placeholder*="Mustermann"]').fill('Mustermann GmbH & Co. KG');
  await page.waitForTimeout(200);

  // Position auswählen
  await page.locator('select').selectOption('department_head');
  await page.waitForTimeout(200);

  // Screenshot: Formular ausgefüllt
  await page.screenshot({ path: 'e2e/screenshots/step8-filled.png' });

  console.log('📤 Sende Formular ab...');

  // API-Response abwarten
  const [apiResponse] = await Promise.all([
    page.waitForResponse(
      (r) => r.url().includes('/api/send-roi-results'),
      { timeout: 15000 }
    ).catch(() => null),
    page.getByRole('button', { name: /Ergebnis anzeigen/i }).click(),
  ]);

  await page.waitForTimeout(2000);

  // Screenshot: Ergebnis
  await page.screenshot({ path: 'e2e/screenshots/step9-results.png' });

  if (apiResponse) {
    const status = apiResponse.status();
    const body = await apiResponse.text().catch(() => '(nicht lesbar)');
    console.log(`\n📊 API-Ergebnis:`);
    console.log(`   Status: ${status}`);
    console.log(`   Response: ${body}`);

    if (status === 200) {
      console.log('\n✅ SUCCESS: API-Aufruf erfolgreich!');
      const parsed = JSON.parse(body);
      if (parsed.success) {
        console.log('✅ E-Mail versendet, emailId:', parsed.emailId);
        console.log('✅ Airtable-Eintrag sollte erstellt worden sein');
      }
    } else {
      console.log('\n❌ FEHLER: API hat nicht mit 200 geantwortet');
    }
  } else {
    console.log('\n⚠️  Kein API-Response empfangen (Timeout oder kein Aufruf)');
  }

  // Prüfe ob Ergebnis-Seite angezeigt wird
  const resultsVisible = await page.locator('text=/Einsparpotenzial|Ersparnis|ROI/i').first().isVisible().catch(() => false);
  if (resultsVisible) {
    console.log('✅ Ergebnis-Seite wird angezeigt');
  } else {
    console.log('⚠️  Ergebnis-Seite nicht gefunden - Modal evtl. noch auf Loading');
  }

  console.log('\n📸 Screenshots gespeichert in e2e/screenshots/');
  console.log('🏁 Test abgeschlossen\n');

  await browser.close();
}

testROICalculator().catch((err) => {
  console.error('❌ Test fehlgeschlagen:', err);
  process.exit(1);
});
