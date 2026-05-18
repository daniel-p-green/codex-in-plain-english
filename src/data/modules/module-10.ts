import type { ModuleData } from '../../types/course';
import {
  SOURCE_GABRIEL_X,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
} from '../attribution';

export const module10: ModuleData = {
  id: 'module-10',
  number: 10,
  title: 'Browser, Chrome, And Computer Use',
  subtitle:
    'Learn when Codex should inspect a local preview, work through signed-in browser state, or operate a desktop app.',
  releaseStatus: 'new',
  releaseLabel: 'New May 17',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 270,
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
          text: 'The practical question is simple: what surface does Codex need to see or operate so the result can be checked?',
        },
      ],
    },
    {
      id: 'section-10-2',
      title: '10.2 - The Three Visual Surfaces',
      content: [
        {
          type: 'comparison',
          headers: ['Surface', 'Best For', 'Review Habit'],
          rows: [
            {
              cells: ['In-app browser', 'Local previews, static HTML, public pages, and side-panel annotations.', 'Check the same page Codex is acting on.'],
            },
            {
              cells: ['Chrome extension', 'Signed-in pages, existing Chrome tabs, and authenticated browser state.', 'Keep account actions narrow and approval-based.'],
            },
            {
              cells: ['Computer Use', 'Desktop apps, upload buttons, file pickers, and GUI-only tasks.', 'Use the smallest possible task and watch sensitive steps.'],
            },
          ],
        },
      ],
    },
    {
      id: 'section-10-3',
      title: '10.3 - When To Avoid Computer Use',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Use files, APIs, or structured exports when they are available.',
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
          code: 'Goal: Review the local course page for mobile layout problems.\nSurface: Open the local preview in the in-app browser.\nConstraints: Do not change content yet. Only inspect and report.\nDeliverable: A short issue list with screenshots or exact sections.\nDone when: Desktop and mobile views have been checked and every problem has a location.\nStop and ask if: A page fails to load or a signed-in account is needed.',
        },
      ],
    },
    {
      id: 'section-10-5',
      title: '10.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Use the in-app browser for shared visual review, Chrome for signed-in browser state, and Computer Use only when the desktop GUI is the real work surface.',
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
        { id: 'd', text: 'When you want to hide the artifact' },
      ],
      correctAnswer: 'a',
      explanation:
        'The in-app browser is a shared surface for pages and previews you can inspect together.',
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
        'Chrome is useful when authenticated browser context is part of the work.',
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
