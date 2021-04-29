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

const buttonRender = 
  (
    text: string, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Type: any,  
    to: string,
    OnClickFunc?: () => void,
    href?: string
  ) => {

    switch(Type) {
      case 'Link':
        return (
          <Link
            className={styles.button} 
            to={to}
          >
            {text}
          </Link>
        );
      default:
        return (
          <Type
            className={styles.button}
            onClick={OnClickFunc}
            href={href}
          >
            {text}
          </Type>
        );
    }
  };

export const Button: React.FC<ButtonProps> = (
  { 
    text,
    OnClickFunc,
    Type='button',
    href,
    to='/',
  }) => {
  return (
    buttonRender(text, Type, to, OnClickFunc, href)
  );
};