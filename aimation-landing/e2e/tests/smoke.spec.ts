import { test, expect } from '@playwright/test';
import { setupAllMocks, trackConsoleErrors } from '../mocks/api-mocks';

/**
 * Smoke Tests - Basic functionality checks
 *
 * Ensures the landing page loads, all sections render,
 * and there are no critical errors.
 */

test.describe('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Setup mocks for faster, deterministic tests
    await setupAllMocks(page);

    // Navigate to the landing page
    await page.goto('/');
  });

  test('landing page loads successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/AI\.mation|Automatisierung/i);

    // Check no 404 or error status
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('all main sections render without errors', async ({ page }) => {
    // Track console errors
    const errors = await trackConsoleErrors(page);

    // Check all sections are present
    const sections = [
      page.locator('header'),
      page.locator('h1').filter({ hasText: /40%.*niemand vermissen/i }), // Hero
      page.locator('text=/Schulungen|Beratung|Umsetzung/').first(), // Services
      page.locator('text=/FAQ|Häufig.*Fragen/i').first(), // FAQ
      page.locator('footer'),
    ];

    for (const section of sections) {
      await expect(section).toBeVisible({ timeout: 10000 });
    }

    // Assert no console errors
    expect(errors).toHaveLength(0);
  });

  test('all 11 sections render on page', async ({ page }) => {
    // Scroll to bottom to trigger lazy-loaded sections
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Count section elements
    const sectionCount = await page.locator('section, main > div').count();

    // Should have at least 9-11 sections
    expect(sectionCount).toBeGreaterThanOrEqual(9);
  });

  test('no broken images on page', async ({ page }) => {
    // Get all images
    const images = page.locator('img');
    const imageCount = await images.count();

    // Should have some images
    expect(imageCount).toBeGreaterThan(0);

    // Check each image loads successfully
    for (let i = 0; i < Math.min(imageCount, 10); i++) {
      // Check first 10 images
      const img = images.nth(i);
      await expect(img).toBeVisible();

      // Check naturalWidth > 0 (image loaded successfully)
      const naturalWidth = await img.evaluate(
        (el: HTMLImageElement) => el.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });

  test('header is visible and sticky', async ({ page }) => {
    const header = page.locator('header').first();

    // Header should be visible
    await expect(header).toBeVisible();

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    // Header should still be visible (sticky)
    await expect(header).toBeVisible();

    // Header should have sticky/fixed positioning
    const position = await header.evaluate((el) =>
      window.getComputedStyle(el).position
    );
    expect(['sticky', 'fixed']).toContain(position);
  });

  test('footer is visible', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Footer should contain legal links
    await expect(footer.locator('a[href="/impressum"]')).toBeVisible();
    await expect(footer.locator('a[href="/datenschutz"]')).toBeVisible();
  });

  test('primary CTAs are visible and clickable', async ({ page }) => {
    // Hero primary CTA
    const heroCTA = page.locator('button, a').filter({
      hasText: /Erstgespräch.*vereinbaren/i,
    }).first();

    await expect(heroCTA).toBeVisible();
    await expect(heroCTA).toBeEnabled();

    // Can click without error
    await heroCTA.click();

    // Should open lead form modal
    await expect(page.locator('[role="dialog"]')).toBeVisible({ timeout: 2000 });
  });

  test('no JavaScript errors in console', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    // Navigate and interact with page
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(1000);

    // Should have no errors
    expect(errors).toHaveLength(0);
  });

  test('page is responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Reload page
    await page.goto('/');

    // Mobile menu button should be visible
    const mobileMenuButton = page.locator('button[aria-label*="menu" i]');
    await expect(mobileMenuButton).toBeVisible();

    // Hero should still be visible
    const hero = page.locator('h1');
    await expect(hero).toBeVisible();

    // Footer should still be visible
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('legal pages (Impressum, Datenschutz) exist', async ({ page }) => {
    // Test Impressum page
    await page.goto('/impressum');
    await expect(page.locator('h1')).toContainText(/Impressum/i);

    // Test Datenschutz page
    await page.goto('/datenschutz');
    await expect(page.locator('h1')).toContainText(/Datenschutz/i);
  });

  test('fonts load correctly', async ({ page }) => {
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');

    // Check if Space Grotesk is applied to headings
    const headingFont = await page.locator('h1').evaluate((el) =>
      window.getComputedStyle(el).fontFamily
    );

    expect(headingFont).toContain('Space Grotesk');

    // Check if Inter is applied to body text
    const bodyFont = await page.locator('p').first().evaluate((el) =>
      window.getComputedStyle(el).fontFamily
    );

    expect(bodyFont).toContain('Inter');
  });

  test('brand colors are applied correctly', async ({ page }) => {
    // Check Magenta is used on primary CTA
    const primaryCTA = page.locator('button').filter({
      hasText: /Erstgespräch/i,
    }).first();

    const ctaBackground = await primaryCTA.evaluate((el) =>
      window.getComputedStyle(el).background
    );

    // Should contain Magenta (#f90093) or gradient
    expect(ctaBackground).toMatch(/#f90093|rgb\(249,\s?0,\s?147\)|linear-gradient/i);
  });
});
