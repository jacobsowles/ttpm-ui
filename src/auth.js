module.exports = {
    isLoggedIn() {
        return localStorage.token != undefined;
    },

    saveAuthentication(username, token) {
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    }
};
