// npm modules
import superagent from 'superagent';

module.exports = {
    get(route, params) {
        return new Promise((resolve, reject) => {
            superagent
                .get('http://api.ttpm.com' + route)
                .query(params)
                .set('Accept', 'application/json')
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    },

    post(route, params) {
        return new Promise((resolve, reject) => {
            superagent
                .post('http://api.ttpm.com' + route)
                .send(params.payload)
                .set('Accept', 'application/json')
                .end((error, response) => {
                    error ? reject(error) : resolve(response.body);
                });
        });
    }
};
