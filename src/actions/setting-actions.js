import { get } from 'api';

module.exports = {
    fetchSettings() {
        return {
            type: 'FETCH_SETTINGS',
            payload: get('/Settings')
        };
    }
};
