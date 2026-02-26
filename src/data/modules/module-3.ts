import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X } from '../attribution';

export const module3: ModuleData = {
  id: 'module-3',
  number: 3,
  title: 'Two Execution Modes: Code vs UI',
  subtitle:
    'Learn when AI should use scripts and APIs versus directly operating interfaces like a human.',
  depthZone: 'Execution Layer',
  depthMeters: 60,
  estimatedMinutes: 16,
  sections: [
    {
      id: 'section-3-1',
      title: '3.1 - Mode A: Through Code',
      content: [
        {
          type: 'paragraph',
          text: 'Code mode means scripts, command line tools, and API calls. It is usually faster, repeatable, and easier to scale.',
        },
        {
          type: 'orderedList',
          items: [
            'Best for high-volume repetitive work.',
            'Better audit trail through commands and logs.',
            'Works well when APIs or files are accessible.',
          ],
        },
      ],
    },
    {
      id: 'section-3-2',
      title: '3.2 - Mode B: Through Interface',
      content: [
        {
          type: 'paragraph',
          text: 'UI mode means clicking through screens, filling forms, and navigating apps. Useful when no API is available.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Tradeoff',
          text: 'UI automations can be fragile because interfaces and labels change frequently.',
        },
      ],
    },
    {
      id: 'section-3-3',
      title: '3.3 - Decision Matrix',
      content: [
        {
          type: 'comparison',
          headers: ['Situation', 'Preferred Mode', 'Why'],
          rows: [
            {
              cells: ['Batch process 5,000 files', 'Code', 'Speed, scale, deterministic handling'],
            },
            {
              cells: ['Legacy internal tool with no API', 'UI', 'Only reachable through interface'],
            },
            {
              cells: ['Recurring weekly metric report', 'Code', 'Repeatability and easy scheduling'],
            },
            {
              cells: ['One-time data entry in admin panel', 'UI', 'Low setup overhead for single run'],
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
            'Prefer structured inputs (CSV, JSON, APIs) over screenshots or free text.',
            'Request dry-run previews before destructive actions.',
            'Keep a rollback path for files and records.',
            'Log key outputs so reruns are easy to validate.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Start from the most stable integration point. Reliability is usually a format and access problem, not a model problem.',
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
          text: 'Pick code mode when possible, UI mode when necessary, and validate both with explicit checks.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q3-1',
      question: 'Why is code mode often preferred for recurring work?',
      options: [
        { id: 'a', text: 'It looks more technical' },
        { id: 'b', text: 'It is usually faster, more reliable, and scalable' },
        { id: 'c', text: 'It always requires no review' },
        { id: 'd', text: 'It works only for coders' },
      ],
      correctAnswer: 'b',
      explanation:
        'Scripts/APIs generally reduce manual variance and scale more cleanly than click automation.',
    },
    {
      id: 'q3-2',
      question: 'When is UI mode reasonable?',
      options: [
        { id: 'a', text: 'When APIs exist and are stable' },
        { id: 'b', text: 'When no API/integration path exists' },
        { id: 'c', text: 'For all high-volume recurring tasks' },
        { id: 'd', text: 'Only for design teams' },
      ],
      correctAnswer: 'b',
      explanation:
        'UI mode is often the fallback path when systems are closed or integration points are unavailable.',
    },
    {
      id: 'q3-3',
      question: 'Which reliability habit is recommended?',
      options: [
        { id: 'a', text: 'Skip dry-runs to save time' },
        { id: 'b', text: 'Avoid logs to reduce clutter' },
        { id: 'c', text: 'Prefer stable structured inputs and clear validation checks' },
        { id: 'd', text: 'Rely on memory for reruns' },
      ],
      correctAnswer: 'c',
      explanation:
        'Stable data formats and validation checkpoints are key to dependable automation.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X],
};
