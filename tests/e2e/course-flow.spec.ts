import { expect, test, type Page } from '@playwright/test';

const STORAGE_KEY = 'codex-in-plain-english-progress-v1';
const TOTAL_MODULES = 14;

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

  await expect(page.getByRole('heading', { level: 1, name: 'Codex in Plain English: The Course' })).toBeVisible();
  await expect(page.locator('.landing-hero .hero-title-suffix')).toHaveText('The Course');
  await expect(page.locator('.landing-hero-note')).toHaveText('Updated May 17, 2026.');
  await expect(page.getByRole('heading', { level: 2, name: 'How this course works' })).toBeVisible();

  const clarityPanel = page.locator('.course-clarity');
  await expect(clarityPanel.getByText('Start Module 1 (18 min)', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Take Optional Quiz', { exact: true })).toBeVisible();
  await expect(clarityPanel.getByText('Track Progress', { exact: true })).toBeVisible();

  await expect(page.getByText('Start Module 1 (18 min) →')).toBeVisible();
  await expect(page.getByText('Open Module 10 →')).toBeVisible();
  await expect(page.getByText('Open Module 13 →')).toBeVisible();
  await expect(page.getByText(/Updated May 17, 2026 by/)).toBeVisible();
  await expect(page.getByText('New May 17')).toHaveCount(0);

  await expect(page.getByRole('heading', { level: 2, name: 'Attribution' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Gabriel Chua thread/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /OpenAI Docs: Codex$/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /OpenAI Docs: Codex Skills/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Jason Liu/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Chris Hayduk/i })).toBeVisible();

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
  await page.goto('/#/module/14');
  await expect(page).toHaveURL(/#\/module\/14$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Review, Safety, And Capstone Practice' })).toBeVisible();
  await expect(page.getByText('New May 17')).toHaveCount(0);
});

test('glossary page is accessible with plain-English definitions', async ({ page }) => {
  await page.goto('/#/glossary');

  await expect(page.getByRole('heading', { level: 1, name: 'Plain-English Glossary' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Artifact' })).toBeVisible();
  await expect(page.getByText('A reviewable output Codex creates or changes, such as a file, draft, spreadsheet, slide deck, screenshot, or webpage.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Computer Use' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Sandbox' })).toBeVisible();
});

test('continue course sends fresh learners to module 1', async ({ page }) => {
  await page.goto('/#/dashboard');
  await page.getByRole('link', { name: /Continue Course/i }).click();
  await expect(page).toHaveURL(/#\/module\/1$/);
});

test('continue course sends fully completed learners to completion', async ({ page }) => {
  await page.addInitScript(() => {
    const now = new Date().toISOString();
    const totalModules = 14;
    const modules = Object.fromEntries(
      Array.from({ length: totalModules }, (_, idx) => {
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

  await expect(page.getByRole('heading', { level: 1, name: 'Progress' })).toBeVisible();
  await expect(page.getByText(`Modules completed: 0/${TOTAL_MODULES}`)).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Key Takeaways' })).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 2, name: 'What To Do Next' })).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 1, name: 'Course Complete' })).toHaveCount(0);
});

test('completion page switches to completed state after all sections are viewed', async ({ page }) => {
  await page.goto('/#/module/14');

  const sectionIds = ['section-14-1', 'section-14-2', 'section-14-3', 'section-14-4', 'section-14-5'];
  for (const sectionId of sectionIds) {
    await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
  }

  await expect.poll(() => getSectionsReadCount(page, 'module-14')).toBe(5);

  await page.evaluate(() => {
    const raw = localStorage.getItem('codex-in-plain-english-progress-v1');
    if (!raw) return;
    const parsed = JSON.parse(raw);
    for (let moduleNumber = 1; moduleNumber <= 13; moduleNumber++) {
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
  await expect(page.getByRole('heading', { level: 1, name: 'Course Complete' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Key Takeaways' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'What To Do Next' })).toBeVisible();
});

test('tip sections show Dex mascot emoji', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.locator('.callout-title', { hasText: '🦖' }).first()).toBeVisible();
});

test('module progression does not require passing quizzes', async ({ page }) => {
  await page.goto('/#/module/1');
  await expect(page.getByRole('heading', { level: 1, name: 'From Clicking To Delegating' })).toBeVisible();

  await page.getByRole('main').getByRole('link', { name: /Module 2: What Codex Actually Does/i }).click();
  await expect(page).toHaveURL(/#\/module\/2$/);
  await expect(page.getByRole('heading', { level: 1, name: 'What Codex Actually Does' })).toBeVisible();
});

test('module page explains section-view completion and optional quiz behavior', async ({ page }) => {
  await page.goto('/#/module/1');

  await expect(page.getByText(/Section progress: \d\/5 sections viewed\./)).toBeVisible();
  await expect(page.getByText('Progress increases as you view each section.')).toBeVisible();
  await expect(page.getByText('Quizzes are optional for XP and badges.')).toBeVisible();
});

test('continue module jumps to the next unread section', async ({ page }) => {
  await page.addInitScript(() => {
    const now = new Date().toISOString();
    localStorage.setItem(
      'codex-in-plain-english-progress-v1',
      JSON.stringify({
        version: 1,
        startedAt: now,
        lastActiveAt: now,
        currentModule: 1,
        xp: 15,
        streak: { current: 1, lastActiveDate: now.split('T')[0], longest: 1 },
        badges: [],
        quizHistory: [],
        modules: {
          'module-1': {
            started: true,
            startedAt: now,
            completedAt: null,
            sectionsRead: ['section-1-1', 'section-1-2'],
            totalSections: 5,
            quiz: {
              completed: false,
              score: 0,
              totalQuestions: 3,
              attempts: 0,
              bestScore: 0,
              questionResults: {},
            },
          },
        },
      })
    );
  });

  await page.setViewportSize({ width: 1280, height: 640 });
  await page.goto('/#/module/1');
  await page.getByRole('button', { name: 'Continue module' }).click();

  await expect.poll(async () => {
    return page.evaluate(() => {
      const target = document.getElementById('section-1-3');
      if (!target) return false;
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.45 && rect.bottom > 0;
    });
  }).toBe(true);
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
  await answerQuestion(page, 'You define the end state and boundaries, then review the result', false);
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

test('quiz wrong-answer flow shows clear retry guidance', async ({ page }) => {
  await page.goto('/#/module/1?focus=quiz');

  await page.locator('.quiz-option', { hasText: 'They are usually too small to document' }).first().click();
  await page.getByRole('button', { name: 'Check Answer' }).click();

  await expect(page.getByText('Not correct yet')).toBeVisible();
  await expect(page.locator('.quiz-feedback-retry')).toHaveText('Choose another option and check again.');
  await expect(page.getByRole('button', { name: 'Try Another Option' })).toBeVisible();
});
