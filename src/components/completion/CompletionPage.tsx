import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgressContext } from '../../context/useProgressContext';
import { COURSE_SUMMARY, NEXT_STEPS } from '../../data/completion';
import { BADGES } from '../../data/badges';

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
    <div className="completion-page">
      <div className="completion-mascot">DEX</div>
      <h1>You Completed The Course</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--ink-soft)', marginBottom: 'var(--space-lg)' }}>
        You now have a practical delegation mindset and a repeatable path to skill-based workflows.
      </p>
      <p style={{ fontSize: '1rem', color: 'var(--sandy-gold)', fontWeight: 700 }}>Total XP: {progress.xp}</p>

      <div className="completion-summary">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          What You Learned
        </h2>
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
                  <td>
                    <strong>{item.module}</strong>
                  </td>
                  <td>{item.takeaway}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {earnedBadges.length > 0 && (
        <div style={{ marginTop: 'var(--space-2xl)' }}>
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

      <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'left' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          What To Do Next
        </h2>
        <ol className="content-list" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {NEXT_STEPS.map((step, i) => (
            <li key={i} style={{ marginBottom: 'var(--space-md)' }}>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/dashboard" className="btn btn-secondary">
          View Dashboard
        </Link>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
