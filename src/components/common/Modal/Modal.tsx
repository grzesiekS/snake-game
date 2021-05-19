import React from 'react';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

import styles from './Modal.module.scss';

interface ModalProps {
  showModal: boolean;
  title: string;
  leftButtonText: string;
  leftButtonAction: () => void;
  rightButtonText: string;
  rightButtonAction: () => void;
  message?: string;
}

export const Modal: React.FC<ModalProps> = (
  { showModal,
    children,
    title,
    leftButtonText,
    rightButtonText,
    leftButtonAction,
    rightButtonAction,
    message,
  }
) => (
  <div className={showModal ? styles.container_on : styles.container_off}>
    {showModal 
      ? 
      <div className={styles.modal}>
        <Title text={title} type='medium' />
        <p className={styles.message}>{message}</p>
        <div className={styles.flexBox}>
          <Button 
            text={leftButtonText}
            OnClickFunc={() => leftButtonAction()}
          />
          <Button 
            text={rightButtonText} 
            OnClickFunc={() => rightButtonAction()}
          />
        </div>
      </div> 
      : null}
    {children}
  </div>
);