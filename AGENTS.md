# AGENTS.md

## Project Snapshot

- Repository: codex-in-plain-english
- Stack: React, Vite, TypeScript, Playwright

## Daily Workflow Contract

1. Start every task with success criteria:
- Done means `X`
- Tested by `Y`
- No changes to `Z`

2. For non-trivial work:
- Write a 3-step plan first
- Then execute

3. Name workflow skills explicitly when needed:
- `start-idea` to scaffold PRD/JTBD/use-cases/tests/AGENTS
- `test-driven-development` before implementing features or bug fixes
- `systematic-debugging` before proposing fixes for failures
- `requesting-code-review` before merge or handoff

4. Verification is required before completion:
- Lint: `npm run lint`
- Test: `npm run test:e2e`
- Build: `npm run build`
- Include a short risk summary

5. End each task with a brief retrospective:
- What would we do differently next time?

## Commands

- Dev: `npm run dev`
- Test: `npm run test:e2e`
- Lint: `npm run lint`
- Build: `npm run build`

## Guardrails

- Prefer minimal, reversible changes
- Do not ship without updated tests
- Document assumptions and open questions in the relevant doc before coding
- Preserve source attribution and educational framing of this project
