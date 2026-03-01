export interface NavItem {
  id: string;
  label: string;
  href: string;
  group: string;
  locked?: boolean;
  completed?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface TopNavItem {
  id: 'overview' | 'modules' | 'progress' | 'glossary' | 'completion';
  label: string;
  href: string;
  active: boolean;
  locked: boolean;
}

export interface TopNavMetrics {
  xp: number;
  level: number;
  streak: number;
  overallPercent: number;
}

export interface TopNavCta {
  href: string;
  label: string;
}
