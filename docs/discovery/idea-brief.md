# Idea Brief: Prompt Playground for Delegation Practice

Date: 2026-02-26
Repository: codex-in-plain-english
Working stack: React, Vite, TypeScript

## 1) Problem

The course explains delegation well, but learners still struggle to write their first high-quality Codex prompt on their own. Today the experience is mostly read -> quiz, with no guided practice loop for drafting, critiquing, and improving prompts before real-world use.

## 2) Target User

Primary user: non-coder learners taking this course who understand basic concepts but lack confidence writing executable prompts.
Out of scope: advanced users already operating daily Codex workflows and users seeking full IDE-level automation inside this app.

## 3) Outcome

Learners can practice realistic delegation prompts in-app, receive actionable feedback, revise once or twice, and leave with a reusable prompt structure they can apply immediately in real projects.

## 4) Success Signals

- Leading indicator: at least 50% of users who complete Module 4 start at least one playground scenario.
- Lagging indicator: +10-15% lift in completion of Modules 5-8 among users who use the playground.
- Manual acceptance check: a learner can submit a weak prompt, receive specific gap feedback, revise, and pass the scenario without external help.

## 5) Constraints

- Technical: no backend dependency for v1; store progress/scenario state in localStorage.
- Timeline: target one sprint implementation for MVP scope.
- Compliance / policy: avoid collecting PII; no user-generated content leaves browser in v1.

## 6) Non-Goals

- This effort will not include live LLM inference or external API calls in v1.
- This effort will not include adaptive personalization across all modules in v1.

## 7) Assumptions

- Learners benefit from immediate structured feedback even without live model calls.
- A rubric-based evaluator is sufficient to raise prompt quality for first-use scenarios.

## 8) Open Questions

- Should scenario completion award XP/badges, and if yes, how much relative to quizzes?
- Should the playground unlock after Module 4 only, or be visible earlier as "coming soon"?
