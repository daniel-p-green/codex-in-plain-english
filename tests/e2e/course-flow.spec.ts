import { expect, test, type Page } from '@playwright/test';

async function completeVisibleSections(page: Page) {
  const completeButtons = page.getByRole('button', { name: 'Mark Section Complete' });
  const count = await completeButtons.count();
  for (let i = 0; i < count; i++) {
    await completeButtons.nth(0).click();
  }
}

async function answerQuestion(page: Page, answerText: string, isLast: boolean) {
  await page.locator('.quiz-option', { hasText: answerText }).first().click();
  await page.getByRole('button', { name: 'Check Answer' }).click();
  await expect(page.getByText('Correct!')).toBeVisible();
  await page.getByRole('button', { name: isLast ? 'See Results' : 'Next Question' }).click();
}

test('landing page shows attribution and source links', async ({ page }) => {
  await page.goto('/#/');

  await expect(page.getByRole('heading', { level: 1, name: 'Apps SDK' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Attribution First' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Gabriel Chua thread/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /OpenAI Docs: Codex Skills/i })).toBeVisible();
});

test('locked modules redirect to home for fresh users', async ({ page }) => {
  await page.goto('/#/module/2');
  await expect(page).toHaveURL(/#\/$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Apps SDK' })).toBeVisible();
});

test('completing module 1 unlocks module 2', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.getByRole('heading', { level: 1, name: 'From Clicking To Delegating' })).toBeVisible();

  await completeVisibleSections(page);

  await answerQuestion(page, 'They are repetitive and error-prone at scale', false);
  await answerQuestion(page, 'You define end state and constraints, then review output', false);
  await answerQuestion(page, 'Automation was always possible; access was the barrier', true);

  await expect(page.getByRole('heading', { level: 2, name: 'Quiz Complete!' })).toBeVisible();

  const nextModuleLink = page.getByRole('link', {
    name: 'Module 2: What Codex Actually Does →',
  });
  await expect(nextModuleLink).toBeVisible();
  await nextModuleLink.click();

  await expect(page).toHaveURL(/#\/module\/2$/);
  await expect(page.getByRole('heading', { level: 1, name: 'What Codex Actually Does' })).toBeVisible();
});
