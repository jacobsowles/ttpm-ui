import { get, put, del } from '../api.js';

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
    },

    toggleComplete(taskId) {
        return {
            type: 'TOGGLE_TASK_COMPLETE',
            payload: put(`/tasks/${taskId}/toggleComplete`)
        };
    },

    updateTask(task) {
        return {
            type: 'UPDATE_TASK',
            payload: put('/tasks/', task)
        };
    },

    deleteTask(taskId) {
        return {
            type: 'DELETE_TASK',
            payload: del(`/tasks/${taskId}`)
        };
    }
};
