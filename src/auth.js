module.exports = {
    isLoggedIn() {
        return localStorage.token != undefined;
    }
};
