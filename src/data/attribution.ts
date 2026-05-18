import type { SourceRef } from '../types/course';

export const SOURCE_GABRIEL_X: SourceRef = {
  label: 'Gabriel Chua thread: "Codex, in Plain English"',
  url: 'https://x.com/gabrielchua/status/2026832978056458383',
  note: 'Primary source for the Codex delegation sections in this course.',
};

export const SOURCE_OPENAI_SKILLS_DOC: SourceRef = {
  label: 'OpenAI Docs: Codex Skills',
  url: 'https://developers.openai.com/codex/skills',
  note: 'Reference source for the skills workflow and terminology sections.',
};

export const SOURCE_OPENAI_CODEX_DOCS: SourceRef = {
  label: 'OpenAI Docs: Codex',
  url: 'https://developers.openai.com/codex',
  note: 'Official source for current Codex product surfaces, safety model, and workflow concepts.',
};

export const SOURCE_JASON_LIU_CODEX_MAXXING: SourceRef = {
  label: 'Jason Liu: "Codex-maxxing"',
  url: 'https://jxnl.co/writing/2026/05/10/codex-maxxing/',
  note: 'Practitioner framing for durable threads, memory, artifacts, heartbeats, and Codex as a place work can live.',
};

export const SOURCE_CHRIS_HAYDUK_GOALS: SourceRef = {
  label: 'Chris Hayduk: "Using Codex Goals Effectively"',
  url: 'https://www.linkedin.com/pulse/using-codex-goals-effectively-chris-hayduk-np7re',
  note: 'Practitioner framing for measurable goals, tight feedback loops, and Markdown tracking files.',
};

export const COURSE_ATTRIBUTION_SOURCES: SourceRef[] = [
  SOURCE_GABRIEL_X,
  SOURCE_OPENAI_CODEX_DOCS,
  SOURCE_OPENAI_SKILLS_DOC,
  SOURCE_JASON_LIU_CODEX_MAXXING,
  SOURCE_CHRIS_HAYDUK_GOALS,
];

export const COURSE_ATTRIBUTION_TITLE = 'Attribution';

export const COURSE_ATTRIBUTION_COPY =
  'This course keeps the plain-English framing inspired by Gabriel Chua, then layers in current OpenAI Codex documentation and newer practitioner writing. It is an independent educational adaptation, not official OpenAI product documentation.';
