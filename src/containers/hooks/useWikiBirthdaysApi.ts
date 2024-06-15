import { useCallback, useEffect, useState } from 'react';

import { GET_ALL_ONTHISDAY_DATA } from '@/api/endpoints';
import { ApiStatus } from '@/api/types/apiTypes';
import { OnThisDay, OnThisDayGroup } from '@/api/types/wikiBirthdayTypes';

export const useWikiBirthdaysApi = () => {
  const [wikiBirthdays, setWikiBirthdays] = useState<OnThisDay[] | undefined>(undefined);
  // const { fetchData } = useFetch<OnThisDayGroup>({
  //   url: GET_ALL_ONTHISDAY_DATA,
  // });
  const [wikiBirthdaysRequestStatus, setWikiBirthdaysRequestStatus] = useState<ApiStatus>(
    ApiStatus.DEFAULT,
  );

  const fetchWikiBirthdays = useCallback(async () => {
    try {
      setWikiBirthdaysRequestStatus(ApiStatus.LOADING);
      await new Promise<void>((resolve, reject) => {
        const handleResolve = (data: OnThisDayGroup) => {
          const { births } = data;
          births?.sort((a, b) => b.year - a.year);

          setWikiBirthdays(births);
          setWikiBirthdaysRequestStatus(ApiStatus.SUCCESS);
          resolve();
        };

        // fetchData(handleResolve, reject);
      });
    } catch (e) {
      setWikiBirthdaysRequestStatus(ApiStatus.ERROR);
    }
  }, []);

  useEffect(() => {
    fetchWikiBirthdays();
  }, []);

  return {
    wikiBirthdays,
    wikiBirthdaysRequestStatus,
  };
};
