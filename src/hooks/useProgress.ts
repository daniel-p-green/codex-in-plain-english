import { useState, useCallback, useEffect } from 'react';
import type { CourseProgress, ModuleProgress } from '../types/progress';
import { createDefaultProgress, createDefaultModuleProgress } from '../types/progress';
import { XP_REWARDS } from '../types/gamification';
import { allModules } from '../data/modules';

const STORAGE_KEY = 'codex-in-plain-english-progress-v1';
const MODULE_BADGE_MAP: Record<string, string> = {
  'module-1': 'first-delegate',
  'module-2': 'outcome-thinker',
  'module-3': 'mode-switcher',
  'module-4': 'playbook-builder',
  'module-5': 'skill-spotter',
  'module-6': 'context-curator',
  'module-7': 'team-scaler',
  'module-8': 'workflow-author',
};
const MODULE_BADGE_IDS = new Set(Object.values(MODULE_BADGE_MAP));

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

function isSectionComplete(mod: ModuleProgress | undefined): boolean {
  if (!mod) return false;
  if (mod.totalSections <= 0) return false;
  return mod.sectionsRead.length >= mod.totalSections;
}

function addBadgeIfMissing(badges: string[], badgeId: string) {
  if (!badges.includes(badgeId)) badges.push(badgeId);
}

function normalizeProgressForSectionCompletion(prev: CourseProgress): CourseProgress {
  let changed = false;
  const normalizedModules = { ...prev.modules };
  const now = new Date().toISOString();

  for (const moduleData of allModules) {
    const existing = prev.modules[moduleData.id];
    if (!existing) continue;

    const expectedSections = moduleData.sections.length;
    const expectedQuestions = moduleData.quiz.length;
    let updated = existing;

    if (existing.totalSections !== expectedSections || existing.quiz.totalQuestions !== expectedQuestions) {
      updated = {
        ...updated,
        totalSections: expectedSections,
        quiz: {
          ...updated.quiz,
          totalQuestions: expectedQuestions,
        },
      };
      changed = true;
    }

    const shouldBeComplete = expectedSections > 0 && updated.sectionsRead.length >= expectedSections;
    const isComplete = updated.completedAt != null;
    if (shouldBeComplete !== isComplete) {
      updated = {
        ...updated,
        completedAt: shouldBeComplete ? updated.completedAt ?? now : null,
      };
      changed = true;
    }

    normalizedModules[moduleData.id] = updated;
  }

  const preservedBadges = prev.badges.filter(badge => !MODULE_BADGE_IDS.has(badge) && badge !== 'course-complete');
  const nextBadges = [...preservedBadges];

  for (const moduleData of allModules) {
    if (isSectionComplete(normalizedModules[moduleData.id])) {
      const moduleBadge = MODULE_BADGE_MAP[moduleData.id];
      if (moduleBadge) addBadgeIfMissing(nextBadges, moduleBadge);
    }
  }

  const allComplete = allModules.every(moduleData => isSectionComplete(normalizedModules[moduleData.id]));
  if (allComplete) addBadgeIfMissing(nextBadges, 'course-complete');

  const badgesChanged =
    nextBadges.length !== prev.badges.length || nextBadges.some((badge, idx) => prev.badges[idx] !== badge);

  if (!changed && !badgesChanged) return prev;
  return {
    ...prev,
    modules: normalizedModules,
    badges: nextBadges,
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

  const normalized = normalizeProgressForSectionCompletion(base);
  return applyDailyStreak(normalized);
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
      const moduleData = allModules.find(moduleItem => moduleItem.id === moduleId);
      if (!moduleData) return prev;
      if (!moduleData.sections.some(section => section.id === sectionId)) return prev;

      const defaults = getModuleDefaults(moduleId);
      const mod = prev.modules[moduleId] ?? createDefaultModuleProgress(defaults.sections, defaults.questions);

      if (mod.sectionsRead.includes(sectionId)) return prev;
      const now = new Date().toISOString();

      const updated: ModuleProgress = {
        ...mod,
        started: true,
        startedAt: mod.startedAt ?? now,
        sectionsRead: [...mod.sectionsRead, sectionId],
      };

      const newBadges = [...prev.badges];
      let xpGain = XP_REWARDS.SECTION_READ;

      const justCompletedModule = updated.totalSections > 0 && updated.sectionsRead.length >= updated.totalSections;
      if (justCompletedModule && updated.completedAt == null) {
        updated.completedAt = now;
        xpGain += XP_REWARDS.MODULE_COMPLETE;

        const moduleBadge = MODULE_BADGE_MAP[moduleId];
        if (moduleBadge) addBadgeIfMissing(newBadges, moduleBadge);

        if (updated.startedAt) {
          const elapsed = Date.now() - new Date(updated.startedAt).getTime();
          if (elapsed < 10 * 60 * 1000) addBadgeIfMissing(newBadges, 'speed-demon');
        }
      }

      const updatedModules = { ...prev.modules, [moduleId]: updated };
      const allModulesComplete = allModules.every(moduleItem => isSectionComplete(updatedModules[moduleItem.id]));
      if (allModulesComplete && !newBadges.includes('course-complete')) {
        addBadgeIfMissing(newBadges, 'course-complete');
        xpGain += XP_REWARDS.COURSE_COMPLETE;
      }

      return {
        ...prev,
        xp: prev.xp + xpGain,
        lastActiveAt: now,
        modules: updatedModules,
        badges: newBadges,
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
        const modProgress = prev.modules[moduleId] ?? createDefaultModuleProgress(defaults.sections, defaults.questions);

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
        const newBadges = [...prev.badges];

        if (allCorrect && !wasAlreadyComplete) {
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

        return {
          ...prev,
          xp: prev.xp + xpGain,
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
    (moduleId: string): boolean => isSectionComplete(progress.modules[moduleId]),
    [progress.modules]
  );

  const isModuleUnlocked = useCallback(
    (moduleId: string): boolean => allModules.some(moduleItem => moduleItem.id === moduleId),
    []
  );

  const getOverallPercent = useCallback((): number => {
    const completed = allModules.filter(moduleItem => isSectionComplete(progress.modules[moduleItem.id])).length;
    return Math.round((completed / allModules.length) * 100);
  }, [progress.modules]);

  const getModulePercent = useCallback(
    (moduleId: string): number => {
      const mod = progress.modules[moduleId];
      if (!mod) return 0;
      const sectionPct = mod.totalSections > 0 ? mod.sectionsRead.length / mod.totalSections : 0;
      return Math.round(sectionPct * 100);
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
