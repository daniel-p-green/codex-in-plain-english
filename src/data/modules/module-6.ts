import type { ModuleData } from '../../types/course';
import { SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC } from '../attribution';

export const module6: ModuleData = {
  id: 'module-6',
  number: 6,
  title: 'Progressive Disclosure And Skill Structure',
  subtitle:
    'Learn how agents discover and open only relevant skill instructions, keeping context focused and execution efficient.',
  depthZone: 'Skills Layer',
  depthMeters: 150,
  estimatedMinutes: 18,
  sections: [
    {
      id: 'section-6-1',
      title: '6.1 - Progressive Disclosure In Practice',
      content: [
        {
          type: 'paragraph',
          text: 'Agents do not need every instruction loaded up front. They first scan short descriptions, then open detailed files only when a skill is relevant.',
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
          text: 'Overloaded context causes fuzzy execution. Focused context improves action quality.',
        },
      ],
    },
    {
      id: 'section-6-3',
      title: '6.3 - Folder Structure As Context',
      content: [
        {
          type: 'table',
          headers: ['Folder Element', 'Meaning'],
          rows: [
            ['`SKILL.md`', 'Primary instructions and workflow boundaries'],
            ['`references/`', 'Detailed supporting guidance and edge-case handling'],
            ['`scripts/`', 'Executable helpers for repeatable technical steps'],
            ['`assets/`', 'Templates/examples to reduce reinvention'],
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
            'One-line description clearly states trigger conditions.',
            'Instructions are sequenced and testable.',
            'References are specific, not bloated.',
            'Scripts are reusable and documented.',
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
          text: 'Good skill structure lowers cognitive load for both humans and models. Organized folders are part of prompt quality.',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'q6-1',
      question: 'What is progressive disclosure?',
      options: [
        { id: 'a', text: 'Loading every reference immediately' },
        { id: 'b', text: 'Opening detailed instructions only when relevant' },
        { id: 'c', text: 'Hiding all instructions from the model' },
        { id: 'd', text: 'Removing documentation entirely' },
      ],
      correctAnswer: 'b',
      explanation:
        'Progressive disclosure keeps context lean by loading detailed guidance only when needed.',
    },
    {
      id: 'q6-2',
      question: 'Why does folder structure matter in skills?',
      options: [
        { id: 'a', text: 'It has no impact' },
        { id: 'b', text: 'It helps communicate usage intent and keeps workflows modular' },
        { id: 'c', text: 'It only helps with git merge speed' },
        { id: 'd', text: 'It replaces all prompt instructions' },
      ],
      correctAnswer: 'b',
      explanation:
        'Structure itself carries context and improves discoverability and reuse.',
    },
    {
      id: 'q6-3',
      question: 'Which item belongs in a strong skill package?',
      options: [
        { id: 'a', text: 'Only a title, no workflow steps' },
        { id: 'b', text: 'No references to keep files short' },
        { id: 'c', text: 'Clear trigger description and explicit outputs' },
        { id: 'd', text: 'Unrelated notes and random snippets' },
      ],
      correctAnswer: 'c',
      explanation:
        'A skill should define when to use it and what good output looks like.',
    },
  ],
  sourceRefs: [SOURCE_GABRIEL_X, SOURCE_OPENAI_SKILLS_DOC],
};
