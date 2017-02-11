import { get, post, put, del } from 'api';

module.exports = {
    fetchTaskGroups() {
        return {
            type: 'FETCH_TASK_GROUPS',
            payload: get('/TaskGroups')
        };
    },

    addTaskGroup(taskGroup) {
        return {
            type: 'ADD_TASK_GROUP',
            payload: post('/TaskGroups', taskGroup)
        };
    },

    deleteTaskGroup(taskGroupId) {
        return {
            type: 'DELETE_TASK_GROUP',
            payload: del(`/TaskGroups/${taskGroupId}`)
        };
    },

    updateTaskGroup(taskGroupId, taskGroup) {
        return {
            type: 'UPDATE_TASK_GROUP',
            payload: put(`/TaskGroups/${taskGroupId}`, taskGroup)
        };
    }
};
