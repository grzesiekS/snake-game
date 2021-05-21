import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Input } from '../../common/Input/Input';

import styles from './Splash.module.scss';

export const Splash: React.FC = ({}) => {
  const [playerName, setPlayerName] = useState('Player Name');

  return (
    <div className={styles.container}>
      <Title 
        text='Snake Game'
        type='large'
      />
      <div className={styles.form}>
        <Input
          id='playerName'
          labelText='Player Name'
          value={playerName}
          onChangeFunc={name => setPlayerName(name)}
        />
      </div>
      <div className={styles.control}>
        <Button Type='Link' to='/game' text={'Start Game'} />
        <Button text={'Score List'} />
      </div>
    </div>
  );
};