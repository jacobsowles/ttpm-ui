import { post } from '../api.js';

module.exports = {
    logout() {
        return {
            type: 'LOGOUT',
            payload: post('/Account/Logout')
        };
    }
};
