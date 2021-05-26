import React, { useEffect, useState } from 'react';
import { getLocalStorageData } from '../../../../utils/LocalStorage';

import styles from './ScoreList.module.scss';

interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

export const ScoreList: React.FC = () => {

  const [scoresData, setScoresData] = useState<scoreObject[]>([]);

  useEffect(() => {
    const localStorageData:scoreObject[] = JSON.parse(getLocalStorageData('scoreList') || '[]');
    setScoresData(localStorageData.sort((a,b) => a.score < b.score ? 1 : -1));
  }, []);

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <td>Player Name</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {scoresData.map(score => (
          <tr key={score.id}>
            <td>{score.playerName}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};