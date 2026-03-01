import { Link } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';
import { allModules } from '../../data/modules';
import { getDepthLevel, getNextDepthLevel } from '../../data/depth-levels';
import { BADGES } from '../../data/badges';
import PageContainer from '../layout/PageContainer';

export default function DashboardPage() {
  const { progress, isModuleComplete, getModulePercent, getOverallPercent, hasBadge } = useProgressContext();

  const depthLevel = getDepthLevel(progress.xp);
  const nextLevel = getNextDepthLevel(progress.xp);
  const overallPercent = getOverallPercent();
  const completedModules = allModules.filter(m => isModuleComplete(m.id)).length;

  return (
    <PageContainer className="dashboard">
      <h1>Your Delegation Progress</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card-icon">XP</div>
          <div className="stat-card-value">{progress.xp}</div>
          <div className="stat-card-label">Total XP</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">LVL</div>
          <div className="stat-card-value">Lv.{depthLevel.level}</div>
          <div className="stat-card-label">{depthLevel.title}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">STR</div>
          <div className="stat-card-value">{progress.streak.current}</div>
          <div className="stat-card-label">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-icon">CMP</div>
          <div className="stat-card-value">{overallPercent}%</div>
          <div className="stat-card-label">Complete</div>
        </div>
      </div>

      {nextLevel && (
        <div className="next-level-card">
          <p>
            Next level: <strong>{nextLevel.title}</strong> ({nextLevel.xpRequired - progress.xp} XP to go)
          </p>
          <div className="module-progress-bar">
            <div
              className="module-progress-bar-fill"
              style={{
                width: `${Math.min(
                  100,
                  ((progress.xp - depthLevel.xpRequired) / (nextLevel.xpRequired - depthLevel.xpRequired)) * 100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      <h2 className="section-title">Modules</h2>
      <div className="module-grid dashboard-module-grid">
        {allModules.map(mod => {
          const completed = isModuleComplete(mod.id);
          const percent = getModulePercent(mod.id);

          let cardClass = 'module-card';
          if (completed) cardClass += ' completed';

          const modProgress = progress.modules[mod.id];
          const sectionsRead = modProgress?.sectionsRead.length ?? 0;
          const totalSections = mod.sections.length;
          const quizStatus = modProgress?.quiz.completed ? 'Quiz complete (optional)' : 'Quiz optional';

          return (
            <Link key={mod.id} to={`/module/${mod.number}`} className={cardClass}>
              <div className="module-card-number">{mod.number}</div>
              {completed && <span className="module-card-check">Done</span>}
              <h3>{mod.title}</h3>
              <p>
                {sectionsRead}/{totalSections} sections viewed • {quizStatus}
              </p>
              <div className="module-card-progress">
                <div className="module-card-progress-fill" style={{ width: `${percent}%` }} />
              </div>
            </Link>
          );
        })}
      </div>

      {completedModules === allModules.length && (
        <div className="dashboard-completion-link">
          <Link to="/completion" className="btn btn-success btn-lg">
            View Completion Summary
          </Link>
        </div>
      )}

      <h2 className="section-title">Badges</h2>
      <div className="badge-grid">
        {BADGES.map(badge => {
          const earned = hasBadge(badge.id);
          return (
            <div key={badge.id} className={`badge-item ${earned ? 'earned' : 'locked'}`}>
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-name">{badge.name}</div>
              <div className="badge-desc">{badge.description}</div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}
