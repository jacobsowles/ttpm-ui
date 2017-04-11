import superagent from 'superagent';
import auth from 'utils/auth';

require('superagent-auth-bearer')(superagent);

module.exports = {
    get(route, query) {
        return new Promise((resolve, reject) => {
            superagent
                .get(auth.buildRoute(route))
                .query(query || '')
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    put(route, body, query) {
        return new Promise((resolve, reject) => {
            superagent
                .put(auth.buildRoute(route))
                .query(query || '')
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    post(route, body, query, contentType) {
        return new Promise((resolve, reject) => {
            superagent
                .post(auth.buildRoute(route))
                .query(query || '')
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
                .del(auth.buildRoute(route))
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            superagent
                .get(auth.buildRoute('isLoggedIn'))
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    }
};
