import type { ModuleData } from '../../types/course';
import {
  SOURCE_CHRIS_HAYDUK_GOALS,
  SOURCE_GABRIEL_X,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
  SOURCE_OPENAI_SKILLS_DOC,
} from '../attribution';

export const module14: ModuleData = {
  id: 'module-14',
  number: 14,
  title: 'Review, Safety, And The Living Course',
  subtitle:
    'Close the expanded course with the habits that keep Codex useful as it keeps growing: proof, approvals, source notes, and course updates.',
  releaseStatus: 'new',
  releaseLabel: 'New May 17',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 390,
  estimatedMinutes: 20,
  sections: [
    {
      id: 'section-14-1',
      title: '14.1 - More Power Means More Review',
      content: [
        {
          type: 'paragraph',
          text: 'As Codex becomes a broader work app, the review habit becomes more important, not less. The right question is not "can Codex do this?" It is "what proof would let me approve this responsibly?"',
        },
      ],
    },
    {
      id: 'section-14-2',
      title: '14.2 - The Trust Controls',
      content: [
        {
          type: 'table',
          headers: ['Control', 'Plain-English Meaning'],
          rows: [
            ['Sandbox', 'The boundary around what Codex can access or change.'],
            ['Approval', 'The point where Codex pauses before a higher-risk action.'],
            ['Diff', 'The exact file changes you review before accepting.'],
            ['Artifact', 'The output you can inspect, annotate, and reuse.'],
            ['Source notes', 'The record of where course claims came from.'],
          ],
        },
      ],
    },
    {
      id: 'section-14-3',
      title: '14.3 - The Living Course Rule',
      content: [
        {
          type: 'paragraph',
          text: 'This project should grow like Codex grows. New features become new modules when they change how normal people delegate work. Small changes become source notes, glossary entries, or updated callouts.',
        },
        {
          type: 'orderedList',
          items: [
            'Confirm current behavior against official OpenAI docs.',
            'Translate product terms into plain-English decisions.',
            'Add or update source notes in Markdown.',
            'Mark modules as New or Updated so returning learners know where to go.',
            'Keep Gabriel\'s original plain-English foundation visible.',
          ],
        },
      ],
    },
    {
      id: 'section-14-4',
      title: '14.4 - Capstone Operating Loop',
      content: [
        {
          type: 'numberedSteps',
          steps: [
            {
              number: 1,
              title: 'Delegate one bounded task',
              description: 'Use the brief template from the core course.',
            },
            {
              number: 2,
              title: 'Choose the surface',
              description: 'Pick Local, Worktree, Cloud, Chat, browser, Chrome, or Computer Use.',
            },
            {
              number: 3,
              title: 'Review the artifact',
              description: 'Inspect the file, diff, preview, draft, screenshot, or checklist.',
            },
            {
              number: 4,
              title: 'Make the pattern durable',
              description: 'Use notes, a Skill, a Goal, or a Heartbeat only after the pattern proves useful.',
            },
          ],
        },
      ],
    },
    {
      id: 'section-14-5',
      title: '14.5 - Final Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'You are now ready',
          text: 'Codex in plain English is a living operating practice: direct the work, bound the access, review the proof, preserve what mattered, and keep expanding as the app expands.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q14-1',
      question: 'What question matters most as Codex becomes more capable?',
      options: [
        { id: 'a', text: 'What proof would let me approve this responsibly?' },
        { id: 'b', text: 'How can I avoid all boundaries?' },
        { id: 'c', text: 'How can I skip source notes?' },
        { id: 'd', text: 'How can I make the course developer-only?' },
      ],
      correctAnswer: 'a',
      explanation:
        'More capability makes evidence, review, and approval points more important.',
    },
    {
      id: 'q14-2',
      question: 'When should a new Codex feature become a new course module?',
      options: [
        { id: 'a', text: 'When it changes how normal people delegate, review, or repeat work' },
        { id: 'b', text: 'Whenever a product term exists' },
        { id: 'c', text: 'Only when it has API details' },
        { id: 'd', text: 'Never; living courses should not grow' },
      ],
      correctAnswer: 'a',
      explanation:
        'The course should expand when the feature changes the learner operating model.',
    },
    {
      id: 'q14-3',
      question: 'What should returning learners be able to see in the UI?',
      options: [
        { id: 'a', text: 'Which modules are new or updated' },
        { id: 'b', text: 'Only hidden source changes' },
        { id: 'c', text: 'No update trail' },
        { id: 'd', text: 'Only developer docs' },
      ],
      correctAnswer: 'a',
      explanation:
        'New and updated labels help returning learners jump to what changed.',
    },
  ],
  sourceRefs: [
    SOURCE_GABRIEL_X,
    SOURCE_OPENAI_CODEX_DOCS,
    SOURCE_OPENAI_SKILLS_DOC,
    SOURCE_JASON_LIU_CODEX_MAXXING,
    SOURCE_CHRIS_HAYDUK_GOALS,
  ],
};
