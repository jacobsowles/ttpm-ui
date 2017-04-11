import { get, post } from 'api';

module.exports = {
    login(email, password) {
        return {
            type: 'LOGIN',
            payload: post('login', { email, password })
        };
    },

    logout() {
        return {
            type: 'LOGOUT',
            payload: get('logout')
        };
    },

    register(email, password) {
        return {
            type: 'REGISTER',
            payload: post('register', { email, password })
        };
    }
};
