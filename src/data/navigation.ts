import { allModules } from './modules';
import type { NavGroup, NavItem } from '../types/navigation';

interface NavTemplate {
  id: string;
  label: string;
  href: string;
  group: string;
  moduleId?: string;
  completionGate?: 'all-modules';
  aliases?: string[];
}

const TOP_NAV_ITEMS: NavTemplate[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    group: 'Overview',
    aliases: ['/dashboard', '/completion'],
  },
  {
    id: 'quickstart',
    label: 'Quickstart',
    href: '/module/1',
    group: 'Overview',
    moduleId: 'module-1',
  },
];

const GROUPED_NAV_ITEMS: NavTemplate[] = [
  {
    id: 'module-2',
    label: 'What Codex Actually Does',
    href: '/module/2',
    group: 'Core Concepts',
    moduleId: 'module-2',
  },
  {
    id: 'module-3',
    label: 'Two Execution Modes',
    href: '/module/3',
    group: 'Core Concepts',
    moduleId: 'module-3',
  },
  {
    id: 'module-4',
    label: 'First Delegation Playbook',
    href: '/module/4',
    group: 'Plan',
    moduleId: 'module-4',
  },
  {
    id: 'module-5',
    label: 'Skills 101',
    href: '/module/5',
    group: 'Build',
    moduleId: 'module-5',
  },
  {
    id: 'module-6',
    label: 'Progressive Disclosure',
    href: '/module/6',
    group: 'Build',
    moduleId: 'module-6',
  },
  {
    id: 'module-7',
    label: 'Team Practices',
    href: '/module/7',
    group: 'Deploy',
    moduleId: 'module-7',
  },
  {
    id: 'module-8',
    label: 'Build Your First Skill',
    href: '/module/8',
    group: 'Deploy',
    moduleId: 'module-8',
  },
  {
    id: 'completion',
    label: 'Completion Summary',
    href: '/completion',
    group: 'Deploy',
    completionGate: 'all-modules',
  },
];

export const SIDEBAR_GROUP_ORDER = ['Overview', 'Core Concepts', 'Plan', 'Build', 'Deploy'] as const;

export interface BuildCourseNavParams {
  pathname: string;
  isModuleUnlocked: (moduleId: string) => boolean;
  isModuleComplete: (moduleId: string) => boolean;
}

function isRouteActive(pathname: string, href: string, aliases: string[] = []) {
  if (href === '/') {
    return pathname === '/' || aliases.includes(pathname);
  }
  return pathname === href;
}

function resolveNavItem(
  template: NavTemplate,
  params: BuildCourseNavParams,
  allComplete: boolean
): NavItem {
  const lockedFromModule = template.moduleId ? !params.isModuleUnlocked(template.moduleId) : false;
  const lockedFromCompletion = template.completionGate === 'all-modules' && !allComplete;

  const item: NavItem = {
    id: template.id,
    label: template.label,
    href: template.href,
    group: template.group,
    locked: lockedFromModule || lockedFromCompletion,
    completed: template.moduleId ? params.isModuleComplete(template.moduleId) : false,
  };

  if (isRouteActive(params.pathname, template.href, template.aliases)) {
    return { ...item, completed: item.completed, locked: item.locked };
  }

  return item;
}

export function buildCourseNavGroups(params: BuildCourseNavParams): NavGroup[] {
  const allComplete = allModules.every(moduleData => params.isModuleComplete(moduleData.id));
  const templates = [...TOP_NAV_ITEMS, ...GROUPED_NAV_ITEMS];
  const byGroup = new Map<string, NavItem[]>();

  for (const template of templates) {
    const resolved = resolveNavItem(template, params, allComplete);
    const existing = byGroup.get(template.group) ?? [];
    byGroup.set(template.group, [...existing, resolved]);
  }

  return SIDEBAR_GROUP_ORDER.map(title => ({
    title,
    items: byGroup.get(title) ?? [],
  }));
}

export function isNavItemActive(pathname: string, item: NavItem) {
  if (item.href === '/') return pathname === '/' || pathname === '/dashboard' || pathname === '/completion';
  return pathname === item.href;
}
