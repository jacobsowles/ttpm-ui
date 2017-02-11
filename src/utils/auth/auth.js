module.exports = {
    isLoggedIn() {
        return localStorage.token != undefined;
    },

    saveAuthentication(username, token) {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    },

    getToken() {
        return localStorage['token'];
    },

    getApiUrl() {
        return (
            window.location.href.toLowerCase().includes('localhost') &&
            !window.location.href.includes(':8008')
                ? 'http://api.ttpm.com'
                : 'http://pm-api.thetinytwo.com'
        );
    }
};
