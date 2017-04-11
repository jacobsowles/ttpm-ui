import { combineReducers } from 'redux';

import auth from './auth-reducer';
import error from './error-reducer';
import filters from './filter-reducer';
import settings from './setting-reducer';
import taskGroups from './task-group-reducer';
import tasks from './task-reducer';
import user from './user-reducer';
import userSettings from './user-setting-reducer';

export default combineReducers({
    auth,
    error,
    filters,
    settings,
    taskGroups,
    tasks,
    user,
    userSettings
});
