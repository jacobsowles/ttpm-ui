import { combineReducers } from 'redux';

import error from './error-reducer';
import filters from './filter-reducer';
import login from './login-reducer';
import registration from './registration-reducer';
import settings from './setting-reducer';
import taskGroups from './task-group-reducer';
import tasks from './task-reducer';
import user from './user-reducer';
import userSettings from './user-setting-reducer';

export default combineReducers({
    error,
    filters,
    login,
    registration,
    settings,
    taskGroups,
    tasks,
    user,
    userSettings
});
