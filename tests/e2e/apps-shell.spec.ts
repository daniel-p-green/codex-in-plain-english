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
  await expect(page.getByRole('link', { name: 'Codex In Plain English' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Continue Course/i })).toBeVisible();
  await expect(page.getByText('OpenAI Developers')).toHaveCount(0);

  await page.goto('/#/module/1');
  await expect(page.getByRole('navigation', { name: 'Course sections' })).toBeVisible();
});

test('mobile menu opens course drawer navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#/');

  const openMenuButton = page.getByRole('button', { name: 'Open navigation menu' });
  await openMenuButton.click();
  const drawer = page.getByRole('dialog', { name: 'Course navigation' });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByRole('link', { name: 'From Clicking To Delegating' })).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(drawer).not.toBeVisible();
  await expect(openMenuButton).toBeFocused();
});

test('mobile hero keeps "Codex In Plain English" on one line', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#/');

  const titleMainLineCount = await page.locator('.hero-title-main').evaluate(element => element.getClientRects().length);
  expect(titleMainLineCount).toBe(1);
});

test('sidebar helper copy does not imply unavailable keyboard search', async ({ page }) => {
  await page.goto('/#/');
  await expect(page.getByText('Course map')).toBeVisible();
  await expect(page.getByText('⌘ K')).toHaveCount(0);
});
