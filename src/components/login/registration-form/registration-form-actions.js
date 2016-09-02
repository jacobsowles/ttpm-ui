import { get, post, del } from '../../../api.js';

module.exports = {
    registerUser(options) {
        return {
            type: 'REGISTER_USER',
            payload: post('/account/register', options)
        };
    }
};
