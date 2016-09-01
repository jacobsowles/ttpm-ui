// npm modules
import { combineReducers } from 'redux';

// reducers
import projectListReducer from './components/get-it/project-list/project-list-reducer.js';

export default combineReducers({
    projectList: projectListReducer
});
