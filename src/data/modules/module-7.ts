import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module7: ModuleData = {
  id: 'module-7',
  number: 7,
  title: 'Team Practices: Consistency And Scale',
  subtitle:
    'Turn one person\'s good Codex habit into a shared way of working that a team can trust.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  depthMeters: 180,
  estimatedMinutes: 17,
  sections: [
    {
      id: 'section-7-1',
      title: '7.1 - Tacit Knowledge Is The Real Bottleneck',
      content: [
        {
          type: 'paragraph',
          text: 'In many teams, the important knowledge is practical: what to check, what to avoid, and what good work should contain. Skills write that know-how down.',
        },
      ],
    },
    {
      id: 'section-7-2',
      title: '7.2 - Small Team Or Enterprise, Same Pattern',
      content: [
        {
          type: 'comparison',
          headers: ['Context', 'Pain Without Skills', 'Benefit With Skills'],
          rows: [
            {
              cells: ['Solo/Freelancer', 'Rebuilds prompts from memory', 'Reuses one tested workflow package'],
            },
            {
              cells: ['Small Team', 'Inconsistent outputs across teammates', 'Shared defaults and quality standards'],
            },
            {
              cells: ['Large Org', 'Knowledge trapped in silos', 'Written-down process and faster onboarding'],
            },
          ],
        },
      ],
    },
    {
      id: 'section-7-3',
      title: '7.3 - Lightweight Care For Skills',
      content: [
        {
          type: 'orderedList',
          items: [
            'Assign owners for each critical skill.',
            'Version changes with short changelog notes.',
            'Review skill outputs against a simple checklist from time to time.',
            'Retire stale skills instead of letting duplicates spread.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Treat useful skills like shared team tools, not private notes. Ownership and maintenance matter.',
        },
      ],
    },
    {
      id: 'section-7-4',
      title: '7.4 - Team Rollout Pattern',
      content: [
        {
          type: 'numberedSteps',
          steps: [
            {
              number: 1,
              title: 'Choose one recurring workflow',
              description: 'Start where pain is highest and output is easy to check.',
            },
            {
              number: 2,
              title: 'Build and document one skill',
              description: 'Keep first version intentionally narrow and easy to check.',
            },
            {
              number: 3,
              title: 'Pilot with 2-3 users',
              description: 'Collect failure cases and update instructions once centrally.',
            },
            {
              number: 4,
              title: 'Scale after quality stabilizes',
              description: 'Expand usage only after the checks pass consistently.',
            },
          ],
        },
      ],
    },
    {
      id: 'section-7-5',
      title: '7.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Teams get better results when the process is shared, updated, and reviewed - not when everyone improvises alone.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q7-1',
      question: 'What kind of knowledge do skills help capture?',
      options: [
        { id: 'a', text: 'Only factual trivia' },
        { id: 'b', text: 'Procedural habits and quality checks' },
        { id: 'c', text: 'Only UI color preferences' },
        { id: 'd', text: 'Nothing; they are cosmetic' },
      ],
      correctAnswer: 'b',
      explanation:
        'Skills capture practical know-how that is often undocumented and inconsistent.',
    },
    {
      id: 'q7-2',
      question: 'Which rollout strategy is recommended?',
      options: [
        { id: 'a', text: 'Deploy every new skill org-wide on day one' },
        { id: 'b', text: 'Pilot narrowly, gather failures, then scale' },
        { id: 'c', text: 'Avoid changelogs to stay fast' },
        { id: 'd', text: 'Keep ownership undefined' },
      ],
      correctAnswer: 'b',
      explanation:
        'Controlled pilots reduce risk and improve reliability before broad rollout.',
    },
    {
      id: 'q7-3',
      question: 'Why assign skill owners?',
      options: [
        { id: 'a', text: 'To create bottlenecks intentionally' },
        { id: 'b', text: 'To ensure maintenance, updates, and accountability' },
        { id: 'c', text: 'To prevent documentation' },
        { id: 'd', text: 'To avoid versioning' },
      ],
      correctAnswer: 'b',
      explanation:
        'Ownership keeps skills trustworthy as tools, systems, and requirements evolve.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
