import { OnThisDay } from '@/api/types/wikiBirthdayTypes';

import { getTableBodyData, getTableHeadersData, TEXT_COLUMN_NAME } from './getTableContent';

// mocks
const exampleBirthdays: OnThisDay[] = [
  { text: 'John Doe, Actor', year: 1980 },
  { text: 'Jane Smith, Scientist', year: 1990 },
];

// tests
describe('getTableHeadersData', () => {
  it('returns table headers in uppercase', () => {
    const headers = getTableHeadersData(exampleBirthdays);
    expect(headers).toEqual([TEXT_COLUMN_NAME.toLocaleUpperCase(), 'YEAR']);
  });
});

describe('getTableBodyData', () => {
  it('returns displayable data with TEXT_COLUMN_NAME key', () => {
    const bodyData = getTableBodyData(exampleBirthdays);
    expect(bodyData).toEqual([
      { [TEXT_COLUMN_NAME]: 'John Doe, Actor', year: 1980 },
      { [TEXT_COLUMN_NAME]: 'Jane Smith, Scientist', year: 1990 },
    ]);
  });
});
