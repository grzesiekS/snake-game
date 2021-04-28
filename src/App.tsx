import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';

import './styles/global.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
