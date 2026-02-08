import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for AI.mation Landing Page
 *
 * Tests all interactive elements across 3 browsers and 4 viewports
 * with comprehensive mocking of external services.
 */
export default defineConfig({
  // Test directory
  testDir: './e2e/tests',

  // Maximum time one test can run
  timeout: 30 * 1000,

  // Fail test suite on first failure for faster feedback
  fullyParallel: true,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Retry on CI, no retry locally
  retries: process.env.CI ? 2 : 0,

  // Parallel workers: Use all CPU cores on CI, half on local
  workers: process.env.CI ? undefined : '50%',

  // Reporter to use
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    process.env.CI ? ['github'] : ['list'],
  ],

  // Shared settings for all projects
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Collect trace on failure for debugging
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video on failure
    video: 'retain-on-failure',

    // Maximum time each action (click, fill, etc.) can take
    actionTimeout: 10 * 1000,

    // Emulate user locale (German for AI.mation)
    locale: 'de-DE',

    // Timezone
    timezoneId: 'Europe/Berlin',
  },

  // Configure projects for major browsers with different viewports
  projects: [
    // ============================================================
    // CHROMIUM (Chrome/Edge)
    // ============================================================
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'chromium-laptop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 768 },
      },
    },
    {
      name: 'chromium-tablet',
      use: {
        ...devices['iPad Pro'],
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: 'chromium-mobile',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 375, height: 667 },
      },
    },

    // ============================================================
    // FIREFOX
    // ============================================================
    {
      name: 'firefox-desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'firefox-laptop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1024, height: 768 },
      },
    },

    // ============================================================
    // WEBKIT (Safari)
    // ============================================================
    {
      name: 'webkit-desktop',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'webkit-mobile',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 375, height: 667 },
      },
    },
  ],

  // Run local dev server before tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minutes to start dev server
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
