import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module7: ModuleData = {
  id: 'module-7',
  number: 7,
  title: 'Team Practices: Consistency And Scale',
  subtitle:
    'Translate personal prompting habits into shared operational standards that teams can trust and reuse.',
  depthZone: 'Team Layer',
  depthMeters: 180,
  estimatedMinutes: 17,
  sections: [
    {
      id: 'section-7-1',
      title: '7.1 - Tacit Knowledge Is The Real Bottleneck',
      content: [
        {
          type: 'paragraph',
          text: 'In many teams, expertise is procedural: what to check, what to avoid, and what good output should contain. Skills make that procedural know-how explicit.',
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
              cells: ['Small Team', 'Inconsistent outputs across teammates', 'Shared defaults and quality bars'],
            },
            {
              cells: ['Large Org', 'Knowledge trapped in silos', 'Codified repeatable process and onboarding speed'],
            },
          ],
        },
      ],
    },
    {
      id: 'section-7-3',
      title: '7.3 - Governance Lite For Skills',
      content: [
        {
          type: 'orderedList',
          items: [
            'Assign owners for each critical skill.',
            'Version changes with short changelog notes.',
            'Review skill outputs against a rubric quarterly.',
            'Retire stale skills instead of letting duplicates spread.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Treat skills like product assets, not personal notes. Ownership and maintenance matter.',
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
              description: 'Start where pain is highest and output is easy to validate.',
            },
            {
              number: 2,
              title: 'Build and document one skill',
              description: 'Keep first version intentionally narrow and testable.',
            },
            {
              number: 3,
              title: 'Pilot with 2-3 users',
              description: 'Collect failure cases and update instructions once centrally.',
            },
            {
              number: 4,
              title: 'Scale after quality stabilizes',
              description: 'Expand usage only after acceptance checks are consistently passed.',
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
          text: 'Teams scale AI workflows when process is shared, versioned, and reviewed - not when everyone improvises alone.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q7-1',
      question: 'What kind of knowledge do skills help codify?',
      options: [
        { id: 'a', text: 'Only factual trivia' },
        { id: 'b', text: 'Procedural habits and quality checks' },
        { id: 'c', text: 'Only UI color preferences' },
        { id: 'd', text: 'Nothing; they are cosmetic' },
      ],
      correctAnswer: 'b',
      explanation:
        'Skills capture operational know-how that is often undocumented and inconsistent.',
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
