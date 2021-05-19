import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Board } from './Board/Board';
import { Title } from '../../common/Title/Title';
import { Modal } from '../../common/Modal/Modal';
import { Score } from './Score/Score';

import styles from './Game.module.scss';
import { Redirect } from 'react-router';

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

let position = [[0,0,0]];

const boardSize = {
  rows: 21,
  columns: 35,
};

export const Game: React.FC = () => {

  const [snakePosition, setSnakePosition] = useState([...position]);
  const [snakeLength, setSnakeLength] = useState(1);
  const [movementDirection, setMovementDirection] = 
    useState<'left' | 'right' | 'up' | 'down'>
    ('right');
  const [gameOver, setGameOver] = useState(false);
  const [gameQuit, setGameQuit] = useState(false);
  const [pointSquare, setPointSquare] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const movementRef = useRef<'left' | 'right' | 'up' | 'down'>();
  movementRef.current = movementDirection;

  const snakeLengthRef = useRef<number>();
  snakeLengthRef.current = snakeLength;

  const randomPointSquareGenerator = useCallback(() => {
    let leftPosition = 0;
    let rightPosition = 0;
    let positionApproved = false;

    do {
      leftPosition = Math.floor(Math.random() * ((boardSize.rows - 1) - 0) + 0);
      rightPosition = Math.floor(Math.random() * ((boardSize.columns - 1) - 0) + 0);
      const snakePositionFilter = position.filter(pos => pos[0] === leftPosition && pos[1] === rightPosition);
      if(snakePositionFilter.length === 0) positionApproved = true;
    } while (positionApproved === false);

    setPointSquare([
      leftPosition,
      rightPosition,
    ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    randomPointSquareGenerator();
  },[randomPointSquareGenerator]);

  const newSnakePosition = () => {
    const newSnakePosition: number[] = [];
    switch(snakePosition[0][2]) {
      case 6:
        newSnakePosition[0] = snakePosition[0][0];
        newSnakePosition[1] = snakePosition[0][1] - 1;
        break;
      case 4:
        newSnakePosition[0] = snakePosition[0][0];
        newSnakePosition[1] = snakePosition[0][1] + 1;
        break;
      case 8:
        newSnakePosition[0] = snakePosition[0][0] + 1;
        newSnakePosition[1] = snakePosition[0][1];
        break;
      case 2:
        newSnakePosition[0] = snakePosition[0][0] - 1;
        newSnakePosition[1] = snakePosition[0][1];
        break;
    }

    return newSnakePosition;
  };

  const handleSnakeLengthChange = useCallback(() => {
    randomPointSquareGenerator();
    const newPosition = newSnakePosition();
    if(movementDirection === 'right') {
      position = [[...newPosition , 6], ...snakePosition];
    } else if(movementDirection === 'left') {
      position = [[...newPosition , 4], ...snakePosition];
    } else if(movementDirection === 'up') {
      position = [[...newPosition , 8], ...snakePosition];
    } else if(movementDirection === 'down') {
      position = [[...newPosition , 2], ...snakePosition];
    }

    if(gameOver) setPointSquare([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movementDirection, snakePosition]);

  useEffect(() => {
    for(let i = 1; i < snakeLength; i++) {
      handleSnakeLengthChange();
      setSnakePosition([...position]);
    }

    return () => {
      position=[[0,0]];
      setSnakePosition([...position]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[snakeLength]);

  const handleSnakeMovement = useCallback(
    () => {
      for(let i = 0; i < snakeLength; i++) {
        if(position[i + 1]) {
          position[i][2] = position[i + 1][2];
          position[i][1] = position[i + 1][1];
          position[i][0] = position[i + 1][0];
        } else {
          switch(movementDirection) {
            case 'left':
              if(position[i][1] <= 0) setGameOver(true);
              else {
                position[i][1]--;
                position[i][2] = 4;
              }
              break;
            case 'right':
              if(position[i][1] >= boardSize.columns - 1) setGameOver(true);
              else {
                position[i][1]++;
                position[i][2] = 6;
              }
              break;
            case 'up':
              if(position[i][0] <= 0) setGameOver(true);
              else {
                position[i][0]--;
                position[i][2] = 8;
              }
              break;
            case 'down':
              if(position[i][0] >= boardSize.rows - 1) setGameOver(true);
              else {
                position[i][0]++;
                position[i][2] = 2;
              }
              break;
          }
        }
      }
    },[movementDirection, snakeLength]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleSnakeMovement();
      setSnakePosition([...position]);
    }, 100);

    if(gameOver) clearInterval(interval);

    return () => {clearInterval(interval);};
  },[gameOver, handleSnakeMovement, snakeLength, snakePosition]);

  const handleMovementDirection = useCallback(
    (key: string) => {
      switch(key) {
        case 'ArrowLeft':
          if(snakeLengthRef.current === 1) setMovementDirection('left');
          else if(movementRef.current !== 'right') setMovementDirection('left');
          break;
        case 'ArrowRight':
          if(snakeLengthRef.current === 1) setMovementDirection('right');
          else if(movementRef.current !== 'left') setMovementDirection('right');
          break;
        case 'ArrowUp':
          if(snakeLengthRef.current === 1) setMovementDirection('up');
          else if(movementRef.current !== 'down') setMovementDirection('up');
          break;
        case 'ArrowDown':
          if(snakeLengthRef.current === 1) setMovementDirection('down');
          else if(movementRef.current !== 'up') setMovementDirection('down');
          break;
      }
    },[]
  );

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleMovementDirection(e.key);
    });

    return () => {
      window.removeEventListener('keydown', (e) => {
        handleMovementDirection(e.key);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleGameRestart = () => {
    window.location.reload();
  };

  const handleGameQuit = () => {
    setGameQuit(true);
    setSnakeLength(1);
  };

  return (
    <Modal 
      showModal={gameOver}
      title='Game Over'
      leftButtonText='Restart'
      rightButtonText='Quit Game'
      leftButtonAction={() => handleGameRestart()}
      rightButtonAction={() => handleGameQuit()}
      message={`Your score was ${score}`}
    >
      <div className={styles.container}>
        <NavBar links={linksData} />
        <Title text='Snake' type='small' />
        <Score 
          score={score} 
          snakeLength={snakeLength}
          setNewScore={newScore => setScore(newScore)}
        />
        <Board 
          snakePosition={snakePosition} 
          rowsCount={boardSize.rows}
          columnsCount={boardSize.columns}
          snakeLenght={snakeLength}
          gameOverFunc={() => setGameOver(true)}
          pointSquare={pointSquare}
          snakeLengthChange={() => setSnakeLength(snakeLength + 1)}
        />
      </div>
      {gameQuit ? <Redirect push to='/' /> : null}
      {}
    </Modal>
  );
};