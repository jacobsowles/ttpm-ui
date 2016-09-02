import { get, post, del } from '../../../api.js';

module.exports = {
    Something() {
        return {
            type: 'SOMETHING',
            payload: get('/')
        };
    }
};
