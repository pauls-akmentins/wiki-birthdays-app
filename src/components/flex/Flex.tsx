import { classNames } from '../utils/classNames';
import styles from './Flex.module.css';

interface Props {
  children: React.ReactNode;
  centerVertically?: boolean;
  centerHorizontally?: boolean;
  directionColumn?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Flex = ({
  children,
  className = '',
  fullWidth = true,
  centerVertically,
  centerHorizontally,
  directionColumn,
}: Props) => {
  return (
    <div
      className={classNames([className, styles.flex], {
        [styles['flex__center-vertically']]: Boolean(centerVertically),
        [styles['flex__center-horizontally']]: Boolean(centerHorizontally),
        [styles['flex__direction-column']]: Boolean(directionColumn),
        [styles['flex__full-width']]: Boolean(fullWidth),
      })}
    >
      {children}
    </div>
  );
};
