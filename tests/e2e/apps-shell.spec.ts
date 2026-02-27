import { expect, test } from '@playwright/test';

test('landing follows apps-shell card structure', async ({ page }) => {
  await page.goto('/#/');

  const getStarted = page.getByTestId('get-started-grid');
  await expect(getStarted).toBeVisible();
  await expect(getStarted.locator('a, article')).toHaveCount(2);

  const createApp = page.getByTestId('create-app-grid');
  await expect(createApp).toBeVisible();
  await expect(createApp.locator('a, article')).toHaveCount(3);
});

test('shared shell appears on dashboard and module pages', async ({ page }) => {
  await page.goto('/#/dashboard');

  await expect(page.getByRole('navigation', { name: 'Course sections' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API Dashboard ↗' })).toBeVisible();

  await page.goto('/#/module/1');
  await expect(page.getByRole('navigation', { name: 'Course sections' })).toBeVisible();
});

test('mobile menu opens course drawer navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#/');

  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const drawer = page.getByRole('dialog', { name: 'Course navigation' });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByRole('link', { name: 'Quickstart' })).toBeVisible();
});
