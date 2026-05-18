import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module6: ModuleData = {
  id: 'module-6',
  number: 6,
  title: 'Keeping Skill Instructions Focused',
  subtitle:
    'Learn why a good skill starts simple, then gives Codex more detail only when that detail is useful.',
  releaseDate: '2026-05-17',
  depthZone: 'Core Course',
  estimatedMinutes: 18,
  sections: [
    {
      id: 'section-6-1',
      title: '6.1 - Start Small, Open Details Later',
      content: [
        {
          type: 'paragraph',
          text: 'Codex does not need every instruction at once. It can start with a short description, then open the detailed guidance only when the task calls for it.',
        },
      ],
    },
    {
      id: 'section-6-2',
      title: '6.2 - Library Analogy',
      content: [
        {
          type: 'paragraph',
          text: 'Think like a library: catalogue first, then the right book, then the right chapter. This reduces noise and improves precision.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Dex says',
          text: 'Too much information at once can blur the job. Focused instructions help Codex act more clearly.',
        },
      ],
    },
    {
      id: 'section-6-3',
      title: '6.3 - Why The Folder Matters',
      content: [
        {
          type: 'table',
          headers: ['Folder Part', 'Plain-English Meaning'],
          rows: [
            ['`SKILL.md`', 'The main instructions and boundaries.'],
            ['`references/`', 'Extra guidance Codex can open when needed.'],
            ['`scripts/`', 'Helper steps for repeatable work.'],
            ['`assets/`', 'Templates and examples so Codex does not start from scratch.'],
          ],
        },
      ],
    },
    {
      id: 'section-6-4',
      title: '6.4 - Lightweight Skill Quality Checklist',
      content: [
        {
          type: 'unorderedList',
          items: [
            'One-line description clearly says when to use the skill.',
            'Instructions are sequenced and testable.',
            'References are specific, not oversized.',
            'Helper steps are reusable and documented.',
            'Expected outputs are explicit.',
          ],
        },
      ],
    },
    {
      id: 'section-6-5',
      title: '6.5 - Mini Capstone: Outline a Focused Skill',
      content: [
        {
          type: 'paragraph',
          text: 'Sketch the smallest useful version of a skill. Only include supporting material that Codex would actually need to produce the output.',
        },
        {
          type: 'code',
          language: 'text',
          code: 'Skill name:\nWhen to use it:\nMain instruction:\nReference needed:\nExpected output:\nWhat to leave out for version 1:',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Checkpoint',
          text: 'Good skill structure makes the work easier for people and Codex. Organized folders are part of clear instruction.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q6-1',
      question: 'What does "start small, open details later" mean?',
      options: [
        { id: 'a', text: 'Putting all possible background into the main instruction' },
        { id: 'b', text: 'Opening detailed instructions only when they are relevant' },
        { id: 'c', text: 'Keeping examples outside the skill so they do not distract' },
        { id: 'd', text: 'Writing short instructions and skipping expected outputs' },
      ],
      correctAnswer: 'b',
      explanation:
        'This keeps the task focused by loading detailed guidance only when needed.',
    },
    {
      id: 'q6-2',
      question: 'Why does folder structure matter in skills?',
      options: [
        { id: 'a', text: 'It mainly makes the folder look complete' },
        { id: 'b', text: 'It helps Codex know what to use and when' },
        { id: 'c', text: 'It lets every file become equally important' },
        { id: 'd', text: 'It avoids the need to describe when the skill applies' },
      ],
      correctAnswer: 'b',
      explanation:
        'Structure gives Codex clues about how to use the skill and makes reuse easier.',
    },
    {
      id: 'q6-3',
      question: 'Which item belongs in a strong skill package?',
      options: [
        { id: 'a', text: 'A broad mission statement without a trigger' },
        { id: 'b', text: 'All related notes, even if most are rarely used' },
        { id: 'c', text: 'Clear use description and explicit outputs' },
        { id: 'd', text: 'A long list of edge cases before the core workflow' },
      ],
      correctAnswer: 'c',
      explanation:
        'A skill should define when to use it and what good output looks like.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
