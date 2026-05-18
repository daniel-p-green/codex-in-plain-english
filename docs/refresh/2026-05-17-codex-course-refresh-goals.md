# Codex Course Refresh Goals

Date: 2026-05-17
Repository: codex-in-plain-english
Audience: non-developers and AI-curious learners

## Framing

Keep the promise of the course simple: Codex is a place to delegate digital work in plain English.

The refresh should not turn the course into developer documentation. The OpenAI developer docs are the source of truth for product behavior, but this course should translate that behavior into everyday operating language:

- What can I ask Codex to do?
- Where should the work live?
- What tools should I choose?
- How do I review the result?
- How do I know the task is really done?

## Source Model

Use this hierarchy when updating content:

1. Official OpenAI Codex docs for current product behavior, safety model, feature names, and workflow boundaries.
2. The local app behavior and repository tests for what this course actually ships.
3. Gabriel Chua for the original plain-English delegation framing.
4. Jason Liu for practitioner framing around durable threads, memory, reviewable outputs, heartbeats, and Codex as a place where work can live.
5. Chris Hayduk for practitioner framing around goals, measurable stopping conditions, tight feedback loops, and Markdown tracking.

## Goals I Would Set

### Goal 1: Preserve The Plain-English Promise

Update every learner-facing concept so it answers a non-developer question before it introduces product terminology.

Done when:

- Each new concept starts with a plain-English meaning.
- Product terms like `Local`, `Worktree`, `Cloud`, `Goal`, `Heartbeat`, `Memory`, `Skill`, `Browser`, and `Computer Use` are explained by what they let the learner do.
- The course avoids API-first or developer-first framing unless a learner needs it to understand a practical choice.

### Goal 2: Expand The Mental Model Beyond "Coding Help"

Reframe Codex as a place where work can happen, not only a coding assistant.

Done when the course teaches these buckets:

- One-off task: ask Codex to do the next thing.
- Durable thread: keep context for one ongoing piece of work.
- Goal: keep working until a verifiable end state is true.
- Heartbeat/thread automation: check back on a schedule in the same thread.
- Skill: package a repeatable workflow.
- Review place: inspect Markdown, files, browser previews, PDFs, slides, spreadsheets, or app changes.

### Goal 3: Add A "Where Should This Work Live?" Lesson

Teach learners how to choose the right place for Codex to work without needing internal architecture.

Done when the course includes a plain-English chooser:

| Learner need | Use |
|---|---|
| Ask about or change files on my machine | Local project/thread |
| Try changes without touching my main checkout | Worktree |
| Start work from another device or GitHub-backed environment | Cloud |
| Research, planning, or connector-heavy work without a repo | Chat |
| Review a local webpage or static file | In-app browser |
| Work inside signed-in browser state | Chrome extension |
| Use a desktop app or screen-only workflow | Computer Use |

### Goal 4: Upgrade Prompting Into A Work Contract

Move beyond "write a good prompt" and teach the learner to define a work contract.

Done when every practice prompt uses this structure:

- Goal: what should be true.
- Context: what Codex should read or know first.
- Boundaries: what must not change.
- Deliverable: what should be produced.
- Done when: how the learner and Codex can verify the result.

### Goal 5: Teach Goals As Verifiable Loops

Add a dedicated section on Goals that borrows Chris Hayduk's practical lesson but translates it for this course.

Done when learners can distinguish:

- Weak goal: "Make this better."
- Strong goal: "Produce X, pass Y check, avoid Z change."
- Checklist goal: convert qualitative work into a countable checklist.
- Blocked goal: stop and report when the evidence source cannot be run or inspected.

### Goal 6: Teach Durable Work Without Making It Mystical

Add Jason Liu's larger point: Codex becomes more valuable when work has a place to live.

Done when the course explains:

- Threads hold working context.
- Compaction lets long threads continue, but explicit files keep important decisions inspectable.
- Memories help with stable preferences and recurring patterns, but checked-in docs and `AGENTS.md` remain the source of required rules.
- Reviewable outputs make work easier to inspect.
- Heartbeats make follow-up loops recurring.

### Goal 7: Make Review And Safety First-Class

Codex gets more capable as it gets more access, so the course should teach review habits as part of delegation.

Done when learners understand:

- The sandbox is the boundary around what Codex can do without asking.
- Approvals decide when Codex should stop and ask.
- The review pane and diff are where you inspect changes.
- Browser comments and inline comments are better than vague follow-up prompts.
- Sensitive GUI or account flows require narrow scope and presence.

### Goal 8: Keep Source Attribution Honest

Update the repository so it no longer claims the course is only derived from Gabriel's thread.

Done when:

- README attribution lists Gabriel, OpenAI Codex docs, Jason Liu, and Chris Hayduk.
- App attribution lists all current source families.
- Source notes live in Markdown under `docs/sources/`.
- Future module source panels can link to the specific sources used by that module.

## Suggested Course Shape

The better long-term shape is a living course, not a one-time replacement of the original material.

Keep the original 8-module foundation intact because it was already well received. Add new modules when Codex gains capabilities that change how normal people delegate, review, or repeat digital work. Use one course-level update note for returning learners instead of crowding every module card.

Current shape as of May 17, 2026:

1. From Clicking To Delegating
2. What Codex Actually Does
3. Two Ways Codex Works: Files Or Screens
4. First Delegation Playbook for Non-Coders
5. Skills 101: Reusable Prompting As Workflow
6. Keeping Skill Instructions Focused
7. Team Practices: Consistency And Scale
8. Build Or Adopt Your First Skill
9. Codex As A Work Super App
10. Browser, Chrome, And Computer Use
11. Mobile Remote Control And Steering
12. Durable Threads, Memory, And Work Notes
13. Goals, Heartbeats, And Long-Running Loops
14. Review, Safety, And The Living Course

## Recommended First Implementation Goal

Use this as the first concrete `/goal` once content editing begins:

```text
/goal Refresh the course source model and learner-facing outline so the app no longer frames the course as only Gabriel-derived, while preserving the original 8-module foundation and adding clearly labeled expansion modules for current Codex behavior. Done when README attribution, landing attribution, source notes, a course-level update note, and a refreshed module map are all present in Markdown or app UI, and npm run lint plus npm run build pass.
```

## Non-Goals

- Do not turn this into a developer API course.
- Do not teach installation minutiae before the learner understands the work pattern.
- Do not add live model calls or backend dependencies just to explain Codex.
- Do not overfit to one person's workflow. Use practitioner posts as examples, not canon.
- Do not remove Gabriel's role as the original plain-English inspiration.
