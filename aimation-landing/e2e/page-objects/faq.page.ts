import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for FAQ Section
 *
 * Handles accordion expand/collapse behavior.
 */
export class FAQPage {
  readonly page: Page;
  readonly faqSection: Locator;
  readonly faqItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.faqSection = page.locator('#faq').or(
      page.locator('section').filter({ hasText: /FAQ|Häufig.*Fragen/i })
    );

    this.faqItems = this.faqSection.locator('[class*="faq-item"], [class*="accordion"]');
  }

  // ============================================================
  // ACTIONS
  // ============================================================

  async expandFAQ(index: number) {
    const item = this.faqItems.nth(index);
    const button = item.locator('button, [role="button"]').first();
    await button.click();
    await this.page.waitForTimeout(400); // Animation
  }

  async collapseFAQ(index: number) {
    await this.expandFAQ(index); // Toggle
  }

  async expandAllFAQs() {
    const count = await this.faqItems.count();
    for (let i = 0; i < count; i++) {
      await this.expandFAQ(i);
    }
  }

  async scrollIntoView() {
    await this.faqSection.scrollIntoViewIfNeeded();
  }

  // ============================================================
  // ASSERTIONS
  // ============================================================

  async expectFAQSectionVisible() {
    await expect(this.faqSection).toBeVisible();
  }

  async expectFAQCount(expectedCount: number) {
    await expect(this.faqItems).toHaveCount(expectedCount);
  }

  async expectFAQExpanded(index: number) {
    const item = this.faqItems.nth(index);
    const answer = item.locator('[class*="answer"], [class*="content"]');
    await expect(answer).toBeVisible();
  }

  async expectFAQCollapsed(index: number) {
    const item = this.faqItems.nth(index);
    const answer = item.locator('[class*="answer"], [class*="content"]');
    await expect(answer).not.toBeVisible();
  }

  async expectFAQContainsQuestion(index: number, questionText: string) {
    const item = this.faqItems.nth(index);
    await expect(item).toContainText(questionText);
  }
}
