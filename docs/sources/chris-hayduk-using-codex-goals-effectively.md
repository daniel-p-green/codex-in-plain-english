# Source Notes: Chris Hayduk, "Using Codex Goals Effectively"

Date captured: 2026-05-17
Author: Chris Hayduk
Published: 2026-05-11
Primary URL: https://www.linkedin.com/pulse/using-codex-goals-effectively-chris-hayduk-np7re
Source type: practitioner article

## Why This Source Matters

Chris Hayduk's article gives a practical playbook for Codex Goals. It is especially useful because it explains why vague goals fail and how to give Codex a measurable stopping condition.

## Core Idea

Goal mode works best when Codex has:

1. A clear measurable target.
2. A fast feedback loop.
3. Markdown files that preserve plan, attempts, and notes over long runs.

Plain-English translation:

Do not ask Codex to "make it better." Tell it what better means, how to check progress, and where to write down what it tried.

## Concepts To Carry Into The Course

### Clear, Quantitative Goals

Chris contrasts vague goals with goals that include a number, a target file or scope, and regression constraints.

Course use:

- Weak: "Improve this."
- Strong: "Reduce runtime by 20 percent in this file without breaking existing tests."
- Beginner-friendly version: "Create a 1-page summary that covers all 6 required sections and includes no unsupported claims."

### Qualitative Work Can Become A Checklist

The ICML paper example turns a qualitative formatting task into a checklist with many small yes/no items.

Course use:

- For writing, make a checklist of required sections, audience fit, examples, citations, and forbidden claims.
- For design, make a checklist of responsive states, visible labels, empty states, and review comments.
- For operations, make a checklist of files checked, messages drafted, and approvals needed.

### Tight Feedback Loop

The article emphasizes giving Codex a quick way to score progress. In machine learning, that might mean a smaller model or subsampled dataset. For this course, it means a short validation path.

Course use:

- Prefer checks that run in minutes, not hours.
- Use a smaller sample before asking Codex to process the full folder.
- Define the final full check before shipping.

### Markdown Tracking Files

Chris recommends giving long-running work Markdown files for durable tracking:

- `PLAN.md`: high-level plan.
- `EXPERIMENTS.md`: curated list of attempts and outcomes.
- `EXPERIMENT_NOTES.md`: chronological scratchpad.

Course use:

- Rename for non-developer friendliness when needed:
  - `PLAN.md` becomes "what we are trying."
  - `ATTEMPTS.md` or `EXPERIMENTS.md` becomes "what worked and what did not."
  - `NOTES.md` becomes "running notes."
- Teach that files help both the learner and Codex avoid repeating failed attempts.

## Attached Image Notes

The user provided images from the article. The images reinforce these teaching points:

- Define the goal first, then measure progress.
- Turn vague goals into measurable end states.
- Use checklists when qualitative requirements need to become countable.
- Keep feedback loops fast.
- Give the agent Markdown files for planning and tracking.
- Record experiment outcomes with hypothesis, mechanism, decision rule, and result.

## Course Caution

The article is written for people comfortable with long-running agent loops. In this course, introduce Goals only after learners understand ordinary prompts, review, and verification.

Plain-English version:

A Goal is for work that should keep going until the finish line is proven, not for every small request.

