import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X } from '../attribution';

export const module2: ModuleData = {
  id: 'module-2',
  number: 2,
  title: 'What Codex Actually Does',
  subtitle:
    'Break down Codex as an execution agent: planning, selecting tools, writing instructions, and retrying when things fail in supported environments.',
  depthZone: 'Starter Layer',
  depthMeters: 30,
  estimatedMinutes: 20,
  sections: [
    {
      id: 'section-2-1',
      title: '2.1 - Codex Is An Operator, Not A Lesson Plan',
      content: [
        {
          type: 'paragraph',
          text: 'Codex is best understood as an operator that uses code to complete tasks. It is not just autocomplete and not only for software engineers.',
        },
        {
          type: 'boldText',
          label: 'Practical framing:',
          text: 'You assign work; Codex can handle much of the technical execution path when scope, permissions, and environment are set correctly.',
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
              title: 'Interpret request',
              description: 'Parse your goal and infer missing operational details.',
            },
            {
              number: 2,
              title: 'Plan subtasks',
              description: 'Split work into ordered actions with dependencies.',
            },
            {
              number: 3,
              title: 'Pick mechanisms',
              description: 'Choose scripts, CLI tools, libraries, APIs, or file operations.',
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
          text: 'Ambiguous prompts create ambiguous execution. Precise outputs are the fastest path to good automation.',
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
            'Deciding what "good" looks like before execution.',
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
          text: 'Codex can take on technical labor, but you still own intent, constraints, permissions, and final judgment.',
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
        { id: 'b', text: 'An operator that can plan and execute technical steps from plain-language goals' },
        { id: 'c', text: 'A replacement for all human review' },
        { id: 'd', text: 'A static knowledge base of API docs' },
      ],
      correctAnswer: 'b',
      explanation:
        'The course frames Codex as a work-execution agent, not just code suggestion tooling.',
    },
    {
      id: 'q2-2',
      question: 'What makes a delegation request stronger?',
      options: [
        { id: 'a', text: 'Adding more adjectives' },
        { id: 'b', text: 'Hiding constraints so Codex can improvise' },
        { id: 'c', text: 'Specifying outputs, boundaries, and success checks' },
        { id: 'd', text: 'Using advanced jargon only' },
      ],
      correctAnswer: 'c',
      explanation:
        'Clear outputs and constraints reduce guesswork and improve execution reliability.',
    },
    {
      id: 'q2-3',
      question: 'Which responsibility remains with the human operator?',
      options: [
        { id: 'a', text: 'Never reviewing output' },
        { id: 'b', text: 'Defining quality and approving sensitive actions' },
        { id: 'c', text: 'Typing every script manually' },
        { id: 'd', text: 'Avoiding all automation' },
      ],
      correctAnswer: 'b',
      explanation:
        'Delegation shifts execution, not accountability. Humans still decide standards and approvals.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X],
};
