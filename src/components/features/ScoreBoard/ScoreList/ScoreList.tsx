import React from 'react';

import styles from './ScoreList.module.scss';

interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

interface ScoreListProps {
  scoresData: scoreObject[],
}

export const ScoreList: React.FC<ScoreListProps> = ({ scoresData }) => {

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