import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import RepositoryDetails from '../pages/Repository/Details';
import User from '../pages/User';
import UserDetails from '../pages/User/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />

    <Route path="/repository" exact component={Repository} />
    <Route path="/repository/:repository+" component={RepositoryDetails} />

    <Route path="/user" exact component={User} />
    <Route path="/user/:login" component={UserDetails} />
  </Switch>
);

export default Routes;
