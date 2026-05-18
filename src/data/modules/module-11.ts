import type { ModuleData } from '../../types/course';
import { SOURCE_JASON_LIU_CODEX_MAXXING, SOURCE_OPENAI_CODEX_DOCS } from '../attribution';

export const module11: ModuleData = {
  id: 'module-11',
  number: 11,
  title: 'Mobile Remote Control And Steering',
  subtitle:
    'Learn how to start Codex work on the host machine, then continue, approve, and redirect it from mobile.',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 300,
  estimatedMinutes: 18,
  sections: [
    {
      id: 'section-11-1',
      title: '11.1 - Remote Control Is Momentum',
      content: [
        {
          type: 'paragraph',
          text: 'Remote control matters when Codex is already working somewhere useful: on your Mac, in a project folder, with the right tools and permissions. Mobile lets you check in, steer, and approve without being at the desk.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Start carefully on desktop. Unblock from mobile when the task reaches a decision point.',
        },
      ],
    },
    {
      id: 'section-11-2',
      title: '11.2 - What You Can Do From Mobile',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Continue an existing thread.',
            'Answer Codex when it asks for direction.',
            'Approve or reject the next action.',
            'Review summaries, screenshots, outputs, and changes.',
            'Switch between active hosts or threads when the setup supports it.',
          ],
        },
      ],
    },
    {
      id: 'section-11-3',
      title: '11.3 - Steering Messages',
      content: [
        {
          type: 'table',
          headers: ['Situation', 'Useful Steering Message'],
          rows: [
            ['The preview is too busy.', 'Make the cards smaller and preserve all copy.'],
            ['Codex found multiple paths.', 'Use the lowest-risk path and tell me what it skips.'],
            ['A draft is ready.', 'Do not send. Save it as a draft and summarize the assumptions.'],
            ['A check is slow.', 'Run the smaller validation first and tell me what the full check would cover.'],
          ],
        },
      ],
    },
    {
      id: 'section-11-4',
      title: '11.4 - Mobile Guardrails',
      content: [
        {
          type: 'orderedList',
          items: [
            'Do not approve sensitive actions from a tiny summary if you have not inspected the artifact.',
            'Ask Codex to pause when the task touches money, accounts, private data, or publishing.',
            'Use mobile for direction changes, not for silently expanding scope.',
            'Request a final evidence summary before calling the work done.',
          ],
        },
      ],
    },
    {
      id: 'section-11-5',
      title: '11.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Mobile remote control lets a long-running thread keep momentum while you move. It does not replace review, boundaries, or good setup.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q11-1',
      question: 'What is mobile remote control best for?',
      options: [
        { id: 'a', text: 'Continuing, steering, or approving work that is already underway' },
        { id: 'b', text: 'Removing all setup and review' },
        { id: 'c', text: 'Making every task phone-only' },
        { id: 'd', text: 'Replacing project context' },
      ],
      correctAnswer: 'a',
      explanation:
        'Mobile helps preserve momentum by letting you unblock or redirect Codex when you are away from the host machine.',
    },
    {
      id: 'q11-2',
      question: 'Which is a good steering message?',
      options: [
        { id: 'a', text: 'Do whatever' },
        { id: 'b', text: 'Use the lowest-risk path and tell me what it skips' },
        { id: 'c', text: 'Send it without review' },
        { id: 'd', text: 'Ignore the artifact' },
      ],
      correctAnswer: 'b',
      explanation:
        'Good steering is short, specific, and tied to the decision Codex needs to make.',
    },
    {
      id: 'q11-3',
      question: 'What should you avoid approving from mobile?',
      options: [
        { id: 'a', text: 'Sensitive actions you have not reviewed carefully' },
        { id: 'b', text: 'A request for a status summary' },
        { id: 'c', text: 'A harmless screenshot inspection' },
        { id: 'd', text: 'A pause for clarification' },
      ],
      correctAnswer: 'a',
      explanation:
        'Mobile is convenient, but sensitive actions still deserve careful review.',
    },
  ],
  sourceRefs: [SOURCE_OPENAI_CODEX_DOCS, SOURCE_JASON_LIU_CODEX_MAXXING],
};
