import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

/**
 * The "text" key could be split, which I did initially, so that the displayed
 * data is more readable (Name | Known for | Year), but unfortunately, the "text"
 * key is not always follow same pattern, which makes it inconsistent to split,
 * by using some common delimiters like comma, which can vary from one data to another.
 */
export const TEXT_COLUMN_NAME = 'Name, Known for';

const getBirthdaysDisplayableData = (birthdays: OnThisDay[]) =>
  birthdays.map(({ text, year }) => ({ [TEXT_COLUMN_NAME]: text, year }));

export const getTableHeadersData = (birthdays: OnThisDay[]) => {
  return Object.keys(getBirthdaysDisplayableData(birthdays)[0]).map((birthdayKey) =>
    birthdayKey.toLocaleUpperCase(),
  );
};

export const getTableBodyData = (birthdays: OnThisDay[]) => {
  return getBirthdaysDisplayableData(birthdays);
};
