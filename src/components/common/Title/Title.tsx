import React from 'react';
import clsx from 'clsx';

import styles from './Title.module.scss';

interface TitleProps {
  text: string;
  type: 'large' | 'small';
}

export const Title: React.FC<TitleProps> = ({ text, type }) => (
  <h1 className={clsx(styles.title, styles[type])}>{text}</h1>
);