// npm modules
import { combineReducers } from 'redux';

// reducers
import error from './error-reducer.js';
import filters from './filter-reducer.js';
import loginForm from '../components/login/login-form/login-form-reducer.js';
import registrationForm from '../components/login/registration-form/registration-form-reducer.js';
import taskGroups from './task-group-reducer.js';
import tasks from './task-reducer.js';
import user from './user-reducer.js';

export default combineReducers({
    error,
    filters,
    loginForm,
    registrationForm,
    taskGroups,
    tasks,
    user
});
