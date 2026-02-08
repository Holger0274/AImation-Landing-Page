import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Lead Form Modal
 *
 * Handles all form fields, validation, submission, and Calendly redirect.
 */
export class LeadFormModalPage {
  readonly page: Page;

  // Modal container
  readonly modal: Locator;
  readonly modalOverlay: Locator;
  readonly closeButton: Locator;

  // Form fields
  readonly vornameInput: Locator;
  readonly nachnameInput: Locator;
  readonly emailInput: Locator;
  readonly firmaInput: Locator;
  readonly unternehmensgroesseSelect: Locator;
  readonly telefonInput: Locator;
  readonly herausforderungTextarea: Locator;
  readonly privacyCheckbox: Locator;

  // Submit button
  readonly submitButton: Locator;

  // Loading state
  readonly loadingSpinner: Locator;

  // Error messages
  readonly errorMessages: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modal (usually has role="dialog" or specific class)
    this.modal = page.locator('[role="dialog"]').or(
      page.locator('[class*="modal"]').filter({ hasText: /Vorname|Nachname/i })
    );

    this.modalOverlay = page.locator('[class*="overlay"], [class*="backdrop"]');
    this.closeButton = this.modal.locator('button[aria-label*="close" i], button').filter({
      hasText: /×|close/i,
    }).first();

    // Form fields (by name or label)
    this.vornameInput = this.modal.locator('input[name="vorname"], input[placeholder*="Vorname" i]');
    this.nachnameInput = this.modal.locator('input[name="nachname"], input[placeholder*="Nachname" i]');
    this.emailInput = this.modal.locator('input[name="email"], input[type="email"]');
    this.firmaInput = this.modal.locator('input[name="firma"], input[placeholder*="Firma" i]');
    this.unternehmensgroesseSelect = this.modal.locator('select[name*="groesse"], select[name="unternehmensgroesse"]');
    this.telefonInput = this.modal.locator('input[name="telefon"], input[type="tel"]');
    this.herausforderungTextarea = this.modal.locator('textarea[name*="herausforderung"]');
    this.privacyCheckbox = this.modal.locator('input[type="checkbox"][name*="datenschutz"], input[type="checkbox"][name*="privacy"]');

    // Submit button
    this.submitButton = this.modal.locator('button[type="submit"]').or(
      this.modal.locator('button').filter({ hasText: /Absenden|Senden|Submit/i })
    );

    // Loading spinner
    this.loadingSpinner = this.modal.locator('[class*="spinner"], [class*="loading"]');

    // Error messages
    this.errorMessages = this.modal.locator('[class*="error"], [role="alert"]');
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  /**
   * Fill all required form fields with valid data
   */
  async fillForm(data: {
    vorname: string;
    nachname: string;
    email: string;
    firma: string;
    unternehmensgroesse: string;
    telefon?: string;
    herausforderung: string;
  }) {
    await this.vornameInput.fill(data.vorname);
    await this.nachnameInput.fill(data.nachname);
    await this.emailInput.fill(data.email);
    await this.firmaInput.fill(data.firma);
    await this.unternehmensgroesseSelect.selectOption(data.unternehmensgroesse);

    if (data.telefon) {
      await this.telefonInput.fill(data.telefon);
    }

    await this.herausforderungTextarea.fill(data.herausforderung);
    await this.privacyCheckbox.check();
  }

  /**
   * Submit the form
   */
  async submit() {
    await this.submitButton.click();
  }

  /**
   * Fill form and submit
   */
  async fillAndSubmit(data: any) {
    await this.fillForm(data);
    await this.submit();
  }

  /**
   * Close modal using close button
   */
  async closeWithButton() {
    await this.closeButton.click();
    // Wait for close animation
    await this.page.waitForTimeout(300);
  }

  /**
   * Close modal by clicking overlay
   */
  async closeWithOverlay() {
    // Click outside the modal
    await this.modalOverlay.click({ position: { x: 5, y: 5 } });
    // Wait for close animation
    await this.page.waitForTimeout(300);
  }

  /**
   * Wait for modal to appear
   */
  async waitForModalToAppear() {
    await expect(this.modal).toBeVisible({ timeout: 5000 });
  }

  /**
   * Wait for modal to disappear
   */
  async waitForModalToDisappear() {
    await expect(this.modal).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Wait for loading state to finish
   */
  async waitForSubmissionToComplete() {
    // Wait for spinner to disappear
    await expect(this.loadingSpinner).not.toBeVisible({ timeout: 10000 });
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectModalVisible() {
    await expect(this.modal).toBeVisible();
  }

  async expectModalNotVisible() {
    await expect(this.modal).not.toBeVisible();
  }

  async expectLoadingSpinnerVisible() {
    await expect(this.loadingSpinner).toBeVisible();
  }

  async expectLoadingSpinnerNotVisible() {
    await expect(this.loadingSpinner).not.toBeVisible();
  }

  /**
   * Assert error message for a specific field
   */
  async expectFieldError(fieldName: string, errorText?: string) {
    const fieldError = this.modal.locator(`[class*="error"]`).filter({
      has: this.page.locator(`text=/${fieldName}/i`),
    });

    await expect(fieldError).toBeVisible();

    if (errorText) {
      await expect(fieldError).toContainText(errorText);
    }
  }

  /**
   * Assert no error messages are visible
   */
  async expectNoErrors() {
    await expect(this.errorMessages).toHaveCount(0);
  }

  /**
   * Assert submit button is disabled
   */
  async expectSubmitButtonDisabled() {
    await expect(this.submitButton).toBeDisabled();
  }

  /**
   * Assert submit button is enabled
   */
  async expectSubmitButtonEnabled() {
    await expect(this.submitButton).toBeEnabled();
  }

  /**
   * Assert privacy checkbox is required
   */
  async expectPrivacyCheckboxRequired() {
    // Try submitting without privacy checkbox
    await this.submit();

    // Should show error
    await this.expectFieldError('datenschutz');
  }

  /**
   * Assert form has validation errors
   */
  async expectValidationErrors(count?: number) {
    if (count !== undefined) {
      await expect(this.errorMessages).toHaveCount(count);
    } else {
      const errorCount = await this.errorMessages.count();
      expect(errorCount).toBeGreaterThan(0);
    }
  }

  /**
   * Assert email validation works
   */
  async expectEmailValidation() {
    await this.emailInput.fill('invalid-email');
    await this.emailInput.blur();

    // Should show email error
    await this.page.waitForTimeout(500);
    await this.expectFieldError('email');
  }

  /**
   * Assert character limits are enforced
   */
  async expectCharacterLimitsEnforced() {
    // Fill with text longer than 500 chars
    const longText = 'A'.repeat(501);
    await this.herausforderungTextarea.fill(longText);

    // Should show error or truncate
    const value = await this.herausforderungTextarea.inputValue();
    expect(value.length).toBeLessThanOrEqual(500);
  }
}
