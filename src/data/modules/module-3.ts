import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS } from '../attribution';

export const module3: ModuleData = {
  id: 'module-3',
  number: 3,
  title: 'Two Ways Codex Works: Files Or Screens',
  subtitle:
    'Learn when Codex should work behind the scenes with files and data, and when it should operate a screen like a person.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  depthMeters: 60,
  estimatedMinutes: 16,
  sections: [
    {
      id: 'section-3-1',
      title: '3.1 - Way A: Behind The Scenes',
      content: [
        {
          type: 'paragraph',
          text: 'Behind-the-scenes work means Codex uses files, data, scripts, or app connections instead of clicking around. It is usually faster, easier to repeat, and easier to check.',
        },
        {
          type: 'orderedList',
          items: [
            'Best for high-volume repetitive work.',
            'Better trail of what happened.',
            'Works well when files or structured exports are available.',
          ],
        },
      ],
    },
    {
      id: 'section-3-2',
      title: '3.2 - Way B: On The Screen',
      content: [
        {
          type: 'paragraph',
          text: 'Screen work means Codex clicks through pages, fills forms, and navigates apps. It is useful when the only way to do the task is through the interface.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Tradeoff',
          text: 'Screen work can be fragile because buttons, labels, and layouts change.',
        },
      ],
    },
    {
      id: 'section-3-3',
      title: '3.3 - Decision Matrix',
      content: [
        {
          type: 'comparison',
          headers: ['Situation', 'Best Path', 'Why'],
          rows: [
            {
              cells: ['Batch process 5,000 files', 'Behind the scenes', 'Fast and repeatable'],
            },
            {
              cells: ['Older internal tool with no export option', 'On the screen', 'Only reachable through the interface'],
            },
            {
              cells: ['Recurring weekly report', 'Behind the scenes', 'Easy to repeat and check'],
            },
            {
              cells: ['One-time data entry in an admin page', 'On the screen', 'Low setup for a single run'],
            },
          ],
        },
      ],
    },
    {
      id: 'section-3-4',
      title: '3.4 - Reliability Habits',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Prefer clean files and exports over screenshots or copied text.',
            'Request dry-run previews before destructive actions.',
            'Keep a rollback path for files and records.',
            'Keep a short record of what changed so reruns are easy to check.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Start from the most stable source of information. Clean files usually beat fragile screen clicks.',
        },
      ],
    },
    {
      id: 'section-3-5',
      title: '3.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Use behind-the-scenes work when possible, screen work when necessary, and check both with clear evidence.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q3-1',
      question: 'Why is behind-the-scenes work often better for recurring work?',
      options: [
        { id: 'a', text: 'It looks more complicated' },
        { id: 'b', text: 'It is usually faster, more reliable, and easier to repeat' },
        { id: 'c', text: 'It always requires no review' },
        { id: 'd', text: 'It works only for coders' },
      ],
      correctAnswer: 'b',
      explanation:
        'Working with files or structured app access usually reduces manual variation.',
    },
    {
      id: 'q3-2',
      question: 'When is screen work reasonable?',
      options: [
        { id: 'a', text: 'When clean files or app connections exist' },
        { id: 'b', text: 'When the interface is the only available path' },
        { id: 'c', text: 'For all high-volume recurring tasks' },
        { id: 'd', text: 'Only for design teams' },
      ],
      correctAnswer: 'b',
      explanation:
        'Screen work is often the fallback when there is no cleaner file or app connection.',
    },
    {
      id: 'q3-3',
      question: 'Which reliability habit is recommended?',
      options: [
        { id: 'a', text: 'Skip dry-runs to save time' },
        { id: 'b', text: 'Avoid logs to reduce clutter' },
        { id: 'c', text: 'Prefer stable inputs and clear success checks' },
        { id: 'd', text: 'Rely on memory for reruns' },
      ],
      correctAnswer: 'c',
      explanation:
        'Stable inputs and clear checks are key to dependable delegation.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS],
};
