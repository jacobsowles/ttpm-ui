// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

// app modules
import store from './store';
import { isLoggedIn } from 'utils/auth/auth';

// components
import AuthContainer from 'containers/auth-container';

// styles
import './index.scss';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {/*<Route path="/" component={Home} onEnter={requireAuth} />*/}
            <Route path="/login" component={AuthContainer} />
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
