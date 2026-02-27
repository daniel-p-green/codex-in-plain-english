import { useParams, Navigate, Link } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import ContentRenderer from '../content-blocks/ContentRenderer';
import QuizSection from '../quiz/QuizSection';
import PageContainer from '../layout/PageContainer';

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const { getModuleProgress, markSectionRead, isModuleUnlocked, isModuleComplete, getModulePercent, progress } =
    useProgressContext();

  const moduleId = `module-${id}`;
  const moduleData = allModules.find(m => m.id === moduleId);

  if (!moduleData) {
    return (
      <PageContainer className="module-content">
        <div className="empty-state">
          <h1>Module Not Found</h1>
          <p>This module does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </PageContainer>
    );
  }

  if (!isModuleUnlocked(moduleId)) {
    return <Navigate to="/" replace />;
  }

  const moduleProgress = getModuleProgress(moduleId);
  const percent = getModulePercent(moduleId);

  const moduleIndex = allModules.findIndex(m => m.id === moduleId);
  const prevModule = moduleIndex > 0 ? allModules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < allModules.length - 1 ? allModules[moduleIndex + 1] : null;

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer className="module-page">
      <header className="module-header">
        <div className="module-header-meta">
          <span className="badge">{moduleData.depthZone}</span>
          <span>{moduleData.depthMeters}m depth</span>
          <span>~{moduleData.estimatedMinutes} min</span>
          <span>{moduleData.sourceRefs.length} sources linked</span>
          <span>{progress.xp} XP</span>
          {isModuleComplete(moduleId) && <span className="module-complete-chip">Complete</span>}
        </div>
        <h1>{moduleData.title}</h1>
        <p>{moduleData.subtitle}</p>
      </header>

      <div className="module-outline" aria-label="Module sections">
        {moduleData.sections.map(section => {
          const isRead = moduleProgress.sectionsRead.includes(section.id);
          return (
            <button
              key={section.id}
              type="button"
              className={`module-outline-item ${isRead ? 'completed' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          );
        })}
        <button type="button" className="module-outline-item" onClick={() => scrollToSection('quiz-section')}>
          Knowledge Check
        </button>
        <button type="button" className="module-outline-item" onClick={() => scrollToSection('sources-section')}>
          Sources
        </button>
      </div>

      <div className="module-progress-bar">
        <div className="module-progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>

      {moduleData.sections.map(section => {
        const isRead = moduleProgress.sectionsRead.includes(section.id);
        return (
          <section key={section.id} id={section.id} className="section">
            <h2>{section.title}</h2>
            <ContentRenderer blocks={section.content} />
            <div className="section-mark-complete">
              {isRead ? (
                <button className="btn btn-sm btn-success" disabled>
                  Section Complete
                </button>
              ) : (
                <button className="btn btn-sm btn-secondary" onClick={() => markSectionRead(moduleId, section.id)}>
                  Mark Section Complete
                </button>
              )}
            </div>
          </section>
        );
      })}

      <section id="quiz-section" className="module-section-block">
        <QuizSection moduleId={moduleId} questions={moduleData.quiz} />
      </section>

      <section id="sources-section" className="source-panel">
        <h3>Source Attribution</h3>
        <p>This module adapts ideas from Gabriel Chua&apos;s writing. Source links are provided directly below.</p>
        <ul>
          {moduleData.sourceRefs.map((source, idx) => (
            <li key={`${source.url}-${idx}`}>
              <a href={source.url} target="_blank" rel="noreferrer noopener">
                {source.label}
              </a>
              {source.note && <span> — {source.note}</span>}
            </li>
          ))}
        </ul>
      </section>

      <nav className="module-nav" aria-label="Module navigation">
        {prevModule ? (
          <Link to={`/module/${prevModule.number}`} className="btn btn-secondary">
            ← Module {prevModule.number}: {prevModule.title}
          </Link>
        ) : (
          <span />
        )}
        {nextModule ? (
          isModuleComplete(moduleId) ? (
            <Link to={`/module/${nextModule.number}`} className="btn btn-primary">
              Module {nextModule.number}: {nextModule.title} →
            </Link>
          ) : (
            <button className="btn btn-primary" disabled>
              Complete this module to continue →
            </button>
          )
        ) : (
          isModuleComplete(moduleId) && (
            <Link to="/completion" className="btn btn-success btn-lg">
              View Course Completion
            </Link>
          )
        )}
      </nav>
    </PageContainer>
  );
}
