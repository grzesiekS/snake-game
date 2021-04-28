import React from 'react';

import styles from './Board.module.scss';

export const Board: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Board for the game</h1>
    </div>
  );
};