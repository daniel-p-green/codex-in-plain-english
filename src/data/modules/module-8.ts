import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module8: ModuleData = {
  id: 'module-8',
  number: 8,
  title: 'Build Or Adopt Your First Skill',
  subtitle:
    'Finish strong by turning one repeated workflow into a practical skill and defining your adoption loop.',
  depthZone: 'Team Layer',
  depthMeters: 210,
  estimatedMinutes: 22,
  sections: [
    {
      id: 'section-8-1',
      title: '8.1 - Pick The Right First Workflow',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Recurring and boring enough to justify automation.',
            'Clear input and output boundaries.',
            'Low risk if first run is imperfect.',
            'Easy to verify in a few objective checks.',
          ],
        },
      ],
    },
    {
      id: 'section-8-2',
      title: '8.2 - Minimal Skill Starter Blueprint',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'my-skill/\n  SKILL.md\n  references/\n    reference.md\n  scripts/\n    run-checks.sh\n',
        },
        {
          type: 'paragraph',
          text: 'Keep V1 small. A narrow skill that works beats a broad skill that is inconsistent.',
        },
      ],
    },
    {
      id: 'section-8-3',
      title: '8.3 - Acceptance Rubric',
      content: [
        {
          type: 'table',
          headers: ['Check', 'Pass Condition'],
          rows: [
            ['Correctness', 'Output matches schema/format requirements'],
            ['Completeness', 'No required fields are missing'],
            ['Safety', 'No unauthorized paths or sensitive operations executed'],
            ['Repeatability', 'Second run yields equivalent result on same input'],
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
              description: 'Refine SKILL.md with concrete instructions.',
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
          text: 'Your first skill is a product. Ship small, measure, iterate.',
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
          text: 'You now have a repeatable path for turning plain-language outcomes into reusable delegated workflows with visible quality standards.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q8-1',
      question: 'What makes a good first skill candidate?',
      options: [
        { id: 'a', text: 'High-risk production migration' },
        { id: 'b', text: 'Rare one-time task with unclear outputs' },
        { id: 'c', text: 'Recurring low-risk workflow with clear checks' },
        { id: 'd', text: 'Task that cannot be evaluated' },
      ],
      correctAnswer: 'c',
      explanation:
        'Strong first skills are frequent, bounded, and easy to validate objectively.',
    },
    {
      id: 'q8-2',
      question: 'Why should V1 skills stay narrow?',
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
      question: 'Which acceptance criterion supports repeatability?',
      options: [
        { id: 'a', text: 'Looks creative each run' },
        { id: 'b', text: 'Equivalent output on repeated runs with same input' },
        { id: 'c', text: 'No logs retained' },
        { id: 'd', text: 'Depends on who runs it' },
      ],
      correctAnswer: 'b',
      explanation:
        'Repeatability is a direct measure of workflow stability and trustworthiness.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
