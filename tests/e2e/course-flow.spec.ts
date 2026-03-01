import { expect, test, type Page } from '@playwright/test';

const STORAGE_KEY = 'codex-in-plain-english-progress-v1';

async function answerQuestion(page: Page, answerText: string, isLast: boolean) {
  await page.locator('.quiz-option', { hasText: answerText }).first().click();
  await page.getByRole('button', { name: 'Check Answer' }).click();
  await expect(page.getByText('Correct!')).toBeVisible();
  await page.getByRole('button', { name: isLast ? 'See Results' : 'Next Question' }).click();
}

async function getSectionsReadCount(page: Page, moduleId: string) {
  return page.evaluate(
    ([key, id]) => {
      const raw = localStorage.getItem(key);
      if (!raw) return 0;
      const parsed = JSON.parse(raw) as {
        modules?: Record<string, { sectionsRead?: string[] }>;
      };
      return parsed.modules?.[id]?.sectionsRead?.length ?? 0;
    },
    [STORAGE_KEY, moduleId] as const
  );
}

test('landing page shows attribution and source links', async ({ page }) => {
  await page.goto('/#/');

  await expect(page.getByRole('heading', { level: 1, name: 'Codex In Plain English: The Course' })).toBeVisible();
  await expect(page.locator('.landing-hero .hero-title-suffix')).toHaveText('The Course');
  await expect(page.getByText('Guided modules with optional quizzes, not a live coding sandbox.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'How this course works' })).toBeVisible();

  const clarityPanel = page.locator('.course-clarity');
  await expect(clarityPanel.getByText('Start Module 1 (15 min)', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Take Optional Quiz', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Track Progress', { exact: true })).toBeVisible();

  await expect(page.getByText('Start Module 1 (15 min) →')).toBeVisible();
  await expect(page.getByText('Take Optional Quiz →')).toBeVisible();
  await expect(page.getByText('Track Progress →')).toBeVisible();

  await expect(page.getByRole('heading', { level: 2, name: 'Attribution' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Gabriel Chua thread/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /OpenAI Docs: Codex Skills/i })).toBeVisible();

  const attributionPlacement = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('.landing-page > section'));
    const attributionIndex = sections.findIndex(section => section.classList.contains('attribution-banner'));
    const createWorkflowIndex = sections.findIndex(
      section => section.querySelector('.landing-section-title')?.textContent?.trim() === 'Create your workflow'
    );
    const dashboardIndex = sections.findIndex(section => section.classList.contains('landing-dashboard-link'));

    if (attributionIndex === -1 || createWorkflowIndex === -1 || dashboardIndex === -1) {
      return null;
    }

    return {
      attributionIndex,
      createWorkflowIndex,
      dashboardIndex,
      orderIsCorrect: attributionIndex > createWorkflowIndex && attributionIndex > dashboardIndex,
    };
  });
  if (!attributionPlacement?.orderIsCorrect) {
    throw new Error(`Attribution order mismatch: ${JSON.stringify(attributionPlacement)}`);
  }
});

test('all modules are directly accessible for fresh users', async ({ page }) => {
  await page.goto('/#/module/8');
  await expect(page).toHaveURL(/#\/module\/8$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Build Or Adopt Your First Skill' })).toBeVisible();
});

test('continue course sends fresh learners to module 1', async ({ page }) => {
  await page.goto('/#/dashboard');
  await page.getByRole('link', { name: /Continue Course/i }).click();
  await expect(page).toHaveURL(/#\/module\/1$/);
});

test('continue course sends fully completed learners to completion', async ({ page }) => {
  await page.addInitScript(() => {
    const now = new Date().toISOString();
    const modules = Object.fromEntries(
      Array.from({ length: 8 }, (_, idx) => {
        const moduleNumber = idx + 1;
        const sectionIds = Array.from({ length: 5 }, (_, sectionIdx) => `section-${moduleNumber}-${sectionIdx + 1}`);

        return [
          `module-${moduleNumber}`,
          {
            started: true,
            startedAt: now,
            completedAt: now,
            sectionsRead: sectionIds,
            totalSections: sectionIds.length,
            quiz: {
              completed: true,
              score: 3,
              totalQuestions: 3,
              attempts: 1,
              bestScore: 3,
              questionResults: {},
            },
          },
        ];
      })
    );

    const seeded = {
      version: 1,
      startedAt: now,
      lastActiveAt: now,
      currentModule: 1,
      xp: 999,
      streak: { current: 8, lastActiveDate: now.split('T')[0], longest: 8 },
      modules,
      badges: ['course-complete'],
      quizHistory: [],
    };

    localStorage.setItem('codex-in-plain-english-progress-v1', JSON.stringify(seeded));
  });

  await page.goto('/#/dashboard');
  await page.locator('.top-nav-continue').click();
  await expect(page).toHaveURL(/#\/completion$/);
});

test('completion page shows in-progress state for fresh users', async ({ page }) => {
  await page.goto('/#/completion');

  await expect(page.getByRole('heading', { level: 1, name: 'Course In Progress' })).toBeVisible();
  await expect(page.getByText('Modules completed: 0/8')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: 'You Completed The Course' })).toHaveCount(0);
});

test('completion page switches to completed state after all sections are viewed', async ({ page }) => {
  await page.goto('/#/module/8');

  const sectionIds = ['section-8-1', 'section-8-2', 'section-8-3', 'section-8-4', 'section-8-5'];
  for (const sectionId of sectionIds) {
    await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
  }

  await expect.poll(() => getSectionsReadCount(page, 'module-8')).toBe(5);

  await page.evaluate(() => {
    const raw = localStorage.getItem('codex-in-plain-english-progress-v1');
    if (!raw) return;
    const parsed = JSON.parse(raw);
    for (let moduleNumber = 1; moduleNumber <= 7; moduleNumber++) {
      const sectionIds = Array.from({ length: 5 }, (_, idx) => `section-${moduleNumber}-${idx + 1}`);
      parsed.modules[`module-${moduleNumber}`] = {
        started: true,
        startedAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
        sectionsRead: sectionIds,
        totalSections: sectionIds.length,
        quiz: {
          completed: false,
          score: 0,
          totalQuestions: 3,
          attempts: 0,
          bestScore: 0,
          questionResults: {},
        },
      };
    }
    localStorage.setItem('codex-in-plain-english-progress-v1', JSON.stringify(parsed));
  });

  await page.goto('/#/completion');
  await expect(page.getByRole('heading', { level: 1, name: 'You Completed The Course' })).toBeVisible();
});

test('tip sections show Dex mascot emoji', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.locator('.callout-title', { hasText: '🦖' }).first()).toBeVisible();
});

test('module progression does not require passing quizzes', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.getByRole('heading', { level: 1, name: 'From Clicking To Delegating' })).toBeVisible();

  await page.getByRole('link', { name: /Module 2: What Codex Actually Does/i }).click();
  await expect(page).toHaveURL(/#\/module\/2$/);
  await expect(page.getByRole('heading', { level: 1, name: 'What Codex Actually Does' })).toBeVisible();
});

test('auto-marked sections persist after reload', async ({ page }) => {
  await page.goto('/#/module/1');

  const sectionIds = ['section-1-1', 'section-1-2', 'section-1-3', 'section-1-4', 'section-1-5'];
  for (const sectionId of sectionIds) {
    const section = page.locator(`#${sectionId}`);
    await section.scrollIntoViewIfNeeded();
    if (sectionId !== 'section-1-5') {
      await expect(section.getByText('Section Viewed')).toBeVisible();
    }
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(page.locator('#section-1-5').getByText('Section Viewed')).toBeVisible();

  await expect.poll(() => getSectionsReadCount(page, 'module-1')).toBe(5);

  await page.reload();
  await expect.poll(() => getSectionsReadCount(page, 'module-1')).toBe(5);
});

test('quiz deep-link does not auto-complete module sections', async ({ page }) => {
  await page.goto('/#/module/1?focus=quiz');
  await expect(page.locator('#quiz-section')).toBeVisible();
  await expect.poll(() => getSectionsReadCount(page, 'module-1')).toBe(0);
});

test('quiz remains optional but functional', async ({ page }) => {
  await page.goto('/#/module/1?focus=quiz');

  await answerQuestion(page, 'They are repetitive and error-prone at scale', false);
  await answerQuestion(page, 'You define end state and constraints, then review output', false);
  await answerQuestion(page, 'Automation was always possible; access was the barrier', true);

  await expect(page.getByRole('heading', { level: 2, name: 'Quiz Complete!' })).toBeVisible();

  const quizCompleted = await page.evaluate(() => {
    const raw = localStorage.getItem('codex-in-plain-english-progress-v1');
    if (!raw) return false;
    const parsed = JSON.parse(raw) as {
      modules?: Record<string, { quiz?: { completed?: boolean } }>;
    };
    return parsed.modules?.['module-1']?.quiz?.completed === true;
  });

  expect(quizCompleted).toBe(true);
});
