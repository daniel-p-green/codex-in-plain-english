import type { ModuleData } from '../../types/course';
import { module1 } from './module-1';
import { module2 } from './module-2';
import { module3 } from './module-3';
import { module4 } from './module-4';
import { module5 } from './module-5';
import { module6 } from './module-6';
import { module7 } from './module-7';
import { module8 } from './module-8';
import { module9 } from './module-9';
import { module10 } from './module-10';
import { module11 } from './module-11';
import { module12 } from './module-12';
import { module13 } from './module-13';
import { module14 } from './module-14';

export const CORE_MODULE_COUNT = 8;
export const EXPANDED_MODULE_START = 9;

export const allModules: ModuleData[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12,
  module13,
  module14,
];

export const COURSE_TOTAL_MODULES = allModules.length;
