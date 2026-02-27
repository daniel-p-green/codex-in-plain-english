import { Link } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import {
  COURSE_ATTRIBUTION_COPY,
  COURSE_ATTRIBUTION_TITLE,
  SOURCE_GABRIEL_X,
  SOURCE_OPENAI_SKILLS_DOC,
} from '../../data/attribution';
import PageContainer from '../layout/PageContainer';

export default function LandingPage() {
  const { isModuleUnlocked } = useProgressContext();
  const moduleOne = allModules[0];
  const moduleFive = allModules[4];

  const starterCards = [
    {
      id: 'left-primary',
      title: 'From Clicking To Delegating',
      subtitle: 'Quickstart',
      href: `/module/${moduleOne.number}`,
      copy: 'Start with the non-coders path: describe outcomes, review outputs, and iterate.',
      variant: 'primary',
      locked: false,
    },
    {
      id: 'right-secondary',
      title: 'Skills 101',
      subtitle: 'Next track',
      href: `/module/${moduleFive.number}`,
      copy: isModuleUnlocked(moduleFive.id)
        ? 'Shift from one-off prompts to repeatable workflow modules.'
        : 'Complete the first four modules to unlock this skills track.',
      variant: 'secondary',
      locked: !isModuleUnlocked(moduleFive.id),
    },
  ] as const;

  const createCards = [
    {
      id: 'plan',
      title: 'Research use cases',
      copy: 'Identify repetitive digital tasks and define the outcome before implementation.',
      cta: 'Start Module 1 (15 min)',
      href: `/module/${moduleOne.number}`,
      locked: false,
    },
    {
      id: 'build',
      title: 'Build your delegation flow',
      copy: 'Jump into the first knowledge check and get fast feedback on what to improve.',
      cta: 'Take Quiz',
      href: `/module/${moduleOne.number}`,
      locked: false,
    },
    {
      id: 'deploy',
      title: 'Deploy your workflow',
      copy: 'Track progress, unlock all modules, and finish with a reusable operating playbook.',
      cta: 'Track Progress',
      href: '/dashboard',
      locked: false,
    },
  ] as const;

  return (
    <PageContainer className="landing-page">
      <section className="landing-hero">
        <h1>
          <span className="hero-title-main">Codex In Plain English:</span>{' '}
          <span className="hero-title-suffix">The Course</span>
        </h1>
        <p>Learn to delegate digital work with confidence, one practical module at a time.</p>
        <p className="landing-hero-note">Guided modules + quizzes, not a live coding sandbox.</p>
      </section>

      <section className="course-clarity" aria-labelledby="course-clarity-title">
        <h2 id="course-clarity-title">How this course works</h2>
        <ol>
          <li>
            <strong>Start Module 1 (15 min)</strong>
            <span>Get the core model first: outcome, constraints, and checks.</span>
          </li>
          <li>
            <strong>Take Quiz</strong>
            <span>Validate understanding with three quick questions per module.</span>
          </li>
          <li>
            <strong>Track Progress</strong>
            <span>Use XP, streaks, and unlocks to keep momentum through all 8 modules.</span>
          </li>
        </ol>
      </section>

      <section className="attribution-banner" aria-label="source attribution">
        <div className="attribution-banner-icon" aria-hidden="true">
          i
        </div>
        <div className="attribution-banner-main">
          <h2>{COURSE_ATTRIBUTION_TITLE}</h2>
          <p>{COURSE_ATTRIBUTION_COPY}</p>
        </div>
        <div className="attribution-banner-links">
          <a href={SOURCE_GABRIEL_X.url} target="_blank" rel="noreferrer noopener">
            Gabriel Chua thread
          </a>
          <a href={SOURCE_OPENAI_SKILLS_DOC.url} target="_blank" rel="noreferrer noopener">
            OpenAI Docs: Codex Skills
          </a>
        </div>
      </section>

      <section className="landing-section">
        <h2 className="landing-section-title">Get started</h2>
        <div className="landing-starter-grid" data-testid="get-started-grid">
          {starterCards.map(card => {
            const className = `starter-card starter-card-${card.variant} ${card.locked ? 'locked' : ''}`;
            if (card.locked) {
              return (
                <article key={card.id} className={className}>
                  <p className="starter-card-kicker">{card.subtitle}</p>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              );
            }

            return (
              <Link key={card.id} to={card.href} className={className}>
                <p className="starter-card-kicker">{card.subtitle}</p>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="landing-section">
        <h2 className="landing-section-title">Create your workflow</h2>
        <div className="landing-create-grid" data-testid="create-app-grid">
          {createCards.map(card => {
            const className = `create-card ${card.locked ? 'locked' : ''}`;
            if (card.locked) {
              return (
                <article key={card.id} className={className}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className="create-card-cta">{card.cta} (Locked)</span>
                </article>
              );
            }
            return (
              <Link key={card.id} to={card.href} className={className}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <span className="create-card-cta">{card.cta} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="landing-dashboard-link">
        <p>
          Continue through all 8 modules in the <Link to="/dashboard">Course Dashboard</Link>.
        </p>
      </section>
    </PageContainer>
  );
}
