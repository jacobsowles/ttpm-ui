import { get, post, del } from '../api.js';

module.exports = {
    fetchTaskLists() {
        return {
            type: 'FETCH_TASK_LISTS',
            payload: get('/taskLists')
        };
    },

    addTaskList(name, projectId) {
        return {
            type: 'ADD_TASK_LIST',
            payload: post(`/projects/${projectId}/taskLists`, {
                name: name
            })
        };
    },

    deleteTaskList(taskListId) {
        return {
            type: 'DELETE_TASK_LIST',
            payload: del(`/taskLists/${taskListId}`)
        };
    }
};
