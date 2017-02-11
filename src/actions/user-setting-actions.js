import { get } from 'api';

module.exports = {
    fetchUserSettings() {
        return {
            type: 'FETCH_USER_SETTINGS',
            payload: get('/UserSettings')
        };
    }
};
