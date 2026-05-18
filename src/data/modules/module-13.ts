import type { ModuleData } from '../../types/course';
import {
  SOURCE_CHRIS_HAYDUK_GOALS,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
} from '../attribution';

export const module13: ModuleData = {
  id: 'module-13',
  number: 13,
  title: 'Goals, Heartbeats, and Long-Running Loops',
  subtitle:
    'Learn when to ask Codex to keep working toward proof, and when to have a thread check back later.',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 360,
  estimatedMinutes: 24,
  sections: [
    {
      id: 'section-13-1',
      title: '13.1 - Not Every Task Should Be a Goal',
      content: [
        {
          type: 'paragraph',
          text: 'Use an ordinary request when the task is small. Use a Goal when Codex should keep working until a specific finish line is proven.',
        },
        {
          type: 'comparison',
          headers: ['Use a Normal Request', 'Use a Goal'],
          rows: [
            {
              cells: [
                'Draft a short email, summarize notes, update one file, answer one question.',
                'Finish a checklist, fix issues until review is clean, or improve a measurable result without breaking existing checks.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-13-2',
      title: '13.2 - Goals Need A Finish Line',
      content: [
        {
          type: 'table',
          headers: ['Weak Goal', 'Stronger Goal'],
          rows: [
            ['Make this better.', 'Rewrite the guide so it has 6 required sections, no unsupported claims, and passes the source checklist.'],
            ['Improve performance.', 'Reduce the report generation time by 20 percent without breaking existing checks.'],
            ['Fix the website.', 'Resolve all layout overlap found in desktop and mobile screenshots, then show the screenshots.'],
            ['Clean my inbox.', 'Draft replies for unanswered messages from the last 7 days, but do not send them.'],
          ],
        },
      ],
    },
    {
      id: 'section-13-3',
      title: '13.3 - Make Progress Easy to Check',
      content: [
        {
          type: 'unorderedList',
          items: [
            'Run a small sample before the full folder.',
            'Use a short checklist before asking for a polished final result.',
            'Prefer checks that run in minutes, not hours.',
            'Tell Codex where to record attempts, blockers, and results.',
            'Stop and ask when the proof cannot be run or inspected.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'A Goal needs proof: a test, checklist, screenshot, row count, review status, or other evidence that says done.',
        },
      ],
    },
    {
      id: 'section-13-4',
      title: '13.4 - Heartbeats Are Scheduled Check-Backs',
      content: [
        {
          type: 'paragraph',
          text: 'A Heartbeat is a scheduled check-back in the same thread. In plain English: "wake this thread up later and check whether something changed."',
        },
        {
          type: 'table',
          headers: ['Good Heartbeat Use', 'Why'],
          rows: [
            ['Check a feedback thread every 30 minutes.', 'The work depends on replies arriving later.'],
            ['Monitor document comments until review is complete.', 'The same thread already knows the draft and context.'],
            ['Check whether a long export finished.', 'Codex can resume with the same task state.'],
            ['Draft replies when messages arrive, but do not send.', 'The loop can prepare work while preserving human approval.'],
          ],
        },
      ],
    },
    {
      id: 'section-13-5',
      title: '13.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Use Goals for "keep working until done is proven." Use Heartbeats for "check back here later." Both need clear boundaries and evidence you can review.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q13-1',
      question: 'When is a Goal better than a normal request?',
      options: [
        { id: 'a', text: 'When the task should keep looping until a measurable finish line is proven' },
        { id: 'b', text: 'When you want Codex to guess forever' },
        { id: 'c', text: 'When the task has no proof of completion' },
        { id: 'd', text: 'When you want no tracking files' },
      ],
      correctAnswer: 'a',
      explanation:
        'Goal-style work needs a clear end condition Codex can compare progress against.',
    },
    {
      id: 'q13-2',
      question: 'What makes a goal strong?',
      options: [
        { id: 'a', text: 'A vague adjective like better or cleaner' },
        { id: 'b', text: 'A measurable target, boundaries, and proof of completion' },
        { id: 'c', text: 'No source context' },
        { id: 'd', text: 'No stopping condition' },
      ],
      correctAnswer: 'b',
      explanation:
        'Strong goals define what must be true and how Codex can verify that it is true.',
    },
    {
      id: 'q13-3',
      question: 'What is a Heartbeat best for?',
      options: [
        { id: 'a', text: 'A scheduled check-back in the same thread' },
        { id: 'b', text: 'Replacing all human approvals' },
        { id: 'c', text: 'A one-time glossary lookup' },
        { id: 'd', text: 'Deleting task context' },
      ],
      correctAnswer: 'a',
      explanation:
        'Heartbeats let a thread wake up later and continue a recurring check or follow-up loop.',
    },
  ],
  sourceRefs: [SOURCE_OPENAI_CODEX_DOCS, SOURCE_JASON_LIU_CODEX_MAXXING, SOURCE_CHRIS_HAYDUK_GOALS],
};
