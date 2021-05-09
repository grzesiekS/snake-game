import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Board } from './Board/Board';
import { Title } from '../../common/Title/Title';

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

export const Game: React.FC = () => {

  const [snakePosition, setSnakePosition] = useState([[0,0]]);
  const [snakeLength, setSnakeLength] = useState(1);

  useEffect(() => {
    for(let i = 1; i < snakeLength; i++) {
      setSnakePosition([[snakePosition[0][0], 
        snakePosition[0][1] + 1], ...snakePosition]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[snakeLength]);

  return (
    <div className={styles.container}>
      <NavBar links={linksData} />
      <button onClick={() => setSnakeLength(snakeLength + 1)}>+</button>
      <Title text='Snake' type='small' />
      <Board snakePosition={snakePosition} />
    </div>
  );
};