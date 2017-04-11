module.exports = {
    buildRoute(route) {
        return this.getApiUrl() + this.cleanRoute(route);
    },

    cleanRoute(route) {
        return route[0] === '/' ? route.substring(1) : route;
    },

    getApiUrl() {
        return window.location.origin + ':3000/api/';
    }
};
