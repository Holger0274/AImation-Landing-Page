import { Page, Route } from '@playwright/test';

/**
 * API Mocks for AI.mation Landing Page Tests
 *
 * Intercepts and mocks all external API calls to ensure
 * deterministic, fast, and reliable tests.
 */

// ============================================================
// MOCK RESPONSES
// ============================================================

export const mockResponses = {
  leadSubmissionSuccess: {
    success: true,
    message: 'Lead erfolgreich übermittelt',
    calendlyUrl:
      'https://calendly.com/mock-link?prefill[name]=Max Mustermann&prefill[email]=max@example.com',
  },

  leadSubmissionError: {
    success: false,
    error: 'Fehler beim Übermitteln des Formulars',
  },

  roiResultsSuccess: {
    success: true,
    message: 'ROI-Ergebnisse erfolgreich per E-Mail verschickt',
  },

  roiResultsError: {
    success: false,
    error: 'Fehler beim Versenden der E-Mail',
  },
};

// ============================================================
// MOCK SETUP FUNCTIONS
// ============================================================

/**
 * Setup all API mocks for a test page
 */
export async function setupAllMocks(page: Page) {
  await mockLeadAPI(page);
  await mockROIAPI(page);
  await mockCalendlyScripts(page);
}

/**
 * Mock the /api/lead endpoint
 */
export async function mockLeadAPI(
  page: Page,
  responseOverride?: Record<string, any>
) {
  await page.route('**/api/lead', async (route: Route) => {
    const request = route.request();
    const method = request.method();

    if (method === 'POST') {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Return mocked response
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(
          responseOverride || mockResponses.leadSubmissionSuccess
        ),
      });
    } else {
      await route.continue();
    }
  });
}

/**
 * Mock the /api/send-roi-results endpoint
 */
export async function mockROIAPI(
  page: Page,
  responseOverride?: Record<string, any>
) {
  await page.route('**/api/send-roi-results', async (route: Route) => {
    const request = route.request();
    const method = request.method();

    if (method === 'POST') {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Return mocked response
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(
          responseOverride || mockResponses.roiResultsSuccess
        ),
      });
    } else {
      await route.continue();
    }
  });
}

/**
 * Block Calendly external scripts from loading
 * (prevents external network calls during tests)
 */
export async function mockCalendlyScripts(page: Page) {
  await page.route('**/assets.calendly.com/**', async (route: Route) => {
    // Block Calendly script loading
    await route.abort('blockedbyclient');
  });

  // Mock Calendly initialization function if needed
  await page.addInitScript(() => {
    // @ts-ignore
    window.Calendly = {
      initPopupWidget: (options: any) => {
        console.log('Mock Calendly opened with options:', options);
        // Dispatch custom event that tests can listen for
        window.dispatchEvent(
          new CustomEvent('mock-calendly-opened', { detail: options })
        );
      },
    };
  });
}

/**
 * Mock Calendly redirect behavior
 * Intercepts window redirects to Calendly and tracks them
 */
export async function mockCalendlyRedirect(page: Page) {
  // Track redirects without actually navigating
  await page.addInitScript(() => {
    // Store original window.location
    const originalLocation = window.location;

    // Track redirects in a global array
    (window as any).__calendlyRedirects = [];

    // Override window.location.href setter
    Object.defineProperty(window, 'location', {
      get() {
        return originalLocation;
      },
      set(value) {
        if (typeof value === 'string' && value.includes('calendly.com')) {
          (window as any).__calendlyRedirects.push(value);
          // Dispatch event for tests to catch
          window.dispatchEvent(
            new CustomEvent('calendly-redirect', { detail: value })
          );
          // Don't actually redirect
          return;
        }
        originalLocation.href = value;
      },
    });
  });
}

/**
 * Get tracked Calendly redirects from a page
 */
export async function getCalendlyRedirects(page: Page): Promise<string[]> {
  return page.evaluate(() => (window as any).__calendlyRedirects || []);
}

/**
 * Wait for Calendly redirect event
 */
export async function waitForCalendlyRedirect(page: Page): Promise<string> {
  return page.evaluate(() => {
    return new Promise((resolve) => {
      window.addEventListener(
        'calendly-redirect',
        (event: any) => {
          resolve(event.detail);
        },
        { once: true }
      );
    });
  });
}

/**
 * Mock n8n webhook endpoint (used by lead form)
 */
export async function mockN8NWebhook(
  page: Page,
  responseOverride?: Record<string, any>
) {
  await page.route('**/webhook/**', async (route: Route) => {
    const request = route.request();
    const method = request.method();

    if (method === 'POST') {
      // Simulate n8n processing delay
      await new Promise((resolve) => setTimeout(resolve, 400));

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(
          responseOverride || { success: true, id: 'mock-webhook-id-123' }
        ),
      });
    } else {
      await route.continue();
    }
  });
}

/**
 * Mock image loading for faster tests
 * (Replaces actual images with 1x1 pixel placeholders)
 */
export async function mockImages(page: Page) {
  await page.route('**/*.{jpg,jpeg,png,webp,svg}', async (route: Route) => {
    // 1x1 transparent PNG
    const transparentPixel = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64'
    );

    await route.fulfill({
      status: 200,
      contentType: 'image/png',
      body: transparentPixel,
    });
  });
}

/**
 * Enable all performance optimizations for faster tests
 */
export async function enableFastMode(page: Page) {
  await mockImages(page);
  await mockCalendlyScripts(page);

  // Disable animations for faster tests
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `,
  });
}

/**
 * Setup console error tracking
 * Useful for detecting runtime errors during tests
 */
export async function trackConsoleErrors(page: Page): Promise<string[]> {
  const errors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', (error) => {
    errors.push(error.message);
  });

  return errors;
}
