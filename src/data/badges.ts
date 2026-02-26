import type { Badge } from '../types/gamification';

export const BADGES: Badge[] = [
  { id: 'first-delegate', name: 'First Delegate', description: 'Complete Module 1', icon: 'M1', criteria: 'module-1' },
  { id: 'outcome-thinker', name: 'Outcome Thinker', description: 'Complete Module 2', icon: 'M2', criteria: 'module-2' },
  { id: 'mode-switcher', name: 'Mode Switcher', description: 'Complete Module 3', icon: 'M3', criteria: 'module-3' },
  { id: 'playbook-builder', name: 'Playbook Builder', description: 'Complete Module 4', icon: 'M4', criteria: 'module-4' },
  { id: 'skill-spotter', name: 'Skill Spotter', description: 'Complete Module 5', icon: 'M5', criteria: 'module-5' },
  { id: 'context-curator', name: 'Context Curator', description: 'Complete Module 6', icon: 'M6', criteria: 'module-6' },
  { id: 'team-scaler', name: 'Team Scaler', description: 'Complete Module 7', icon: 'M7', criteria: 'module-7' },
  { id: 'workflow-author', name: 'Workflow Author', description: 'Complete Module 8', icon: 'M8', criteria: 'module-8' },
  { id: 'perfect-quiz', name: 'Precision Pass', description: 'Get 100% on any quiz (first try)', icon: '100', criteria: 'perfect-any' },
  { id: 'all-perfect', name: 'Zero-Guess Legend', description: 'Get 100% on all quizzes (first try)', icon: 'ALL', criteria: 'perfect-all' },
  { id: 'course-complete', name: 'Delegation Certified', description: 'Complete all 8 modules', icon: 'CERT', criteria: 'all-modules' },
  { id: 'streak-3', name: '3-Day Flow', description: '3-day learning streak', icon: 'D3', criteria: 'streak-3' },
  { id: 'streak-7', name: '7-Day Rhythm', description: '7-day learning streak', icon: 'D7', criteria: 'streak-7' },
  { id: 'speed-demon', name: 'Quick Sprint', description: 'Complete a module in under 10 minutes', icon: 'FAST', criteria: 'speed' },
];

export function getBadgeById(id: string): Badge | undefined {
  return BADGES.find(b => b.id === id);
}
