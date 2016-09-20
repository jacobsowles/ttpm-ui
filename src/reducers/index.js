// npm modules
import { combineReducers } from 'redux';

// reducers
import error from './error-reducer.js';
import filters from './filter-reducer.js';
import loginForm from '../components/login/login-form/login-form-reducer.js';
import projects from './project-reducer.js';
import registrationForm from '../components/login/registration-form/registration-form-reducer.js';
import taskLists from './task-list-reducer.js';
import tasks from './task-reducer.js';

export default combineReducers({
    error,
    filters,
    loginForm,
    projects,
    registrationForm,
    taskLists,
    tasks
});
