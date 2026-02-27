import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import type { TopNavCta, TopNavItem, TopNavMetrics } from '../../types/navigation';

interface TopNavProps {
  onOpenMenu: () => void;
  brandLabel: string;
  items: TopNavItem[];
  metrics: TopNavMetrics;
  cta: TopNavCta;
}

export default function TopNav({ onOpenMenu, brandLabel, items, metrics, cta }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <button
          type="button"
          className="top-nav-menu"
          aria-label="Open navigation menu"
          onClick={onOpenMenu}
        >
          <Menu size={18} aria-hidden="true" />
        </button>

        <Link to="/" className="top-nav-brand" aria-label={brandLabel}>
          <span className="top-nav-brand-dex" aria-hidden="true">
            🦖
          </span>
          <span className="top-nav-brand-text top-nav-brand-text-full" aria-hidden="true">
            {brandLabel}
          </span>
          <span className="top-nav-brand-text top-nav-brand-text-compact" aria-hidden="true">
            Codex Course
          </span>
        </Link>

        <nav className="top-nav-links" aria-label="Primary">
          {items.map(item =>
            item.locked ? (
              <span key={item.id} className="top-nav-link locked" aria-disabled="true">
                {item.label}
              </span>
            ) : (
              <Link key={item.id} to={item.href} className={`top-nav-link ${item.active ? 'active' : ''}`}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="top-nav-actions">
          <div className="top-nav-progress" aria-label="Progress highlights">
            <span className="top-nav-chip top-nav-chip-xp">
              <span className="top-nav-chip-value">{metrics.xp}</span>
              <span className="top-nav-chip-label">XP</span>
            </span>
            <span className="top-nav-chip top-nav-chip-level">
              <span className="top-nav-chip-value">Lv.{metrics.level}</span>
              <span className="top-nav-chip-label">Level</span>
            </span>
            <span className="top-nav-chip top-nav-chip-streak">
              <span className="top-nav-chip-value">{metrics.streak}</span>
              <span className="top-nav-chip-label">Streak</span>
            </span>
          </div>
          <Link to={cta.href} className="top-nav-cta top-nav-continue" aria-label={cta.label}>
            <span className="top-nav-cta-label top-nav-cta-label-full">{cta.label}</span>
            <span className="top-nav-cta-label top-nav-cta-label-compact">
              Continue
            </span>
            <span className="top-nav-cta-meta">{metrics.overallPercent}% complete</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
