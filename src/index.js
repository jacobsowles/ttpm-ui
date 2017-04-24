// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

// app modules
import store from './store';
import { isLoggedIn } from './api';

// components
import AuthLayout from 'containers/auth-container';
import HomeLayout from 'containers/home-container';

// styles
import './index.scss';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomeLayout}>
                <Route path="/groups" component={HomeContainer} />
                <Route path="/login" component={AuthLayout} />
            </Route>
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
