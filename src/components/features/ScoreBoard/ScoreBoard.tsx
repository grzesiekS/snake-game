import React from 'react';
import { linksData } from '../../../data/data';

import { NavBar } from '../NavBar/NavBar';
import { Title } from '../../common/Title/Title';
import { ScoreList } from './ScoreList/ScoreList';
import { Button } from '../../common/Button/Button';

import styles from './ScoreBoard.module.scss';

export const ScoreBoard: React.FC = () => (
  <div className={styles.container}>
    <NavBar links={linksData} />
    <Title text='Score List' type='medium' />
    <ScoreList />
    <div className={styles.controlPanel}>
      <Button text='Reset Score List' />
    </div>
  </div>
);