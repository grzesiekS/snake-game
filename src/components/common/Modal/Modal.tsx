import React from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  showModal: boolean;
}

export const Modal: React.FC<ModalProps> = ({ showModal, children }) => (
  <div className={styles.container}>
    {showModal 
      ? 
      <div className={styles.modal}>
        <h1>Modal</h1>
      </div> 
      : null}
    {children}
  </div>
);