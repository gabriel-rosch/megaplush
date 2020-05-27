import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export const RoutesHome: React.FC = () => (
  <Switch>
    <Route path="/home/1" component={Dashboard} />
  </Switch>
);
