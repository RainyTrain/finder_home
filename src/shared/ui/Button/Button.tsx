import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  chilren?: ReactNode;
  setOpen?: () => void;
  isOpen?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, setOpen, isOpen, ...otherProps } = props;

  return (
    <button
      onClick={setOpen}
      type="button"
      className={classNames(cls.Button, {}, [className])}
      {...otherProps}>
      {children}
    </button>
  );
});
