import styles from './Button.module.css';
import { ButtonType } from './types';

interface Props {
  children: React.ReactNode;
  type: ButtonType;
  onClick: () => void;
}

export const Button = ({ children, onClick, type }: Props) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
