/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import styles from './Board.module.scss';

interface BoardProps {
  snakePosition: number[][],
  rowsCount: number,
  columnsCount: number,
  snakeLenght: number,
  gameOverFunc: () => void,
  pointSquare: number[],
  snakeLengthChange: () => void,
}

export const Board: React.FC<BoardProps> = (
  { 
    snakePosition,
    rowsCount,
    columnsCount,
    snakeLenght,
    gameOverFunc,
    pointSquare,
    snakeLengthChange,
  }) => {

  const [ boardArray, setBoardArray ] = useState<Array<Array<number>>>([]);
  const [ rowSize ] = useState<number>(rowsCount);
  const [ columnSize ] = useState<number>(columnsCount);

  const handleSnakePosition = useCallback((boardArray) => {
    const result: number[][] = boardArray;
    let count = 0;

    snakePosition.forEach(position => {
      result[position[0]][position[1]] = 1;
    });

    if(pointSquare.length === 2) result[pointSquare[0]][pointSquare[1]] = 2;

    for(let i = 0; i < result.length; i++) {
      const snakeOnBoard = result[i].filter(res => res === 1);
      if(snakeOnBoard.length > 0) {
        count += snakeOnBoard.length;
      }
    }

    if(count !== snakeLenght) {
      if(snakePosition[snakeLenght-1][0] === pointSquare[0] 
        && snakePosition[snakeLenght-1][1] === pointSquare[1]) snakeLengthChange();
      else gameOverFunc();
    }

    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    block === 2
                      ? clsx(styles.block, styles.point)
                      : styles.block}
              >
              </div>
            ))}
          </div>
        )) }
      </div>
    </div>
  );
};