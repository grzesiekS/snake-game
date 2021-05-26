import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { GamePage } from './components/views/GamePage/GamePage';
import { HomePage } from './components/views/HomePage/HomePage';
import { ScoreListPage } from './components/views/ScoreListPage/ScoreListPage';

import './styles/global.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/game' component={GamePage} />
        <Route exact path='/scoreList' component={ScoreListPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
