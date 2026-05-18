import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module7: ModuleData = {
  id: 'module-7',
  number: 7,
  title: 'Team Practices: Consistency and Scale',
  subtitle:
    'Turn one person\'s good Codex habit into a shared way of working that a team can trust.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  estimatedMinutes: 17,
  sections: [
    {
      id: 'section-7-1',
      title: '7.1 - Tacit Knowledge Is the Real Bottleneck',
      content: [
        {
          type: 'paragraph',
          text: 'In many teams, the important knowledge is practical: what to check, what to avoid, and what good work should contain. Skills write that know-how down.',
        },
      ],
    },
    {
      id: 'section-7-2',
      title: '7.2 - Small Team or Enterprise, Same Pattern',
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
      title: '7.3 - Lightweight Care for Skills',
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
      title: '7.5 - Mini Capstone: Plan a Small Rollout',
      content: [
        {
          type: 'paragraph',
          text: 'Choose one workflow that a small team could standardize. Define how you would pilot it before asking everyone to use it.',
        },
        {
          type: 'code',
          language: 'text',
          code: 'Workflow:\nOwner:\nPilot users:\nQuality checklist:\nFailure cases to collect:\nWhen to scale:',
        },
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
        { id: 'a', text: 'Personal preferences that never affect output quality' },
        { id: 'b', text: 'Procedural habits and quality checks' },
        { id: 'c', text: 'Meeting notes that are unrelated to the workflow' },
        { id: 'd', text: 'Every possible variation before a process is tested' },
      ],
      correctAnswer: 'b',
      explanation:
        'Skills capture practical know-how that is often undocumented and inconsistent.',
    },
    {
      id: 'q7-2',
      question: 'Which rollout strategy is recommended?',
      options: [
        { id: 'a', text: 'Share broadly once the first version works for its creator' },
        { id: 'b', text: 'Pilot narrowly, gather failures, then scale' },
        { id: 'c', text: 'Let each team edit its own copy before there is a baseline' },
        { id: 'd', text: 'Delay review until usage is already widespread' },
      ],
      correctAnswer: 'b',
      explanation:
        'Controlled pilots reduce risk and improve reliability before broad rollout.',
    },
    {
      id: 'q7-3',
      question: 'Why assign skill owners?',
      options: [
        { id: 'a', text: 'To make one person approve every normal use' },
        { id: 'b', text: 'To ensure maintenance, updates, and accountability' },
        { id: 'c', text: 'To keep the skill private until it is perfect' },
        { id: 'd', text: 'To avoid asking users where the skill fails' },
      ],
      correctAnswer: 'b',
      explanation:
        'Ownership keeps skills trustworthy as tools, systems, and requirements evolve.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
