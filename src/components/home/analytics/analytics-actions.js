module.exports = {
    refreshAnalytics(tasks) {
        return {
            type: 'REFRESH_ANALYTICS',
            payload: tasks
        };
    }
};
