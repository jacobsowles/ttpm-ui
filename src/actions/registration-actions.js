import { post } from '@/api';

module.exports = {
    registerUser(body) {
        return {
            type: 'REGISTER_USER',
            payload: post('/account/register', body)
        };
    }
};
