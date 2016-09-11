module.exports = {
    setErrorMessage(message) {
        return {
            type: 'SET_ERROR_MESSAGE',
            payload: message
        };
    },

    setDefaultErrorMessage() {
        return {
            type: 'SET_DEFAULT_ERROR_MESSAGE'
        };
    }
};
