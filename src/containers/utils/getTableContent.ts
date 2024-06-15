import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

export const getTableHeadersData = (birthdays: OnThisDay[]) => {
  return Object.keys(birthdays[0]).map((birthdayKey) => birthdayKey.toLocaleUpperCase());
};
