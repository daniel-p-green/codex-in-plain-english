export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: 'API',
    definition: 'A way one app or service talks to another with structured requests.',
    example: 'Example: Your app sends data to Stripe through its API to create a payment.',
  },
  {
    term: 'CLI',
    definition: 'A text-based way to run commands from your computer terminal.',
    example: "Example: Running `npm run build` in your terminal is using a CLI command.",
  },
  {
    term: 'Prompt',
    definition: 'The instruction you give an AI model about what you want it to do.',
    example: 'Example: "Summarize these notes in bullet points with action items."',
  },
  {
    term: 'Skill',
    definition: 'A reusable set of instructions that teaches the agent how to handle a task pattern.',
    example: 'Example: A testing skill can standardize how E2E tests are written and verified.',
  },
  {
    term: 'Workflow',
    definition: 'A repeatable sequence of steps that turns an input into a reliable result.',
    example: 'Example: Intake request -> generate draft -> review -> publish.',
  },
  {
    term: 'Acceptance Check',
    definition: 'A quick pass/fail test that confirms whether the output meets your requirements.',
    example: 'Example: "All 8 modules open directly and completion status is accurate."',
  },
  {
    term: 'Context Window',
    definition: 'The amount of recent text and instructions an AI model can use at once.',
    example: 'Example: Long threads may require short summaries so key details stay in context.',
  },
  {
    term: 'Sandbox',
    definition: 'A restricted environment where code can run safely with limited system access.',
    example: 'Example: Tests run in a sandbox so they cannot modify unrelated files.',
  },
];
