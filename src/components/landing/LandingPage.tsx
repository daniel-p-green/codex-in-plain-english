import { Link } from 'react-router-dom';
import { allModules, CORE_MODULE_COUNT, COURSE_TOTAL_MODULES } from '../../data/modules';
import {
  COURSE_ATTRIBUTION_COPY,
  COURSE_ATTRIBUTION_SOURCES,
  COURSE_ATTRIBUTION_TITLE,
} from '../../data/attribution';
import PageContainer from '../layout/PageContainer';

export default function LandingPage() {
  const moduleOne = allModules[0];
  const moduleNine = allModules[8];
  const moduleTen = allModules[9];
  const moduleThirteen = allModules[12];

  const starterCards = [
    {
      id: 'left-primary',
      title: 'From Clicking to Delegating',
      subtitle: 'Core Course',
      href: `/module/${moduleOne.number}`,
      copy: 'Start with the original plain-English foundation: say what you want, set boundaries, and check the result.',
      variant: 'primary',
    },
    {
      id: 'right-secondary',
      title: 'Codex as a Work Super App',
      subtitle: 'Expanded Codex 2026',
      href: `/module/${moduleNine.number}`,
      copy: 'Jump to the new expansion track for the places Codex can now work and keep going.',
      variant: 'secondary',
    },
  ] as const;

  const createCards = [
    {
      id: 'plan',
      title: 'Review the core',
      copy: `The first ${CORE_MODULE_COUNT} modules preserve the original course path and keep the plain-English foundation intact.`,
      cta: `Start Module 1 (${moduleOne.estimatedMinutes} min)`,
      href: `/module/${moduleOne.number}`,
    },
    {
      id: 'build',
      title: 'Use visual workspaces',
      copy: 'Learn when Codex should look at a page, use Chrome, or operate a desktop app.',
      cta: 'Open Module 10',
      href: `/module/${moduleTen.number}`,
    },
    {
      id: 'deploy',
      title: 'Run the loop',
      copy: 'Learn when to use Goals, Heartbeats, and Skills for work that needs to keep moving.',
      cta: 'Open Module 13',
      href: `/module/${moduleThirteen.number}`,
    },
  ] as const;

  return (
    <PageContainer className="landing-page">
      <section className="landing-hero">
        <h1>
          <span className="hero-title-main">Codex in Plain English:</span>{' '}
          <span className="hero-title-suffix">The Course</span>
        </h1>
        <p>Learn to delegate real digital work with confidence, one practical module at a time.</p>
        <p className="landing-hero-note">
          A living course updated May 17, 2026 for Computer Use, mobile steering, Goals, Heartbeats, Skills, and outputs you can review.
        </p>
      </section>

      <section className="course-clarity" aria-labelledby="course-clarity-title">
        <h2 id="course-clarity-title">How this course works</h2>
        <ol>
          <li>
            <strong>Start Module 1 ({moduleOne.estimatedMinutes} min)</strong>
            <span>Get the core pattern first: say the outcome, set boundaries, and check the result.</span>
          </li>
          <li>
            <strong>Take Optional Quiz</strong>
            <span>Validate understanding with three quick questions per module whenever you want.</span>
          </li>
          <li>
            <strong>Track Progress</strong>
            <span>Use the dashboard to move through the current {COURSE_TOTAL_MODULES}-module course and return to your next unread section.</span>
          </li>
        </ol>
        <p className="course-clarity-glossary-link">
          New to the terminology? Open the <Link to="/glossary">plain-English glossary</Link>.
        </p>
      </section>

      <section className="landing-section">
        <h2 className="landing-section-title">Get started</h2>
        <div className="landing-starter-grid" data-testid="get-started-grid">
          {starterCards.map(card => {
            const className = `starter-card starter-card-${card.variant}`;
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
          {createCards.map(card => (
            <Link key={card.id} to={card.href} className="create-card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <span className="create-card-cta">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-dashboard-link">
        <p>
          Continue through all {COURSE_TOTAL_MODULES} modules in the <Link to="/dashboard">Course Dashboard</Link>.
        </p>
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
          {COURSE_ATTRIBUTION_SOURCES.map(source => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer noopener">
              {source.label}
            </a>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
