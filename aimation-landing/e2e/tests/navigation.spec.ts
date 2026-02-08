import { test, expect } from '@playwright/test';
import { setupAllMocks } from '../mocks/api-mocks';
import { HeaderPage } from '../page-objects/header.page';
import { FooterPage } from '../page-objects/footer.page';
import { navigationLinks } from '../fixtures/test-data';

/**
 * Navigation Tests - Header and Footer
 *
 * Tests all navigation links, mobile menu, sticky header, and footer links.
 */

test.describe('Header Navigation', () => {
  let headerPage: HeaderPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');
    headerPage = new HeaderPage(page);
  });

  test('header is visible on page load', async () => {
    await headerPage.expectHeaderVisible();
    await headerPage.expectLogoVisible();
  });

  test('logo click navigates to homepage', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 1000));

    // Click logo
    await headerPage.clickLogo();

    // Should scroll back to top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test('all desktop navigation links are visible', async () => {
    await headerPage.expectAllNavLinksVisible();
    await headerPage.expectCTAVisible();
  });

  test('Leistungen link scrolls to services section', async ({ page }) => {
    await headerPage.clickLeistungen();

    // Wait for scroll animation
    await page.waitForTimeout(800);

    // Should have scrolled to services section
    const servicesSection = page.locator('#leistungen, section').filter({
      hasText: /Schulungen[\s\S]*Beratung/,
    }).first();

    await expect(servicesSection).toBeInViewport();
  });

  test('Prozess link scrolls to process section', async ({ page }) => {
    await headerPage.clickProzess();
    await page.waitForTimeout(800);

    const processSection = page.locator('#prozess');
    await expect(processSection).toBeInViewport();
  });

  test('Über mich link scrolls to about section', async ({ page }) => {
    await headerPage.clickUeberMich();
    await page.waitForTimeout(800);

    const aboutSection = page.locator('#ueber-mich');
    await expect(aboutSection).toBeInViewport();
  });

  test('FAQ link scrolls to FAQ section', async ({ page }) => {
    await headerPage.clickFAQ();
    await page.waitForTimeout(800);

    const faqSection = page.locator('#faq');
    await expect(faqSection).toBeInViewport();
  });

  test('CTA button scrolls to contact section or opens modal', async ({ page }) => {
    await headerPage.clickCTA();

    // Either scrolls to #kontakt OR opens lead form modal
    const modal = page.locator('[role="dialog"]');
    const contactSection = page.locator('#kontakt');

    const modalVisible = await modal.isVisible().catch(() => false);
    const contactInViewport = await contactSection
      .evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.right <= window.innerWidth
        );
      })
      .catch(() => false);

    expect(modalVisible || contactInViewport).toBe(true);
  });

  test('header becomes sticky on scroll', async ({ page }) => {
    // Header should start without solid background
    const initialBackground = await headerPage.header.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );

    // Scroll down
    await headerPage.scrollToTriggerSticky();

    // Header should have background now
    await headerPage.expectStickyHeaderActive();
  });
});

test.describe('Mobile Navigation', () => {
  let headerPage: HeaderPage;

  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await setupAllMocks(page);
    await page.goto('/');
    headerPage = new HeaderPage(page);
  });

  test('mobile menu button is visible on mobile', async () => {
    await headerPage.expectMobileMenuButtonVisible();
  });

  test('mobile menu opens when clicking menu button', async () => {
    await headerPage.openMobileMenu();
    await headerPage.expectMobileMenuOpen();
  });

  test('mobile menu closes when clicking close button', async () => {
    await headerPage.openMobileMenu();
    await headerPage.expectMobileMenuOpen();

    await headerPage.closeMobileMenu();
    await headerPage.expectMobileMenuClosed();
  });

  test('mobile menu link clicks scroll and close menu', async ({ page }) => {
    await headerPage.clickMobileNavLink('Leistungen');

    // Menu should be closed
    await headerPage.expectMobileMenuClosed();

    // Should have scrolled
    const servicesSection = page.locator('#leistungen').first();
    await expect(servicesSection).toBeInViewport({ timeout: 2000 });
  });

  test('all mobile menu links work correctly', async ({ page }) => {
    const links = ['Leistungen', 'Prozess', 'Über mich', 'FAQ'];

    for (const linkText of links) {
      // Go back to top
      await page.goto('/');

      await headerPage.clickMobileNavLink(linkText);

      // Menu should close
      await headerPage.expectMobileMenuClosed();
    }
  });
});

test.describe('Footer Navigation', () => {
  let footerPage: FooterPage;

  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    footerPage = new FooterPage(page);
  });

  test('footer is visible', async () => {
    await footerPage.expectFooterVisible();
  });

  test('all legal links are visible', async () => {
    await footerPage.expectAllLinksVisible();
  });

  test('Impressum link navigates to impressum page', async ({ page }) => {
    await footerPage.clickImpressum();

    // Should navigate to /impressum
    await expect(page).toHaveURL(/\/impressum/);
    await expect(page.locator('h1')).toContainText(/Impressum/i);
  });

  test('Datenschutz link navigates to datenschutz page', async ({ page }) => {
    await footerPage.clickDatenschutz();

    // Should navigate to /datenschutz
    await expect(page).toHaveURL(/\/datenschutz/);
    await expect(page.locator('h1')).toContainText(/Datenschutz/i);
  });

  test('email link has correct mailto href', async () => {
    await footerPage.expectEmailLinkCorrect('kontakt@aimation.de');
  });

  test('LinkedIn link opens in new tab', async () => {
    await footerPage.expectLinkedInOpensInNewTab();
  });

  test('footer displays current copyright year', async () => {
    await footerPage.expectCopyrightYearCurrent();
  });

  test('footer service links scroll to sections', async ({ page }) => {
    // Test one footer link (Schulungen)
    await footerPage.schulungenLink.click();

    await page.waitForTimeout(800);

    const servicesSection = page.locator('#leistungen, #schulungen').first();
    await expect(servicesSection).toBeInViewport();
  });
});

test.describe('Cross-browser Navigation', () => {
  test('navigation works on Chromium', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Chromium-specific test');

    await setupAllMocks(page);
    await page.goto('/');

    const headerPage = new HeaderPage(page);
    await headerPage.clickLeistungen();

    await page.waitForTimeout(500);
    const servicesSection = page.locator('#leistungen').first();
    await expect(servicesSection).toBeInViewport();
  });

  test('navigation works on Firefox', async ({ page, browserName }) => {
    test.skip(browserName !== 'firefox', 'Firefox-specific test');

    await setupAllMocks(page);
    await page.goto('/');

    const headerPage = new HeaderPage(page);
    await headerPage.clickLeistungen();

    await page.waitForTimeout(500);
    const servicesSection = page.locator('#leistungen').first();
    await expect(servicesSection).toBeInViewport();
  });

  test('navigation works on WebKit', async ({ page, browserName }) => {
    test.skip(browserName !== 'webkit', 'WebKit-specific test');

    await setupAllMocks(page);
    await page.goto('/');

    const headerPage = new HeaderPage(page);
    await headerPage.clickLeistungen();

    await page.waitForTimeout(500);
    const servicesSection = page.locator('#leistungen').first();
    await expect(servicesSection).toBeInViewport();
  });
});
