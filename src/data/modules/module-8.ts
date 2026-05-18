import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module8: ModuleData = {
  id: 'module-8',
  number: 8,
  title: 'Build or Adopt Your First Skill',
  subtitle:
    'Turn one repeated workflow into a practical skill and decide how you will use it again.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  depthMeters: 210,
  estimatedMinutes: 22,
  sections: [
    {
      id: 'section-8-1',
      title: '8.1 - Pick the Right First Workflow',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Recurring and boring enough to be worth packaging.',
            'Clear input and output boundaries.',
            'Low risk if first run is imperfect.',
            'Easy to verify in a few objective checks.',
          ],
        },
      ],
    },
    {
      id: 'section-8-2',
      title: '8.2 - Small Skill Starter Blueprint',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'my-skill/\n  SKILL.md\n  references/\n    reference.md\n  scripts/\n    run-checks.sh\n',
        },
        {
          type: 'paragraph',
          text: 'Keep the first version small. A narrow skill that works beats a broad skill that behaves differently every time.',
        },
      ],
    },
    {
      id: 'section-8-3',
      title: '8.3 - Simple Quality Checklist',
      content: [
        {
          type: 'table',
          headers: ['Check', 'What Passing Looks Like'],
          rows: [
            ['Correctness', 'Output matches the required format'],
            ['Completeness', 'No required fields are missing'],
            ['Safety', 'No unexpected files, accounts, or sensitive actions are touched'],
            ['Repeatability', 'Running it again on the same input gives the same kind of result'],
          ],
        },
      ],
    },
    {
      id: 'section-8-4',
      title: '8.4 - 30-Day Adoption Loop',
      content: [
        {
          type: 'numberedSteps',
          steps: [
            {
              number: 1,
              title: 'Week 1: Build and run manually once',
              description: 'Document gaps and edge cases immediately.',
            },
            {
              number: 2,
              title: 'Week 2: Stabilize prompts and checks',
              description: 'Refine the main instruction file with concrete steps.',
            },
            {
              number: 3,
              title: 'Week 3: Share with teammate',
              description: 'Watch where they hesitate and update docs.',
            },
            {
              number: 4,
              title: 'Week 4: Publish as team default',
              description: 'Track output quality and maintenance cadence.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Your first skill is a tiny product. Start small, check results, and improve it.',
        },
      ],
    },
    {
      id: 'section-8-5',
      title: '8.5 - Final Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'You are now ready',
          text: 'You now have a repeatable path for turning plain-language outcomes into reusable Codex workflows with visible quality standards.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q8-1',
      question: 'What makes a good first skill candidate?',
      options: [
        { id: 'a', text: 'High-risk live task' },
        { id: 'b', text: 'Rare one-time task with unclear outputs' },
        { id: 'c', text: 'Recurring low-risk workflow with clear checks' },
        { id: 'd', text: 'Task that cannot be evaluated' },
      ],
      correctAnswer: 'c',
      explanation:
        'Strong first skills are frequent, bounded, and easy to check.',
    },
    {
      id: 'q8-2',
      question: 'Why should first-version skills stay narrow?',
      options: [
        { id: 'a', text: 'To reduce learning opportunities' },
        { id: 'b', text: 'Because narrow scope improves reliability and iteration speed' },
        { id: 'c', text: 'Because agents cannot handle more than one task' },
        { id: 'd', text: 'To avoid documentation' },
      ],
      correctAnswer: 'b',
      explanation:
        'Narrow scope prevents ambiguity and makes defects easier to identify and fix.',
    },
    {
      id: 'q8-3',
      question: 'Which success check supports repeatability?',
      options: [
        { id: 'a', text: 'Looks creative each run' },
        { id: 'b', text: 'Equivalent output on repeated runs with same input' },
        { id: 'c', text: 'No logs retained' },
        { id: 'd', text: 'Depends on who runs it' },
      ],
      correctAnswer: 'b',
      explanation:
        'Repeatability shows whether the workflow is stable enough to trust.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
