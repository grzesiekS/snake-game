import React from 'react';
import { Splash } from '../../features/Splash/Splash';

import styles from './Header.module.scss';

export const Header: React.FC = ({}) => (
  <div className={styles.container}>
    <Splash />
  </div>
);