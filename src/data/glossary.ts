export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: 'Success Check',
    definition: 'A quick pass/fail way to decide whether Codex finished the work correctly.',
    example: 'Example: "The summary includes all 6 required sections and no unsupported claims."',
  },
  {
    term: 'Artifact',
    definition: 'A reviewable output Codex creates or changes, such as a file, draft, spreadsheet, slide deck, screenshot, or webpage.',
    example: 'Example: A plan in `PLAN.md` is a reviewable output you can inspect and revise.',
  },
  {
    term: 'Approval',
    definition: 'A deliberate pause where Codex asks before doing something outside a boundary or with higher risk.',
    example: 'Example: "Draft the email, but ask before sending."',
  },
  {
    term: 'Chat',
    definition: 'A place to use Codex for planning, research, connected-tool work, and tasks that are not tied to one project folder.',
    example: 'Example: Use chat to plan a workshop outline before any files exist.',
  },
  {
    term: 'Chrome Extension',
    definition: 'A way for Codex to work with signed-in Chrome pages you already use.',
    example: 'Example: Use Chrome when Codex needs a logged-in dashboard you already have open.',
  },
  {
    term: 'Cloud',
    definition: 'A configured remote environment where Codex can run work away from your local project folder.',
    example: 'Example: Use cloud work when the project supports a remote Codex environment.',
  },
  {
    term: 'Computer Use',
    definition: 'Where available, a Codex capability for operating desktop apps and screen-only workflows.',
    example: 'Example: Use Computer Use when the only way to upload a file is through a desktop file picker.',
  },
  {
    term: 'Diff',
    definition: 'A view of exactly what changed in a file.',
    example: 'Example: Review the diff before accepting a rewrite of a lesson module.',
  },
  {
    term: 'Goal',
    definition: 'A long-running Codex loop with a clear finish line and proof of completion.',
    example: 'Example: "Refresh all current modules and verify each has 5 sections, 3 quiz questions, and source links."',
  },
  {
    term: 'Heartbeat',
    definition: 'A scheduled check-back inside the same Codex thread.',
    example: 'Example: "Every 30 minutes, check whether the reviewer has left comments and draft a response."',
  },
  {
    term: 'In-app Browser',
    definition: 'The browser inside Codex where you and Codex can inspect the same page or local preview.',
    example: 'Example: Open a local course page and ask Codex to check whether the mobile layout overlaps.',
  },
  {
    term: 'Local',
    definition: 'A Codex work location that uses files and tools on your current machine.',
    example: 'Example: Use Local when Codex needs to edit a folder on your Mac.',
  },
  {
    term: 'Memory',
    definition: 'Stored context Codex can use later for stable preferences, recurring workflows, or known pitfalls.',
    example: 'Example: Remember that public course copy should stay plain-English and non-developer-first.',
  },
  {
    term: 'Remote Control',
    definition: 'Continuing, steering, or approving Codex work from another device, such as the ChatGPT mobile app.',
    example: 'Example: Start a long task at your desk, then approve the next step from your phone.',
  },
  {
    term: 'Sandbox',
    definition: 'A boundary around what Codex can access or change without asking again.',
    example: 'Example: A sandbox can limit work to a project folder instead of your whole machine.',
  },
  {
    term: 'Skill',
    definition: 'A reusable work recipe that tells Codex how to repeat a proven pattern.',
    example: 'Example: A weekly-summary skill can include instructions, examples, and a simple review checklist.',
  },
  {
    term: 'Thread',
    definition: 'A work container that holds the conversation, context, results, and next steps for one piece of work.',
    example: 'Example: Keep one thread for a course refresh so Codex remembers decisions from earlier in the work.',
  },
  {
    term: 'Work Contract',
    definition: 'A plain-language task brief with a goal, context, boundaries, deliverable, done check, and stop condition.',
    example: 'Example: "Goal: merge these exports. Boundaries: keep originals untouched. Done when row counts match."',
  },
  {
    term: 'Worktree',
    definition: 'A separate copy of a project where Codex can try changes without disturbing the main copy.',
    example: 'Example: Use a worktree for a risky redesign before deciding whether to keep it.',
  },
];
