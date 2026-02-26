import { Link, NavLink, useLocation } from 'react-router-dom';
import { useProgressContext } from '../../context/useProgressContext';

export default function Navbar() {
  const { getOverallPercent } = useProgressContext();
  const location = useLocation();
  const overallPercent = getOverallPercent();
  const inModules = location.pathname.startsWith('/module');

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon" aria-hidden="true">
          OA
        </span>
        <span>Codex In Plain English</span>
      </Link>

      <div className="navbar-center" aria-label="primary">
        <NavLink to="/" end className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/module/1" className={`navbar-link ${inModules ? 'active' : ''}`}>
          <span>Modules</span>
          <span className="navbar-caret" aria-hidden="true">
            ▾
          </span>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
          Progress
        </NavLink>
        <a href="#/" className="navbar-link">
          <span>Learn</span>
          <span className="navbar-caret" aria-hidden="true">
            ▾
          </span>
        </a>
      </div>

      <div className="navbar-right">
        <div className="navbar-meta">{overallPercent}% complete</div>
        <Link to="/dashboard" className="navbar-cta">
          Course Dashboard ↗
        </Link>
      </div>
    </nav>
  );
}
