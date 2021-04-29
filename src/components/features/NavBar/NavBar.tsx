import React from 'react';
import { Button } from '../../common/Button/Button';

import styles from './NavBar.module.scss';

interface NavBarProps {
  links: { 
    _id: string,
    text: string,
    url: string,
  }[],
}

export const NavBar: React.FC<NavBarProps> = ({ links }) => (
  <div className={styles.wrapper}>
    <ul>
      {links.map(link => (
        <li key={link._id}>
          <Button
            text={link.text}
            Type='Link'
            to={link.url}
          />
        </li>
      ))}
    </ul>
  </div>
);