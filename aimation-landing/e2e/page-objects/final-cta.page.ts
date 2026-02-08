import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Final CTA Section
 *
 * Handles final conversion section with two CTAs (lead form + ROI calculator).
 */
export class FinalCTAPage {
  readonly page: Page;
  readonly finalCTASection: Locator;

  // CTA buttons
  readonly primaryCTA: Locator; // "Kostenloses Erstgespräch buchen"
  readonly secondaryCTA: Locator; // "ROI selbst berechnen"

  // Content elements
  readonly headline: Locator;
  readonly subheadline: Locator;

  constructor(page: Page) {
    this.page = page;

    // Final CTA section (usually dark background before footer)
    this.finalCTASection = page.locator('section').filter({
      hasText: /Bereit.*nächsten Schritt|Jetzt.*starten/i,
    }).last();

    // Primary CTA (opens lead form)
    this.primaryCTA = this.finalCTASection.locator('button, a').filter({
      hasText: /Erstgespräch buchen|Kontakt aufnehmen/i,
    }).first();

    // Secondary CTA (opens ROI calculator)
    this.secondaryCTA = this.finalCTASection.locator('button, a').filter({
      hasText: /ROI.*berechnen|Rechner/i,
    }).first();

    // Headline and subheadline
    this.headline = this.finalCTASection.locator('h2, h3').first();
    this.subheadline = this.finalCTASection.locator('p').first();
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  async clickPrimaryCTA() {
    await this.primaryCTA.click();
  }

  async clickSecondaryCTA() {
    await this.secondaryCTA.click();
  }

  async scrollIntoView() {
    await this.finalCTASection.scrollIntoViewIfNeeded();
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectFinalCTASectionVisible() {
    await expect(this.finalCTASection).toBeVisible();
  }

  async expectPrimaryCTAVisible() {
    await expect(this.primaryCTA).toBeVisible();
  }

  async expectSecondaryCTAVisible() {
    await expect(this.secondaryCTA).toBeVisible();
  }

  async expectHeadlineVisible() {
    await expect(this.headline).toBeVisible();
  }

  /**
   * Assert section has dark background (Soft Black)
   */
  async expectDarkBackground() {
    const backgroundColor = await this.finalCTASection.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );

    // Should be dark (close to #071013)
    expect(backgroundColor).toMatch(/rgb\(7,\s?16,\s?19\)|#071013/i);
  }

  /**
   * Assert both CTAs are visible (two-CTA pattern)
   */
  async expectBothCTAsVisible() {
    await expect(this.primaryCTA).toBeVisible();
    await expect(this.secondaryCTA).toBeVisible();
  }
}
