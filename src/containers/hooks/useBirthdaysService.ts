import { useSelector } from 'react-redux';

import { selectBirthdaysState } from '@/store/birthdays/birthdaysSelectors';
import {
  fetchBirthdays as fetchBirthdaysAction,
  invalidFetchBirthdays as invalidFetchBirthdaysAction,
} from '@/store/birthdays/birthdaysSlice';
import { useReduxDispatch } from '@/store/hooks/useReduxDispatch';

export const useBirthdaysService = () => {
  const dispatch = useReduxDispatch();
  const { birthdaysRequestStatus } = useSelector(selectBirthdaysState);

  const fetchBirthdays = () => {
    dispatch(fetchBirthdaysAction());
  };

  const invalidFetchBirthdays = () => {
    dispatch(invalidFetchBirthdaysAction());
  };

  return {
    fetchBirthdays,
    invalidFetchBirthdays,
    birthdaysRequestStatus,
  };
};
