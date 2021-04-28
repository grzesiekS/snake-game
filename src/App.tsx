import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';

import './styles/global.scss';

const App: React.FC = () => (
  <div>
    <MainLayout>
      <HomePage />
    </MainLayout>
  </div>
);

export default App;
