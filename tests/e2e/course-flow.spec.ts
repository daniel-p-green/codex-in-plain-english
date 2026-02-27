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

  await expect(page.getByRole('heading', { level: 1, name: 'Codex In Plain English: The Course' })).toBeVisible();
  await expect(page.locator('.landing-hero .hero-title-suffix')).toHaveText('The Course');
  await expect(page.getByText('Guided modules + quizzes, not a live coding sandbox.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'How this course works' })).toBeVisible();
  const clarityPanel = page.locator('.course-clarity');
  await expect(clarityPanel.getByText('Start Module 1 (15 min)', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Take Quiz', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Track Progress', { exact: true })).toBeVisible();
  await expect(page.getByText('Start Module 1 (15 min) →')).toBeVisible();
  await expect(page.getByText('Take Quiz →')).toBeVisible();
  await expect(page.getByText('Track Progress →')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Attribution First' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Gabriel Chua thread/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /OpenAI Docs: Codex Skills/i })).toBeVisible();
});

test('locked modules redirect to home for fresh users', async ({ page }) => {
  await page.goto('/#/module/2');
  await expect(page).toHaveURL(/#\/$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Codex In Plain English: The Course' })).toBeVisible();
});

test('continue course sends fresh learners to module 1', async ({ page }) => {
  await page.goto('/#/dashboard');
  await page.getByRole('link', { name: /Continue Course/i }).click();
  await expect(page).toHaveURL(/#\/module\/1$/);
});

test('continue course sends fully completed learners to completion', async ({ page }) => {
  await page.addInitScript(() => {
    const now = new Date().toISOString();
    const completedModule = {
      started: true,
      startedAt: now,
      completedAt: now,
      sectionsRead: ['seed'],
      totalSections: 1,
      quiz: {
        completed: true,
        score: 3,
        totalQuestions: 3,
        attempts: 1,
        bestScore: 3,
        questionResults: {},
      },
    };

    const seeded = {
      version: 1,
      startedAt: now,
      lastActiveAt: now,
      currentModule: 1,
      xp: 999,
      streak: { current: 8, lastActiveDate: now.split('T')[0], longest: 8 },
      modules: {
        'module-1': completedModule,
        'module-2': completedModule,
        'module-3': completedModule,
        'module-4': completedModule,
        'module-5': completedModule,
        'module-6': completedModule,
        'module-7': completedModule,
        'module-8': completedModule,
      },
      badges: ['course-complete'],
      quizHistory: [],
    };

    localStorage.setItem('codex-in-plain-english-progress-v1', JSON.stringify(seeded));
  });

  await page.goto('/#/dashboard');
  await page.locator('.top-nav-continue').click();
  await expect(page).toHaveURL(/#\/completion$/);
});

test('tip sections show Dex mascot emoji', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.locator('.callout-title', { hasText: '🦖' }).first()).toBeVisible();
});

test('completing module 1 unlocks module 2', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.getByRole('heading', { level: 1, name: 'From Clicking To Delegating' })).toBeVisible();

  await completeVisibleSections(page);

  await answerQuestion(page, 'They are repetitive and error-prone at scale', false);
  await answerQuestion(page, 'You define end state and constraints, then review output', false);
  await answerQuestion(page, 'Automation was always possible; access was the barrier', true);

  await expect(page.getByRole('heading', { level: 2, name: 'Quiz Complete!' })).toBeVisible();
  await page.getByRole('link', { name: /Continue Course/i }).click();
  await expect(page).toHaveURL(/#\/module\/2$/);
  await expect(page.getByRole('heading', { level: 1, name: 'What Codex Actually Does' })).toBeVisible();
});
