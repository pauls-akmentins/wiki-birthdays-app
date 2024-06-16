import { Flex } from '@/components/flex/Flex';
import { classNames } from '@/components/utils/classNames';

import { STATUS_STANDBY } from '../constants/overlayTexts';
import styles from '../molecules/EmptyTable/EmptyTable.module.css';

interface Props {
  overlayText?: string;
  isError?: boolean;
}

export const EmptyTableOverlay = ({ overlayText = STATUS_STANDBY, isError = false }: Props) => (
  <Flex className={classNames([styles['overlay-container']])} centerHorizontally centerVertically>
    <p
      className={classNames([styles['overlay-container__text']], {
        [styles['overlay-container__text-error']]: isError,
      })}
    >
      {overlayText}
    </p>
  </Flex>
);
