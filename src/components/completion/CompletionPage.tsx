import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgressContext } from '../../context/useProgressContext';
import { COURSE_SUMMARY, NEXT_STEPS } from '../../data/completion';
import { BADGES } from '../../data/badges';
import { allModules } from '../../data/modules';
import PageContainer from '../layout/PageContainer';

export default function CompletionPage() {
  const { progress, hasBadge, isModuleComplete, getModuleProgress } = useProgressContext();

  const completedModules = allModules.filter(moduleData => isModuleComplete(moduleData.id)).length;
  const allComplete = completedModules === allModules.length;

  const firstIncomplete = allModules.find(moduleData => !isModuleComplete(moduleData.id));
  const resumedIncomplete = allModules.find(
    moduleData => !isModuleComplete(moduleData.id) && getModuleProgress(moduleData.id).started
  );
  const continueTarget = resumedIncomplete ?? firstIncomplete;

  useEffect(() => {
    if (!allComplete) return;

    const duration = 1400;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 45,
        origin: { x: 0, y: 0.7 },
        colors: ['#53d3ff', '#88f2ce', '#f4bc6a', '#dceaf6'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 45,
        origin: { x: 1, y: 0.7 },
        colors: ['#53d3ff', '#88f2ce', '#f4bc6a', '#dceaf6'],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, [allComplete]);

  const earnedBadges = BADGES.filter(badge => hasBadge(badge.id));

  return (
    <PageContainer className="completion-page">
      <div className="completion-mascot">Dex 🦖</div>
      {allComplete ? (
        <>
          <h1>Course Complete</h1>
          <p className="completion-intro">
            You now have a practical delegation mindset and a repeatable path to skill-based workflows.
          </p>
        </>
      ) : (
        <>
          <h1>Progress</h1>
          <p className="completion-intro">
            You are building strong delegation habits. Keep going to unlock the course takeaways and next steps.
          </p>
          <p className="completion-xp">
            Modules completed: {completedModules}/{allModules.length}
          </p>
        </>
      )}
      <p className="completion-xp">Total XP: {progress.xp}</p>

      {allComplete && (
        <div className="completion-summary">
          <h2 className="section-title">Key Takeaways</h2>
          <div className="content-table-wrapper">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Key Takeaway</th>
                </tr>
              </thead>
              <tbody>
                {COURSE_SUMMARY.map((item, i) => (
                  <tr key={i}>
                    <td data-label="Module">
                      <strong>{item.module}</strong>
                    </td>
                    <td data-label="Key Takeaway">{item.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {earnedBadges.length > 0 && (
        <div className="completion-badges">
          <h2 className="section-title">Your Badges</h2>
          <div className="badge-grid">
            {earnedBadges.map(badge => (
              <div key={badge.id} className="badge-item earned">
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-name">{badge.name}</div>
                <div className="badge-desc">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {allComplete && (
        <div className="completion-next">
          <h2 className="section-title">What to Do Next</h2>
          <ol className="content-list">
            {NEXT_STEPS.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="completion-actions">
        {continueTarget && (
          <Link to={`/module/${continueTarget.number}`} className="btn btn-primary">
            Continue with Module {continueTarget.number}
          </Link>
        )}
        <Link to="/dashboard" className="btn btn-secondary">
          View Dashboard
        </Link>
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </PageContainer>
  );
}
