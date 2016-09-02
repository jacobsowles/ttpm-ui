// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// app modules
import store from './store';

// components
import Home from './components/home/home.jsx';
import Login from './components/login/login.jsx';

// styles
require('./index.scss');

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Router>
    </Provider>, document.getElementById('root')
);
