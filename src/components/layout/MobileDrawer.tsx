import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import type { NavGroup } from '../../types/navigation';
import { isNavItemActive } from '../../data/navigation';

interface MobileDrawerProps {
  open: boolean;
  groups: NavGroup[];
  pathname: string;
  onClose: () => void;
}

export default function MobileDrawer({ open, groups, pathname, onClose }: MobileDrawerProps) {
  return (
    <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button type="button" className="mobile-drawer-backdrop" onClick={onClose} aria-label="Close navigation menu" />

      <aside className="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="Course navigation">
        <header className="mobile-drawer-header">
          <h2>Course navigation</h2>
          <button type="button" className="mobile-drawer-close" onClick={onClose} aria-label="Close navigation menu">
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div className="mobile-drawer-content">
          {groups.map(group => (
            <section key={group.title} className="mobile-drawer-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => {
                  const active = isNavItemActive(pathname, item);
                  return (
                    <li key={item.id}>
                      {item.locked ? (
                        <span className="mobile-drawer-link locked" aria-disabled="true">
                          {item.label}
                          <span className="mobile-drawer-lock" aria-hidden="true">
                            Locked
                          </span>
                        </span>
                      ) : (
                        <Link
                          className={`mobile-drawer-link ${active ? 'active' : ''}`}
                          to={item.href}
                          onClick={onClose}
                        >
                          {item.label}
                          {item.completed && <span className="mobile-drawer-done">Done</span>}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </aside>
    </div>
  );
}
