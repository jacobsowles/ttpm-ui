import superagent from 'superagent';
import auth from './utils/auth';

require('superagent-auth-bearer')(superagent);

module.exports = {
    get(route, query) {
        return new Promise((resolve, reject) => {
            superagent
                .get(auth.getApiUrl() + route)
                .query(`${query || ''}&access_token=${auth.getToken()}`)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    put(route, body, query) {
        return new Promise((resolve, reject) => {
            superagent
                .put(auth.getApiUrl() + route)
                .query(`${query || ''}&access_token=${auth.getToken()}`)
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    post(route, body, query, contentType) {
        let token = auth.getToken();

        if (token) {
            token = `&access_token=${token}`;
        }

        return new Promise((resolve, reject) => {
            superagent
                .post(auth.getApiUrl() + route)
                .query(`${query || ''}${token || ''}`)
                .type(contentType || 'application/json')
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    del(route) {
        return new Promise((resolve, reject) => {
            superagent
                .del(auth.getApiUrl() + route)
                .authBearer(auth.getToken())
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    }
};
