import { get, post, del } from '../api.js';

module.exports = {
    fetchProjects() {
        return {
            type: 'FETCH_PROJECTS',
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
    }
};
