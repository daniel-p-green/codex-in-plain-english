import { expect, test } from '@playwright/test';

async function waitForStablePage(page: Parameters<typeof test>[0]['page']) {
  await page.waitForLoadState('domcontentloaded');
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
}

test('landing desktop visual baseline', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto('/#/');
  await waitForStablePage(page);

  await expect(page).toHaveScreenshot('landing-desktop.png', {
    fullPage: true,
    maxDiffPixels: 120,
  });
});

test('landing mobile visual baseline', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#/');
  await waitForStablePage(page);

  await expect(page).toHaveScreenshot('landing-mobile.png', {
    fullPage: true,
    maxDiffPixels: 120,
  });
});

test('module source attribution visual baseline', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/#/module/1');
  await waitForStablePage(page);
  await page.locator('#sources-section').scrollIntoViewIfNeeded();

  await expect(page.locator('#sources-section')).toHaveScreenshot('module-sources-panel.png', {
    maxDiffPixels: 80,
  });
});
