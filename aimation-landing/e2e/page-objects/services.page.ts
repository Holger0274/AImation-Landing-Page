import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Services Section
 *
 * Handles flip cards, use case showcase, and service interactions.
 */
export class ServicesPage {
  readonly page: Page;

  // Main section
  readonly servicesSection: Locator;

  // Flip cards
  readonly schulungenCard: Locator;
  readonly beratungCard: Locator;
  readonly umsetzungCard: Locator;
  readonly allCards: Locator;

  // Card fronts (default view)
  readonly schulungenCardFront: Locator;
  readonly beratungCardFront: Locator;
  readonly umsetzungCardFront: Locator;

  // Card backs (flipped view)
  readonly schulungenCardBack: Locator;
  readonly beratungCardBack: Locator;
  readonly umsetzungCardBack: Locator;

  // Use case showcase
  readonly useCaseShowcase: Locator;
  readonly useCaseCards: Locator;
  readonly useCaseCloseButton: Locator;
  readonly useCaseCTAButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    // Services section (usually has ID or specific heading)
    this.servicesSection = page.locator('#leistungen, #services').or(
      page.locator('section').filter({ hasText: /Schulungen.*Beratung.*Umsetzung/s })
    );

    // All flip cards
    this.allCards = this.servicesSection.locator('[class*="flip"], [class*="card"]');

    // Individual cards (by content)
    this.schulungenCard = this.servicesSection.locator('[class*="card"]').filter({
      hasText: /Schulungen|Training/i,
    }).first();

    this.beratungCard = this.servicesSection.locator('[class*="card"]').filter({
      hasText: /Beratung|Consulting/i,
    }).first();

    this.umsetzungCard = this.servicesSection.locator('[class*="card"]').filter({
      hasText: /Umsetzung|Implementation/i,
    }).first();

    // Card fronts and backs (depends on implementation)
    this.schulungenCardFront = this.schulungenCard.locator('[class*="front"]');
    this.schulungenCardBack = this.schulungenCard.locator('[class*="back"]');

    this.beratungCardFront = this.beratungCard.locator('[class*="front"]');
    this.beratungCardBack = this.beratungCard.locator('[class*="back"]');

    this.umsetzungCardFront = this.umsetzungCard.locator('[class*="front"]');
    this.umsetzungCardBack = this.umsetzungCard.locator('[class*="back"]');

    // Use case showcase
    this.useCaseShowcase = page.locator('[class*="use-case"], [class*="showcase"]');
    this.useCaseCards = this.useCaseShowcase.locator('[class*="card"], article');
    this.useCaseCloseButton = this.useCaseShowcase.locator('button').filter({
      hasText: /schließen|close/i,
    });
    this.useCaseCTAButtons = this.useCaseShowcase.locator('button, a').filter({
      hasText: /Projekt besprechen|Kontakt/i,
    });
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  /**
   * Hover over a card (desktop interaction)
   */
  async hoverCard(cardType: 'schulungen' | 'beratung' | 'umsetzung') {
    const card = this.getCardByType(cardType);
    await card.hover();
    // Wait for flip animation
    await this.page.waitForTimeout(500);
  }

  /**
   * Click/tap a card (mobile interaction)
   */
  async clickCard(cardType: 'schulungen' | 'beratung' | 'umsetzung') {
    const card = this.getCardByType(cardType);
    await card.click();
    // Wait for flip animation
    await this.page.waitForTimeout(500);
  }

  /**
   * Click "Use Cases ansehen" button on card back
   */
  async openUseCaseShowcase(cardType: 'schulungen' | 'beratung' | 'umsetzung') {
    // First flip the card
    await this.clickCard(cardType);

    // Then click "Use Cases" button
    const card = this.getCardByType(cardType);
    const useCaseButton = card.locator('button, a').filter({
      hasText: /Use Cases ansehen/i,
    });
    await useCaseButton.click();

    // Wait for showcase to open
    await this.page.waitForTimeout(500);
  }

  /**
   * Close use case showcase
   */
  async closeUseCaseShowcase() {
    await this.useCaseCloseButton.click();
    // Wait for close animation
    await this.page.waitForTimeout(300);
  }

  /**
   * Click CTA in use case showcase
   */
  async clickUseCaseCTA() {
    await this.useCaseCTAButtons.first().click();
  }

  /**
   * Scroll services section into view
   */
  async scrollIntoView() {
    await this.servicesSection.scrollIntoViewIfNeeded();
  }

  // ============================================================
  // HELPERS
  // ============================================================

  private getCardByType(cardType: 'schulungen' | 'beratung' | 'umsetzung'): Locator {
    switch (cardType) {
      case 'schulungen':
        return this.schulungenCard;
      case 'beratung':
        return this.beratungCard;
      case 'umsetzung':
        return this.umsetzungCard;
      default:
        throw new Error(`Unknown card type: ${cardType}`);
    }
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectServicesSectionVisible() {
    await expect(this.servicesSection).toBeVisible();
  }

  async expectAllCardsVisible() {
    const cardCount = await this.allCards.count();
    expect(cardCount).toBe(3);

    await expect(this.schulungenCard).toBeVisible();
    await expect(this.beratungCard).toBeVisible();
    await expect(this.umsetzungCard).toBeVisible();
  }

  /**
   * Assert a card is flipped (back is visible)
   */
  async expectCardFlipped(cardType: 'schulungen' | 'beratung' | 'umsetzung') {
    const card = this.getCardByType(cardType);
    const back = card.locator('[class*="back"]');

    // Check if back is visible (implementation may vary)
    if (await back.count() > 0) {
      await expect(back).toBeVisible();
    } else {
      // Alternative: check for "flipped" class or transform
      const hasFlippedClass = await card.evaluate((el) =>
        el.classList.contains('flipped')
      );
      expect(hasFlippedClass).toBe(true);
    }
  }

  /**
   * Assert use case showcase is open
   */
  async expectUseCaseShowcaseOpen() {
    await expect(this.useCaseShowcase).toBeVisible();
  }

  /**
   * Assert use case showcase is closed
   */
  async expectUseCaseShowcaseClosed() {
    await expect(this.useCaseShowcase).not.toBeVisible();
  }

  /**
   * Assert correct number of use cases are displayed
   */
  async expectUseCaseCount(expectedCount: number) {
    await expect(this.useCaseCards).toHaveCount(expectedCount);
  }

  /**
   * Assert all use case images/mockups load
   */
  async expectUseCaseImagesLoaded() {
    const images = this.useCaseShowcase.locator('img');
    const imageCount = await images.count();

    expect(imageCount).toBeGreaterThan(0);

    for (let i = 0; i < imageCount; i++) {
      await expect(images.nth(i)).toBeVisible();
    }
  }

  /**
   * Assert card has proper 3D transform on hover
   */
  async expectCardHas3DEffect(cardType: 'schulungen' | 'beratung' | 'umsetzung') {
    const card = this.getCardByType(cardType);

    const transform = await card.evaluate((el) =>
      window.getComputedStyle(el).transform
    );

    // Should have some transform applied (not 'none')
    expect(transform).not.toBe('none');
  }

  /**
   * Assert specific card content
   */
  async expectCardContent(
    cardType: 'schulungen' | 'beratung' | 'umsetzung',
    expectedTitle: string
  ) {
    const card = this.getCardByType(cardType);
    await expect(card).toContainText(expectedTitle);
  }
}
