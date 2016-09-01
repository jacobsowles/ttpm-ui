// npm modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// app modules
import store from './store';

// components
import GetIt from './components/get-it/get-it.jsx';
import Greeting from './components/home/greeting/greeting.jsx';
import Home from './components/home/home.jsx';

// styles
require('./index.scss');

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Greeting} />
            </Route>
            <Route path="/get-it" component={GetIt} />
        </Router>
    </Provider>, document.getElementById('root')
);
