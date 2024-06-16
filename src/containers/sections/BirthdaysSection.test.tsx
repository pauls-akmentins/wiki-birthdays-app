import { RootState } from '@/store';
import { screen } from '@testing-library/react';

import { ApiStatus } from '@/api/types/apiTypes';
import { OnThisDayGroup } from '@/api/types/wikiBirthdayTypes';
import { reduxRenderWithStore } from '@/store/utils/storeTestUtils';

import { STATUS_ERROR, STATUS_STANDBY, STATUS_SUCCESS_NO_DATA } from '../constants/overlayTexts';
import { TEXT_COLUMN_NAME } from '../utils/getTableContent';
import { BirthdaysSection } from './BirthdaysSection';

// mocks
jest.mock('@/store/hooks/useReduxDispatch', () => ({
  useReduxDispatch: jest.fn(),
}));

const mockResponse: OnThisDayGroup = { births: [{ text: 'mockText', year: 1996 }] };

const mockInitialStoreState: Partial<RootState> = {
  birthdays: {
    birthdays: undefined,
    birthdaysRequestStatus: ApiStatus.DEFAULT,
  },
};

const mockFetchedStoreState: Partial<RootState> = {
  birthdays: {
    birthdays: mockResponse.births,
    birthdaysRequestStatus: ApiStatus.SUCCESS,
  },
};

const mockFetchedNoDataStoreState: Partial<RootState> = {
  birthdays: {
    birthdays: undefined,
    birthdaysRequestStatus: ApiStatus.SUCCESS,
  },
};

const mockErrorStoreState: Partial<RootState> = {
  birthdays: {
    birthdays: undefined,
    birthdaysRequestStatus: ApiStatus.ERROR,
  },
};

// tests
describe('BirthdaysSection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render initial page', () => {
    reduxRenderWithStore(<BirthdaysSection />, { initialState: mockInitialStoreState });
    const section = screen.getByText(STATUS_STANDBY);

    expect(section).toBeInTheDocument();
  });

  it('should render successful table view with data', () => {
    reduxRenderWithStore(<BirthdaysSection />, { initialState: mockFetchedStoreState });

    const tableNameKnownForCell = screen.getByText(mockResponse.births?.[0].text || '');
    const tableNameKnownForHeader = screen.getByText(TEXT_COLUMN_NAME.toLocaleUpperCase());
    const tableYearHeader = screen.getByText('YEAR');
    const tableYearCell = screen.getByText(mockResponse.births?.[0].year || '');

    expect(tableNameKnownForCell).toBeInTheDocument();
    expect(tableYearCell).toBeInTheDocument();
    expect(tableNameKnownForHeader).toBeInTheDocument();
    expect(tableYearHeader).toBeInTheDocument();
  });

  it('should render error overlay', () => {
    reduxRenderWithStore(<BirthdaysSection />, { initialState: mockErrorStoreState });
    const section = screen.getByText(STATUS_ERROR);

    expect(section).toBeInTheDocument();
  });

  it('should render custom overlay when request was successful, but no data was returned', () => {
    reduxRenderWithStore(<BirthdaysSection />, { initialState: mockFetchedNoDataStoreState });
    const section = screen.getByText(STATUS_SUCCESS_NO_DATA);

    expect(section).toBeInTheDocument();
  });
});
