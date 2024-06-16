import { RootState } from '@/store';

import { useThunkFetch as mockUseThunkFetch } from '@/api/hooks/useThunkFetch';
import { ApiStatus } from '@/api/types/apiTypes';
import { OnThisDayGroup } from '@/api/types/wikiBirthdayTypes';
import { testStoreInit } from '@/store/utils/storeTestUtils';

import { fetchBirthdays, invalidFetchBirthdays } from '../birthdaysSlice';

jest.mock('@/api/hooks/useThunkFetch', () => ({
  useThunkFetch: jest.fn(),
}));

const mockResponse: OnThisDayGroup = { births: [{ text: 'mockText', year: 1996 }] };

const mockInitialStoreState: Partial<RootState> = {
  birthdays: {
    birthdays: undefined,
    birthdaysRequestStatus: ApiStatus.DEFAULT,
  },
};

const mockedStore = testStoreInit({ preloadedState: mockInitialStoreState });

// tests
describe('birthdaysSlice', () => {
  it('should have correct initial state', () => {
    const {
      birthdays: { birthdays, birthdaysRequestStatus },
    } = mockedStore.getState();

    expect(birthdays).toBeUndefined();
    expect(birthdaysRequestStatus).toBe(ApiStatus.DEFAULT);
  });
  it('should invoke fetchBirthdays thunk and update store on fulfilled', async () => {
    (mockUseThunkFetch as unknown as jest.Mock).mockResolvedValue(mockResponse);

    await mockedStore.dispatch(fetchBirthdays());

    const {
      birthdays: { birthdays, birthdaysRequestStatus },
    } = mockedStore.getState();

    expect(mockUseThunkFetch).toHaveBeenCalledTimes(1);
    expect(birthdaysRequestStatus).toBe(ApiStatus.SUCCESS);
    expect(birthdays).toEqual(mockResponse.births);
  });

  it('should invoke fetchBirthdays thunk and update store on rejected', async () => {
    (mockUseThunkFetch as unknown as jest.Mock).mockRejectedValue(new Error('mockError'));

    await mockedStore.dispatch(fetchBirthdays());

    const {
      birthdays: { birthdays, birthdaysRequestStatus },
    } = mockedStore.getState();

    expect(mockUseThunkFetch).toHaveBeenCalledTimes(1);
    expect(birthdaysRequestStatus).toBe(ApiStatus.ERROR);
    expect(birthdays).toBeUndefined();
  });

  it('should invoke fetchBirthdays and have loading state', async () => {
    (mockUseThunkFetch as unknown as jest.Mock).mockResolvedValue(mockResponse);
    const fetchPromise = mockedStore.dispatch(fetchBirthdays());

    const {
      birthdays: { birthdaysRequestStatus },
    } = mockedStore.getState();

    expect(birthdaysRequestStatus).toBe(ApiStatus.LOADING);

    await fetchPromise;

    const {
      birthdays: { birthdaysRequestStatus: finalStatus },
    } = mockedStore.getState();

    expect(finalStatus).toBe(ApiStatus.SUCCESS);
  });

  /**
   * Not the best test, since it does not make actual invalid API call,
   * but it is good enough for testing the store updates, which is the important
   * part of this test suite.
   **/
  it('should invoke invalidFetchBirthdays thunk and update store on rejected', async () => {
    (mockUseThunkFetch as unknown as jest.Mock).mockRejectedValue(new Error('mockError'));

    await mockedStore.dispatch(invalidFetchBirthdays());

    const {
      birthdays: { birthdays, birthdaysRequestStatus },
    } = mockedStore.getState();

    expect(mockUseThunkFetch).toHaveBeenCalledTimes(1);
    expect(birthdaysRequestStatus).toBe(ApiStatus.ERROR);
    expect(birthdays).toBeUndefined();
  });
});
