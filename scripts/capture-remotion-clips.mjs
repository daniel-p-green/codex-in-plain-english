import { copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = process.env.COURSE_BASE_URL ?? 'https://daniel-p-green.github.io/codex-in-plain-english';
const clipsDir = path.resolve('src/remotion/assets/clips');
const tempVideoDir = path.resolve('.tmp/remotion-clips');
const storageKey = 'codex-in-plain-english-progress-v1';

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

const dashboardSeed = {
  version: 1,
  startedAt: now,
  lastActiveAt: now,
  currentModule: 4,
  xp: 820,
  streak: { current: 5, lastActiveDate: now.split('T')[0], longest: 9 },
  modules: {
    'module-1': completedModule,
    'module-2': completedModule,
    'module-3': completedModule,
    'module-4': {
      started: true,
      startedAt: now,
      completedAt: null,
      sectionsRead: ['section-4-1', 'section-4-2'],
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
  badges: ['first-delegate', 'outcome-thinker', 'mode-switcher', 'streak-3'],
  quizHistory: [],
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const safeAction = async (action) => {
  try {
    await action();
  } catch {
    // Ignore brittle UI differences and keep recording.
  }
};

const goTo = async (page, route) => {
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
  await sleep(500);
};

async function recordClip({ browser, name, contextOptions, setupContext, flow, minDurationMs = 7000 }) {
  const context = await browser.newContext({
    ...contextOptions,
    recordVideo: {
      dir: tempVideoDir,
      size: contextOptions.viewport,
    },
  });

  if (setupContext) {
    await setupContext(context);
  }

  const page = await context.newPage();
  const video = page.video();
  const start = Date.now();

  await flow(page);

  const elapsed = Date.now() - start;
  if (elapsed < minDurationMs) {
    await sleep(minDurationMs - elapsed);
  }

  await context.close();
  const videoPath = await video.path();
  const destination = path.join(clipsDir, name);
  await copyFile(videoPath, destination);
  console.log(`captured ${destination}`);
}

const desktopOptions = {
  viewport: { width: 1728, height: 972 },
  deviceScaleFactor: 2,
};

const mobileOptions = {
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
};

async function captureDesktopClips(browser) {
  await recordClip({
    browser,
    name: 'landing-to-module-desktop.webm',
    contextOptions: desktopOptions,
    flow: async page => {
      await goTo(page, '/#/');
      await safeAction(() => page.getByRole('link', { name: /From Clicking To Delegating/i }).first().click());
      await sleep(1400);
      if (!page.url().includes('/#/module/1')) {
        await goTo(page, '/#/module/1');
      }
      await safeAction(() => page.mouse.wheel(0, 700));
      await sleep(900);
    },
  });

  await recordClip({
    browser,
    name: 'module-flow-desktop.webm',
    contextOptions: desktopOptions,
    flow: async page => {
      await goTo(page, '/#/module/1');
      await safeAction(() => page.getByRole('button', { name: /1\.5 - Dex Checkpoint/i }).click());
      await sleep(700);
      await safeAction(() => page.getByRole('button', { name: /Knowledge Check/i }).click());
      await sleep(700);
      await safeAction(() => page.getByRole('button', { name: /Sources/i }).click());
      await sleep(700);
      await safeAction(() => page.mouse.wheel(0, -600));
      await sleep(600);
    },
  });

  await recordClip({
    browser,
    name: 'dashboard-desktop.webm',
    contextOptions: desktopOptions,
    setupContext: async context => {
      await context.addInitScript(
        ({ key, value }) => {
          localStorage.setItem(key, value);
        },
        { key: storageKey, value: JSON.stringify(dashboardSeed) }
      );
    },
    flow: async page => {
      await goTo(page, '/#/dashboard');
      await safeAction(() => page.mouse.wheel(0, 560));
      await sleep(900);
      await safeAction(() => page.getByRole('link', { name: /What Codex Actually Does/i }).first().click());
      await sleep(1300);
    },
  });
}

async function captureMobileClips(browser) {
  await recordClip({
    browser,
    name: 'landing-to-module-mobile.webm',
    contextOptions: mobileOptions,
    flow: async page => {
      await goTo(page, '/#/');
      await safeAction(() => page.mouse.wheel(0, 320));
      await sleep(500);
      await safeAction(() => page.getByRole('link', { name: /From Clicking To Delegating/i }).first().click());
      await sleep(1500);
      if (!page.url().includes('/#/module/1')) {
        await goTo(page, '/#/module/1');
      }
    },
  });

  await recordClip({
    browser,
    name: 'module-flow-mobile.webm',
    contextOptions: mobileOptions,
    flow: async page => {
      await goTo(page, '/#/module/1');
      await safeAction(() => page.mouse.wheel(0, 740));
      await sleep(900);
      await safeAction(() => page.getByRole('button', { name: /Knowledge Check/i }).click());
      await sleep(800);
      await safeAction(() => page.mouse.wheel(0, 420));
      await sleep(650);
    },
  });

  await recordClip({
    browser,
    name: 'dashboard-mobile.webm',
    contextOptions: mobileOptions,
    setupContext: async context => {
      await context.addInitScript(
        ({ key, value }) => {
          localStorage.setItem(key, value);
        },
        { key: storageKey, value: JSON.stringify(dashboardSeed) }
      );
    },
    flow: async page => {
      await goTo(page, '/#/dashboard');
      await safeAction(() => page.mouse.wheel(0, 860));
      await sleep(900);
      await safeAction(() => page.getByRole('link', { name: /Continue Course/i }).first().click());
      await sleep(1200);
    },
  });
}

async function run() {
  await mkdir(clipsDir, { recursive: true });
  await rm(tempVideoDir, { recursive: true, force: true });
  await mkdir(tempVideoDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  await captureDesktopClips(browser);
  await captureMobileClips(browser);

  await browser.close();
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
