import { createContext } from 'react';
import type { useProgress } from '../hooks/useProgress';

export type ProgressContextType = ReturnType<typeof useProgress>;

export const ProgressContext = createContext<ProgressContextType | null>(null);
