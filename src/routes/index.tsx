import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Expense from '../pages/Expense';
import Dashboard from '../pages/Dashboard';
import Partner from '../pages/register/partner';
import Pdv from '../pages/register/pdv';
import Operation from '../pages/register/operation';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} />
  </Switch>
);

export const RoutesHome: React.FC = () => (
  <Switch>
    <Route path="/home/despesas" component={Expense} />
    <Route path="/home/dashboard" component={Dashboard} />
    <Route path="/home/operacao" component={Operation} />
    <Route path="/home/pdv" component={Pdv} />
    <Route path="/home/parceiro" component={Partner} />
  </Switch>
);
