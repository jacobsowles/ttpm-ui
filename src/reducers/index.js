// npm modules
import { combineReducers } from 'redux';

// reducers
import bottomDrawerReducer from '../components/home/bottom-drawer/bottom-drawer-reducer.js';
import loginFormReducer from '../components/login/login-form/login-form-reducer.js';
import projectReducer from './project-reducer.js';
import registrationFormReducer from '../components/login/registration-form/registration-form-reducer.js';
import taskTableReducer from '../components/home/task-table/task-table-reducer.js';

export default combineReducers({
    bottomDrawer: bottomDrawerReducer,
    loginForm: loginFormReducer,
    projects: projectReducer,
    registrationForm: registrationFormReducer,
    taskTable: taskTableReducer
});
