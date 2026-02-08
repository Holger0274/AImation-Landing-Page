import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Header Component
 *
 * Handles navigation, logo clicks, mobile menu, and sticky header behavior.
 */
export class HeaderPage {
  readonly page: Page;

  // Main elements
  readonly header: Locator;
  readonly logo: Locator;
  readonly desktopNav: Locator;
  readonly mobileMenuButton: Locator;
  readonly mobileMenu: Locator;
  readonly ctaButton: Locator;

  // Navigation links
  readonly leistungenLink: Locator;
  readonly prozessLink: Locator;
  readonly ueberMichLink: Locator;
  readonly faqLink: Locator;

  // Mobile menu links
  readonly mobileLeistungenLink: Locator;
  readonly mobileProzessLink: Locator;
  readonly mobileUeberMichLink: Locator;
  readonly mobileFaqLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main header
    this.header = page.locator('header').first();
    this.logo = this.header.locator('a[href="/"]').first();

    // Desktop navigation
    this.desktopNav = page.locator('nav').filter({ hasText: 'Leistungen' });
    this.leistungenLink = this.desktopNav.locator('a[href="#leistungen"]');
    this.prozessLink = this.desktopNav.locator('a[href="#prozess"]');
    this.ueberMichLink = this.desktopNav.locator('a[href="#ueber-mich"]');
    this.faqLink = this.desktopNav.locator('a[href="#faq"]');

    // CTA button
    this.ctaButton = this.header.locator('button, a').filter({
      hasText: 'Erstgespräch',
    });

    // Mobile menu
    this.mobileMenuButton = page.locator('button[aria-label*="menu" i]');
    this.mobileMenu = page.locator('[class*="mobile-menu"]').or(
      page.locator('nav').filter({ has: page.locator('button[aria-label*="close" i]') })
    );

    // Mobile menu links (within mobile menu container)
    this.mobileLeistungenLink = this.mobileMenu.locator('a[href="#leistungen"]');
    this.mobileProzessLink = this.mobileMenu.locator('a[href="#prozess"]');
    this.mobileUeberMichLink = this.mobileMenu.locator('a[href="#ueber-mich"]');
    this.mobileFaqLink = this.mobileMenu.locator('a[href="#faq"]');
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  async clickLogo() {
    await this.logo.click();
  }

  async clickLeistungen() {
    await this.leistungenLink.click();
  }

  async clickProzess() {
    await this.prozessLink.click();
  }

  async clickUeberMich() {
    await this.ueberMichLink.click();
  }

  async clickFAQ() {
    await this.faqLink.click();
  }

  async clickCTA() {
    await this.ctaButton.click();
  }

  /**
   * Open mobile menu
   */
  async openMobileMenu() {
    // Check if menu button is visible (mobile viewport)
    if (await this.mobileMenuButton.isVisible()) {
      await this.mobileMenuButton.click();
      // Wait for menu animation
      await this.page.waitForTimeout(300);
    } else {
      throw new Error('Mobile menu button is not visible. Are you on mobile viewport?');
    }
  }

  /**
   * Close mobile menu
   */
  async closeMobileMenu() {
    // Find close button within mobile menu
    const closeButton = this.page.locator('button[aria-label*="close" i]');
    if (await closeButton.isVisible()) {
      await closeButton.click();
      // Wait for menu animation
      await this.page.waitForTimeout(300);
    }
  }

  /**
   * Click a navigation link in mobile menu
   */
  async clickMobileNavLink(linkText: string) {
    await this.openMobileMenu();

    switch (linkText.toLowerCase()) {
      case 'leistungen':
        await this.mobileLeistungenLink.click();
        break;
      case 'prozess':
        await this.mobileProzessLink.click();
        break;
      case 'über mich':
      case 'ueber mich':
        await this.mobileUeberMichLink.click();
        break;
      case 'faq':
        await this.mobileFaqLink.click();
        break;
      default:
        throw new Error(`Unknown link: ${linkText}`);
    }

    // Wait for menu to close and scroll to complete
    await this.page.waitForTimeout(500);
  }

  /**
   * Scroll page to trigger sticky header
   */
  async scrollToTriggerSticky() {
    await this.page.evaluate(() => window.scrollTo(0, 200));
    // Wait for scroll animation and sticky header transition
    await this.page.waitForTimeout(300);
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectHeaderVisible() {
    await expect(this.header).toBeVisible();
  }

  async expectLogoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async expectDesktopNavVisible() {
    await expect(this.desktopNav).toBeVisible();
  }

  async expectMobileMenuButtonVisible() {
    await expect(this.mobileMenuButton).toBeVisible();
  }

  async expectMobileMenuOpen() {
    await expect(this.mobileMenu).toBeVisible();
  }

  async expectMobileMenuClosed() {
    await expect(this.mobileMenu).not.toBeVisible();
  }

  /**
   * Assert sticky header has active styles (background, shadow, etc.)
   */
  async expectStickyHeaderActive() {
    // Check if header has sticky positioning
    const position = await this.header.evaluate((el) =>
      window.getComputedStyle(el).position
    );
    expect(['sticky', 'fixed']).toContain(position);

    // Check if header has background (non-transparent)
    const backgroundColor = await this.header.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(backgroundColor).not.toBe('transparent');
  }

  /**
   * Assert all navigation links are visible
   */
  async expectAllNavLinksVisible() {
    await expect(this.leistungenLink).toBeVisible();
    await expect(this.prozessLink).toBeVisible();
    await expect(this.ueberMichLink).toBeVisible();
    await expect(this.faqLink).toBeVisible();
  }

  /**
   * Assert CTA button is visible
   */
  async expectCTAVisible() {
    await expect(this.ctaButton).toBeVisible();
  }
}
