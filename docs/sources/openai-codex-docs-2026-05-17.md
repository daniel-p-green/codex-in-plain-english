# Source Notes: OpenAI Codex Docs

Date captured: 2026-05-17
Source family: official OpenAI documentation
Primary URL: https://developers.openai.com/codex

## Why This Source Matters

Use OpenAI docs as the product truth for current Codex behavior. The course can translate these docs into plain English, but should not contradict them.

## Pages Checked

- [Codex Quickstart](https://developers.openai.com/codex/quickstart)
- [Prompting](https://developers.openai.com/codex/prompting)
- [Codex app features](https://developers.openai.com/codex/app/features)
- [In-app browser](https://developers.openai.com/codex/app/browser)
- [Computer Use](https://developers.openai.com/codex/app/computer-use)
- [Remote connections](https://developers.openai.com/codex/remote-connections)
- [Automations](https://developers.openai.com/codex/app/automations)
- [Memories](https://developers.openai.com/codex/memories)
- [Sandbox](https://developers.openai.com/codex/concepts/sandboxing)
- [Review](https://developers.openai.com/codex/app/review)
- [Agent Skills](https://developers.openai.com/codex/skills)
- [Follow a goal](https://developers.openai.com/codex/use-cases/follow-goals)
- [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)
- [Best practices](https://developers.openai.com/codex/learn/best-practices)

## Plain-English Translation For The Course

### Codex Is A Work Agent, Not Just A Chat Box

Official docs describe Codex as something that works in threads, reads context, uses tools, edits files, runs commands, and can continue across multiple turns. In course language: you are not only asking for advice, you are delegating a piece of work.

### Threads Are Work Containers

A thread holds prompts, tool calls, outputs, and gathered context. Long work can continue in the same thread, but the learner should avoid letting one thread become a junk drawer for unrelated tasks.

Plain-English lesson:

- Use one thread for one coherent workstream.
- Resume it when the next step belongs to the same work.
- Start fresh when the work is unrelated.

### Context Is What Codex Can See

Codex performs better when it can inspect the right files, docs, screenshots, links, or terminal output. Course language should emphasize "show Codex the work surface" rather than "write a perfect prompt."

### Verification Is Part Of The Ask

OpenAI's prompting and best-practice docs emphasize validation: reproduction steps, linting, tests, checks, and review. For non-developers, translate that into "tell Codex how you will know the work is done."

### App, IDE, CLI, And Cloud Are Surfaces

The learner does not need a developer taxonomy. They need a chooser:

- App: easiest place to work with projects, files, previews, and artifacts.
- IDE: good when the learner or teammate already lives in an editor.
- CLI: terminal-first surface.
- Cloud: GitHub-backed remote work and background tasks.

### Local, Worktree, Cloud, And Chat Are Work Locations

- Local: Codex works in your current project folder.
- Worktree: Codex works in an isolated Git worktree so experiments do not collide with your main checkout.
- Cloud: Codex works in a remote environment.
- Chat: Codex is not tied to a repository and can be used for planning, research, and connected-tool workflows.

### Browser, Chrome, And Computer Use Have Different Jobs

- In-app browser: shared visual review of local pages, file-backed previews, and public pages that do not require sign-in.
- Browser use: lets Codex click, type, inspect, and verify inside that in-app browser.
- Chrome extension: better fit for signed-in browser state and existing Chrome tabs.
- Computer Use: GUI-only workflows on macOS, with careful scope and approvals.

### Automations And Heartbeats Are Recurring Loops

Automations can run recurring work. Thread automations are heartbeat-style wake-ups that preserve the current thread context. Course language should teach: use a heartbeat when the next check depends on this conversation.

### Memories Are Helpful Recall, Not Required Rules

Docs describe memories as useful for stable preferences, recurring workflows, project conventions, and known pitfalls. They also say team-required guidance belongs in `AGENTS.md` or checked-in docs. Course language: memories help Codex remember, but important rules should still be written down where you can inspect them.

### Sandbox And Approvals Are Trust Controls

The sandbox defines what Codex can do without leaving a boundary. Approvals define when Codex should stop and ask. Course language: autonomy is adjustable, and review is part of delegation.

### Review Pane Is A Feedback Surface

The review pane shows repository changes and lets learners leave inline comments. Plain-English lesson: point at the exact change you want adjusted instead of writing a vague follow-up.

### Skills Package Repeatable Work

Skills are reusable workflow packages. The course should avoid making skills sound like a developer-only feature. A non-developer can understand a skill as "a saved way of doing a repeated job."

### Goals Need A Finish Line

OpenAI's Goals docs emphasize one objective, one stopping condition, source context, proof artifacts, checkpoints, and progress logs. Course language: a goal is a durable work contract with evidence.

## Course Implications

- Add a "work surface chooser" before deeper features.
- Treat review and verification as part of every lesson.
- Explain Goals and Heartbeats through everyday loops, not internal mechanics.
- Keep official docs linked, but write learner-facing content in plain English.
