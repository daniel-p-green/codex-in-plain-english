import { useEffect, useRef, useState } from 'react';
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
  const sectionsViewed = moduleProgress.sectionsRead.length;
  const totalSections = moduleData?.sections.length ?? 0;
  const [sectionSavedMessage, setSectionSavedMessage] = useState<{ moduleId: string; text: string } | null>(null);

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
    const markIfNeeded = (sectionId: string, forceMessage = false) => {
      if (observedSections.current.has(sectionId)) return;
      observedSections.current.add(sectionId);
      markSectionRead(moduleId, sectionId);
      if (forceMessage) {
        setSectionSavedMessage({ moduleId, text: 'Progress saved: section viewed.' });
      }
    };

    if (typeof IntersectionObserver === 'undefined') {
      for (const section of moduleData.sections) {
        if (observedSections.current.has(section.id)) continue;
        const node = document.getElementById(section.id);
        if (!node) continue;
        const rect = node.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.75 && rect.bottom > viewportHeight * 0.2) {
          markIfNeeded(section.id);
        }
      }
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const sectionId = (entry.target as HTMLElement).dataset.sectionId;
          if (!sectionId) continue;
          markIfNeeded(sectionId, true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px',
      }
    );

    for (const section of moduleData.sections) {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, [autoTrackingEnabled, markSectionRead, moduleData, moduleId, moduleProgress.sectionsRead]);

  useEffect(() => {
    if (!sectionSavedMessage) return undefined;
    const timeoutId = window.setTimeout(() => setSectionSavedMessage(null), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [sectionSavedMessage]);

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

      <section className="module-orientation" aria-label="Module orientation">
        <article className="module-orientation-item">
          <h2>What this module teaches</h2>
          <p>{moduleData.subtitle}</p>
        </article>
        <article className="module-orientation-item">
          <h2>Who it is for</h2>
          <p>
            {moduleData.number <= 4
              ? 'Non-coders building reliable delegation habits.'
              : 'Technical depth (optional) for repeatable systems and team workflows.'}
          </p>
        </article>
        <article className="module-orientation-item">
          <h2>Estimated time</h2>
          <p>~{moduleData.estimatedMinutes} minutes</p>
        </article>
        <article className="module-orientation-item">
          <h2>After this module</h2>
          <p>You should be able to apply this pattern in your own workflow.</p>
        </article>
      </section>

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
      <div className="module-help-row">
        <Link to="/glossary" className="module-help-link">
          Stuck on a term? Open the plain-English glossary.
        </Link>
      </div>

      <div className="module-progress-bar">
        <div className="module-progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
      <div className="module-progress-meta">
        <span>Section progress: {sectionsViewed}/{totalSections} sections viewed.</span>
        <span>Quizzes are optional for XP and badges.</span>
      </div>
      {sectionSavedMessage?.moduleId === moduleId && (
        <p className="module-progress-toast" role="status" aria-live="polite">
          {sectionSavedMessage.text}
        </p>
      )}

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
                {isRead ? 'Section Viewed' : 'Marks as viewed when it enters your screen'}
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
