import { useEffect, useRef } from 'react';
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
  const panelRef = useRef<HTMLElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
            element => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true'
          )
        : [];

    const initialFocusable = getFocusable();
    if (initialFocusable.length > 0) {
      initialFocusable[0].focus();
    } else {
      panel?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        panel?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || active === panel) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (lastFocusedRef.current && document.contains(lastFocusedRef.current)) {
        lastFocusedRef.current.focus();
      }
    };
  }, [open, onClose]);

  return (
    <div className={`mobile-drawer ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="mobile-drawer-backdrop"
        onClick={onClose}
        aria-label="Close navigation menu"
        aria-hidden={!open}
        disabled={!open}
      />

      <aside
        ref={panelRef}
        className="mobile-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Course navigation"
        tabIndex={-1}
      >
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
