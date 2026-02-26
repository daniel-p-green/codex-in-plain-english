import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

async function expectNoCriticalA11yViolations(pagePath: string, page: Parameters<typeof test>[0]['page']) {
  await page.goto(pagePath);
  await page.waitForLoadState('domcontentloaded');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
    .analyze();

  expect(results.violations, `Accessibility violations on ${pagePath}`).toEqual([]);
}

test('home page is accessible', async ({ page }) => {
  await expectNoCriticalA11yViolations('/#/', page);
});

test('module page is accessible', async ({ page }) => {
  await expectNoCriticalA11yViolations('/#/module/1', page);
});

test('dashboard page is accessible', async ({ page }) => {
  await expectNoCriticalA11yViolations('/#/dashboard', page);
});
