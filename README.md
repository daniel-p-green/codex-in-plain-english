# Codex In Plain English

Interactive course for non-coders to learn how to delegate digital work with Codex.

## Attribution

This course adapts ideas from **Gabriel Chua** and keeps source attribution visible across the app and docs.

- [Gabriel Chua - "Codex, in Plain English" (X thread)](https://x.com/gabrielchua/status/2026832978056458383)
- [OpenAI Docs - Codex Skills](https://developers.openai.com/codex/skills)

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

## Course Structure

- 8 modules (4 Codex fundamentals + 4 Skills modules)
- 3 quiz questions per module (24 total)
- Sequential unlock progression (module `N` unlocks module `N+1`)
- XP, streaks, badges, and completion flow
- Local progress persistence (`localStorage`)

### Module List

1. From Clicking to Delegating
2. What Codex Actually Does
3. Two Execution Modes (Code vs UI)
4. First Delegation Playbook for Non-Coders
5. Skills 101 (Reusable Prompting as Workflow)
6. Progressive Disclosure and Skill Structure
7. Team Practices, Consistency, and Scaling
8. Build/Adopt Your First Skill

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
- [Codex Skills](https://developers.openai.com/codex/skills)
- [Apps SDK Quickstart](https://developers.openai.com/apps-sdk/quickstart/)

## Disclaimer

This project reflects an independent educational framing of publicly shared material. Product behavior, limits, and implementation details should be confirmed against official OpenAI documentation.

## License

MIT
