import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS } from '../attribution';

export const module2: ModuleData = {
  id: 'module-2',
  number: 2,
  title: 'What Codex Actually Does',
  subtitle:
    'See Codex as a work partner that can plan steps, use tools, try the work, and report back when it needs your judgment.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  depthMeters: 30,
  estimatedMinutes: 20,
  sections: [
    {
      id: 'section-2-1',
      title: '2.1 - Codex Is a Doer, Not Just a Tutor',
      content: [
        {
          type: 'paragraph',
          text: 'Codex is best understood as a helper that can do work, not just explain work. It may use code behind the scenes, but you do not need to think like a software engineer to give it a clear job.',
        },
        {
          type: 'boldText',
          label: 'Practical framing:',
          text: 'You assign the job, set the boundaries, and review the result. Codex handles many of the steps in between.',
        },
      ],
    },
    {
      id: 'section-2-2',
      title: '2.2 - The Delegation Pipeline',
      content: [
        {
          type: 'numberedSteps',
          steps: [
            {
              number: 1,
              title: 'Understand the ask',
              description: 'Read your goal and identify what information is missing.',
            },
            {
              number: 2,
              title: 'Break it into steps',
              description: 'Turn the request into a practical sequence of actions.',
            },
            {
              number: 3,
              title: 'Choose how to do it',
              description: 'Use files, apps, browser pages, or behind-the-scenes tools as needed.',
            },
            {
              number: 4,
              title: 'Execute and verify',
              description: 'Run steps, inspect outcomes, retry if needed, and report status.',
            },
          ],
        },
      ],
    },
    {
      id: 'section-2-3',
      title: '2.3 - Good Requests vs Fragile Requests',
      content: [
        {
          type: 'table',
          headers: ['Weak Request', 'Improved Delegation Brief'],
          rows: [
            [
              '"Clean this up."',
              '"Merge all CSV files in /exports, normalize dates to YYYY-MM-DD, output report.csv, keep originals untouched."',
            ],
            [
              '"Summarize these PDFs."',
              '"Extract title, owner, and due date from each PDF and export a summary table as summary.xlsx."',
            ],
            [
              '"Make a report."',
              '"Create weekly report with top 5 metrics and include anomalies as a separate section."',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Dex says',
          text: 'A fuzzy request creates fuzzy work. A clear output gives Codex something concrete to aim for.',
        },
      ],
    },
    {
      id: 'section-2-4',
      title: '2.4 - Where Human Judgment Still Matters',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Deciding what "good" looks like before Codex starts.',
            'Confirming environment setup and permissions before running sensitive actions.',
            'Reviewing edge cases and exceptions in outputs.',
            'Approving operations that can impact sensitive data.',
            'Defining when to stop and ask for clarification.',
          ],
        },
      ],
    },
    {
      id: 'section-2-5',
      title: '2.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Codex can take on many work steps, but you still own intent, boundaries, permissions, and final judgment.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q2-1',
      question: 'Which description best matches Codex in this course?',
      options: [
        { id: 'a', text: 'A browser extension only for writing code snippets' },
        { id: 'b', text: 'A helper that can plan steps and carry out work from plain-language goals' },
        { id: 'c', text: 'A replacement for all human review' },
        { id: 'd', text: 'A static technical manual' },
      ],
      correctAnswer: 'b',
      explanation:
        'The course frames Codex as a helper that can carry out work, not just suggest code.',
    },
    {
      id: 'q2-2',
      question: 'What makes a delegation request stronger?',
      options: [
        { id: 'a', text: 'Adding more adjectives' },
        { id: 'b', text: 'Hiding boundaries so Codex can improvise' },
        { id: 'c', text: 'Specifying outputs, boundaries, and success checks' },
        { id: 'd', text: 'Using advanced jargon only' },
      ],
      correctAnswer: 'c',
      explanation:
        'Clear outputs and boundaries reduce guesswork and make the work easier to trust.',
    },
    {
      id: 'q2-3',
      question: 'Which responsibility remains with the human?',
      options: [
        { id: 'a', text: 'Never reviewing output' },
        { id: 'b', text: 'Defining quality and approving sensitive actions' },
        { id: 'c', text: 'Typing every script manually' },
        { id: 'd', text: 'Avoiding all automation' },
      ],
      correctAnswer: 'b',
      explanation:
        'Delegation shifts the doing, not the accountability. Humans still decide standards and approvals.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS],
};
