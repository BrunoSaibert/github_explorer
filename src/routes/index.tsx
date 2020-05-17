import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import User from '../pages/User';
import UserDetails from '../pages/User/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
    <Route path="/User" exact component={User} />
    <Route path="/User/:login" component={UserDetails} />
  </Switch>
);

export default Routes;
