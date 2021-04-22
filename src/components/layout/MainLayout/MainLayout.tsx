import React from 'react';
import { Header } from '../Header/Header';

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
