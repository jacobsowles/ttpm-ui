import { get } from '../../../api.js';

module.exports = {
    fetchTaskTable() {
        return {
            type: 'FETCH_TASK_TABLE',
            payload: get('/tasks/tasktable')
        };
    }
};
