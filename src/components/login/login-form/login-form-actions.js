import superagent from 'superagent';

module.exports = {
    login(email, password) {
        return {
            type: 'LOGIN',
            payload: new Promise((resolve, reject) => {
                superagent
                    .post('http://api.ttpm.com/token')
                    .type('application/x-www-form-urlencoded')
                    .send({
                        userName: email,
                        password: password,
                        grant_type: 'password'
                    })
                    .end((error, response) => {
                        error ? reject(error) : resolve(response.body);
                    });
            })
        };
    }
};
