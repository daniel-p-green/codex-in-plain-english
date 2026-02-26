export interface SourceRef {
  label: string;
  url: string;
  note?: string;
}

export interface ModuleData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  depthZone: string;
  depthMeters: number;
  estimatedMinutes: number;
  sections: Section[];
  quiz: QuizQuestion[];
  sourceRefs: SourceRef[];
}

export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | CalloutBlock
  | CodeBlock
  | TableBlock
  | OrderedListBlock
  | UnorderedListBlock
  | NumberedStepsBlock
  | ComparisonBlock
  | VocabularyBlock
  | BoldTextBlock;

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface BoldTextBlock {
  type: 'boldText';
  label: string;
  text: string;
}

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3 | 4;
  text: string;
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'tip';
  title: string;
  text: string;
}

export interface CodeBlock {
  type: 'code';
  language: string;
  code: string;
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface OrderedListBlock {
  type: 'orderedList';
  items: string[];
}

export interface UnorderedListBlock {
  type: 'unorderedList';
  items: string[];
}

export interface NumberedStepsBlock {
  type: 'numberedSteps';
  steps: { number: number; title: string; description: string }[];
}

export interface ComparisonBlock {
  type: 'comparison';
  headers: string[];
  rows: { cells: string[] }[];
}

export interface VocabularyBlock {
  type: 'vocabulary';
  terms: { term: string; definition: string }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}
