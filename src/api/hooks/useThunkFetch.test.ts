import { renderHook } from '@testing-library/react';

import { useThunkFetch } from './useThunkFetch';

// mocks
type MockResponse = Response;
const mockResponse = [{ text: 'mockText', year: 1996 }];
const mockUrl = 'mockUrl';

// tests
describe('useThunkFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ mockResponse }),
      } as MockResponse),
    );

    const { result } = renderHook(useThunkFetch, { initialProps: { url: mockUrl } });

    await expect(result.current).resolves.toEqual({ mockResponse });
  });

  it('fetches data unsuccessfully', async () => {
    global.fetch = jest.fn(() => Promise.reject());

    const { result } = renderHook(useThunkFetch, { initialProps: { url: mockUrl } });

    await expect(result.current).rejects.toEqual(
      new Error(
        `Failed to fetch data from - https://api.wikimedia.org/feed/v1/wikipedia/en/${mockUrl}`,
      ),
    );
  });
});
