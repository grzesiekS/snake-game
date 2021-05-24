import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { 
  removeSessionStorageData,
  setSessionStoragePlayerData,
} from '../../../utils/SessionStorage';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Input } from '../../common/Input/Input';

import styles from './Splash.module.scss';

export const Splash: React.FC = ({}) => {
  const [playerName, setPlayerName] = useState('Player Name');
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = ():void => {
    if(playerName && playerName.length <= 25) {
      const playerData = {
        id: uuidv4(),
        name: playerName,
      };

      removeSessionStorageData('player');
      setSessionStoragePlayerData('player', playerData);

      setStartGame(true);
    }
  };

  useEffect(() => (
    setStartGame(false)
  ),[]);

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
          maxTextLength={25}
        />
      </div>
      <div className={styles.control}>
        <Button 
          text={'Start Game'}
          OnClickFunc={() => handleStartGame()}
        />
        <Button text={'Score List'} />
      </div>
      {startGame && <Redirect to='/game' />}
    </div>
  );
};