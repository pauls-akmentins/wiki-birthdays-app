import { useSelector as mockUseSelector } from 'react-redux';
import { renderHook } from '@testing-library/react';

import { useReduxDispatch as mockUseReduxDispatch } from '@/store/hooks/useReduxDispatch';

import { useBirthdaysService } from './useBirthdaysService';

// mocks
const mockDispatch = jest.fn();

jest.mock('@/store/birthdays/birthdaysSlice', () => ({
  fetchBirthdays: jest.fn(),
  invalidFetchBirthdays: jest.fn(),
}));

jest.mock('@/store/hooks/useReduxDispatch', () => ({
  useReduxDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// tests
describe('useBirthdaysService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (mockUseSelector as unknown as jest.Mock).mockImplementation(() => ({
      birthdaysRequestStatus: 'mockStatus',
    }));
  });

  it('fetchBirthdays dispatches action correctly', () => {
    (mockUseReduxDispatch as jest.Mock).mockReturnValue(mockDispatch);
    const { result } = renderHook(useBirthdaysService);

    result.current.fetchBirthdays();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it('invalidFetchBirthdays dispatches action correctly', () => {
    (mockUseReduxDispatch as jest.Mock).mockReturnValue(mockDispatch);
    const { result } = renderHook(useBirthdaysService);

    result.current.invalidFetchBirthdays();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
