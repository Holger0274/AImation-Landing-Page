import { test, expect } from '@playwright/test';
import {
  setupAllMocks,
  mockLeadAPI,
  mockCalendlyRedirect,
  waitForCalendlyRedirect,
} from '../mocks/api-mocks';
import { LeadFormModalPage } from '../page-objects/lead-form-modal.page';
import { HeroPage } from '../page-objects/hero.page';
import {
  validLeadFormData,
  invalidLeadFormData,
} from '../fixtures/test-data';

/**
 * Lead Form Modal Tests
 *
 * Tests form validation, submission, Calendly redirect,
 * and all error scenarios.
 */

test.describe('Lead Form Modal - Opening and Closing', () => {
  let heroPage: HeroPage;
  let leadFormPage: LeadFormModalPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');

    heroPage = new HeroPage(page);
    leadFormPage = new LeadFormModalPage(page);
  });

  test('lead form modal opens when clicking hero CTA', async () => {
    await heroPage.clickPrimaryCTA();
    await leadFormPage.expectModalVisible();
  });

  test('modal closes when clicking close button', async () => {
    await heroPage.clickPrimaryCTA();
    await leadFormPage.expectModalVisible();

    await leadFormPage.closeWithButton();
    await leadFormPage.expectModalNotVisible();
  });

  test('modal closes when clicking overlay', async () => {
    await heroPage.clickPrimaryCTA();
    await leadFormPage.expectModalVisible();

    await leadFormPage.closeWithOverlay();
    await leadFormPage.expectModalNotVisible();
  });

  test('modal closes on Escape key', async ({ page }) => {
    await heroPage.clickPrimaryCTA();
    await leadFormPage.expectModalVisible();

    await page.keyboard.press('Escape');
    await leadFormPage.expectModalNotVisible();
  });
});

test.describe('Lead Form Validation', () => {
  let heroPage: HeroPage;
  let leadFormPage: LeadFormModalPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');

    heroPage = new HeroPage(page);
    leadFormPage = new LeadFormModalPage(page);

    // Open modal
    await heroPage.clickPrimaryCTA();
    await leadFormPage.waitForModalToAppear();
  });

  test('shows validation errors for empty form submission', async () => {
    await leadFormPage.submit();

    // Should show multiple validation errors
    await leadFormPage.expectValidationErrors();
  });

  test('validates first name minimum length', async ({ page }) => {
    await leadFormPage.vornameInput.fill('A'); // Too short
    await leadFormPage.vornameInput.blur();

    await page.waitForTimeout(500);
    await leadFormPage.expectFieldError('vorname');
  });

  test('validates email format', async () => {
    await leadFormPage.emailValidation();
  });

  test('validates company size selection is required', async () => {
    // Fill all fields except company size
    await leadFormPage.vornameInput.fill(validLeadFormData.vorname);
    await leadFormPage.nachnameInput.fill(validLeadFormData.nachname);
    await leadFormPage.emailInput.fill(validLeadFormData.email);
    await leadFormPage.firmaInput.fill(validLeadFormData.firma);
    // Skip unternehmensgroesse
    await leadFormPage.herausforderungTextarea.fill(
      validLeadFormData.herausforderung
    );
    await leadFormPage.privacyCheckbox.check();

    await leadFormPage.submit();

    // Should show error for unternehmensgroesse
    await leadFormPage.expectValidationErrors();
  });

  test('validates challenge text minimum length (10 chars)', async ({ page }) => {
    await leadFormPage.herausforderungTextarea.fill('Zu kurz'); // 8 chars
    await leadFormPage.herausforderungTextarea.blur();

    await page.waitForTimeout(500);
    await leadFormPage.expectFieldError('herausforderung');
  });

  test('enforces challenge text maximum length (500 chars)', async () => {
    await leadFormPage.expectCharacterLimitsEnforced();
  });

  test('validates privacy checkbox is required', async () => {
    // Fill all fields except privacy
    await leadFormPage.fillForm({
      ...validLeadFormData,
    });

    // Uncheck privacy
    await leadFormPage.privacyCheckbox.uncheck();

    await leadFormPage.submit();

    // Should show error for privacy
    await leadFormPage.expectFieldError('datenschutz');
  });

  test('phone number is optional', async () => {
    // Fill form without phone number
    const dataWithoutPhone = { ...validLeadFormData };
    delete dataWithoutPhone.telefon;

    await leadFormPage.fillForm(dataWithoutPhone);

    // Should not show error (phone is optional)
    await leadFormPage.expectNoErrors();
  });
});

test.describe('Lead Form Submission', () => {
  let heroPage: HeroPage;
  let leadFormPage: LeadFormModalPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await mockLeadAPI(page); // Mock successful response
    await mockCalendlyRedirect(page); // Track Calendly redirect

    await page.goto('/');

    heroPage = new HeroPage(page);
    leadFormPage = new LeadFormModalPage(page);

    // Open modal
    await heroPage.clickPrimaryCTA();
    await leadFormPage.waitForModalToAppear();
  });

  test('successful submission shows loading state', async () => {
    await leadFormPage.fillForm(validLeadFormData);
    await leadFormPage.submit();

    // Should show loading spinner briefly
    await leadFormPage.expectLoadingSpinnerVisible();
  });

  test('successful submission redirects to Calendly with pre-filled data', async ({
    page,
  }) => {
    await leadFormPage.fillForm(validLeadFormData);
    await leadFormPage.submit();

    // Wait for Calendly redirect
    const calendlyURL = await waitForCalendlyRedirect(page);

    // Should redirect to Calendly
    expect(calendlyURL).toContain('calendly.com');

    // Should pre-fill name and email
    expect(calendlyURL).toContain(
      `prefill[name]=${validLeadFormData.vorname} ${validLeadFormData.nachname}`
    );
    expect(calendlyURL).toContain(`prefill[email]=${validLeadFormData.email}`);
  });

  test('successful submission includes all form data in API call', async ({
    page,
  }) => {
    let submittedData: any = null;

    // Intercept API call to check payload
    await page.route('**/api/lead', async (route) => {
      const request = route.request();
      submittedData = request.postDataJSON();

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          calendlyUrl: 'https://calendly.com/mock',
        }),
      });
    });

    await leadFormPage.fillForm(validLeadFormData);
    await leadFormPage.submit();

    // Wait for submission
    await page.waitForTimeout(1000);

    // Check submitted data
    expect(submittedData).not.toBeNull();
    expect(submittedData.vorname).toBe(validLeadFormData.vorname);
    expect(submittedData.nachname).toBe(validLeadFormData.nachname);
    expect(submittedData.email).toBe(validLeadFormData.email);
    expect(submittedData.firma).toBe(validLeadFormData.firma);
    expect(submittedData.unternehmensgroesse).toBe(
      validLeadFormData.unternehmensgroesse
    );
  });

  test('handles API error gracefully', async ({ page }) => {
    // Mock error response
    await mockLeadAPI(page, {
      success: false,
      error: 'Server error',
    });

    await leadFormPage.fillForm(validLeadFormData);
    await leadFormPage.submit();

    // Wait for error
    await page.waitForTimeout(1000);

    // Should show error message to user
    const errorMessage = page.locator('[role="alert"], [class*="error"]');
    await expect(errorMessage).toBeVisible();
  });
});

test.describe('Lead Form Accessibility', () => {
  let heroPage: HeroPage;
  let leadFormPage: LeadFormModalPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');

    heroPage = new HeroPage(page);
    leadFormPage = new LeadFormModalPage(page);

    // Open modal
    await heroPage.clickPrimaryCTA();
    await leadFormPage.waitForModalToAppear();
  });

  test('modal traps focus', async ({ page }) => {
    // Tab should cycle through form fields
    await page.keyboard.press('Tab');
    const firstField = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstField).toBe('INPUT');

    // Tab multiple times
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
    }

    // Focus should still be within modal
    const activeElement = await page.evaluate(
      () => document.activeElement?.closest('[role="dialog"]') !== null
    );
    expect(activeElement).toBe(true);
  });

  test('all form fields have labels', async () => {
    const inputs = await leadFormPage.modal.locator('input, select, textarea').all();

    for (const input of inputs) {
      // Each input should have associated label or aria-label
      const hasLabel = await input.evaluate((el) => {
        const id = el.getAttribute('id');
        const ariaLabel = el.getAttribute('aria-label');
        const labelElement = id
          ? document.querySelector(`label[for="${id}"]`)
          : null;

        return !!(ariaLabel || labelElement);
      });

      expect(hasLabel).toBe(true);
    }
  });

  test('error messages are announced to screen readers', async ({ page }) => {
    await leadFormPage.submit();

    // Error messages should have role="alert" or aria-live
    const errorMessages = page.locator('[role="alert"], [aria-live="polite"]');
    const errorCount = await errorMessages.count();

    expect(errorCount).toBeGreaterThan(0);
  });
});

test.describe('Lead Form - Different Entry Points', () => {
  let leadFormPage: LeadFormModalPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');
    leadFormPage = new LeadFormModalPage(page);
  });

  test('opens from final CTA section', async ({ page }) => {
    // Scroll to final CTA
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1000));

    const finalCTA = page.locator('button, a').filter({
      hasText: /Erstgespräch buchen/i,
    }).last();

    await finalCTA.click();

    await leadFormPage.expectModalVisible();
  });

  test('opens from header CTA button', async ({ page }) => {
    const headerCTA = page.locator('header button, header a').filter({
      hasText: /Erstgespräch/i,
    }).first();

    await headerCTA.click();

    await leadFormPage.expectModalVisible();
  });
});
