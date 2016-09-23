import { get } from '../api.js';

module.exports = {
    fetchUserSettings() {
        return {
            type: 'FETCH_USER_SETTINGS',
            payload: get('/UserSettings')
        };
    }
};
