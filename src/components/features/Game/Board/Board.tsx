import React from 'react';

import { Title } from '../../../common/Title/Title';

import styles from './Board.module.scss';

export const Board: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title text='Snake' type='small' />
    </div>
  );
};