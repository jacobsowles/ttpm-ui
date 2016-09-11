// npm modules
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// app modules
import reducer from './reducers/index.js';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);
