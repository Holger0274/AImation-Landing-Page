import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for ROI Calculator Modal
 *
 * Handles 4-step wizard: Company Info → Process → Lead Data → Results
 */
export class ROICalculatorPage {
  readonly page: Page;

  // Modal container
  readonly modal: Locator;
  readonly closeButton: Locator;

  // Progress indicator
  readonly progressIndicator: Locator;
  readonly currentStepIndicator: Locator;

  // Navigation buttons
  readonly nextButton: Locator;
  readonly backButton: Locator;

  // ============ STEP 1: Company Info ============
  readonly anzahlMitarbeiterInput: Locator;
  readonly durchschnittlicherStundenlohnInput: Locator;

  // ============ STEP 2: Process Details ============
  readonly zeitaufwandProzessInput: Locator;
  readonly automatisierungspotentialInput: Locator;

  // ============ STEP 3: Lead Qualification ============
  readonly step3VornameInput: Locator;
  readonly step3NachnameInput: Locator;
  readonly step3EmailInput: Locator;
  readonly step3FirmaInput: Locator;
  readonly step3UnternehmensgroesseSelect: Locator;

  // ============ STEP 4: Results ============
  readonly resultsSection: Locator;
  readonly zeitersparnisDisplay: Locator;
  readonly kostenersparnisDisplay: Locator;
  readonly roiDisplay: Locator;
  readonly sendEmailButton: Locator;
  readonly bookConsultationButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modal container
    this.modal = page.locator('[role="dialog"]').filter({
      has: page.locator('text=/ROI|Rechner|Calculator/i'),
    }).or(
      page.locator('[data-roi-calculator]')
    );

    this.closeButton = this.modal.locator('button[aria-label*="close" i]').first();

    // Progress/Step indicator
    this.progressIndicator = this.modal.locator('[class*="progress"], [class*="step"]');
    this.currentStepIndicator = this.progressIndicator.locator('[class*="active"], [aria-current="step"]');

    // Navigation
    this.nextButton = this.modal.locator('button').filter({
      hasText: /Weiter|Next/i,
    });
    this.backButton = this.modal.locator('button').filter({
      hasText: /Zurück|Back/i,
    });

    // Step 1 fields
    this.anzahlMitarbeiterInput = this.modal.locator('input[name*="mitarbeiter"], input[placeholder*="Mitarbeiter" i]');
    this.durchschnittlicherStundenlohnInput = this.modal.locator('input[name*="stundenlohn"], input[placeholder*="Stundenlohn" i]');

    // Step 2 fields
    this.zeitaufwandProzessInput = this.modal.locator('input[name*="zeitaufwand"], input[placeholder*="Stunden" i]');
    this.automatisierungspotentialInput = this.modal.locator('input[name*="automatisierung"], input[placeholder*="Prozent" i], input[placeholder*="%" i]');

    // Step 3 fields (similar to lead form)
    this.step3VornameInput = this.modal.locator('input[name="vorname"]');
    this.step3NachnameInput = this.modal.locator('input[name="nachname"]');
    this.step3EmailInput = this.modal.locator('input[name="email"]');
    this.step3FirmaInput = this.modal.locator('input[name="firma"]');
    this.step3UnternehmensgroesseSelect = this.modal.locator('select[name*="groesse"]');

    // Step 4 results
    this.resultsSection = this.modal.locator('[class*="result"], section').filter({
      hasText: /Ersparnis|Einsparung|ROI/i,
    });
    this.zeitersparnisDisplay = this.resultsSection.locator('text=/Zeitersparnis.*Stunden/i');
    this.kostenersparnisDisplay = this.resultsSection.locator('text=/Kostenersparnis.*EUR|€/i');
    this.roiDisplay = this.resultsSection.locator('text=/ROI.*%/i');
    this.sendEmailButton = this.resultsSection.locator('button, a').filter({
      hasText: /E-Mail|Email|Ergebnisse senden/i,
    });
    this.bookConsultationButton = this.resultsSection.locator('button, a').filter({
      hasText: /Erstgespräch|Beratung|Calendly/i,
    });
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  /**
   * Fill Step 1: Company Info
   */
  async fillStep1(data: { anzahlMitarbeiter: number; durchschnittlicherStundenlohn: number }) {
    await this.anzahlMitarbeiterInput.fill(data.anzahlMitarbeiter.toString());
    await this.durchschnittlicherStundenlohnInput.fill(data.durchschnittlicherStundenlohn.toString());
  }

  /**
   * Fill Step 2: Process Details
   */
  async fillStep2(data: { zeitaufwandProzess: number; automatisierungspotential: number }) {
    await this.zeitaufwandProzessInput.fill(data.zeitaufwandProzess.toString());
    await this.automatisierungspotentialInput.fill(data.automatisierungspotential.toString());
  }

  /**
   * Fill Step 3: Lead Qualification
   */
  async fillStep3(data: {
    vorname: string;
    nachname: string;
    email: string;
    firma: string;
    unternehmensgroesse: string;
  }) {
    await this.step3VornameInput.fill(data.vorname);
    await this.step3NachnameInput.fill(data.nachname);
    await this.step3EmailInput.fill(data.email);
    await this.step3FirmaInput.fill(data.firma);
    await this.step3UnternehmensgroesseSelect.selectOption(data.unternehmensgroesse);
  }

  /**
   * Click Next button
   */
  async clickNext() {
    await this.nextButton.click();
    // Wait for step transition
    await this.page.waitForTimeout(500);
  }

  /**
   * Click Back button
   */
  async clickBack() {
    await this.backButton.click();
    // Wait for step transition
    await this.page.waitForTimeout(500);
  }

  /**
   * Complete all steps to reach results
   */
  async completeAllSteps(data: {
    step1: { anzahlMitarbeiter: number; durchschnittlicherStundenlohn: number };
    step2: { zeitaufwandProzess: number; automatisierungspotential: number };
    step3: {
      vorname: string;
      nachname: string;
      email: string;
      firma: string;
      unternehmensgroesse: string;
    };
  }) {
    // Step 1
    await this.fillStep1(data.step1);
    await this.clickNext();

    // Step 2
    await this.fillStep2(data.step2);
    await this.clickNext();

    // Step 3
    await this.fillStep3(data.step3);
    await this.clickNext();

    // Now on Step 4 (Results)
  }

  /**
   * Send results via email
   */
  async sendResultsViaEmail() {
    await this.sendEmailButton.click();
  }

  /**
   * Book consultation (Calendly)
   */
  async bookConsultation() {
    await this.bookConsultationButton.click();
  }

  /**
   * Close calculator modal
   */
  async closeModal() {
    await this.closeButton.click();
    await this.page.waitForTimeout(300);
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

  /**
   * Assert current step number
   */
  async expectCurrentStep(stepNumber: number) {
    const stepText = await this.currentStepIndicator.textContent();
    expect(stepText).toContain(stepNumber.toString());
  }

  /**
   * Assert Next button is enabled/disabled
   */
  async expectNextButtonEnabled() {
    await expect(this.nextButton).toBeEnabled();
  }

  async expectNextButtonDisabled() {
    await expect(this.nextButton).toBeDisabled();
  }

  /**
   * Assert Back button is visible on steps 2-4
   */
  async expectBackButtonVisible() {
    await expect(this.backButton).toBeVisible();
  }

  async expectBackButtonNotVisible() {
    await expect(this.backButton).not.toBeVisible();
  }

  /**
   * Assert results are displayed
   */
  async expectResultsVisible() {
    await expect(this.resultsSection).toBeVisible();
    await expect(this.zeitersparnisDisplay).toBeVisible();
    await expect(this.kostenersparnisDisplay).toBeVisible();
    await expect(this.roiDisplay).toBeVisible();
  }

  /**
   * Assert calculated results match expected values
   */
  async expectCalculatedResults(expected: {
    zeitersparnisProWoche?: number;
    kostenersparnisProJahr?: number;
    roi?: number;
  }) {
    if (expected.zeitersparnisProWoche !== undefined) {
      const zeitText = await this.zeitersparnisDisplay.textContent();
      expect(zeitText).toContain(expected.zeitersparnisProWoche.toString());
    }

    if (expected.kostenersparnisProJahr !== undefined) {
      const kostenText = await this.kostenersparnisDisplay.textContent();
      expect(kostenText).toContain(expected.kostenersparnisProJahr.toString());
    }

    if (expected.roi !== undefined) {
      const roiText = await this.roiDisplay.textContent();
      expect(roiText).toContain(expected.roi.toString());
    }
  }

  /**
   * Assert book consultation button is visible
   */
  async expectBookConsultationButtonVisible() {
    await expect(this.bookConsultationButton).toBeVisible();
  }

  /**
   * Assert send email button is visible
   */
  async expectSendEmailButtonVisible() {
    await expect(this.sendEmailButton).toBeVisible();
  }
}
