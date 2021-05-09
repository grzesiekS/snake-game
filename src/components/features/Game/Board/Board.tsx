/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import styles from './Board.module.scss';

interface BoardProps {
  snakePosition: number[][],
}

export const Board: React.FC<BoardProps> = ({ snakePosition }) => {

  const [ boardArray, setBoardArray ] = useState<Array<Array<number>>>([]);
  const [ rowSize ] = useState<number>(21);
  const [ columnSize ] = useState<number>(35);

  const handleSnakePosition = useCallback((boardArray) => {
    const result = boardArray;

    snakePosition.forEach(position => {
      result[position[0]][position[1]] = 1;
    });

    return result;
  },[snakePosition]);

  useEffect(() => {
    const array:number[][] = [];
    for(let i = 0; i < rowSize; i++) {
      array[i] = [];
      for(let j = 0; j < columnSize; j++) {
        array[i][j] = 0;
      }
    }
    setBoardArray(handleSnakePosition(array));
  }, [columnSize, handleSnakePosition, rowSize, snakePosition]);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        { boardArray.map( ( element ) => (
          <div key={uuidv4()} className={styles.row}>
            {element.map(block => (
              <div 
                key={uuidv4()} 
                className={
                  block === 1 
                    ? 
                    clsx(styles.block, styles.snake) 
                    : 
                    styles.block}
              >
              </div>
            ))}
          </div>
        )) }
      </div>
    </div>
  );
};