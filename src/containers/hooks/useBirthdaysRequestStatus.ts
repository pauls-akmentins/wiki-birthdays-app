import { useSelector } from 'react-redux';

import { ApiStatus } from '@/api/types/apiTypes';
import { selectBirthdaysState } from '@/store/birthdays/birthdaysSelectors';

export const useBirthdaysRequestStatus = () => {
  const { birthdaysRequestStatus, birthdays } = useSelector(selectBirthdaysState);

  const isLoading = birthdaysRequestStatus === ApiStatus.LOADING;
  const isSuccess = birthdaysRequestStatus === ApiStatus.SUCCESS;
  const isError = birthdaysRequestStatus === ApiStatus.ERROR;

  return {
    birthdays,
    isLoading,
    isSuccess,
    isError,
  };
};
