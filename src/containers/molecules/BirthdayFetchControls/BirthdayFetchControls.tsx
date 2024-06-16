import { useBirthdaysService } from '@/containers/hooks/useBirthdaysService';

import { ApiStatus } from '@/api/types/apiTypes';
import { Button } from '@/components/button/Button';
import { ButtonVariant } from '@/components/button/types';
import { Flex } from '@/components/flex/Flex';

export const BirthdayFetchControls = () => {
  const { fetchBirthdays, invalidFetchBirthdays, birthdaysRequestStatus } = useBirthdaysService();

  return (
    <Flex centerHorizontally centerVertically>
      <Button onClick={fetchBirthdays} disabled={birthdaysRequestStatus === ApiStatus.LOADING}>
        Get Birthdays
      </Button>
      <Button
        onClick={invalidFetchBirthdays}
        disabled={birthdaysRequestStatus === ApiStatus.LOADING}
        variant={ButtonVariant.Inline}
      >
        Try invalid request
      </Button>
    </Flex>
  );
};
