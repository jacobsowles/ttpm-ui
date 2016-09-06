// npm modules
import superagent from 'superagent';
require('superagent-auth-bearer')(superagent);

// utils
import auth from './auth';

module.exports = {
    get(route, params) {
        return new Promise((resolve, reject) => {
            superagent
                .get('http://api.ttpm.com' + route)
                .query(`${params || ''}&access_token=${auth.getToken()}`)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    post(route, body, params) {
        return new Promise((resolve, reject) => {
            superagent
                .post('http://api.ttpm.com' + route)
                .query(`${params || ''}&access_token=${auth.getToken()}`)
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    del(route) {
        return new Promise((resolve, reject) => {
            superagent
                .del('http://api.ttpm.com' + route)
                .authBearer(auth.getToken())
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    }
};
