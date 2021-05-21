import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  labelText: string,
  id: string,
  value: string,
  onChangeFunc: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ labelText, id, value, onChangeFunc}) => (
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
    />
  </>
);