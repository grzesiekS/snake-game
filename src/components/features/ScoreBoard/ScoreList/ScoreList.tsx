import React, { useEffect, useState } from 'react';
import { getLocalStorageData } from '../../../../utils/LocalStorage';

import styles from './ScoreList.module.scss';

interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

export const ScoreList: React.FC = () => {

  const [scoresData, setScorsData] = useState<scoreObject[]>([]);

  useEffect(() => {
    const localStorageData = JSON.parse(getLocalStorageData('scoreList') || '[]');
    setScorsData(localStorageData);
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Player Name</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {scoresData.map(score => (
            <tr key={score.id}>
              <td>{score.playerName}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};