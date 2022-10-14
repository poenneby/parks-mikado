import { currentYear } from '@parks/utils';
import { Year } from './types';

export function getNextYear(): Year {
  return currentYear() + 1;
}
