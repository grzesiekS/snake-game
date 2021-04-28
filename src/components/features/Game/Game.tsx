import React from 'react';
import { Board } from './Board/Board';

import styles from './Game.module.scss';

export const Game: React.FC = () => (
  <div className={styles.container}>
    <Board />
  </div>
);