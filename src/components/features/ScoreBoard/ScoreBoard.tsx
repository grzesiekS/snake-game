import React, { useState, useEffect } from 'react';
import { linksData } from '../../../data/data';
import { removeLocalStorageData, getLocalStorageData } from '../../../utils/LocalStorage';

import { NavBar } from '../NavBar/NavBar';
import { Title } from '../../common/Title/Title';
import { ScoreList } from './ScoreList/ScoreList';
import { Button } from '../../common/Button/Button';
import { Modal } from '../../common/Modal/Modal';

import styles from './ScoreBoard.module.scss';

interface scoreObject {
  id: string,
  playerName: string,
  score: number,
}

export const ScoreBoard: React.FC = () => {
  const [removeScoresModal, setRemoveScoresModal] = useState(false);
  const [scoresData, setScoresData] = useState<scoreObject[]>([]);

  const handleRemoveScoresData = () => {
    removeLocalStorageData('scoreList');
    setScoresData([]);
    setRemoveScoresModal(false);
  };

  useEffect(() => {
    const localStorageData:scoreObject[] = JSON.parse(getLocalStorageData('scoreList') || '[]');
    setScoresData(localStorageData.sort((a,b) => a.score < b.score ? 1 : -1));
  }, []);

  return (
    <Modal
      title='Do you want to remove all scores?'
      leftButtonText='Yes'
      leftButtonAction={() => handleRemoveScoresData()}
      rightButtonText='No'
      rightButtonAction={() => setRemoveScoresModal(false)}
      showModal={removeScoresModal}
      message={`This process can't be reverse`}
    >
      <div className={styles.container}>
        <NavBar links={linksData} />
        <Title text='Score List' type='medium' />
        { scoresData.length > 0 && <ScoreList scoresData={scoresData} />}
        <div className={styles.controlPanel}>
          { scoresData.length > 0 && 
          <Button 
            text='Reset Score List'
            OnClickFunc={() => setRemoveScoresModal(true)}
          />}
        </div>
      </div>
    </Modal>
  );
};