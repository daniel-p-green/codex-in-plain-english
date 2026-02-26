# Test Strategy: Prompt Playground for Delegation Practice

Date: 2026-02-26
Repository: codex-in-plain-english
Working stack: React, Vite, TypeScript

## Quality Gates

- Lint: `npm run lint`
- Test: `npm run test:e2e`
- Build: `npm run build`

## Test Scope

### Unit

- Core business logic: rubric evaluator scoring and criterion detection.
- Validation rules: empty/too-short prompt checks.
- Error handling: evaluator fallback behavior.

### Integration

- Data boundaries: localStorage read/write for scenario attempts.
- Service boundaries: component state updates from evaluator output.
- State transitions: draft -> feedback -> passed.

### End-to-End

- Primary user flow: open Playground, choose scenario, submit weak prompt, revise, pass.
- Critical edge flow: refresh after pass and verify persisted completion.

## Requirement-to-Test Mapping

| PRD criterion | Test level | Test case id |
|---|---|---|
| FR1 route + nav access | E2E | E2E-PLAY-001 |
| FR3 rubric feedback on missing elements | Unit + E2E | UNIT-PLAY-003, E2E-PLAY-002 |
| FR5 persistence across refresh | Integration + E2E | INT-PLAY-001, E2E-PLAY-003 |
| Mobile usability | E2E visual check | E2E-PLAY-004 |

## Test Data and Fixtures

- Required fixtures: 3 scenario definitions with expected rubric criteria.
- Synthetic data needs: weak prompt samples and strong prompt samples per scenario.
- Cleanup strategy: clear localStorage keys before each relevant E2E test.

## Release Verification Checklist

- [ ] Rubric evaluator covered by deterministic tests.
- [ ] New Playground E2E flow passing locally and in CI.
- [ ] Existing course-flow and accessibility tests remain green.
- [ ] Risk summary written with known limitations and follow-up items.
