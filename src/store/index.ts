import { combineReducers, configureStore } from '@reduxjs/toolkit';

import birthdaysReducer from './birthdays/birthdaysSlice';

export const rootReducer = combineReducers({
  birthdays: birthdaysReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
