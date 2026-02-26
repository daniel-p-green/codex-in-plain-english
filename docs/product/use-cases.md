# Use Cases: Prompt Playground for Delegation Practice

Date: 2026-02-26
Repository: codex-in-plain-english

## Primary Use Cases

### UC-1: Happy Path

- Actor: course learner
- Trigger: clicks Playground from dashboard/nav
- Preconditions: app loaded; learner can access module content
- Main flow:
1. Learner chooses a scenario card.
2. Learner writes a prompt in the input area and submits.
3. System evaluates prompt, returns pass with positive feedback, and marks scenario complete.
- Expected result: learner sees completion state and can continue to next scenario or return to modules.

### UC-2: Common Variation

- Actor: course learner
- Trigger: submits first draft prompt that is incomplete
- Preconditions: scenario selected
- Main flow:
1. System returns fail with missing criteria list.
2. Learner edits prompt based on feedback.
3. Learner resubmits and passes.
- Expected result: learner experiences iterative improvement loop and retains final version.

## Edge Cases

### EC-1

- Scenario: learner submits very short or empty prompt.
- System behavior: block evaluation and show validation message.
- User-visible response: "Add more detail before submitting" plus rubric hint.

### EC-2

- Scenario: learner revisits completed scenario.
- System behavior: preload latest attempt and completion badge.
- User-visible response: clear "completed" status and option to retry for practice.

## Failure Cases

### FC-1

- Failure mode: localStorage unavailable (privacy mode or quota issue).
- Detection: write operation throws error.
- Recovery path: continue in-memory session and show non-blocking persistence warning.

### FC-2

- Failure mode: evaluator function throws unexpectedly.
- Detection: try/catch around evaluation path.
- Recovery path: show safe fallback message and preserve user draft text.
