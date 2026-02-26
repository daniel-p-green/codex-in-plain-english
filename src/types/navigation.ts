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
