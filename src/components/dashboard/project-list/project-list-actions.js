import { get } from '../../../api.js';

module.exports = {
    fetchProjectList() {
        return {
            type: 'FETCH_PROJECT_LIST',
            payload: get('/projects')
        };
    }
};
