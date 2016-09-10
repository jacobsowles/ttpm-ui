import { get } from '../../../api.js';

module.exports = {
    fetchTaskTable() {
        return {
            type: 'FETCH_TASK_TABLE',
            payload: get('/tasks/tasktable')
        };
    },

    filterTaskTableByTaskList(taskListId) {
        return {
            type: 'FILTER_TASK_LIST_BY_TASKLIST',
            payload: taskListId
        };
    }
};
