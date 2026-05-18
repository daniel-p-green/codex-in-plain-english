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
  title: 'Review, Safety, and the Living Course',
  subtitle:
    'Close the expanded course with the habits that keep Codex useful as it grows: proof, approvals, source notes, and clear updates.',
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
          text: 'As Codex becomes a broader work app, review becomes more important, not less. The right question is not "can Codex do this?" It is "what proof would let me approve this responsibly?"',
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
            ['Reviewable output', 'The file, draft, screenshot, page, or checklist you can inspect and reuse.'],
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
          text: 'This project should grow as Codex grows. New features become new modules when they change how normal people delegate work. Smaller changes become source notes, glossary entries, or updated callouts.',
        },
        {
          type: 'orderedList',
          items: [
            'Confirm current behavior against official OpenAI docs.',
            'Translate product terms into plain-English decisions.',
            'Add or update source notes in Markdown.',
            'Keep one clear course-level update note for returning learners.',
            'Keep the original plain-English foundation visible.',
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
              title: 'Choose where Codex works',
              description: 'Pick the place Codex should work: local files, cloud work, chat, browser, Chrome, or Computer Use.',
            },
            {
              number: 3,
              title: 'Review the result',
              description: 'Inspect the file changes, preview, draft, screenshot, or checklist.',
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
          text: 'Codex in Plain English is a living practice: direct the work, set boundaries, review the proof, preserve what mattered, and keep expanding as the app expands.',
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
        { id: 'c', text: 'Only when it has developer details' },
        { id: 'd', text: 'Never; living courses should not grow' },
      ],
      correctAnswer: 'a',
      explanation:
        'The course should expand when the feature changes how learners delegate, review, or repeat work.',
    },
    {
      id: 'q14-3',
      question: 'What should returning learners be able to see?',
      options: [
        { id: 'a', text: 'A clear course-level update note and source trail' },
        { id: 'b', text: 'Only hidden source changes' },
        { id: 'c', text: 'No update trail' },
        { id: 'd', text: 'Only developer docs' },
      ],
      correctAnswer: 'a',
      explanation:
        'Returning learners need a clear update trail without cluttering every module card.',
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
