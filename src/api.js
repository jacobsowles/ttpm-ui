import superagent from 'superagent';
import auth from './utils/auth';

require('superagent-auth-bearer')(superagent);

function getApiUrl() {
    return window.location.href.toLowerCase().includes('localhost')
        ? 'http://api.ttpm.com'
        : 'http://pm-api.thetinytwo.com';
}

module.exports = {
    get(route, query) {
        return new Promise((resolve, reject) => {
            superagent
                .get(getApiUrl() + route)
                .query(`${query || ''}&access_token=${auth.getToken()}`)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    put(route, body, query) {
        return new Promise((resolve, reject) => {
            superagent
                .put(getApiUrl() + route)
                .query(`${query || ''}&access_token=${auth.getToken()}`)
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    post(route, body, query) {
        let token = auth.getToken();

        if (token) {
            token = `&access_token=${token}`;
        }

        return new Promise((resolve, reject) => {
            superagent
                .post(getApiUrl() + route)
                .query(`${query || ''}${token || ''}`)
                .send(body)
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    del(route) {
        return new Promise((resolve, reject) => {
            superagent
                .del(getApiUrl() + route)
                .authBearer(auth.getToken())
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    }
};
