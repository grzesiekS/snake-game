import React, { useEffect } from 'react';
import { Title } from '../../../common/Title/Title';

import styles from './Score.module.scss';

interface ScoreProps {
  score: number,
  snakeLength: number,
  setNewScore: (newScore:number) => void;
}

export const Score: React.FC<ScoreProps> = ({score, snakeLength, setNewScore}) => {
  
  useEffect(() => {
    setNewScore(snakeLength * 10 - 10);
  }, [setNewScore, snakeLength]);
  
  return (
    <div className={styles.container}>
      <Title text='Score:' type='small'/>
      <Title text={`${score}`} type='small'/>
    </div>
  );
};