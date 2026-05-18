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
      title: '8.5 - Mini Capstone: Package the First Version',
      content: [
        {
          type: 'paragraph',
          text: 'Turn your candidate workflow into a first-version skill plan. The goal is not polish. The goal is a narrow workflow you can test and improve.',
        },
        {
          type: 'code',
          language: 'text',
          code: 'Skill folder name:\nMain instruction file should cover:\nReference or example to include:\nFirst test input:\nPassing result:\nOne thing to improve after the first run:',
        },
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
        { id: 'a', text: 'A high-impact task where mistakes are costly' },
        { id: 'b', text: 'A rare task where the desired output changes each time' },
        { id: 'c', text: 'Recurring low-risk workflow with clear checks' },
        { id: 'd', text: 'A workflow where only one expert can judge success' },
      ],
      correctAnswer: 'c',
      explanation:
        'Strong first skills are frequent, bounded, and easy to check.',
    },
    {
      id: 'q8-2',
      question: 'Why should first-version skills stay narrow?',
      options: [
        { id: 'a', text: 'Because broad skills should wait until the model improves' },
        { id: 'b', text: 'Because narrow scope improves reliability and iteration speed' },
        { id: 'c', text: 'Because narrow skills do not need examples or checks' },
        { id: 'd', text: 'Because team workflows should avoid maintenance' },
      ],
      correctAnswer: 'b',
      explanation:
        'Narrow scope prevents ambiguity and makes defects easier to identify and fix.',
    },
    {
      id: 'q8-3',
      question: 'Which success check supports repeatability?',
      options: [
        { id: 'a', text: 'Output varies enough to show fresh thinking' },
        { id: 'b', text: 'Equivalent output on repeated runs with same input' },
        { id: 'c', text: 'The result is useful but hard to compare' },
        { id: 'd', text: 'Each teammate adjusts the instructions privately' },
      ],
      correctAnswer: 'b',
      explanation:
        'Repeatability shows whether the workflow is stable enough to trust.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
