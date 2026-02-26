import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X } from '../attribution';

export const module1: ModuleData = {
  id: 'module-1',
  number: 1,
  title: 'From Clicking To Delegating',
  subtitle:
    'Understand why so much digital work feels busy and how outcome-based delegation changes the game for non-coders.',
  depthZone: 'Starter Layer',
  depthMeters: 10,
  estimatedMinutes: 18,
  sections: [
    {
      id: 'section-1-1',
      title: '1.1 - The Manual Loop Most People Live In',
      content: [
        {
          type: 'paragraph',
          text: 'Most computer work is a loop: open app, copy data, rename files, paste elsewhere, repeat. None of this is "wrong" - it is just manual.',
        },
        {
          type: 'paragraph',
          text: 'The hidden cost is repetition and error. A workflow that is easy once becomes expensive at 50 or 500 repetitions.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'If you can describe the steps, the work is usually programmable. Delegation starts with noticing repeat patterns.',
        },
      ],
    },
    {
      id: 'section-1-2',
      title: '1.2 - Why Automation Used To Feel Locked Away',
      content: [
        {
          type: 'comparison',
          headers: ['Need', 'Before', 'Now with Codex'],
          rows: [
            {
              cells: [
                'Rename 1,000 files',
                'Write a script yourself or ask an engineer',
                'Describe the outcome and constraints in plain language',
              ],
            },
            {
              cells: [
                'Combine many CSV exports',
                'Manual spreadsheet work or custom code',
                'Delegate merge, cleanup, and output formatting',
              ],
            },
            {
              cells: [
                'Extract fields from many PDFs',
                'Hand-copy data or build parser code',
                'Ask Codex for extraction plan and run',
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Automation always existed. Accessibility was the bottleneck.',
        },
      ],
    },
    {
      id: 'section-1-3',
      title: '1.3 - The Mindset Shift: Outcome First',
      content: [
        {
          type: 'numberedSteps',
          steps: [
            {
              number: 1,
              title: 'State the end condition',
              description: 'Example: "Produce one clean spreadsheet with normalized dates."',
            },
            {
              number: 2,
              title: 'Set constraints',
              description: 'Name folder, preserve originals, and define how errors should be reported.',
            },
            {
              number: 3,
              title: 'Review output, not internals',
              description: 'Your role becomes quality control and decision-making, not typing every step.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'You are not "avoiding code." You are delegating code execution while staying accountable for outcomes.',
        },
      ],
    },
    {
      id: 'section-1-4',
      title: '1.4 - Quick Vocabulary',
      content: [
        {
          type: 'vocabulary',
          terms: [
            {
              term: 'Delegation Prompt',
              definition: 'A plain-language request that specifies desired output, boundaries, and checks.',
            },
            {
              term: 'Outcome',
              definition: 'The final state you want to make true, independent of specific clicks.',
            },
            {
              term: 'Acceptance Check',
              definition: 'A test you run to decide if the delegated task succeeded.',
            },
          ],
        },
      ],
    },
    {
      id: 'section-1-5',
      title: '1.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'Checkpoint',
          text: 'If you remember one line, keep this: move from "do step A, B, C" to "make this true."',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q1-1',
      question: 'What is the main problem with manual digital workflows?',
      options: [
        { id: 'a', text: 'They are impossible to learn' },
        { id: 'b', text: 'They are repetitive and error-prone at scale' },
        { id: 'c', text: 'They always require paid software' },
        { id: 'd', text: 'They cannot be documented' },
      ],
      correctAnswer: 'b',
      explanation:
        'Manual steps are often simple, but volume and repetition create waste and mistakes.',
    },
    {
      id: 'q1-2',
      question: 'What changes with outcome-based delegation?',
      options: [
        { id: 'a', text: 'You stop caring about results' },
        { id: 'b', text: 'You focus on tools only' },
        { id: 'c', text: 'You define end state and constraints, then review output' },
        { id: 'd', text: 'You must become a professional developer first' },
      ],
      correctAnswer: 'c',
      explanation:
        'Delegation shifts effort from manual execution to clear specification and validation.',
    },
    {
      id: 'q1-3',
      question: 'Which statement is most accurate?',
      options: [
        { id: 'a', text: 'Automation became possible only after AI' },
        { id: 'b', text: 'Automation was always possible; access was the barrier' },
        { id: 'c', text: 'Automation only applies to coding teams' },
        { id: 'd', text: 'Automation is mainly about writing longer prompts' },
      ],
      correctAnswer: 'b',
      explanation:
        'The core shift is accessibility: AI agents make automation reachable without direct scripting expertise.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X],
};
