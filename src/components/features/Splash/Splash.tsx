import React from 'react';
import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';

import styles from './Splash.module.scss';

export const Splash: React.FC = ({}) => (
  <div className={styles.container}>
    <Title 
      text='Snake Game'
      type='large'
    />
    <div className={styles.control}>
      <Button Type='Link' to='/game' text={'Start Game'} />
      <Button text={'Score List'} />
    </div>
  </div>
);