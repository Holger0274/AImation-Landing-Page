import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Footer Component
 *
 * Handles footer navigation, contact links, and legal pages.
 */
export class FooterPage {
  readonly page: Page;
  readonly footer: Locator;

  // Service links
  readonly schulungenLink: Locator;
  readonly beratungLink: Locator;
  readonly umsetzungLink: Locator;

  // Company links
  readonly ueberMichLink: Locator;
  readonly prozessLink: Locator;
  readonly faqLink: Locator;

  // Contact links
  readonly erstgespraechLink: Locator;
  readonly emailLink: Locator;
  readonly linkedinLink: Locator;

  // Legal links
  readonly impressumLink: Locator;
  readonly datenschutzLink: Locator;

  // Logo
  readonly footerLogo: Locator;

  constructor(page: Page) {
    this.page = page;

    this.footer = page.locator('footer');

    // Service links
    this.schulungenLink = this.footer.locator('a[href*="schulungen"]');
    this.beratungLink = this.footer.locator('a[href*="beratung"]');
    this.umsetzungLink = this.footer.locator('a[href*="umsetzung"]');

    // Company links
    this.ueberMichLink = this.footer.locator('a[href*="ueber-mich"]');
    this.prozessLink = this.footer.locator('a[href*="prozess"]');
    this.faqLink = this.footer.locator('a[href*="faq"]');

    // Contact links
    this.erstgespraechLink = this.footer.locator('a[href*="kontakt"]');
    this.emailLink = this.footer.locator('a[href*="mailto"]');
    this.linkedinLink = this.footer.locator('a[href*="linkedin"]');

    // Legal links
    this.impressumLink = this.footer.locator('a[href="/impressum"]');
    this.datenschutzLink = this.footer.locator('a[href="/datenschutz"]');

    // Logo
    this.footerLogo = this.footer.locator('img, svg').first();
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  async clickImpressum() {
    await this.impressumLink.click();
  }

  async clickDatenschutz() {
    await this.datenschutzLink.click();
  }

  async clickLinkedIn() {
    await this.linkedinLink.click();
  }

  async clickEmailLink() {
    await this.emailLink.click();
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectFooterVisible() {
    await expect(this.footer).toBeVisible();
  }

  async expectAllLinksVisible() {
    await expect(this.impressumLink).toBeVisible();
    await expect(this.datenschutzLink).toBeVisible();
  }

  async expectEmailLinkCorrect(expectedEmail: string) {
    const href = await this.emailLink.getAttribute('href');
    expect(href).toContain(expectedEmail);
  }

  async expectLinkedInOpensInNewTab() {
    const target = await this.linkedinLink.getAttribute('target');
    expect(target).toBe('_blank');
  }

  async expectCopyrightYearCurrent() {
    const currentYear = new Date().getFullYear();
    await expect(this.footer).toContainText(currentYear.toString());
  }
}
