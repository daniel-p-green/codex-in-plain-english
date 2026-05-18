import type { ModuleData } from '../../types/course';
import {
  SOURCE_CHRIS_HAYDUK_GOALS,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
} from '../attribution';

export const module12: ModuleData = {
  id: 'module-12',
  number: 12,
  title: 'Durable Threads, Memory, And Work Notes',
  subtitle:
    'Learn how long-running work stays coherent through focused threads, written notes, memories, and explicit project instructions.',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 330,
  estimatedMinutes: 22,
  sections: [
    {
      id: 'section-12-1',
      title: '12.1 - Threads Are Work Containers',
      content: [
        {
          type: 'paragraph',
          text: 'A Codex thread is not just a conversation. It is a container for one workstream: what you asked, what Codex inspected, what it tried, what changed, and what still needs attention.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'One thread per workstream is the simplest way to keep context useful instead of noisy.',
        },
      ],
    },
    {
      id: 'section-12-2',
      title: '12.2 - Long Threads Need Written Memory',
      content: [
        {
          type: 'paragraph',
          text: 'Long threads can carry history, but important decisions should not live only in chat. Put stable context into files Codex and humans can inspect.',
        },
        {
          type: 'table',
          headers: ['Context Type', 'Good Home', 'Why'],
          rows: [
            ['Required project rules', 'AGENTS.md or checked-in docs', 'Shared, reviewable instructions.'],
            ['Open loops', 'TODO.md or project notes', 'Keeps follow-ups from getting buried.'],
            ['Decisions', 'decision-log.md', 'Prevents re-deciding the same thing.'],
            ['Attempts and outcomes', 'ATTEMPTS.md or EXPERIMENTS.md', 'Shows what worked and what failed.'],
            ['Stable preferences', 'Codex memories', 'Useful recall across future work.'],
          ],
        },
      ],
    },
    {
      id: 'section-12-3',
      title: '12.3 - The Three-File Tracking Pattern',
      content: [
        {
          type: 'code',
          language: 'text',
          code: 'PLAN.md      - what we are trying and why\nATTEMPTS.md  - what Codex tried, what happened, what we learned\nNOTES.md     - running context, questions, blockers, and decisions\n',
        },
        {
          type: 'paragraph',
          text: 'These files make work auditable. Codex can resume with less confusion, and you can see whether it is repeating failed attempts.',
        },
      ],
    },
    {
      id: 'section-12-4',
      title: '12.4 - Memories Are Helpful, But Not Rules',
      content: [
        {
          type: 'comparison',
          headers: ['Use Memory For', 'Use Files For'],
          rows: [
            { cells: ['Stable preferences and recurring habits.', 'Rules that must be inspected, changed, reviewed, or shared.'] },
            { cells: ['Known pitfalls you want Codex to recall.', 'Project instructions, compliance notes, source links, and task state.'] },
            { cells: ['Lightweight recall across future work.', 'Durable knowledge that should survive thread drift.'] },
          ],
        },
      ],
    },
    {
      id: 'section-12-5',
      title: '12.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Durable Codex work needs a thread for action and files for memory. The thread does the work. The files preserve what the work learned.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q12-1',
      question: 'What is a Codex thread most useful for?',
      options: [
        { id: 'a', text: 'Holding one coherent workstream and its context' },
        { id: 'b', text: 'Replacing all written project instructions' },
        { id: 'c', text: 'Mixing unrelated tasks forever' },
        { id: 'd', text: 'Avoiding all artifacts' },
      ],
      correctAnswer: 'a',
      explanation:
        'Threads are most useful when they hold one coherent workstream.',
    },
    {
      id: 'q12-2',
      question: 'Why write important context into files?',
      options: [
        { id: 'a', text: 'So decisions, attempts, and rules are inspectable and durable' },
        { id: 'b', text: 'So nobody can review it' },
        { id: 'c', text: 'So Codex has less context' },
        { id: 'd', text: 'So the thread becomes unrelated' },
      ],
      correctAnswer: 'a',
      explanation:
        'Files make important context visible, editable, and reusable beyond a single chat transcript.',
    },
    {
      id: 'q12-3',
      question: 'What belongs in AGENTS.md or checked-in docs instead of only memory?',
      options: [
        { id: 'a', text: 'Required project rules and shared instructions' },
        { id: 'b', text: 'A one-time tiny preference' },
        { id: 'c', text: 'Nothing important' },
        { id: 'd', text: 'Only decorative notes' },
      ],
      correctAnswer: 'a',
      explanation:
        'Required rules should live where people and Codex can inspect and update them.',
    },
  ],
  sourceRefs: [SOURCE_OPENAI_CODEX_DOCS, SOURCE_JASON_LIU_CODEX_MAXXING, SOURCE_CHRIS_HAYDUK_GOALS],
};
