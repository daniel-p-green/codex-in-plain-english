export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: 'Acceptance Check',
    definition: 'A quick pass/fail way to decide whether Codex finished the work correctly.',
    example: 'Example: "The summary includes all 6 required sections and no unsupported claims."',
  },
  {
    term: 'Artifact',
    definition: 'A reviewable output Codex creates or changes, such as a file, draft, spreadsheet, slide deck, screenshot, or webpage.',
    example: 'Example: A Markdown plan in `PLAN.md` is an artifact you can inspect and revise.',
  },
  {
    term: 'Approval',
    definition: 'A deliberate pause where Codex asks before doing something outside a boundary or with higher risk.',
    example: 'Example: "Draft the email, but ask before sending."',
  },
  {
    term: 'Chat',
    definition: 'A Codex surface for planning, research, connector work, and tasks that are not tied to one project folder.',
    example: 'Example: Use chat to plan a workshop outline before any files exist.',
  },
  {
    term: 'Chrome Extension',
    definition: 'A way for Codex to work with signed-in Chrome pages and existing browser state.',
    example: 'Example: Use Chrome when Codex needs a logged-in dashboard you already have open.',
  },
  {
    term: 'Cloud',
    definition: 'A remote Codex work environment, often useful for GitHub-backed tasks that do not need your local machine.',
    example: 'Example: Ask Codex to work on a GitHub issue in the cloud while your laptop is closed.',
  },
  {
    term: 'Computer Use',
    definition: 'A Codex capability for operating desktop apps and GUI-only workflows on your Mac.',
    example: 'Example: Use Computer Use when the only way to upload a file is through a desktop file picker.',
  },
  {
    term: 'Diff',
    definition: 'A view of exactly what changed in files.',
    example: 'Example: Review the diff before accepting a rewrite of a lesson module.',
  },
  {
    term: 'Goal',
    definition: 'A long-running Codex loop with a clear finish line and proof of completion.',
    example: 'Example: "Refresh all current modules and verify each has 5 sections, 3 quiz questions, and source links."',
  },
  {
    term: 'Heartbeat',
    definition: 'A scheduled check-back inside the same thread.',
    example: 'Example: "Every 30 minutes, check whether the reviewer has left comments and draft a response."',
  },
  {
    term: 'In-app Browser',
    definition: 'The browser surface inside Codex where you and Codex can inspect the same page or local preview.',
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
    definition: 'A boundary around what Codex can access or change without additional permission.',
    example: 'Example: A sandbox can limit work to a project folder instead of your whole machine.',
  },
  {
    term: 'Skill',
    definition: 'A reusable workflow package that tells Codex how to repeat a proven pattern.',
    example: 'Example: A weekly-summary skill can include instructions, examples, and a review rubric.',
  },
  {
    term: 'Thread',
    definition: 'A work container that holds the conversation, context, tool activity, results, and next steps for one workstream.',
    example: 'Example: Keep one thread for a course refresh so Codex remembers decisions from earlier in the work.',
  },
  {
    term: 'Work Contract',
    definition: 'A plain-language task brief with a goal, context, constraints, deliverable, done check, and stop condition.',
    example: 'Example: "Goal: merge these exports. Constraints: keep originals untouched. Done when row counts match."',
  },
  {
    term: 'Worktree',
    definition: 'An isolated copy of a project where Codex can try changes without disturbing the main checkout.',
    example: 'Example: Use a worktree for a risky redesign before deciding whether to merge it.',
  },
];
