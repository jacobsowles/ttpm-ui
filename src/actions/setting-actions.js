import { get } from '../api.js';

module.exports = {
    fetchSettings() {
        return {
            type: 'FETCH_SETTINGS',
            payload: get('/Settings')
        };
    }
};
