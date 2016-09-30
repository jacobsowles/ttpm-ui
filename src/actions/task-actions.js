import { get, put, post, del } from '../api.js';

module.exports = {
    fetchTasks() {
        return {
            type: 'FETCH_TASKS',
            payload: get('/Tasks')
        };
    },

    createTask(task) {
        return {
            type: 'CREATE_TASK',
            payload: task.TaskGroupId == null ? post('/Tasks', task) : post(`/TaskGroups/${task.TaskGroupId}/Tasks`, task)
        };
    },

    toggleComplete(taskId) {
        return {
            type: 'TOGGLE_TASK_COMPLETE',
            payload: put(`/Tasks/${taskId}/ToggleComplete`)
        };
    },

    updateTask(taskId, body) {
        return {
            type: 'UPDATE_TASK',
            payload: put(`/Tasks/${taskId}`, body)
        };
    },

    deleteTask(taskId) {
        return {
            type: 'DELETE_TASK',
            payload: del(`/Tasks/${taskId}`)
        };
    },

    swapDisplayOrder(firstTaskId, secondTaskId) {
        return {
            type: 'SWAP_TASK_DISPLAY_ORDER',
            payload: put(`/Tasks/${firstTaskId}/SwapDisplayOrder/${secondTaskId}`)
        };
    }
};
