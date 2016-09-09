import { get, post, del } from '../../../api.js';

module.exports = {
    fetchProjectList() {
        return {
            type: 'FETCH_PROJECT_LIST',
            payload: get('/projects')
        };
    },

    addProject(name) {
        return {
            type: 'ADD_PROJECT',
            payload: post('/projects', {
                name: name
            })
        };
    },

    deleteProject(projectId) {
        return {
            type: 'DELETE_PROJECT',
            payload: del(`/projects/${projectId}`)
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
