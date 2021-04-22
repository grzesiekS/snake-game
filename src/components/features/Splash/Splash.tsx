import React from 'react';
import { Button } from '../../common/Button/Button';

import styles from './Splash.module.scss';

export const Splash: React.FC = ({}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Snake Game</h1>
    <div className={styles.control}>
      <Button Type='a' href='/#' text={'Start Game'} />
      <Button text={'Score List'} />
    </div>
  </div>
);