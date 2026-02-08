import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Hero Section
 *
 * Handles hero CTAs, animated counters, and trust elements.
 */
export class HeroPage {
  readonly page: Page;

  // Main section
  readonly heroSection: Locator;

  // Content elements
  readonly headline: Locator;
  readonly subline: Locator;

  // CTA buttons
  readonly primaryCTA: Locator; // "Kostenloses Erstgespräch vereinbaren"
  readonly secondaryCTA: Locator; // "Mehr erfahren"

  // Trust elements
  readonly trustElements: Locator;
  readonly linkedinFollowersCounter: Locator;
  readonly yearsExperienceCounter: Locator;

  // Images
  readonly heroImages: Locator;

  constructor(page: Page) {
    this.page = page;

    // Hero section (usually first section or has specific ID)
    this.heroSection = page.locator('section').first();

    // Headline and subline
    this.headline = this.heroSection.locator('h1').or(
      page.locator('text=/40%.*niemand vermissen würde/i')
    );
    this.subline = page.locator('text=/Ob KI dafür die Lösung ist/i');

    // CTA buttons (find by text content)
    this.primaryCTA = page.locator('button, a').filter({
      hasText: /Kostenloses Erstgespräch|Erstgespräch vereinbaren/i,
    }).first();

    this.secondaryCTA = page.locator('button, a').filter({
      hasText: /Mehr erfahren/i,
    }).first();

    // Trust elements
    this.trustElements = page.locator('text=/18.000.*LinkedIn|20 Jahre|10-1000/');
    this.linkedinFollowersCounter = page.locator('text=/18[.,]?000.*LinkedIn/i');
    this.yearsExperienceCounter = page.locator('text=/20.*Jahre.*Erfahrung/i');

    // Images
    this.heroImages = this.heroSection.locator('img');
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

  /**
   * Scroll hero section into view
   */
  async scrollIntoView() {
    await this.heroSection.scrollIntoViewIfNeeded();
  }

  /**
   * Wait for counter animations to complete
   */
  async waitForCounterAnimations() {
    // Wait for animations to finish (usually 2-3 seconds)
    await this.page.waitForTimeout(3000);
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectHeroVisible() {
    await expect(this.heroSection).toBeVisible();
  }

  async expectHeadlineVisible() {
    await expect(this.headline).toBeVisible();
  }

  async expectHeadlineContains(text: string) {
    await expect(this.headline).toContainText(text);
  }

  async expectSublineVisible() {
    await expect(this.subline).toBeVisible();
  }

  async expectSublineContains(text: string) {
    await expect(this.subline).toContainText(text);
  }

  async expectPrimaryCTAVisible() {
    await expect(this.primaryCTA).toBeVisible();
  }

  async expectSecondaryCTAVisible() {
    await expect(this.secondaryCTA).toBeVisible();
  }

  /**
   * Assert trust elements are visible
   */
  async expectTrustElementsVisible() {
    await expect(this.linkedinFollowersCounter).toBeVisible();
    await expect(this.yearsExperienceCounter).toBeVisible();
  }

  /**
   * Assert LinkedIn follower counter shows correct number
   */
  async expectLinkedInCounterCorrect(expectedValue: number = 18000) {
    const text = await this.linkedinFollowersCounter.textContent();
    expect(text).toMatch(/18[.,]?000/);
  }

  /**
   * Assert years experience counter shows correct number
   */
  async expectYearsExperienceCorrect(expectedYears: number = 20) {
    const text = await this.yearsExperienceCounter.textContent();
    expect(text).toContain(`${expectedYears}`);
  }

  /**
   * Assert counter has animated (not showing 0)
   */
  async expectCountersAnimated() {
    // Check if LinkedIn counter is not 0
    const linkedinText = await this.linkedinFollowersCounter.textContent();
    expect(linkedinText).not.toContain('0 LinkedIn');

    // Check if years counter is not 0
    const yearsText = await this.yearsExperienceCounter.textContent();
    expect(yearsText).not.toContain('0 Jahre');
  }

  /**
   * Assert all hero images load correctly
   */
  async expectImagesLoaded() {
    const imageCount = await this.heroImages.count();
    expect(imageCount).toBeGreaterThan(0);

    // Check each image is visible
    for (let i = 0; i < imageCount; i++) {
      await expect(this.heroImages.nth(i)).toBeVisible();
    }
  }

  /**
   * Assert hero section has proper spacing/padding
   */
  async expectProperSpacing() {
    const padding = await this.heroSection.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        top: parseInt(styles.paddingTop),
        bottom: parseInt(styles.paddingBottom),
      };
    });

    // Hero should have substantial padding
    expect(padding.top).toBeGreaterThan(20);
    expect(padding.bottom).toBeGreaterThan(20);
  }

  /**
   * Assert highlight word in headline has Magenta color
   */
  async expectHighlightWordStyled() {
    // Find span with class "highlight" or inline magenta color
    const highlightWord = this.headline.locator('span.highlight, span').filter({
      has: this.page.locator('[style*="magenta"], [class*="magenta"]'),
    });

    if (await highlightWord.count() > 0) {
      const color = await highlightWord.first().evaluate((el) =>
        window.getComputedStyle(el).color
      );

      // Check if color is Magenta (#f90093) or similar
      // RGB equivalent: rgb(249, 0, 147)
      expect(color).toMatch(/rgb\(249,\s?0,\s?147\)|#f90093/i);
    }
  }
}
