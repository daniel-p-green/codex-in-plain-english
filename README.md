# Codex In Plain English

An interactive, gamified web course for non-coders who want to delegate digital busywork using Codex.

## Attribution (Prominent by Design)
This project is an educational repackaging of content and ideas by **Gabriel Chua**.

Primary sources:
- [Gabriel Chua - "Codex, in Plain English" thread](https://x.com/gabrielchua/status/2026832978056458383)
- [OpenAI Docs - Codex Skills](https://developers.openai.com/codex/skills)

What this project adds:
- Interactive module flow
- Quiz mechanics and progression
- XP, badges, streaks, and completion UX
- A structured curriculum wrapper around the original ideas

This is **not** official OpenAI product documentation.

## What You Get
- 8 modules (4 on Codex delegation fundamentals, 4 on Skills)
- 24 quiz questions (3 per module)
- Sequential unlocking (complete module quiz to unlock next)
- Local progress persistence via `localStorage`
- Mobile-friendly responsive experience
- Strong source attribution on landing page and each module

## Tech Stack
- React 19 + TypeScript
- Vite
- React Router (`HashRouter` for static hosting)
- Framer Motion (available for animations)
- Canvas Confetti (completion celebration)

## Local Development
```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Build, Lint, Preview
```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages Deploy
This repo is configured for GitHub Pages base path:
- `/codex-in-plain-english/`

Deploy command:
```bash
npm run deploy
```

## Project Structure
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

## Course Outline
1. From Clicking To Delegating
2. What Codex Actually Does
3. Two Execution Modes: Code vs UI
4. First Delegation Playbook For Non-Coders
5. Skills 101: Reusable Prompting As Workflow
6. Progressive Disclosure And Skill Structure
7. Team Practices: Consistency And Scale
8. Build Or Adopt Your First Skill

## License
MIT
