import { useParams, Navigate, Link } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import ContentRenderer from '../content-blocks/ContentRenderer';
import QuizSection from '../quiz/QuizSection';

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const { getModuleProgress, markSectionRead, isModuleUnlocked, isModuleComplete, getModulePercent, progress } =
    useProgressContext();

  const moduleId = `module-${id}`;
  const moduleData = allModules.find(m => m.id === moduleId);

  if (!moduleData) {
    return (
      <div className="module-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <h1>Module Not Found</h1>
        <p>This module does not exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Home
        </Link>
      </div>
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
    <div className="module-page">
      <aside className="module-sidebar">
        <div className="module-sidebar-header">
          <h3>Module {moduleData.number}</h3>
          <span className="depth-badge">
            {moduleData.depthZone} • {moduleData.depthMeters}m
          </span>
        </div>

        <ul className="sidebar-nav">
          {moduleData.sections.map(section => {
            const isRead = moduleProgress.sectionsRead.includes(section.id);
            return (
              <li
                key={section.id}
                className={`sidebar-nav-item ${isRead ? 'completed' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="check-icon">{isRead ? 'x' : 'o'}</span>
                <span>{section.title}</span>
              </li>
            );
          })}
          <li
            className={`sidebar-nav-item ${moduleProgress.quiz.completed ? 'completed' : ''}`}
            onClick={() => scrollToSection('quiz-section')}
          >
            <span className="check-icon">{moduleProgress.quiz.completed ? 'x' : 'o'}</span>
            <span>Knowledge Check</span>
          </li>
          <li className="sidebar-nav-item" onClick={() => scrollToSection('sources-section')}>
            <span className="check-icon">&gt;</span>
            <span>Sources</span>
          </li>
        </ul>

        <div className="sidebar-stats">
          <div className="sidebar-xp">{progress.xp} XP</div>
        </div>
      </aside>

      <main className="module-content">
        <div className="module-header">
          <div className="module-header-meta">
            <span className="badge">{moduleData.depthZone}</span>
            <span>{moduleData.depthMeters}m depth</span>
            <span>~{moduleData.estimatedMinutes} min</span>
            <span>{moduleData.sourceRefs.length} sources linked</span>
            {isModuleComplete(moduleId) && <span style={{ color: 'var(--mint)', fontWeight: 600 }}>Complete</span>}
          </div>
          <h1>{moduleData.title}</h1>
          <p>{moduleData.subtitle}</p>
        </div>

        <div className="module-progress-bar">
          <div className="module-progress-bar-fill" style={{ width: `${percent}%` }} />
        </div>

        {moduleData.sections.map(section => {
          const isRead = moduleProgress.sectionsRead.includes(section.id);
          return (
            <div key={section.id} id={section.id} className="section">
              <h2>{section.title}</h2>
              <ContentRenderer blocks={section.content} />
              <div className="section-mark-complete">
                {isRead ? (
                  <button className="btn btn-sm btn-success" disabled>
                    ✓ Section Complete
                  </button>
                ) : (
                  <button className="btn btn-sm btn-secondary" onClick={() => markSectionRead(moduleId, section.id)}>
                    Mark Section Complete
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <div id="quiz-section">
          <QuizSection moduleId={moduleId} questions={moduleData.quiz} />
        </div>

        <section id="sources-section" className="source-panel">
          <h3>Source Attribution</h3>
          <p>
            This module adapts ideas from Gabriel Chua&apos;s writing. Source links are provided directly below.
          </p>
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

        <div className="module-nav">
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
        </div>
      </main>
    </div>
  );
}
