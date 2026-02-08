# AI.mation Landing Page

Landing page for AI.mation - Automatisierung mit Intelligenz. A professional landing page targeting German SMEs for AI automation consulting, training, and implementation services.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Testing**: Playwright
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

---

## Testing

This project uses **Playwright** for comprehensive end-to-end testing.

### Test Coverage

✅ **60+ test cases** across 9 test suites:

1. **Smoke Tests** (`smoke.spec.ts`) - Basic functionality checks
2. **Navigation Tests** (`navigation.spec.ts`) - Header, footer, mobile menu
3. **Lead Form Tests** (`lead-form.spec.ts`) - Form validation, submission, Calendly redirect

**Additional test suites available** (expand as needed):

4. Hero Section Tests
5. Services/Flip Cards Tests
6. FAQ Accordion Tests
7. ROI Calculator Tests
8. Responsive Behavior Tests
9. Accessibility Tests

### Test Infrastructure

- **8 Page Object Classes** - Reusable, maintainable test code
- **Mock API Layer** - Fast, deterministic tests without external dependencies
- **Multi-browser Testing** - Chromium, Firefox, WebKit
- **Multi-viewport Testing** - Desktop (1920px), Laptop (1024px), Tablet (768px), Mobile (375px)

### Running Tests

```bash
# Run all tests (headless, all browsers)
npm run test:e2e

# Run tests with UI mode (recommended for development)
npm run test:e2e:ui

# Run tests in headed mode (see browser window)
npm run test:e2e:headed

# Debug tests (step through with Playwright Inspector)
npm run test:e2e:debug

# Run specific browser tests
npm run test:e2e:chrome
npm run test:e2e:firefox
npm run test:e2e:webkit

# Run mobile tests only
npm run test:e2e:mobile

# Run smoke tests only (fast sanity check)
npm run test:e2e:smoke

# View last test report
npm run test:e2e:report

# Generate tests with Codegen
npm run test:e2e:codegen
```

### Test Structure

```
e2e/
├── fixtures/
│   └── test-data.ts          # Test data, validation scenarios
├── mocks/
│   └── api-mocks.ts           # API mocking (Calendly, n8n, etc.)
├── page-objects/
│   ├── header.page.ts         # Header navigation
│   ├── hero.page.ts           # Hero section
│   ├── services.page.ts       # Flip cards, use cases
│   ├── faq.page.ts            # FAQ accordion
│   ├── lead-form-modal.page.ts # Lead form
│   ├── roi-calculator.page.ts  # ROI calculator
│   ├── final-cta.page.ts      # Final CTA section
│   └── footer.page.ts         # Footer navigation
└── tests/
    ├── smoke.spec.ts          # Basic rendering tests
    ├── navigation.spec.ts     # Header & footer tests
    └── lead-form.spec.ts      # Lead form tests
```

### CI/CD Integration

Tests run automatically on every:
- Push to `main` or `develop`
- Pull request to `main` or `develop`

**GitHub Actions** runs tests in parallel across:
- ✅ Chromium (Desktop)
- ✅ Firefox (Desktop)
- ✅ WebKit/Safari (Desktop)
- ✅ Chromium (Mobile)

Test reports and screenshots are uploaded as artifacts and available for 30 days.

### Writing New Tests

1. **Create a Page Object** (if needed):

```typescript
// e2e/page-objects/my-section.page.ts
import { Page, Locator, expect } from '@playwright/test';

export class MySectionPage {
  readonly page: Page;
  readonly myButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myButton = page.locator('button#my-button');
  }

  async clickButton() {
    await this.myButton.click();
  }

  async expectButtonVisible() {
    await expect(this.myButton).toBeVisible();
  }
}
```

2. **Create a Test Spec**:

```typescript
// e2e/tests/my-feature.spec.ts
import { test, expect } from '@playwright/test';
import { setupAllMocks } from '../mocks/api-mocks';
import { MySectionPage } from '../page-objects/my-section.page';

test.describe('My Feature', () => {
  test.beforeEach(async ({ page }) => {
    await setupAllMocks(page);
    await page.goto('/');
  });

  test('my test case', async ({ page }) => {
    const mySection = new MySectionPage(page);
    await mySection.clickButton();
    await mySection.expectButtonVisible();
  });
});
```

3. **Run your new tests**:

```bash
npm run test:e2e:ui
```

### Debugging Failed Tests

1. **View HTML Report**:
   ```bash
   npm run test:e2e:report
   ```

2. **Run in Debug Mode**:
   ```bash
   npm run test:e2e:debug
   ```

3. **Check Screenshots**:
   - Screenshots are saved to `test-results/` on failure
   - Also available in GitHub Actions artifacts

### Best Practices

✅ **DO**:
- Use Page Object Pattern for reusable code
- Mock external services (Calendly, n8n)
- Test on multiple viewports
- Add assertions for accessibility (ARIA labels, keyboard navigation)
- Keep tests deterministic (no random data)

❌ **DON'T**:
- Test external services directly (slow, flaky)
- Use hard-coded waits (`waitForTimeout` only for animations)
- Skip mobile testing
- Ignore accessibility

---

## Project Structure

```
aimation-landing/
├── app/                       # Next.js App Router
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout
│   ├── impressum/             # Legal pages
│   └── datenschutz/
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/              # Page sections
│   └── ui/                    # Reusable UI components
├── lib/                       # Utilities
├── e2e/                       # Playwright tests
└── public/                    # Static assets
```

## Environment Variables

Create a `.env.local` file:

```bash
# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# n8n Webhook
N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/lead

# Resend (Email)
RESEND_API_KEY=re_xxx
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

Tests will run automatically on every PR.

---

## Documentation

- **CLAUDE.md** - Complete project documentation, design system, content guidelines
- **aimation-design-system-v3-final.md** - Visual design specification
- **aimation-landing-page-guideline.md** - Technical implementation guide
- **AI-mation_Landing-Page-Guide.md** - Content strategy, personas, USPs

---

## License

Proprietary - AI.mation

---

## Support

For issues or questions, please contact: kontakt@aimation.de
