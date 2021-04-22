import React from 'react';

import styles from './Splash.module.scss';

export const Splash: React.FC = ({}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Snake Game</h1>
  </div>
);