# Prompt Playground for Delegation Practice Implementation Plan

Date: 2026-02-26
Repository: codex-in-plain-english
Feature slug: prompt-playground-for-delegation-practice

> Required workflow:
> 1) Define success criteria
> 2) If non-trivial, write a 3-step plan before code
> 3) Implement with test-first discipline

## Goal

Add a rubric-based Prompt Playground where learners can practice writing Codex prompts, iterate with feedback, and persist completion progress.

## Inputs

- `docs/discovery/idea-brief.md`
- `docs/product/prd.md`
- `docs/product/jtbd.md`
- `docs/product/use-cases.md`
- `docs/engineering/test-strategy.md`

## Success Contract

- Done means: learners can complete at least one playground scenario end-to-end with persisted progress.
- Tested by: new and existing Playwright tests passing, plus lint/build success.
- No changes to: module content text, attribution requirements, and existing quiz unlock logic.

## Execution Plan (3 Steps)

1. Add failing tests for Playground route and scenario workflow.
2. Implement Playground UI, evaluator logic, and persistence.
3. Verify all gates (lint/test/build), then document risks and retrospective.

## Task Breakdown

### Task 1: Write Failing Tests First

- Files to modify:
  - Create: `tests/e2e/prompt-playground.spec.ts`
  - Update if needed: `tests/e2e/course-flow.spec.ts`
- Tests to add first:
  - Route/nav reachability for Playground
  - Weak prompt -> feedback
  - Revision -> pass -> refresh persistence
- Definition of done:
  - New tests fail for expected reason before implementation.

### Task 2: Implement Playground Feature

- Files to modify:
  - Create: `src/components/playground/PlaygroundPage.tsx`
  - Create: `src/components/playground/prompt-evaluator.ts`
  - Create: `src/types/playground.ts`
  - Update: `src/App.tsx`
  - Update: `src/components/layout/Navbar.tsx`
  - Update: `src/data/badges.ts` (only if reward is included)
- Tests to add first:
  - If adding evaluator unit tests, add them before evaluator implementation.
- Definition of done:
  - Playground route renders and full iterative flow works with local persistence.

### Task 3: Harden, Validate, and Ship

- Files to modify:
  - Update: `tests/accessibility/a11y.spec.ts` (include Playground coverage)
  - Optional: add docs notes to `README.md`
- Tests to add first:
  - Accessibility assertions for Playground controls and feedback output.
- Definition of done:
  - `npm run lint`, `npm run test:e2e`, and `npm run build` all pass.

## Verification Commands

- Dev: `npm run dev`
- Test: `npm run test:e2e`
- Lint: `npm run lint`
- Build: `npm run build`

## Risk Notes

- Rubric tuning may require one iteration after first learner feedback.
- Local-only storage limits progress portability across devices.

## Retrospective Prompt

What would we do differently next time to increase learning impact while reducing implementation complexity?
