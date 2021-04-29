import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Board } from './Board/Board';

import styles from './Game.module.scss';

const linksData = [
  {
    _id: '1',
    text: 'Start Game',
    url: '/game',
  },
  {
    _id: '2',
    text: 'Score List',
    url: '/scores',
  },
];

export const Game: React.FC = () => (
  <div className={styles.container}>
    <NavBar links={linksData} />
    <Board />
  </div>
);