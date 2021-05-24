import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  labelText: string,
  id: string,
  value: string,
  onChangeFunc: (value: string) => void;
  maxTextLength?: number
}

export const Input: React.FC<InputProps> = ({ labelText, id, value, onChangeFunc, maxTextLength=255}) => (
  <>
    <label 
      htmlFor={id}
      className={styles.label}
    >
      {labelText}
    </label>
    <input
      id={id}
      value={value}
      onChange={e => onChangeFunc(e.currentTarget.value)}
      className={styles.input}
      max={maxTextLength}
    />
  </>
);