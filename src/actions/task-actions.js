import { get } from '../api.js';

module.exports = {
    fetchTasks() {
        return {
            type: 'FETCH_TASKS',
            payload: get('/tasks')
        };
    },

    filterTasksByProject(taskLists, projectId) {
        return {
            type: 'FILTER_TASKS_BY_PROJECT',
            payload: {
                taskLists: taskLists,
                projectId: projectId
            }
        };
    },

    filterTasksByTaskList(taskListId) {
        return {
            type: 'FILTER_TASKS_BY_TASK_LIST',
            payload: taskListId
        };
    }
};
