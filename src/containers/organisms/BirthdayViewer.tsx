import { useSelector } from 'react-redux';

import { Button } from '@/components/button/Button';
import { ButtonVariant } from '@/components/button/types';
import { Flex } from '@/components/flex/Flex';
import { classNames } from '@/components/utils/classNames';
import { selectBirthdaysState } from '@/store/birthdays/birthdaysSelectors';

import { useBirthdaysService } from '../hooks/useBirthdaysService';
import { BirthdaysTable } from '../molecules/BirthdaysTable';
import styles from './BirthdayViewer.module.css';

export const BirthdaysViewer = () => {
  const { fetchBirthdays, invalidFetchBirthdays } = useBirthdaysService();
  const { birthdays } = useSelector(selectBirthdaysState);

  return (
    <Flex
      className={classNames([styles['section']])}
      directionColumn
      centerHorizontally
      centerVertically
    >
      {/** TO DO - refactor this */}
      {birthdays && birthdays.length > 0 ? <BirthdaysTable birthdays={birthdays} /> : null}
      <Flex centerHorizontally centerVertically>
        <Button onClick={fetchBirthdays}>Get Birthdays</Button>
        <Button onClick={invalidFetchBirthdays} variant={ButtonVariant.Inline}>
          Try invalid request
        </Button>
      </Flex>
    </Flex>
  );
};
