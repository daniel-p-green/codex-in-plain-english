import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgressContext } from '../../context/useProgressContext';
import { COURSE_SUMMARY, NEXT_STEPS } from '../../data/completion';
import { BADGES } from '../../data/badges';
import PageContainer from '../layout/PageContainer';

export default function CompletionPage() {
  const { progress, hasBadge } = useProgressContext();

  useEffect(() => {
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
  }, []);

  const earnedBadges = BADGES.filter(badge => hasBadge(badge.id));

  return (
    <PageContainer className="completion-page">
      <div className="completion-mascot">Dex 🦖</div>
      <h1>You Completed The Course</h1>
      <p className="completion-intro">
        You now have a practical delegation mindset and a repeatable path to skill-based workflows.
      </p>
      <p className="completion-xp">Total XP: {progress.xp}</p>

      <div className="completion-summary">
        <h2 className="section-title">What You Learned</h2>
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

      <div className="completion-next">
        <h2 className="section-title">What To Do Next</h2>
        <ol className="content-list">
          {NEXT_STEPS.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="completion-actions">
        <Link to="/dashboard" className="btn btn-secondary">
          View Dashboard
        </Link>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </PageContainer>
  );
}
