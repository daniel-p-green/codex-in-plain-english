import type { ModuleData } from '../../types/course';
import {
  SOURCE_GABRIEL_X,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
} from '../attribution';

export const module10: ModuleData = {
  id: 'module-10',
  number: 10,
  title: 'Browser, Chrome, and Computer Use',
  subtitle:
    'Learn when Codex should look at a page, use a signed-in browser, or operate a desktop app.',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  estimatedMinutes: 22,
  sections: [
    {
      id: 'section-10-1',
      title: '10.1 - Visual Work Needs Visual Review',
      content: [
        {
          type: 'paragraph',
          text: 'Some work cannot be judged from a final chat answer. A webpage may overlap on mobile. A spreadsheet may have a bad formula. A PDF may render wrong. A desktop app may require a file picker.',
        },
        {
          type: 'paragraph',
          text: 'The practical question is simple: what does Codex need to see or operate so you can check the result?',
        },
      ],
    },
    {
      id: 'section-10-2',
      title: '10.2 - The Three Visual Workspaces',
      content: [
        {
          type: 'comparison',
          headers: ['Workspace', 'Best for', 'Review Habit'],
          rows: [
            {
              cells: ['In-app browser', 'Local previews, simple webpages, public pages, and page comments.', 'Check the same page Codex is acting on.'],
            },
            {
              cells: ['Chrome extension', 'Signed-in pages and existing Chrome tabs.', 'Keep account actions narrow and approval-based.'],
            },
            {
              cells: ['Computer Use', 'Where available, desktop apps, upload buttons, file pickers, and screen-only tasks.', 'Use the smallest possible task and watch sensitive steps.'],
            },
          ],
        },
      ],
    },
    {
      id: 'section-10-3',
      title: '10.3 - When to Avoid Computer Use',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Use files, exports, or cleaner app connections when they are available.',
            'Avoid broad "go clean this account" requests.',
            'Do not let Codex send, buy, delete, or publish without explicit approval.',
            'Prefer draft, preview, or dry-run outputs for first passes.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Risk rule',
          text: 'The closer the task gets to accounts, money, private data, or public actions, the narrower the scope should be.',
        },
      ],
    },
    {
      id: 'section-10-4',
      title: '10.4 - A Good Visual Work Contract',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'Goal: Review the local course page for mobile layout problems.\nWhere Codex works: Open the local preview in the in-app browser.\nBoundaries: Do not change content yet. Only inspect and report.\nDeliverable: A short issue list with screenshots or exact sections.\nDone when: Desktop and mobile views have been checked and every problem has a location.\nStop and ask if: A page fails to load or a signed-in account is needed.',
        },
      ],
    },
    {
      id: 'section-10-5',
      title: '10.5 - Mini Capstone: Write a Visual Work Contract',
      content: [
        {
          type: 'paragraph',
          text: 'Pick a page, document, spreadsheet, or app screen where the result has to be inspected visually. Write the work contract before you ask Codex to act.',
        },
        {
          type: 'code',
          language: 'text',
          code: 'Goal:\nVisual workspace: In-app browser, Chrome, or Computer Use\nWhat Codex should inspect:\nWhat Codex may change:\nWhat Codex must not do:\nProof I want back:',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Use the in-app browser for shared visual review, Chrome for signed-in pages, and Computer Use only when a desktop app is the real place the work happens.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q10-1',
      question: 'When is the in-app browser a good fit?',
      options: [
        { id: 'a', text: 'When you and Codex need to inspect the same local or public page' },
        { id: 'b', text: 'When Codex should buy something without approval' },
        { id: 'c', text: 'When no visual review is needed' },
        { id: 'd', text: 'When you want to hide the result' },
      ],
      correctAnswer: 'a',
      explanation:
        'The in-app browser is a shared place for pages and previews you can inspect together.',
    },
    {
      id: 'q10-2',
      question: 'What is Chrome especially useful for?',
      options: [
        { id: 'a', text: 'Signed-in pages and existing browser state' },
        { id: 'b', text: 'Only local files' },
        { id: 'c', text: 'Avoiding all approvals' },
        { id: 'd', text: 'Replacing every desktop app' },
      ],
      correctAnswer: 'a',
      explanation:
        'Chrome is useful when signed-in browser context is part of the work.',
    },
    {
      id: 'q10-3',
      question: 'What is the safest Computer Use habit?',
      options: [
        { id: 'a', text: 'Give Codex the broadest possible account task' },
        { id: 'b', text: 'Use narrow scope and approval points for sensitive actions' },
        { id: 'c', text: 'Skip previews and drafts' },
        { id: 'd', text: 'Never define done' },
      ],
      correctAnswer: 'b',
      explanation:
        'Computer Use can operate real interfaces, so narrow scope and approvals matter.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS, SOURCE_JASON_LIU_CODEX_MAXXING],
};
