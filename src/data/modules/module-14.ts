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
  title: 'Review, Safety, and Capstone Practice',
  subtitle:
    'Close the expanded course by practicing the full loop: delegate, choose the work surface, review proof, and preserve what matters.',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
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
            ['Evidence', 'The proof that lets you decide whether the work is done.'],
          ],
        },
      ],
    },
    {
      id: 'section-14-3',
      title: '14.3 - The Review Contract',
      content: [
        {
          type: 'paragraph',
          text: 'Before Codex acts, decide what you will need to see before you approve the result. This keeps review practical instead of emotional.',
        },
        {
          type: 'orderedList',
          items: [
            'Name the outcome in plain English.',
            'Set the boundary around files, accounts, private data, money, or publishing.',
            'Ask for a reviewable output, such as a draft, diff, screenshot, or checklist.',
            'Require proof that matches the risk of the task.',
            'Pause or narrow the task when the proof cannot be inspected.',
          ],
        },
      ],
    },
    {
      id: 'section-14-4',
      title: '14.4 - Final Mini Capstone: Run the Full Loop',
      content: [
        {
          type: 'paragraph',
          text: 'Use one real, bounded task. The point is not to use every Codex feature. The point is to choose the smallest useful loop and review it well.',
        },
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
        {
          type: 'code',
          language: 'text',
          code: 'My task:\nWhere Codex should work:\nBoundary:\nDeliverable:\nProof I will review:\nWhat I will preserve for next time:',
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
          text: 'You now have the operating loop: direct the work, set boundaries, choose the right surface, review the proof, and preserve the useful pattern.',
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
        { id: 'c', text: 'How can I skip review?' },
        { id: 'd', text: 'How can I make the course developer-only?' },
      ],
      correctAnswer: 'a',
      explanation:
        'More capability makes evidence, review, and approval points more important.',
    },
    {
      id: 'q14-2',
      question: 'What belongs in a good review contract?',
      options: [
        { id: 'a', text: 'Outcome, boundary, reviewable output, and proof' },
        { id: 'b', text: 'A vague hope that Codex will know what matters' },
        { id: 'c', text: 'Only product terminology' },
        { id: 'd', text: 'Permission to skip inspection' },
      ],
      correctAnswer: 'a',
      explanation:
        'A review contract makes approval concrete by defining what should be true and how you will inspect it.',
    },
    {
      id: 'q14-3',
      question: 'What is the point of the final capstone loop?',
      options: [
        { id: 'a', text: 'Use one real task to practice delegation, surface choice, review, and preservation' },
        { id: 'b', text: 'Use every available Codex feature at once' },
        { id: 'c', text: 'Avoid boundaries so Codex can move faster' },
        { id: 'd', text: 'Finish without checking proof' },
      ],
      correctAnswer: 'a',
      explanation:
        'The capstone turns the course into a repeatable operating habit, not a feature checklist.',
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
