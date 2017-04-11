// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';

// app modules
import store from './store';
import { isLoggedIn } from './api';

// components
import AuthContainer from 'containers/auth-container';
import HomeContainer from 'containers/home-container';

// styles
import './index.scss';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomeContainer} onEnter={requireAuth}>
                <Route path="groups/:taskGroupId" component={HomeContainer} onEnter={requireAuth} />
            </Route>
            <Route path="/login" component={AuthContainer} />
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
