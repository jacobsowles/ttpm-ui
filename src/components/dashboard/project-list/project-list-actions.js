import { get, post } from '../../../api.js';

module.exports = {
    fetchProjectList() {
        return {
            type: 'FETCH_PROJECT_LIST',
            payload: get('/projects')
        };
    },

    addTaskList(projectId) {
        return {
            type: 'ADD_TASK_LIST',
            payload: post(`/projects/${projectId}/taskList`, {
                id: projectId
            })
        };
    }
};
