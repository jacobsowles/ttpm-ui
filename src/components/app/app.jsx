import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthLayout from 'containers/auth-container';
import MainLayout from 'components/main-layout';

import './app.scss';

const App = () => (
    <Switch>
        <Route exact path="/" component={MainLayout} />
        <Route path="/groups/:taskGroupId" component={MainLayout} />
        <Route path="/login" component={AuthLayout} />
    </Switch>
);

module.exports = App;
