import React, { useState } from 'react';
import { linksData } from '../../../data/data';

import { NavBar } from '../NavBar/NavBar';
import { Title } from '../../common/Title/Title';
import { ScoreList } from './ScoreList/ScoreList';
import { Button } from '../../common/Button/Button';
import { Modal } from '../../common/Modal/Modal';

import styles from './ScoreBoard.module.scss';

export const ScoreBoard: React.FC = () => {
  const [removeScoresModal, setRemoveScoresModal] = useState(false);

  return (
    <Modal
      title='Do you want to remove all scores?'
      leftButtonText='Yes'
      leftButtonAction={() => {console.log('test');}}
      rightButtonText='No'
      rightButtonAction={() => setRemoveScoresModal(false)}
      showModal={removeScoresModal}
    >
      <div className={styles.container}>
        <NavBar links={linksData} />
        <Title text='Score List' type='medium' />
        <ScoreList />
        <div className={styles.controlPanel}>
          <Button 
            text='Reset Score List'
            OnClickFunc={() => setRemoveScoresModal(true)}
          />
        </div>
      </div>
    </Modal>
  );
};