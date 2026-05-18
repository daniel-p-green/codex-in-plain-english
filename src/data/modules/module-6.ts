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
  depthMeters: 150,
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
      title: '6.5 - Dex Checkpoint',
      content: [
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
        { id: 'a', text: 'Loading every reference immediately' },
        { id: 'b', text: 'Opening detailed instructions only when they are relevant' },
        { id: 'c', text: 'Hiding all instructions from the model' },
        { id: 'd', text: 'Removing documentation entirely' },
      ],
      correctAnswer: 'b',
      explanation:
        'This keeps the task focused by loading detailed guidance only when needed.',
    },
    {
      id: 'q6-2',
      question: 'Why does folder structure matter in skills?',
      options: [
        { id: 'a', text: 'It has no impact' },
        { id: 'b', text: 'It helps Codex know what to use and when' },
        { id: 'c', text: 'It only helps with git merge speed' },
        { id: 'd', text: 'It replaces all prompt instructions' },
      ],
      correctAnswer: 'b',
      explanation:
        'Structure gives Codex clues about how to use the skill and makes reuse easier.',
    },
    {
      id: 'q6-3',
      question: 'Which item belongs in a strong skill package?',
      options: [
        { id: 'a', text: 'Only a title, no workflow steps' },
        { id: 'b', text: 'No references to keep files short' },
        { id: 'c', text: 'Clear use description and explicit outputs' },
        { id: 'd', text: 'Unrelated notes and random snippets' },
      ],
      correctAnswer: 'c',
      explanation:
        'A skill should define when to use it and what good output looks like.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
