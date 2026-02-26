export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

export interface DepthLevel {
  level: number;
  title: string;
  xpRequired: number;
}

export const XP_REWARDS = {
  SECTION_READ: 5,
  QUIZ_CORRECT_FIRST_TRY: 15,
  QUIZ_CORRECT_RETRY: 5,
  MODULE_COMPLETE: 50,
  COURSE_COMPLETE: 200,
  DAILY_STREAK: 10,
} as const;
