import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  OnClickFunc?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Type?: any;
  href?: string;
  to?: string;
}

export const Button: React.FC<ButtonProps> = (
  { 
    text,
    OnClickFunc,
    Type='button',
    href,
    to='/',
  }) => {
  return (
    <>
      {
        Type === 'Link'
          ?
          <Link
            className={styles.button} 
            to={to}
          >
            {text}
          </Link>
          :
          <Type
            className={styles.button}
            onClick={OnClickFunc}
            href={href}
          >
            {text}
          </Type>
      }
    </>
  );
};