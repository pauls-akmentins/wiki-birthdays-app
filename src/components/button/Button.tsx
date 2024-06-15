import { classNames } from '../utils/classNames';
import styles from './Button.module.css';
import { ButtonType, ButtonVariant } from './types';

interface Props {
  children: React.ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  onClick: () => void;
}

export const Button = ({
  children,
  onClick,
  type = ButtonType.Button,
  variant = ButtonVariant.Primary,
}: Props) => {
  return (
    <button
      className={classNames([styles.button], {
        [styles['button__inline']]: variant === ButtonVariant.Inline,
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
