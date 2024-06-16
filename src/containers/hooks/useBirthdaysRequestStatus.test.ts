import { useSelector as mockUseSelector } from 'react-redux';
import { renderHook } from '@testing-library/react';

import { ApiStatus } from '@/api/types/apiTypes';

import { useBirthdaysRequestStatus } from './useBirthdaysRequestStatus';

// mocks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockState = {
  birthdaysRequestStatus: ApiStatus.LOADING,
  birthdays: [{ text: 'mockText', year: 1990 }],
};

// tests
describe('useBirthdaysRequestStatus', () => {
  it('returns isLoading as true and rest as false', () => {
    (mockUseSelector as unknown as jest.Mock).mockImplementationOnce(() => mockState);
    const { result } = renderHook(useBirthdaysRequestStatus);

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it('returns birthdays', () => {
    (mockUseSelector as unknown as jest.Mock).mockImplementationOnce(() => mockState);
    const { result } = renderHook(useBirthdaysRequestStatus);

    expect(result.current.birthdays).toEqual(mockState.birthdays);
  });
});
