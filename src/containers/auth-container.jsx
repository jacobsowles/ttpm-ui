// node modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// app components
import AuthWrapper from 'components/auth-wrapper';
import LoginForm from 'components/login-form';
import DarkLogo from 'components/logos/dark-logo';

// actions
import loginActions from 'actions/login-actions';
import registrationActions from 'actions/registration-actions';

// utils
import { isLoggedIn } from 'utils/auth/auth';

class AuthContainer extends Component {

    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            window.location = '/';
        }
    }

    render() {
        return (
            <AuthWrapper>
                <DarkLogo />
                <LoginForm />
            </AuthWrapper>
        );
    }
}

AuthContainer.propTypes = {
    loginError: PropTypes.string.isRequired,
    loginIsLoading: PropTypes.bool.isRequired,
    registrationError: PropTypes.string.isRequired,
    registrationIsLoading: PropTypes.bool.isRequired,

    handleLogin: PropTypes.func.isRequired,
    handleRegistration: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        loginError: state.login.error,
        loginIsLoading: state.login.isLoading,
        registrationError: state.registration.error,
        registrationIsLoading: state.registration.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: function(email, password) {
            dispatch(loginActions.login(email, password)).then(() => {
                if (isLoggedIn()) {
                    window.location = '/';
                }
            });
        },

        handleRegistration: function(user) {
            dispatch(registrationActions.registerUser(user)).then(() => {
                dispatch(loginActions.login(user.Email, user.Password));
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
