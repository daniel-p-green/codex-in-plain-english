import { useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import ContentRenderer from '../content-blocks/ContentRenderer';
import QuizSection from '../quiz/QuizSection';
import PageContainer from '../layout/PageContainer';

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { getModuleProgress, markSectionRead, isModuleComplete, getModulePercent, progress } = useProgressContext();

  const moduleId = `module-${id}`;
  const focusParam = (() => {
    const fromSearch = new URLSearchParams(location.search).get('focus');
    if (fromSearch) return fromSearch;
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash;
    const queryIndex = hash.indexOf('?');
    if (queryIndex === -1) return null;
    return new URLSearchParams(hash.slice(queryIndex + 1)).get('focus');
  })();
  const autoTrackingEnabled = focusParam !== 'quiz';
  const moduleData = allModules.find(m => m.id === moduleId);
  const observedSections = useRef<Set<string>>(new Set());

  const moduleProgress = getModuleProgress(moduleId);
  const percent = getModulePercent(moduleId);

  const moduleIndex = allModules.findIndex(m => m.id === moduleId);
  const prevModule = moduleIndex > 0 ? allModules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < allModules.length - 1 ? allModules[moduleIndex + 1] : null;

  const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth') => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (!moduleData || !autoTrackingEnabled) return undefined;

    observedSections.current = new Set(moduleProgress.sectionsRead);
    const markIfNeeded = (sectionId: string) => {
      if (observedSections.current.has(sectionId)) return;
      observedSections.current.add(sectionId);
      markSectionRead(moduleId, sectionId);
    };

    let rafId = 0;
    const scanVisibleSections = () => {
      rafId = 0;
      for (const section of moduleData.sections) {
        if (observedSections.current.has(section.id)) continue;
        const node = document.getElementById(section.id);
        if (!node) continue;

        const rect = node.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isVisible = rect.top < viewportHeight * 0.75 && rect.bottom > viewportHeight * 0.2;
        if (isVisible) {
          markIfNeeded(section.id);
        }
      }

    };

    const queueScan = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(scanVisibleSections);
    };

    queueScan();
    const intervalId = window.setInterval(queueScan, 250);
    window.addEventListener('scroll', queueScan, { passive: true });
    window.addEventListener('resize', queueScan);

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.clearInterval(intervalId);
      window.removeEventListener('scroll', queueScan);
      window.removeEventListener('resize', queueScan);
    };
  }, [autoTrackingEnabled, markSectionRead, moduleData, moduleId, moduleProgress.sectionsRead]);

  useEffect(() => {
    const targetSectionId =
      focusParam === 'quiz' ? 'quiz-section' : focusParam === 'sources' ? 'sources-section' : null;
    if (!targetSectionId) return;

    const timeoutId = window.setTimeout(() => {
      scrollToSection(targetSectionId, 'auto');
    }, 60);

    return () => window.clearTimeout(timeoutId);
  }, [focusParam]);

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
          <section
            key={section.id}
            id={section.id}
            className="section"
            data-section-id={section.id}
          >
            <h2>{section.title}</h2>
            <ContentRenderer blocks={section.content} />
            <div className="section-mark-complete">
              <span className={`module-outline-item ${isRead ? 'completed' : ''}`}>
                {isRead ? 'Section Viewed' : 'Auto-tracked when viewed'}
              </span>
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
              {source.note && <span> - {source.note}</span>}
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
          <Link to={`/module/${nextModule.number}`} className="btn btn-primary">
            Module {nextModule.number}: {nextModule.title} →
          </Link>
        ) : (
          <Link to="/completion" className="btn btn-success btn-lg">
            View Course Summary
          </Link>
        )}
      </nav>
    </PageContainer>
  );
}
