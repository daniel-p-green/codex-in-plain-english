import { Link } from 'react-router-dom';
import type { NavGroup } from '../../types/navigation';
import { isNavItemActive } from '../../data/navigation';

interface LeftSidebarProps {
  groups: NavGroup[];
  pathname: string;
}

export default function LeftSidebar({ groups, pathname }: LeftSidebarProps) {
  const renderLinkLabel = (label: string) => {
    const moduleMatch = label.match(/^(Module \d+):\s(.+)$/);

    if (!moduleMatch) {
      return <span className="left-sidebar-label">{label}</span>;
    }

    const [, moduleNumber, title] = moduleMatch;

    return (
      <span className="left-sidebar-label left-sidebar-module-label">
        <span className="left-sidebar-module-number">{moduleNumber}</span>
        <span className="left-sidebar-module-title">{title}</span>
      </span>
    );
  };

  const renderLinkMeta = (item: NavGroup['items'][number]) => (
    <span className="left-sidebar-meta">
      {item.releaseLabel && item.releaseStatus && (
        <span className={`left-sidebar-release ${item.releaseStatus}`}>{item.releaseLabel}</span>
      )}
      {item.completed && <span className="left-sidebar-status">Done</span>}
    </span>
  );

  return (
    <aside className="left-sidebar" aria-label="Course sections">
      <div className="left-sidebar-search" aria-label="Course map overview">
        <span aria-hidden="true">☰</span>
        <span>Course map</span>
      </div>

      <p className="left-sidebar-breadcrumb">Course › Learning Journey</p>

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
                      <span className="left-sidebar-link locked" aria-disabled="true" aria-label={item.label}>
                        {renderLinkLabel(item.label)}
                        <span className="left-sidebar-meta">
                          <span className="left-sidebar-lock" aria-hidden="true">
                            Locked
                          </span>
                        </span>
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link className={`left-sidebar-link ${active ? 'active' : ''}`} to={item.href} aria-label={item.label}>
                      {renderLinkLabel(item.label)}
                      {renderLinkMeta(item)}
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
