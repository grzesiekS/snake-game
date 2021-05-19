import React from 'react';
import { Title } from '../../../common/Title/Title';

import styles from './Score.module.scss';

export const Score: React.FC = () => (
  <div className={styles.container}>
    <Title text='Score:' type='small'/>
    <Title text='1520' type='small'/>
  </div>
);