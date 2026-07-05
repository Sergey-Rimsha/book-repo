import { ComponentProps, memo, ReactNode } from 'react';

import clsx from 'clsx';

import s from './Button.module.scss';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  className?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button className={clsx(s.button, className)} {...rest}>
      {children}
    </button>
  );
});
