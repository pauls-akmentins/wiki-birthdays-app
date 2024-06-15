import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GET_ALL_ONTHISDAY_DATA } from '@/api/endpoints';
import { ApiStatus } from '@/api/types/apiTypes';
import { OnThisDay, OnThisDayGroup } from '@/api/types/wikiBirthdayTypes';

export interface BirthdaysState {
  birthdays: OnThisDay[] | undefined;
  birthdaysRequestStatus: ApiStatus;
}

const initialState: BirthdaysState = {
  birthdays: undefined,
  birthdaysRequestStatus: ApiStatus.DEFAULT,
};

export const birthdaysSlice = createSlice({
  name: 'birthdays',
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  // const { fetchData } = useFetch<OnThisDayGroup>({
  //   url: GET_ALL_ONTHISDAY_DATA,
  // });

  try {
    // set loading state

    await new Promise<void>((resolve, reject) => {
      const handleResolve = (data: OnThisDayGroup) => {
        const { births } = data;
        births?.sort((a, b) => b.year - a.year);

        resolve();

        return {
          births,
          // set success state
        };
      };

      // fetchData(handleResolve, reject);
    });
  } catch (e) {
    // set error state
  }
});

export const { increment } = birthdaysSlice.actions;

export default birthdaysSlice.reducer;
