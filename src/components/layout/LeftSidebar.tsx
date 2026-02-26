import { Link } from 'react-router-dom';
import type { NavGroup } from '../../types/navigation';
import { isNavItemActive } from '../../data/navigation';

interface LeftSidebarProps {
  groups: NavGroup[];
  pathname: string;
}

export default function LeftSidebar({ groups, pathname }: LeftSidebarProps) {
  return (
    <aside className="left-sidebar" aria-label="Course sections">
      <div className="left-sidebar-search" role="search">
        <span aria-hidden="true">⌕</span>
        <span>Search</span>
        <kbd>⌘ K</kbd>
      </div>

      <p className="left-sidebar-breadcrumb">ChatGPT › Codex In Plain English</p>

      <nav className="left-sidebar-nav" aria-label="Course sections">
        {groups.map(group => (
          <section key={group.title} className="left-sidebar-group">
            <h2>{group.title}</h2>
            <ul>
              {group.items.map(item => {
                const active = isNavItemActive(pathname, item);

                if (item.locked) {
                  return (
                    <li key={item.id}>
                      <span className="left-sidebar-link locked" aria-disabled="true">
                        {item.label}
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link className={`left-sidebar-link ${active ? 'active' : ''}`} to={item.href}>
                      {item.label}
                      {item.completed && <span className="left-sidebar-status">Done</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
