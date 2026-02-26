import { useState, useCallback, useEffect } from 'react';
import type { CourseProgress, ModuleProgress } from '../types/progress';
import { createDefaultProgress, createDefaultModuleProgress } from '../types/progress';
import { XP_REWARDS } from '../types/gamification';
import { allModules } from '../data/modules';

const STORAGE_KEY = 'codex-in-plain-english-progress-v1';

function applyDailyStreak(prev: CourseProgress): CourseProgress {
  const today = new Date().toISOString().split('T')[0];
  if (prev.streak.lastActiveDate === today) return prev;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  let newStreak = 1;
  if (prev.streak.lastActiveDate === yesterdayStr) {
    newStreak = prev.streak.current + 1;
  }

  const newBadges = [...prev.badges];
  if (newStreak >= 3 && !newBadges.includes('streak-3')) newBadges.push('streak-3');
  if (newStreak >= 7 && !newBadges.includes('streak-7')) newBadges.push('streak-7');

  return {
    ...prev,
    xp: prev.xp + XP_REWARDS.DAILY_STREAK,
    lastActiveAt: new Date().toISOString(),
    streak: {
      current: newStreak,
      lastActiveDate: today,
      longest: Math.max(prev.streak.longest, newStreak),
    },
    badges: newBadges,
  };
}

function loadProgress(): CourseProgress {
  let base = createDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CourseProgress;
      if (parsed.version === 1) {
        base = parsed;
      }
    }
  } catch {
    // Ignore malformed persisted data and reset to defaults.
  }

  return applyDailyStreak(base);
}

function saveProgress(progress: CourseProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getModuleDefaults(moduleId: string): { sections: number; questions: number } {
  const mod = allModules.find(m => m.id === moduleId);
  return {
    sections: mod?.sections.length ?? 0,
    questions: mod?.quiz.length ?? 0,
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<CourseProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getModuleProgress = useCallback(
    (moduleId: string): ModuleProgress => {
      if (progress.modules[moduleId]) return progress.modules[moduleId];
      const defaults = getModuleDefaults(moduleId);
      return createDefaultModuleProgress(defaults.sections, defaults.questions);
    },
    [progress.modules]
  );

  const markSectionRead = useCallback((moduleId: string, sectionId: string) => {
    setProgress(prev => {
      const defaults = getModuleDefaults(moduleId);
      const mod =
        prev.modules[moduleId] ?? createDefaultModuleProgress(defaults.sections, defaults.questions);

      if (mod.sectionsRead.includes(sectionId)) return prev;

      const updated: ModuleProgress = {
        ...mod,
        started: true,
        startedAt: mod.startedAt ?? new Date().toISOString(),
        sectionsRead: [...mod.sectionsRead, sectionId],
      };

      return {
        ...prev,
        xp: prev.xp + XP_REWARDS.SECTION_READ,
        lastActiveAt: new Date().toISOString(),
        modules: { ...prev.modules, [moduleId]: updated },
      };
    });
  }, []);

  const submitQuizAnswer = useCallback(
    (moduleId: string, questionId: string, answer: string): { correct: boolean } => {
      const moduleData = allModules.find(m => m.id === moduleId);
      if (!moduleData) return { correct: false };
      const question = moduleData.quiz.find(q => q.id === questionId);
      if (!question) return { correct: false };

      const correct = question.correctAnswer === answer;

      setProgress(prev => {
        const defaults = getModuleDefaults(moduleId);
        const modProgress =
          prev.modules[moduleId] ?? createDefaultModuleProgress(defaults.sections, defaults.questions);

        const prevResult = modProgress.quiz.questionResults[questionId];
        const attemptNum = (prevResult?.attempts ?? 0) + 1;
        const isFirstTry = attemptNum === 1;

        const xpGain = correct
          ? isFirstTry
            ? XP_REWARDS.QUIZ_CORRECT_FIRST_TRY
            : XP_REWARDS.QUIZ_CORRECT_RETRY
          : 0;

        const newResults = {
          ...modProgress.quiz.questionResults,
          [questionId]: {
            correct: correct || (prevResult?.correct ?? false),
            selectedAnswer: answer,
            attempts: attemptNum,
          },
        };

        const allCorrect = moduleData.quiz.every(q => newResults[q.id]?.correct);
        const score = Object.values(newResults).filter(r => r.correct).length;
        const wasAlreadyComplete = modProgress.quiz.completed;

        let moduleCompletionXP = 0;
        const newBadges = [...prev.badges];
        let completedAt = modProgress.completedAt;

        const allSectionsRead = modProgress.sectionsRead.length >= modProgress.totalSections;

        if (allCorrect && !wasAlreadyComplete) {
          if (allSectionsRead) {
            moduleCompletionXP = XP_REWARDS.MODULE_COMPLETE;
            completedAt = new Date().toISOString();

            const moduleBadgeMap: Record<string, string> = {
              'module-1': 'first-delegate',
              'module-2': 'outcome-thinker',
              'module-3': 'mode-switcher',
              'module-4': 'playbook-builder',
              'module-5': 'skill-spotter',
              'module-6': 'context-curator',
              'module-7': 'team-scaler',
              'module-8': 'workflow-author',
            };
            const badge = moduleBadgeMap[moduleId];
            if (badge && !newBadges.includes(badge)) newBadges.push(badge);

            if (modProgress.startedAt) {
              const elapsed = Date.now() - new Date(modProgress.startedAt).getTime();
              if (elapsed < 10 * 60 * 1000 && !newBadges.includes('speed-demon')) {
                newBadges.push('speed-demon');
              }
            }
          }

          const allFirstTry = moduleData.quiz.every(q => {
            const result = newResults[q.id];
            return result?.correct && result.attempts === 1;
          });
          if (allFirstTry && !newBadges.includes('perfect-quiz')) {
            newBadges.push('perfect-quiz');
          }
        }

        const updatedModules = {
          ...prev.modules,
          [moduleId]: {
            ...modProgress,
            completedAt,
            quiz: {
              ...modProgress.quiz,
              completed: allCorrect,
              score,
              attempts: modProgress.quiz.attempts + 1,
              bestScore: Math.max(modProgress.quiz.bestScore, score),
              questionResults: newResults,
            },
          },
        };

        const allModulesComplete = allModules.every(moduleItem => {
          const moduleProgress = updatedModules[moduleItem.id];
          return moduleProgress?.completedAt != null;
        });

        if (allModulesComplete && !newBadges.includes('course-complete')) {
          newBadges.push('course-complete');
          moduleCompletionXP += XP_REWARDS.COURSE_COMPLETE;

          const allPerfect = allModules.every(moduleItem => {
            const moduleProgress = updatedModules[moduleItem.id];
            return moduleItem.quiz.every(q => {
              const result = moduleProgress?.quiz.questionResults[q.id];
              return result?.correct && result.attempts === 1;
            });
          });
          if (allPerfect && !newBadges.includes('all-perfect')) {
            newBadges.push('all-perfect');
          }
        }

        return {
          ...prev,
          xp: prev.xp + xpGain + moduleCompletionXP,
          lastActiveAt: new Date().toISOString(),
          modules: updatedModules,
          badges: newBadges,
          quizHistory: [
            ...prev.quizHistory.slice(-199),
            {
              moduleId,
              questionId,
              selectedAnswer: answer,
              correct,
              timestamp: new Date().toISOString(),
              attemptNumber: attemptNum,
            },
          ],
        };
      });

      return { correct };
    },
    []
  );

  const isModuleComplete = useCallback(
    (moduleId: string): boolean => progress.modules[moduleId]?.completedAt != null,
    [progress.modules]
  );

  const isModuleUnlocked = useCallback(
    (moduleId: string): boolean => {
      const num = Number.parseInt(moduleId.replace('module-', ''), 10);
      if (num === 1) return true;
      const prevId = `module-${num - 1}`;
      return progress.modules[prevId]?.quiz.completed === true;
    },
    [progress.modules]
  );

  const getOverallPercent = useCallback((): number => {
    const completed = allModules.filter(moduleItem => progress.modules[moduleItem.id]?.completedAt != null)
      .length;
    return Math.round((completed / allModules.length) * 100);
  }, [progress.modules]);

  const getModulePercent = useCallback(
    (moduleId: string): number => {
      const mod = progress.modules[moduleId];
      if (!mod) return 0;
      const sectionPct = mod.totalSections > 0 ? mod.sectionsRead.length / mod.totalSections : 0;
      const quizPct = mod.quiz.completed ? 1 : 0;
      return Math.round((sectionPct * 0.7 + quizPct * 0.3) * 100);
    },
    [progress.modules]
  );

  const hasBadge = useCallback((badgeId: string): boolean => progress.badges.includes(badgeId), [progress.badges]);

  const resetProgress = useCallback(() => {
    const fresh = createDefaultProgress();
    setProgress(applyDailyStreak(fresh));
  }, []);

  return {
    progress,
    getModuleProgress,
    markSectionRead,
    submitQuizAnswer,
    isModuleComplete,
    isModuleUnlocked,
    getOverallPercent,
    getModulePercent,
    hasBadge,
    resetProgress,
  };
}
