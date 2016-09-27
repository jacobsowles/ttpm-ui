// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// app modules
import store from './store';
import { isLoggedIn } from './auth';

// components
import Home from './components/home/home.jsx';
import Login from './components/login/login.jsx';
import Sandbox from './components/sandbox.jsx';

// styles
require('./index.scss');

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} onEnter={requireAuth} />
            <Route path="/login" component={Login} />
            <Route path="/sandbox" component={Sandbox} />
        </Router>
    </Provider>, document.getElementById('root')
);

function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}
