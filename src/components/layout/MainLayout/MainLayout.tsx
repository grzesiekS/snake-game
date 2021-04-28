import React from 'react';

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div>
    {children}
  </div>
);
