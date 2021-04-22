import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';

import './styles/global.scss';

const App: React.FC = () => (
  <div>
    <MainLayout>
      <h1>React app (TypeScript)</h1>
    </MainLayout>
  </div>
);

export default App;
