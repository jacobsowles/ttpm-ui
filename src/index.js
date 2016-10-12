// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

// app modules
import store from './store';
import { isLoggedIn } from './utils/auth';

// components
import Home from '~/home/home';
import AuthContainer from '~/auth/auth-container';
import Sandbox from '~/sandbox/sandbox';

// styles
require('./index.scss');

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} onEnter={requireAuth} />
            <Route path="/login" component={AuthContainer} />
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
