import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GET_ALL_ONTHISDAY_DATA } from '@/api/endpoints';
import { useThunkFetch } from '@/api/hooks/useThunkFetch';
import { ApiStatus } from '@/api/types/apiTypes';
import { OnThisDay, OnThisDayGroup } from '@/api/types/wikiBirthdayTypes';

const FETCH_BIRTHDAYS_PREFIX = 'birthdays/fetchBirthdays';
const INVALID_FETCH_BIRTHDAYS_PREFIX = 'birthdays/invalidFetchBirthdays';

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBirthdays.pending, (state) => {
      state.birthdaysRequestStatus = ApiStatus.LOADING;
    });
    builder.addCase(fetchBirthdays.fulfilled, (state, action) => {
      state.birthdaysRequestStatus = ApiStatus.SUCCESS;
      state.birthdays = action.payload;
    });
    builder.addCase(fetchBirthdays.rejected, (state) => {
      state.birthdaysRequestStatus = ApiStatus.ERROR;
      state.birthdays = undefined;
    });
    builder.addCase(invalidFetchBirthdays.pending, (state) => {
      state.birthdaysRequestStatus = ApiStatus.LOADING;
    });
    builder.addCase(invalidFetchBirthdays.fulfilled, (state, action) => {
      state.birthdaysRequestStatus = ApiStatus.SUCCESS;
      state.birthdays = action.payload;
    });
    builder.addCase(invalidFetchBirthdays.rejected, (state) => {
      state.birthdaysRequestStatus = ApiStatus.ERROR;
      state.birthdays = undefined;
    });
  },
});

export const fetchBirthdays = createAsyncThunk<OnThisDay[] | undefined>(
  FETCH_BIRTHDAYS_PREFIX,
  async () => {
    const data = await useThunkFetch<OnThisDayGroup>({
      url: GET_ALL_ONTHISDAY_DATA,
    });

    const { births } = data;

    births?.sort((a, b) => b.year - a.year);

    return births;
  },
);

export const invalidFetchBirthdays = createAsyncThunk<OnThisDay[] | undefined>(
  INVALID_FETCH_BIRTHDAYS_PREFIX,
  async () => {
    const data = await useThunkFetch<OnThisDayGroup>({
      url: `${GET_ALL_ONTHISDAY_DATA}/invalid`,
    });

    const { births } = data;

    births?.sort((a, b) => b.year - a.year);

    return births;
  },
);

export default birthdaysSlice.reducer;
