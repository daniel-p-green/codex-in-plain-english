import type { ReactNode } from 'react';
import { useProgress } from '../hooks/useProgress';
import { ProgressContext } from './progress-context';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const progress = useProgress();
  return <ProgressContext.Provider value={progress}>{children}</ProgressContext.Provider>;
}
