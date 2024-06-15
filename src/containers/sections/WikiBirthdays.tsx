import { Flex } from '@/components/flex/Flex';
import { classNames } from '@/components/utils/classNames';

import { useWikiBirthdaysApi } from '../hooks/useWikiBirthdaysApi';
import { WikiBirthdaysTable } from '../molecules/WikiBirthdaysTable/WikiBirthdaysTable';
import styles from './WikiBirthdays.module.css';

export const WikiBirthdays = () => {
  const { wikiBirthdays } = useWikiBirthdaysApi();

  return (
    <Flex className={classNames([styles['section']])} centerHorizontally centerVertically>
      <WikiBirthdaysTable />
    </Flex>
  );
};
