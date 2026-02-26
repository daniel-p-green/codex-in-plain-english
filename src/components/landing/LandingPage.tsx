import { Link } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import {
  COURSE_ATTRIBUTION_COPY,
  COURSE_ATTRIBUTION_TITLE,
  SOURCE_GABRIEL_X,
  SOURCE_OPENAI_SKILLS_DOC,
} from '../../data/attribution';

export default function LandingPage() {
  const { isModuleUnlocked, isModuleComplete, getModulePercent } = useProgressContext();
  const codexModules = allModules.slice(0, 4);
  const skillModules = allModules.slice(4);
  const featuredModules = allModules.slice(0, 3);
  const moduleOne = allModules[0];
  const moduleFive = allModules[4];
  const defaultActiveModuleId = moduleOne.id;

  return (
    <div className="landing-page docs-shell">
      <aside className="docs-sidebar" aria-label="Course navigation">
        <div className="docs-search">
          <div className="docs-search-left">
            <span className="docs-search-icon" aria-hidden="true">
              ⌕
            </span>
            <span className="docs-search-label">Search</span>
          </div>
          <kbd className="docs-search-kbd">⌘ K</kbd>
        </div>
        <p className="docs-breadcrumb">Codex Course • 8 modules</p>

        <div className="docs-sidebar-section">
          <h3>Codex Fundamentals</h3>
          <ul>
            {codexModules.map(mod => {
              const unlocked = isModuleUnlocked(mod.id);
              const completed = isModuleComplete(mod.id);

              return (
                <li key={mod.id}>
                  {unlocked ? (
                    <Link
                      to={`/module/${mod.number}`}
                      className={`docs-sidebar-link ${completed ? 'done' : ''} ${mod.id === defaultActiveModuleId ? 'active' : ''}`}
                    >
                      {mod.number}. {mod.title}
                    </Link>
                  ) : (
                    <span className="docs-sidebar-link locked">
                      {mod.number}. {mod.title}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="docs-sidebar-section">
          <h3>Skills</h3>
          <ul>
            {skillModules.map(mod => {
              const unlocked = isModuleUnlocked(mod.id);
              const completed = isModuleComplete(mod.id);

              return (
                <li key={mod.id}>
                  {unlocked ? (
                    <Link to={`/module/${mod.number}`} className={`docs-sidebar-link ${completed ? 'done' : ''}`}>
                      {mod.number}. {mod.title}
                    </Link>
                  ) : (
                    <span className="docs-sidebar-link locked">
                      {mod.number}. {mod.title}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="docs-sidebar-section">
          <h3>Build</h3>
          <ul>
            <li>
              <Link to="/dashboard" className="docs-sidebar-link">
                Course dashboard
              </Link>
            </li>
            <li>
              <Link to="/completion" className="docs-sidebar-link">
                Completion summary
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="docs-main">
        <section className="docs-hero">
          <h1>Codex In Plain English</h1>
          <p className="docs-hero-subtitle">A practical course for people who do not code.</p>
          <p className="docs-hero-tagline">
            Learn to delegate repetitive digital work, then turn winning workflows into reusable skills.
          </p>
        </section>

        <section className="docs-alert" aria-label="source attribution">
          <div className="docs-alert-icon" aria-hidden="true">
            i
          </div>
          <div className="docs-alert-text">
            <h2 className="docs-alert-title">{COURSE_ATTRIBUTION_TITLE}</h2>
            <p className="docs-alert-copy">{COURSE_ATTRIBUTION_COPY}</p>
          </div>
          <div className="docs-alert-links">
            <a href={SOURCE_GABRIEL_X.url} target="_blank" rel="noreferrer noopener">
              Source: {SOURCE_GABRIEL_X.label}
            </a>
            <a href={SOURCE_OPENAI_SKILLS_DOC.url} target="_blank" rel="noreferrer noopener">
              Source: {SOURCE_OPENAI_SKILLS_DOC.label}
            </a>
          </div>
        </section>

        <section className="docs-block">
          <h2 className="docs-section-title">Get started</h2>
          <div className="docs-feature-grid">
            <Link to="/module/1" className="docs-feature docs-feature-primary">
              <p className="docs-feature-kicker">Quickstart</p>
              <h3>From Clicking To Delegating</h3>
              <p>Start with module {moduleOne.number} and learn the core shift from manual steps to outcomes.</p>
            </Link>

            {isModuleUnlocked(moduleFive.id) ? (
              <Link to={`/module/${moduleFive.number}`} className="docs-feature docs-feature-secondary">
                <p className="docs-feature-kicker">Skills Track</p>
                <h3>Skills 101</h3>
                <p>Jump into reusable workflow design and progressive disclosure once it unlocks.</p>
                <div className="docs-feature-preview" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </Link>
            ) : (
              <div className="docs-feature docs-feature-secondary locked">
                <p className="docs-feature-kicker">Skills Track</p>
                <h3>Skills 101</h3>
                <p>Complete the first four modules to unlock the skills track.</p>
                <div className="docs-feature-preview" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="course-overview docs-block">
          <h2 className="docs-section-title">Create your app</h2>
          <div className="module-grid docs-module-grid">
            {featuredModules.map(mod => {
              const unlocked = isModuleUnlocked(mod.id);
              const completed = isModuleComplete(mod.id);
              const percent = getModulePercent(mod.id);

              let cardClass = 'module-card';
              if (completed) cardClass += ' completed';
              if (!unlocked) cardClass += ' locked';

              return unlocked ? (
                <Link key={mod.id} to={`/module/${mod.number}`} className={`${cardClass} docs-module-card`}>
                  <div className="module-card-number">Module {mod.number}</div>
                  {completed && <span className="module-card-check">Done</span>}
                  <h3>{mod.title}</h3>
                  <p>
                    {mod.depthZone} • ~{mod.estimatedMinutes} min
                  </p>
                  <p className="module-card-caption">
                    {completed ? 'Review and refine your workflow.' : 'Build this capability step by step.'}
                  </p>
                  <p className="module-card-cta">{completed ? 'Review module →' : 'Start module →'}</p>
                  {percent > 0 && !completed && (
                    <div className="module-card-progress">
                      <div className="module-card-progress-fill" style={{ width: `${percent}%` }} />
                    </div>
                  )}
                </Link>
              ) : (
                <div key={mod.id} className={`${cardClass} docs-module-card`}>
                  <div className="module-card-number">Module {mod.number}</div>
                  <span className="module-card-lock">Locked</span>
                  <h3>{mod.title}</h3>
                  <p>
                    {mod.depthZone} • ~{mod.estimatedMinutes} min
                  </p>
                  <p className="module-card-caption">Complete previous modules to unlock.</p>
                  <p className="module-card-cta">Locked</p>
                </div>
              );
            })}
          </div>
          <p className="docs-more-modules">
            Continue with all 8 modules in the{' '}
            <Link to="/dashboard" className="docs-inline-link">
              Course Dashboard
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
