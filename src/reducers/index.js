// npm modules
import { combineReducers } from 'redux';

// reducers
import errorReducer from './error-reducer.js';
import loginFormReducer from '../components/login/login-form/login-form-reducer.js';
import projectReducer from './project-reducer.js';
import registrationFormReducer from '../components/login/registration-form/registration-form-reducer.js';
import taskListReducer from './task-list-reducer.js';
import taskReducer from './task-reducer.js';

export default combineReducers({
    error: errorReducer,
    loginForm: loginFormReducer,
    projects: projectReducer,
    registrationForm: registrationFormReducer,
    taskLists: taskListReducer,
    tasks: taskReducer
});
