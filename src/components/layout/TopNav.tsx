import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon } from 'lucide-react';

interface TopNavProps {
  onOpenMenu: () => void;
}

const PRIMARY_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'api', label: 'API', href: '/dashboard', hasMenu: true },
  { id: 'codex', label: 'Codex', href: '/module/1' },
  { id: 'chatgpt', label: 'ChatGPT', href: '/module/1', hasMenu: true },
  { id: 'learn', label: 'Learn', href: '/completion', hasMenu: true },
];

export default function TopNav({ onOpenMenu }: TopNavProps) {
  const location = useLocation();
  const courseRoutes = ['/', '/dashboard', '/completion'];
  const inCourseArea = courseRoutes.includes(location.pathname) || location.pathname.startsWith('/module');

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

        <Link to="/" className="top-nav-brand">
          OpenAI Developers
        </Link>

        <nav className="top-nav-links" aria-label="Primary">
          {PRIMARY_LINKS.map(link => (
            <NavLink
              key={link.id}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `top-nav-link ${isActive || (link.id === 'chatgpt' && inCourseArea) ? 'active' : ''}`
              }
            >
              {link.label}
              {link.hasMenu && (
                <span className="top-nav-caret" aria-hidden="true">
                  ▾
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="top-nav-actions">
          <Link to="/dashboard" className="top-nav-cta">
            API Dashboard ↗
          </Link>
          <button type="button" className="top-nav-theme" aria-label="Toggle theme">
            <Moon size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
