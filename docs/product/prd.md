# PRD: Prompt Playground for Delegation Practice

Date: 2026-02-26
Repository: codex-in-plain-english
Working stack: React, Vite, TypeScript

## Problem Statement

Course learners understand concepts but lack a safe place to practice high-quality prompt writing. Without hands-on prompt iteration, confidence and transfer-to-real-work remain low.

## Goals

- Add a guided prompt-practice experience that teaches strong prompt structure through iteration.
- Increase learner confidence and downstream course progression after early modules.

## Non-Goals

- Real-time model inference and open-ended AI chat in v1.
- Multi-user collaboration or instructor grading workflows in v1.

## Users and Context

- Primary user: non-coder learner taking the course on desktop or mobile.
- Secondary user: creator/maintainer reviewing content quality and progress behavior.
- Key usage context: post-module practice session (5-15 minutes) before returning to course path.

## Requirements

### Functional

1. Add a new `Playground` route and navigation entry.
2. Provide at least 3 scenario cards (for example: summarize notes, draft outreach, convert steps into checklist).
3. Accept a learner-written prompt and evaluate against rubric criteria: goal clarity, context, constraints, deliverable format, verification criteria.
4. Return structured feedback with pass/fail and actionable revisions.
5. Persist scenario attempts and latest score locally.
6. Show completion state and optional XP/badge reward once scenario passes.

### Non-Functional

1. Performance: initial load impact should remain minimal and not regress current Lighthouse experience materially.
2. Reliability: state persistence survives page refresh and normal navigation.
3. Accessibility: keyboard navigation and semantic labeling for inputs/feedback.
4. Security: no network submission of prompt text in v1.

## Acceptance Criteria

1. Given a learner opens Playground and selects a scenario, when they submit an incomplete prompt, then they receive criterion-level feedback listing missing elements.
2. Given a learner includes all rubric elements, when they submit prompt, then scenario is marked passed and progress is persisted.
3. Given a learner refreshes after completing a scenario, when Playground reloads, then completion state remains visible.
4. Given a mobile viewport, when learner uses Playground, then UI remains readable and usable without horizontal scrolling.

## UX Notes

- Key user flow: select scenario -> write prompt -> submit -> review feedback -> revise -> pass.
- Empty and error states: empty textarea guidance; validation message for too-short prompts.
- Analytics events: `playground_opened`, `scenario_started`, `scenario_submitted`, `scenario_passed`.

## Rollout and Measurement

- Rollout strategy: ship in production behind a simple feature flag toggle or navigation gate.
- Success metric: scenario completion rate among users who start Playground.
- Guardrail metric: no regression in existing module/quiz flow completion.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Rubric feels too rigid and produces false negatives | Medium | Tune thresholds; provide "why" explanations per criterion |
| Scope grows into full AI chat feature | High | Lock v1 to rubric-based evaluation and fixed scenarios |
| Local progress confusion | Medium | Show clear status chips and last attempt timestamp |
