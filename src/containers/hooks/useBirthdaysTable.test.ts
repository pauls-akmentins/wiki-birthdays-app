import { act, renderHook } from '@testing-library/react';

import { TEXT_COLUMN_NAME } from '../utils/getTableContent';
import { ITEMS_PER_PAGE, useBirthdaysTable } from './useBirthdaysTable';

// mocks
const mockBirthdays = [
  {
    text: 'mockText',
    year: 1990,
  },
];

// tests
describe('useBirthdaysTable', () => {
  it('returns correct payload', () => {
    const { result } = renderHook(useBirthdaysTable, {
      initialProps: { birthdays: mockBirthdays },
    });

    const { page, emptyRowsFiller, tableHeadersData, paginatedTableBodyData } = result.current;

    expect(page).toBe(0);
    expect(tableHeadersData).toEqual([TEXT_COLUMN_NAME.toLocaleUpperCase(), 'YEAR']);
    expect(emptyRowsFiller).toBe(ITEMS_PER_PAGE - mockBirthdays.length);
    expect(paginatedTableBodyData).toEqual([
      {
        [TEXT_COLUMN_NAME]: mockBirthdays[0].text,
        year: mockBirthdays[0].year,
      },
    ]);
  });
  it('returns working page navigation handlers', () => {
    const { result } = renderHook(useBirthdaysTable, {
      initialProps: { birthdays: mockBirthdays },
    });

    expect(result.current.page).toBe(0);

    act(() => result.current.nextPage());

    expect(result.current.page).toBe(1);

    act(() => result.current.nextPage());

    expect(result.current.page).toBe(2);

    act(() => result.current.previousPage());

    expect(result.current.page).toBe(1);
  });
});
