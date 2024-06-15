import { getCurrentMonthAndDay } from './utils/dateHelper';

const { day, month } = getCurrentMonthAndDay();

export const API_DOMAIN = 'https://api.wikimedia.org/feed/v1/wikipedia/en';

export const GET_ALL_ONTHISDAY_DATA = `onthisday/all/${month}/${day}`;
