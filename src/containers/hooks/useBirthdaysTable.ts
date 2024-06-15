import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

import { getTableHeadersData } from '../utils/getTableContent';

interface Props {
  birthdays: OnThisDay[];
}

export const useBirthdaysTable = ({ birthdays }: Props) => {
  const tableHeadersData = getTableHeadersData(birthdays);

  return {
    tableHeadersData,
  };
};
