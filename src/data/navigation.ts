import { allModules } from './modules';
import type { NavGroup, NavItem, TopNavItem } from '../types/navigation';

interface NavTemplate {
  id: string;
  label: string;
  href: string;
  group: string;
  moduleId?: string;
  aliases?: string[];
}

interface TopNavTemplate {
  id: TopNavItem['id'];
  label: string;
  href: string;
  aliases?: string[];
}

const MODULE_GROUPS: Record<number, string> = {
  1: 'Foundations',
  2: 'Foundations',
  3: 'Practice',
  4: 'Practice',
  5: 'Skills',
  6: 'Skills',
  7: 'Capstone',
  8: 'Capstone',
};

const MODULE_NAV_ITEMS: NavTemplate[] = allModules.map(moduleData => ({
  id: moduleData.id,
  label: moduleData.title,
  href: `/module/${moduleData.number}`,
  group: MODULE_GROUPS[moduleData.number] ?? 'Practice',
  moduleId: moduleData.id,
}));

const SIDEBAR_NAV_ITEMS: NavTemplate[] = [
  {
    id: 'course-overview',
    label: 'Course Overview',
    href: '/',
    group: 'Foundations',
  },
  {
    id: 'progress-dashboard',
    label: 'Progress Dashboard',
    href: '/dashboard',
    group: 'Foundations',
  },
  ...MODULE_NAV_ITEMS,
  {
    id: 'completion',
    label: 'Completion Summary',
    href: '/completion',
    group: 'Capstone',
  },
];

const TOP_NAV_ITEMS: TopNavTemplate[] = [
  {
    id: 'overview',
    label: 'Overview',
    href: '/',
  },
  {
    id: 'modules',
    label: 'Modules',
    href: '/module/1',
  },
  {
    id: 'progress',
    label: 'Progress',
    href: '/dashboard',
  },
  {
    id: 'completion',
    label: 'Completion',
    href: '/completion',
  },
];

export const SIDEBAR_GROUP_ORDER = ['Foundations', 'Practice', 'Skills', 'Capstone'] as const;

export interface BuildCourseNavParams {
  pathname: string;
  isModuleComplete: (moduleId: string) => boolean;
}

function isRouteActive(pathname: string, href: string, aliases: string[] = []) {
  return pathname === href || aliases.includes(pathname);
}

function resolveNavItem(template: NavTemplate, params: BuildCourseNavParams): NavItem {
  return {
    id: template.id,
    label: template.label,
    href: template.href,
    group: template.group,
    locked: false,
    completed: template.moduleId ? params.isModuleComplete(template.moduleId) : false,
  };
}

function isTopNavTemplateActive(pathname: string, template: TopNavTemplate) {
  if (template.id === 'modules') {
    return pathname.startsWith('/module/');
  }

  return isRouteActive(pathname, template.href, template.aliases);
}

export function buildTopNavItems(params: BuildCourseNavParams): TopNavItem[] {
  return TOP_NAV_ITEMS.map(template => ({
    id: template.id,
    label: template.label,
    href: template.href,
    active: isTopNavTemplateActive(params.pathname, template),
    locked: false,
  }));
}

export function buildCourseNavGroups(params: BuildCourseNavParams): NavGroup[] {
  const byGroup = new Map<string, NavItem[]>();

  for (const template of SIDEBAR_NAV_ITEMS) {
    const resolved = resolveNavItem(template, params);
    const existing = byGroup.get(template.group) ?? [];
    byGroup.set(template.group, [...existing, resolved]);
  }

  return SIDEBAR_GROUP_ORDER.map(title => ({
    title,
    items: byGroup.get(title) ?? [],
  }));
}

export function isNavItemActive(pathname: string, item: NavItem) {
  return pathname === item.href;
}
