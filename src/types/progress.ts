export interface CourseProgress {
  version: 1;
  startedAt: string;
  lastActiveAt: string;
  currentModule: number;
  xp: number;
  streak: {
    current: number;
    lastActiveDate: string;
    longest: number;
  };
  modules: Record<string, ModuleProgress>;
  badges: string[];
  quizHistory: QuizAttempt[];
}

export interface ModuleProgress {
  started: boolean;
  startedAt: string | null;
  completedAt: string | null;
  sectionsRead: string[];
  totalSections: number;
  quiz: {
    completed: boolean;
    score: number;
    totalQuestions: number;
    attempts: number;
    bestScore: number;
    questionResults: Record<string, QuestionResult>;
  };
}

export interface QuestionResult {
  correct: boolean;
  selectedAnswer: string;
  attempts: number;
}

export interface QuizAttempt {
  moduleId: string;
  questionId: string;
  selectedAnswer: string;
  correct: boolean;
  timestamp: string;
  attemptNumber: number;
}

export function createDefaultProgress(): CourseProgress {
  return {
    version: 1,
    startedAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
    currentModule: 1,
    xp: 0,
    streak: {
      current: 0,
      lastActiveDate: '',
      longest: 0,
    },
    modules: {},
    badges: [],
    quizHistory: [],
  };
}

export function createDefaultModuleProgress(totalSections: number, totalQuestions: number): ModuleProgress {
  return {
    started: false,
    startedAt: null,
    completedAt: null,
    sectionsRead: [],
    totalSections,
    quiz: {
      completed: false,
      score: 0,
      totalQuestions,
      attempts: 0,
      bestScore: 0,
      questionResults: {},
    },
  };
}
