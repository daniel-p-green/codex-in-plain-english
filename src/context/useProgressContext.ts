import { useContext } from 'react';
import { ProgressContext, type ProgressContextType } from './progress-context';

export function useProgressContext(): ProgressContextType {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgressContext must be used within ProgressProvider');
  }
  return ctx;
}
