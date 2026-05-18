import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module5: ModuleData = {
  id: 'module-5',
  number: 5,
  title: 'Skills 101: Reusable Prompting as Workflow',
  subtitle:
    'Understand skills as reusable instructions for work you want Codex to do the same way again.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  estimatedMinutes: 20,
  sections: [
    {
      id: 'section-5-1',
      title: '5.1 - Why "Prompt That Mostly Works" Breaks Down',
      content: [
        {
          type: 'paragraph',
          text: 'People often save many versions of the same prompt. Over time, no one knows which one is the good version.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Dex says',
          text: 'If you keep rewriting the same instruction, you probably need a skill, not another saved chat.',
        },
      ],
    },
    {
      id: 'section-5-2',
      title: '5.2 - What a Skill Is',
      content: [
        {
          type: 'paragraph',
          text: 'A skill is a reusable work recipe. It usually lives in a folder with one main instruction file, plus optional examples, references, or helper scripts.',
        },
        {
          type: 'unorderedList',
          items: [
            'Main instructions: what to do.',
            'Examples or references: what good looks like.',
            'Optional helpers: repeatable steps Codex can run.',
          ],
        },
      ],
    },
    {
      id: 'section-5-3',
      title: '5.3 - Prompt vs Skill',
      content: [
        {
          type: 'comparison',
          headers: ['Aspect', 'One-off Prompt', 'Skill'],
          rows: [
            { cells: ['Reuse', 'Manual copy/paste', 'Packaged and repeatable'] },
            { cells: ['Updating', 'Ad hoc', 'Clear changes in files'] },
            { cells: ['Team consistency', 'Depends on each person', 'Shared process for everyone'] },
            { cells: ['Extra help', 'Often omitted', 'Can include examples, references, or helper scripts'] },
          ],
        },
      ],
    },
    {
      id: 'section-5-4',
      title: '5.4 - Skill Trigger Heuristic',
      content: [
        {
          type: 'orderedList',
          items: [
            'If you repeat a process more than a few times, convert it into a skill.',
            'If multiple people need consistent output, convert it into a skill.',
            'If quality depends on hidden know-how, write that know-how into a skill.',
          ],
        },
      ],
    },
    {
      id: 'section-5-5',
      title: '5.5 - Mini Capstone: Pick a Skill Candidate',
      content: [
        {
          type: 'paragraph',
          text: 'Identify one repeated prompt or workflow that might deserve to become a skill. Keep the first candidate narrow.',
        },
        {
          type: 'code',
          language: 'text',
          code: 'Repeated workflow:\nWho uses it:\nExpected output:\nExamples or references needed:\nWhy a skill would improve consistency:',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Skills do not create new model powers. They package good process so results are more predictable.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q5-1',
      question: 'What is the main problem skills solve?',
      options: [
        { id: 'a', text: 'One-time tasks that do not need repeatability' },
        { id: 'b', text: 'People getting different results from copied prompts' },
        { id: 'c', text: 'Tasks where the expected output is unknown' },
        { id: 'd', text: 'Workflows that are too sensitive to document' },
      ],
      correctAnswer: 'b',
      explanation:
        'Skills turn repeatable instructions into one shared recipe.',
    },
    {
      id: 'q5-2',
      question: 'Which best describes a skill?',
      options: [
        { id: 'a', text: 'A saved prompt with no supporting context' },
        { id: 'b', text: 'A reusable workflow package with instructions and optional resources' },
        { id: 'c', text: 'A place to store every preference for every task' },
        { id: 'd', text: 'A checklist that people read but Codex cannot use' },
      ],
      correctAnswer: 'b',
      explanation:
        'A skill is a reusable work recipe with instructions and optional supporting material.',
    },
    {
      id: 'q5-3',
      question: 'When should you create a skill?',
      options: [
        { id: 'a', text: 'As soon as any prompt works once' },
        { id: 'b', text: 'When a process repeats and consistency matters' },
        { id: 'c', text: 'When the task is vague and hard to evaluate' },
        { id: 'd', text: 'When the workflow changes every time it runs' },
      ],
      correctAnswer: 'b',
      explanation:
        'Repeated workflows with quality expectations are strong candidates for skill packaging.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
