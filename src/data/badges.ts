import type { Badge } from '../types/gamification';

export const BADGES: Badge[] = [
  { id: 'first-delegate', name: 'Button Clicker No More', description: 'Finish Module 1 and make the first leap from doing to delegating.', icon: 'M1', criteria: 'module-1' },
  { id: 'outcome-thinker', name: 'Outcome Oracle', description: 'Finish Module 2 and learn what Codex needs before it starts moving.', icon: 'M2', criteria: 'module-2' },
  { id: 'mode-switcher', name: 'Mode Shifter', description: 'Finish Module 3 and know when Codex should work with files or screens.', icon: 'M3', criteria: 'module-3' },
  { id: 'playbook-builder', name: 'Brief Whisperer', description: 'Finish Module 4 and write a handoff Codex can actually follow.', icon: 'M4', criteria: 'module-4' },
  { id: 'skill-spotter', name: 'Repeat Work Radar', description: 'Finish Module 5 and spot repeatable work before it gets tedious.', icon: 'M5', criteria: 'module-5' },
  { id: 'context-curator', name: 'Context Collector', description: 'Finish Module 6 and keep the important details from floating away.', icon: 'M6', criteria: 'module-6' },
  { id: 'team-scaler', name: 'Workflow Amplifier', description: 'Finish Module 7 and turn one good workflow into a shared habit.', icon: 'M7', criteria: 'module-7' },
  { id: 'workflow-author', name: 'Skill Smith', description: 'Finish Module 8 and package a useful routine for reuse.', icon: 'M8', criteria: 'module-8' },
  { id: 'super-app-mapper', name: 'Super App Navigator', description: 'Finish Module 9 and see how the Codex work areas fit together.', icon: 'M9', criteria: 'module-9' },
  { id: 'visual-operator', name: 'Screen Driver', description: 'Finish Module 10 and choose the right visual tool for the job.', icon: 'M10', criteria: 'module-10' },
  { id: 'mobile-steerer', name: 'Pocket Commander', description: 'Finish Module 11 and keep work moving when you leave the desk.', icon: 'M11', criteria: 'module-11' },
  { id: 'memory-keeper', name: 'Thread Timekeeper', description: 'Finish Module 12 and leave useful context behind for the next loop.', icon: 'M12', criteria: 'module-12' },
  { id: 'loop-runner', name: 'Loop Maestro', description: 'Finish Module 13 and give long-running work a real operating rhythm.', icon: 'M13', criteria: 'module-13' },
  { id: 'living-course-steward', name: 'Future-Proof Operator', description: 'Finish Module 14 and know how to keep the system honest as Codex grows.', icon: 'M14', criteria: 'module-14' },
  { id: 'perfect-quiz', name: 'One-Take Wonder', description: 'Get 100% on any quiz on the first try.', icon: '100', criteria: 'perfect-any' },
  { id: 'all-perfect', name: 'No-Guess Dynasty', description: 'Get 100% on all quizzes on the first try.', icon: 'ALL', criteria: 'perfect-all' },
  { id: 'course-complete', name: 'Plain-English Power User', description: 'Complete every current module in the course.', icon: 'CERT', criteria: 'all-modules' },
  { id: 'streak-3', name: 'Three-Day Glow-Up', description: 'Keep your learning streak alive for 3 days.', icon: 'D3', criteria: 'streak-3' },
  { id: 'streak-7', name: 'Seven-Day Signal', description: 'Keep your learning streak alive for 7 days.', icon: 'D7', criteria: 'streak-7' },
  { id: 'speed-demon', name: 'Ten-Minute Tactician', description: 'Complete a module in under 10 minutes.', icon: 'FAST', criteria: 'speed' },
];

export function getBadgeById(id: string): Badge | undefined {
  return BADGES.find(b => b.id === id);
}
