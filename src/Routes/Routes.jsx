import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Game from '../Pages/Game';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/jogo" component={ Game } />
    </Switch>
  );
}

export default Routes;