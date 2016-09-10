import { get } from '../../../api.js';

module.exports = {
    fetchTaskTable() {
        return {
            type: 'FETCH_TASK_TABLE',
            payload: get('/tasks/tasktable')
        };
    },

    filterTaskTableByProject(taskLists, projectId) {
        return {
            type: 'FILTER_TASK_TABLE_BY_PROJECT',
            payload: {
                taskLists: taskLists,
                projectId: projectId
            }
        };
    },

    filterTaskTableByTaskList(taskListId) {
        return {
            type: 'FILTER_TASK_TABLE_BY_TASK_LIST',
            payload: taskListId
        };
    }
};
