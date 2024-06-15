import { RootState } from '@/store';

import { BirthdaysState } from './birthdaysSlice';

export const selectBirthdaysState = (state: RootState): BirthdaysState => state.birthdays;
