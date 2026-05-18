# Codex In Plain English

Interactive course for non-coders to learn how to delegate digital work with Codex across the current app, browser, mobile, Goal, Heartbeat, Computer Use, and Skills workflows.

This is a living course. The original 8-module foundation stays intact and is marked as updated when refreshed. New Codex capabilities become expansion modules when they change how normal people delegate, review, or repeat digital work.

## Attribution

This course keeps the **In Plain English** framing inspired by Gabriel Chua, then layers in current OpenAI Codex documentation and newer practitioner writing. Source attribution stays visible across the app and docs.

- [Gabriel Chua - "Codex, in Plain English" (X thread)](https://x.com/gabrielchua/status/2026832978056458383)
- [OpenAI Docs - Codex](https://developers.openai.com/codex)
- [OpenAI Docs - Codex Skills](https://developers.openai.com/codex/skills)
- [Jason Liu - "Codex-maxxing"](https://jxnl.co/writing/2026/05/10/codex-maxxing/)
- [Chris Hayduk - "Using Codex Goals Effectively"](https://www.linkedin.com/pulse/using-codex-goals-effectively-chris-hayduk-np7re)

This repository is an educational adaptation. It is **not** official OpenAI product documentation.

## Quickstart

### Requirements

- Node.js 20+
- npm 10+

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Validate

```bash
npm run lint
npm run test:e2e
npm run build
```

Optional local preview:

```bash
npm run preview
```

## X Demo Video (Remotion)

Capture fresh live interaction clips from the published course:

```bash
npm run remotion:capture-clips
```

Then render shareable teaser videos for X:

```bash
npm run remotion:render:16x9
npm run remotion:render:9x16
```

Output files are written to `out/`.

## Course Structure

- 14 modules: 8-module core course plus 6 new expansion modules
- 3 quiz questions per module (42 total)
- Open module access (start anywhere in the 14-module journey)
- Section-based completion with optional quizzes for mastery
- New and Updated labels for returning learners
- XP, streaks, badges, and completion flow
- Local progress persistence (`localStorage`)

### Module List

#### Core Course

1. From Clicking To Delegating (Updated May 17, 2026)
2. What Codex Actually Does (Updated May 17, 2026)
3. Two Execution Modes: Code vs UI (Updated May 17, 2026)
4. First Delegation Playbook for Non-Coders (Updated May 17, 2026)
5. Skills 101: Reusable Prompting As Workflow (Updated May 17, 2026)
6. Progressive Disclosure And Skill Structure (Updated May 17, 2026)
7. Team Practices: Consistency And Scale (Updated May 17, 2026)
8. Build Or Adopt Your First Skill (Updated May 17, 2026)

#### Expanded Codex 2026

9. Codex As A Work Super App (New May 17, 2026)
10. Browser, Chrome, And Computer Use (New May 17, 2026)
11. Mobile Remote Control And Steering (New May 17, 2026)
12. Durable Threads, Memory, And Work Notes (New May 17, 2026)
13. Goals, Heartbeats, And Long-Running Loops (New May 17, 2026)
14. Review, Safety, And The Living Course (New May 17, 2026)

## Deploy

This project is configured for GitHub Pages at `/codex-in-plain-english/`.

```bash
npm run deploy
```

Published URL:
[https://daniel-p-green.github.io/codex-in-plain-english/](https://daniel-p-green.github.io/codex-in-plain-english/)

## Project Layout

```text
src/
  components/
    completion/
    content-blocks/
    dashboard/
    landing/
    layout/
    module/
    quiz/
  context/
  data/
    modules/
    attribution.ts
    badges.ts
    completion.ts
    depth-levels.ts
  hooks/
  types/
```

## Related OpenAI Docs

- [Codex Quickstart](https://developers.openai.com/codex/quickstart/)
- [Codex app features](https://developers.openai.com/codex/app/features)
- [Computer Use](https://developers.openai.com/codex/app/computer-use)
- [Codex remote connections](https://developers.openai.com/codex/remote-connections)
- [Codex automations](https://developers.openai.com/codex/app/automations)
- [Codex Skills](https://developers.openai.com/codex/skills)

## Disclaimer

This project reflects an independent educational framing of publicly shared material. Product behavior, limits, and implementation details should be confirmed against official OpenAI documentation.

## License

MIT
