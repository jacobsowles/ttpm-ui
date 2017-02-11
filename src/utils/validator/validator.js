module.exports = {
    isValidEmail(email) {
        return email.match(/^\w+@.+\.[A-Za-z]+$/);
    }
};
