// npm modules
import { combineReducers } from 'redux';

// reducers
import projectListReducer from './components/home/project-list/project-list-reducer.js';

export default combineReducers({
    projectList: projectListReducer
});
