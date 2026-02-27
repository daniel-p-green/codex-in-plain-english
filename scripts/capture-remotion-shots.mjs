import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';

const baseUrl = process.env.COURSE_BASE_URL ?? 'https://daniel-p-green.github.io/codex-in-plain-english';
const outputDir = path.resolve('src/remotion/assets');
const storageKey = 'codex-in-plain-english-progress-v1';

mkdirSync(outputDir, { recursive: true });

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

const seededProgress = {
  version: 1,
  startedAt: now,
  lastActiveAt: now,
  currentModule: 8,
  xp: 1840,
  streak: { current: 8, lastActiveDate: now.split('T')[0], longest: 12 },
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
  badges: ['course-complete', 'streak-3', 'streak-7', 'perfect-quiz', 'all-perfect'],
  quizHistory: [],
};

const normalShots = [
  { name: 'landing-desktop.png', route: '/#/' },
  { name: 'dashboard-desktop.png', route: '/#/dashboard' },
  { name: 'module-desktop.png', route: '/#/module/1' },
];

const mobileShots = [
  { name: 'landing-mobile.png', route: '/#/' },
  { name: 'dashboard-mobile.png', route: '/#/dashboard' },
  { name: 'module-mobile.png', route: '/#/module/1' },
];

async function captureShot(page, shot) {
  const targetUrl = `${baseUrl}${shot.route}`;
  await page.goto(targetUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(450);
  const screenshotPath = path.join(outputDir, shot.name);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  return screenshotPath;
}

async function run() {
  const browser = await chromium.launch({ headless: true });

  const desktopContext = await browser.newContext({
    viewport: { width: 1728, height: 972 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();

  for (const shot of normalShots) {
    const out = await captureShot(desktopPage, shot);
    console.log(`captured ${out}`);
  }

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();

  for (const shot of mobileShots) {
    const out = await captureShot(mobilePage, shot);
    console.log(`captured ${out}`);
  }

  const seededContext = await browser.newContext({
    viewport: { width: 1728, height: 972 },
    deviceScaleFactor: 2,
  });
  await seededContext.addInitScript(
    ({ key, value }) => {
      localStorage.setItem(key, value);
    },
    { key: storageKey, value: JSON.stringify(seededProgress) }
  );
  const seededPage = await seededContext.newPage();

  const completionOut = await captureShot(seededPage, {
    name: 'completion-desktop.png',
    route: '/#/completion',
  });
  console.log(`captured ${completionOut}`);

  await seededContext.close();
  await mobileContext.close();
  await desktopContext.close();
  await browser.close();
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
