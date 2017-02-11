import { post } from 'api';

module.exports = {
    login(email, password) {
        const body = {
            userName: email,
            password: password,
            'grant_type': 'password'
        };

        return {
            type: 'LOGIN',
            payload: post('/Token', body, null, 'application/x-www-form-urlencoded')
        };
    }
};
