import { post } from 'api';

module.exports = {
    logout() {
        return {
            type: 'LOGOUT',
            payload: post('/Account/Logout')
        };
    }
};
