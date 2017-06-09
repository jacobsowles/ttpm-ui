// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

// app modules
import store from './store';
import { isLoggedIn } from './api';

// components
import App from 'components/app';
import AuthLayout from 'containers/auth-container';
import MainLayout from 'components/main-layout';

// styles
import './index.scss';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App />
        </Router>
    </Provider>, document.getElementById('root')
);

function requireAuth(nextState, replace) {
    try {
        if (!isLoggedIn()) {
            redirectToLogin(nextState, replace);
        }
    }
    catch (e) {
        redirectToLogin(nextState, replace);
    }
}

function redirectToLogin(nextState, replace) {
    replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
    });
}
