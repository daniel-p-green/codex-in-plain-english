import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X } from '../attribution';

export const module4: ModuleData = {
  id: 'module-4',
  number: 4,
  title: 'First Delegation Playbook For Non-Coders',
  subtitle:
    'Use a repeatable brief template to delegate file, document, and report tasks with confidence.',
  depthZone: 'Execution Layer',
  depthMeters: 90,
  estimatedMinutes: 18,
  sections: [
    {
      id: 'section-4-1',
      title: '4.1 - The Brief Template',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'Goal:\nInput location:\nOutput format:\nDo not change:\nEdge cases:\nSuccess checks:\n',
        },
        {
          type: 'paragraph',
          text: 'This short structure prevents most first-run failures because it covers scope, constraints, and verification.',
        },
      ],
    },
    {
      id: 'section-4-2',
      title: '4.2 - Worked Example: Weekly CSV Merge',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'Goal: Merge all CSV exports into one weekly file.\nInput: /exports/week-12/\nOutput: /exports/weekly-summary.csv\nDo not change: Keep original files untouched.\nEdge cases: Skip corrupted rows and log them.\nSuccess checks: Row count + columns validated, date format normalized.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'A good brief reads like acceptance criteria, not a vague wish.',
        },
      ],
    },
    {
      id: 'section-4-3',
      title: '4.3 - Common Failure Patterns',
      content: [
        {
          type: 'table',
          headers: ['Failure Pattern', 'Fix'],
          rows: [
            ['Missing output location', 'Always specify exact output path and filename.'],
            ['No quality bar', 'Add explicit success checks and error handling instructions.'],
            ['Overbroad permissions', 'Scope task to specific directories or records only.'],
            ['No rollback strategy', 'Require backups or non-destructive first pass.'],
          ],
        },
      ],
    },
    {
      id: 'section-4-4',
      title: '4.4 - Your First Delegation Checklist',
      content: [
        {
          type: 'orderedList',
          items: [
            'Start with a low-risk repetitive task.',
            'Write the brief template in plain language.',
            'Run and review a sample output first.',
            'Add one improvement for next run.',
          ],
        },
      ],
    },
    {
      id: 'section-4-5',
      title: '4.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'You do not need to write code to automate. You need clear briefs and consistent review criteria.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q4-1',
      question: 'What is the main purpose of the delegation brief template?',
      options: [
        { id: 'a', text: 'To impress technical teammates' },
        { id: 'b', text: 'To define scope, constraints, and validation in one place' },
        { id: 'c', text: 'To replace all QA' },
        { id: 'd', text: 'To avoid specifying outputs' },
      ],
      correctAnswer: 'b',
      explanation:
        'A concise template reduces ambiguity and clarifies what success means.',
    },
    {
      id: 'q4-2',
      question: 'Which is a strong success check?',
      options: [
        { id: 'a', text: 'Looks fine to me' },
        { id: 'b', text: 'Done quickly' },
        { id: 'c', text: 'Row counts validated and date formats normalized' },
        { id: 'd', text: 'No logs needed' },
      ],
      correctAnswer: 'c',
      explanation:
        'Concrete checks are measurable and repeatable.',
    },
    {
      id: 'q4-3',
      question: 'How should beginners start with delegation?',
      options: [
        { id: 'a', text: 'Pick high-risk production tasks first' },
        { id: 'b', text: 'Skip review to build speed' },
        { id: 'c', text: 'Begin with low-risk repetitive tasks and iterate' },
        { id: 'd', text: 'Use only one-line prompts with no context' },
      ],
      correctAnswer: 'c',
      explanation:
        'Low-risk workflows are the safest way to build delegation muscle and refine prompts.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X],
};
