import React from 'react';
import { linksData } from '../../../data/data';

import { NavBar } from '../NavBar/NavBar';
import { Title } from '../../common/Title/Title';

import styles from './ScoreBoard.module.scss';

export const ScoreBoard: React.FC = () => (
  <div className={styles.container}>
    <NavBar links={linksData} />
    <Title text='Score List' type='medium' />
  </div>
);