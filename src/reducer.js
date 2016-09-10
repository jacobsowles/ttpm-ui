// npm modules
import { combineReducers } from 'redux';

// reducers
import loginFormReducer from './components/login/login-form/login-form-reducer.js';
import projectListReducer from './components/home/project-list/project-list-reducer.js';
import registrationFormReducer from './components/login/registration-form/registration-form-reducer.js';
import taskTableReducer from './components/home/task-table/task-table-reducer.js';

export default combineReducers({
    loginForm: loginFormReducer,
    projectList: projectListReducer,
    registrationForm: registrationFormReducer,
    taskTable: taskTableReducer
});
