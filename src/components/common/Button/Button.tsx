import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  OnClickFunc?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Type?: any;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, OnClickFunc, Type='button', href }) => {
  return (
    <Type
      className={styles.button}
      onClick={OnClickFunc}
      href={href}
    >
      {text}
    </Type>
  );
};