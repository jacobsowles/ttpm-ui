// npm modules
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// app modules
import reducer from './reducers/index.js';

const middlewareList = [ promise(), thunk ];

if (process.env.NODE_ENV == 'development') {
    middlewareList.push(createLogger());
}

const middleware = applyMiddleware(...middlewareList);

export default createStore(reducer, middleware);
