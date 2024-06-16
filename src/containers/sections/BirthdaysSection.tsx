import { STATUS_ERROR, STATUS_STANDBY } from '../constants/overlayTexts';
import { useBirthdaysRequestStatus } from '../hooks/useBirthdaysRequestStatus';
import { EmptyTable } from '../molecules/EmptyTable/EmptyTable';
import { BirthdaysViewer } from '../organisms/BirthdaysViewer';

export const BirthdaysSection = () => {
  const { isError, isLoading, isSuccess, birthdays } = useBirthdaysRequestStatus();

  if (isLoading) {
    return <EmptyTable />;
  }

  if (isSuccess) {
    return <BirthdaysViewer birthdays={birthdays} />;
  }

  if (isError) {
    return <EmptyTable overlayText={STATUS_ERROR} isError={Boolean(isError)} />;
  }

  return <EmptyTable overlayText={STATUS_STANDBY} />;
};
