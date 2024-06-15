import { Onthisday, OnthisdayResponse } from './swagger-types/swagger-types';

export type OnThisDay = {
  year: number;
} & Onthisday[number];

export type OnThisDayLegacy = Onthisday[number];

export type LegacyOnThisDayGroup = {
  [K in keyof Pick<OnthisdayResponse, 'holidays'>]: OnThisDayLegacy[];
};

export type ActiveOnThisDayGroup = {
  [K in keyof Omit<OnthisdayResponse, 'holidays'>]: OnThisDay[];
};

export type OnThisDayGroup = LegacyOnThisDayGroup & ActiveOnThisDayGroup;
