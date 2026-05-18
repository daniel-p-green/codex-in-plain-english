import type { Badge } from '../types/gamification';

export const BADGES: Badge[] = [
  { id: 'first-delegate', name: 'Click-to-Delegate', description: 'Finish Module 1 and make the first leap from doing to delegating.', icon: 'M1', criteria: 'module-1' },
  { id: 'outcome-thinker', name: 'Map Maker', description: 'Finish Module 2 and learn what Codex needs before it starts moving.', icon: 'M2', criteria: 'module-2' },
  { id: 'mode-switcher', name: 'Surface Surfer', description: 'Finish Module 3 and know when the work belongs in code or on screen.', icon: 'M3', criteria: 'module-3' },
  { id: 'playbook-builder', name: 'Brief Boss', description: 'Finish Module 4 and write a handoff Codex can actually follow.', icon: 'M4', criteria: 'module-4' },
  { id: 'skill-spotter', name: 'Skill Scout', description: 'Finish Module 5 and spot repeatable work before it gets tedious.', icon: 'M5', criteria: 'module-5' },
  { id: 'context-curator', name: 'Context Captain', description: 'Finish Module 6 and keep the important details from floating away.', icon: 'M6', criteria: 'module-6' },
  { id: 'team-scaler', name: 'Team Multiplier', description: 'Finish Module 7 and turn one good workflow into a shared habit.', icon: 'M7', criteria: 'module-7' },
  { id: 'workflow-author', name: 'Workflow Wrapper', description: 'Finish Module 8 and package a useful routine for reuse.', icon: 'M8', criteria: 'module-8' },
  { id: 'super-app-mapper', name: 'Super App Cartographer', description: 'Finish Module 9 and see how the Codex surfaces fit together.', icon: 'M9', criteria: 'module-9' },
  { id: 'visual-operator', name: 'Screen Pilot', description: 'Finish Module 10 and choose the right visual tool for the job.', icon: 'M10', criteria: 'module-10' },
  { id: 'mobile-steerer', name: 'Pocket Pilot', description: 'Finish Module 11 and keep work moving when you leave the desk.', icon: 'M11', criteria: 'module-11' },
  { id: 'memory-keeper', name: 'Memory Gardener', description: 'Finish Module 12 and leave useful context behind for the next loop.', icon: 'M12', criteria: 'module-12' },
  { id: 'loop-runner', name: 'Loop Launcher', description: 'Finish Module 13 and give long-running work a real operating rhythm.', icon: 'M13', criteria: 'module-13' },
  { id: 'living-course-steward', name: 'Future-Proof Finisher', description: 'Finish Module 14 and know how to keep the system honest as Codex grows.', icon: 'M14', criteria: 'module-14' },
  { id: 'perfect-quiz', name: 'Clean Sweep', description: 'Get 100% on any quiz on the first try.', icon: '100', criteria: 'perfect-any' },
  { id: 'all-perfect', name: 'No-Guess Grandmaster', description: 'Get 100% on all quizzes on the first try.', icon: 'ALL', criteria: 'perfect-all' },
  { id: 'course-complete', name: 'Plain-English Pro', description: 'Complete every current module in the course.', icon: 'CERT', criteria: 'all-modules' },
  { id: 'streak-3', name: 'Three-Day Spark', description: 'Keep your learning streak alive for 3 days.', icon: 'D3', criteria: 'streak-3' },
  { id: 'streak-7', name: 'Seven-Day Streaksmith', description: 'Keep your learning streak alive for 7 days.', icon: 'D7', criteria: 'streak-7' },
  { id: 'speed-demon', name: 'Speedrun Scholar', description: 'Complete a module in under 10 minutes.', icon: 'FAST', criteria: 'speed' },
];

export function getBadgeById(id: string): Badge | undefined {
  return BADGES.find(b => b.id === id);
}
