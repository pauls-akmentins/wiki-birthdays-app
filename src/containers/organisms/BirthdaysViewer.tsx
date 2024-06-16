import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

import { STATUS_SUCCESS_NO_DATA } from '../constants/overlayTexts';
import { BirthdaysTable } from '../molecules/BirthdayTable/BirthdaysTable';
import { EmptyTable } from '../molecules/EmptyTable/EmptyTable';

interface Props {
  birthdays?: OnThisDay[];
}

export const BirthdaysViewer = ({ birthdays }: Props) =>
  birthdays && birthdays.length > 0 ? (
    <BirthdaysTable birthdays={birthdays} />
  ) : (
    <EmptyTable overlayText={STATUS_SUCCESS_NO_DATA} />
  );
