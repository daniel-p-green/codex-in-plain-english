import type { DepthLevel } from '../types/gamification';

export const DEPTH_LEVELS: DepthLevel[] = [
  { level: 1, title: 'Inbox Explorer', xpRequired: 0 },
  { level: 2, title: 'Workflow Starter', xpRequired: 50 },
  { level: 3, title: 'Task Delegator', xpRequired: 150 },
  { level: 4, title: 'System Operator', xpRequired: 300 },
  { level: 5, title: 'Automation Strategist', xpRequired: 500 },
  { level: 6, title: 'Delegation Architect', xpRequired: 750 },
];

export function getDepthLevel(xp: number): DepthLevel {
  for (let i = DEPTH_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= DEPTH_LEVELS[i].xpRequired) {
      return DEPTH_LEVELS[i];
    }
  }
  return DEPTH_LEVELS[0];
}

export function getNextDepthLevel(xp: number): DepthLevel | null {
  const current = getDepthLevel(xp);
  const nextIdx = DEPTH_LEVELS.findIndex(l => l.level === current.level) + 1;
  return nextIdx < DEPTH_LEVELS.length ? DEPTH_LEVELS[nextIdx] : null;
}
