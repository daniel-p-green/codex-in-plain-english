import type { ModuleData } from '../../types/course';
import {
  SOURCE_GABRIEL_X,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_OPENAI_CODEX_DOCS,
  SOURCE_OPENAI_SKILLS_DOC,
} from '../attribution';

export const module9: ModuleData = {
  id: 'module-9',
  number: 9,
  title: 'Codex As A Work Super App',
  subtitle:
    'Update the mental model: Codex is becoming a place where different kinds of digital work can live, continue, and be reviewed.',
  releaseStatus: 'new',
  releaseLabel: 'New May 17',
  releaseDate: '2026-05-17',
  depthZone: 'Expanded Codex 2026',
  depthMeters: 240,
  estimatedMinutes: 20,
  sections: [
    {
      id: 'section-9-1',
      title: '9.1 - Why The Course Now Expands',
      content: [
        {
          type: 'paragraph',
          text: 'The original course worked because it explained Codex as delegation in plain English. That foundation still matters. What changed is the size of the work surface around it.',
        },
        {
          type: 'paragraph',
          text: 'Codex is no longer only a coding helper or a prompt box. It is becoming a work app: threads, files, previews, browser state, connectors, automations, skills, goals, and review all meet in one place.',
        },
      ],
    },
    {
      id: 'section-9-2',
      title: '9.2 - The New Plain-English Map',
      content: [
        {
          type: 'table',
          headers: ['Layer', 'What It Lets You Do'],
          rows: [
            ['Thread', 'Keep one workstream together.'],
            ['Files and artifacts', 'Produce things you can inspect, edit, and reuse.'],
            ['Browser and Computer Use', 'Let Codex operate visual surfaces when files are not enough.'],
            ['Connectors', 'Bring work from inboxes, calendars, drives, and team tools into the loop.'],
            ['Goals and Heartbeats', 'Let work continue until done or check back later.'],
            ['Skills', 'Package a workflow that proved useful.'],
          ],
        },
      ],
    },
    {
      id: 'section-9-3',
      title: '9.3 - Local, Worktree, Cloud, And Chat',
      content: [
        {
          type: 'comparison',
          headers: ['Work Location', 'Use It When', 'Plain-English Meaning'],
          rows: [
            { cells: ['Local', 'Codex needs your machine, files, tools, or credentials.', 'Work here.'] },
            { cells: ['Worktree', 'Codex should experiment without touching the main checkout.', 'Try safely beside the work.'] },
            { cells: ['Cloud', 'A GitHub-backed task can run remotely.', 'Let Codex work away from your laptop.'] },
            { cells: ['Chat', 'The task is planning, research, or connector-heavy work.', 'Think and coordinate before files matter.'] },
          ],
        },
      ],
    },
    {
      id: 'section-9-4',
      title: '9.4 - Super App Does Not Mean No Boundaries',
      content: [
        {
          type: 'paragraph',
          text: 'The bigger Codex gets, the more important the plain-English operating pattern becomes: name the outcome, show the surface, set boundaries, define proof, then review the artifact.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Keep the frame',
          text: 'Do not chase features as trivia. Ask what work they let a normal person delegate, review, and repeat.',
        },
      ],
    },
    {
      id: 'section-9-5',
      title: '9.5 - Dex Checkpoint',
      content: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'A living Codex course needs a stable foundation and expandable modules. The foundation teaches delegation. New modules teach where Codex can now carry that delegation.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q9-1',
      question: 'Why does this course now need expansion modules?',
      options: [
        { id: 'a', text: 'The original delegation framing stopped being useful' },
        { id: 'b', text: 'Codex now has more work surfaces and longer-running workflows to explain' },
        { id: 'c', text: 'The course should become API documentation' },
        { id: 'd', text: 'Returning learners should be forced to restart' },
      ],
      correctAnswer: 'b',
      explanation:
        'The original frame still works, but Codex now includes more surfaces and operating loops that deserve separate modules.',
    },
    {
      id: 'q9-2',
      question: 'What does "super app" mean in this course?',
      options: [
        { id: 'a', text: 'A place where many kinds of digital work can live, continue, and be reviewed' },
        { id: 'b', text: 'An app that removes all judgment' },
        { id: 'c', text: 'A developer-only command reference' },
        { id: 'd', text: 'A replacement for boundaries and approvals' },
      ],
      correctAnswer: 'a',
      explanation:
        'The course uses "super app" to describe Codex as a broader work surface, not a reason to skip review.',
    },
    {
      id: 'q9-3',
      question: 'Which work location is best for experimenting without disturbing the main checkout?',
      options: [
        { id: 'a', text: 'Worktree' },
        { id: 'b', text: 'A random chat thread' },
        { id: 'c', text: 'A public post' },
        { id: 'd', text: 'No work location' },
      ],
      correctAnswer: 'a',
      explanation:
        'A worktree gives Codex a separate place to try changes while preserving the main working copy.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_CODEX_DOCS, SOURCE_OPENAI_SKILLS_DOC, SOURCE_JASON_LIU_CODEX_MAXXING],
};
