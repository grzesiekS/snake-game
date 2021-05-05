/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Board.module.scss';

export const Board: React.FC = () => {

  const [ boardArray, setBoardArray ] = useState<Array<Array<number>>>([]);
  const [ rowSize ] = useState<number>(21);
  const [ columnSize ] = useState<number>(35);

  useEffect(() => {
    const array = Array.from(Array(rowSize).fill(Array(columnSize).fill(0)));
    setBoardArray(array);
  }, [columnSize, rowSize]);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        { boardArray.map( ( element ) => (
          <div key={uuidv4()} className={styles.row}>
            {element.map(block => (
              <div 
                key={uuidv4()} 
                className={styles.block}
              >
                {block}
              </div>
            ))}
          </div>
        )) }
      </div>
    </div>
  );
};