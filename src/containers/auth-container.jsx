// node modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// app components
import AuthWrapper from 'components/auth-wrapper';
import LoginForm from 'components/login-form';
import Logo from 'components/logo';

// actions
import authActions from 'actions/auth-actions';

// utils
import { isLoggedIn } from '../api';

class AuthContainer extends Component {
    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            window.location = '/';
        }
    }

    validateLogin(email, password) {
        if (email && password) {
            this.props.handleLogin(email, password);
        }
    }

    validateRegistration(email, password) {
        if (email && password) {
            this.props.handleRegistration(email, password);
        }
    }

    render() {
        return (
            <AuthWrapper>
                <Logo theme="dark" />
                <LoginForm submitForm={this.props.handleLogin} />
            </AuthWrapper>
        );
    }
}

AuthContainer.propTypes = {
    error: PropTypes.string.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    isRegistering: PropTypes.bool.isRequired,

    handleLogin: PropTypes.func.isRequired,
    handleRegistration: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        error: state.auth.error,
        isLoggingIn: state.auth.isLoggingIn,
        isLoggingOut: state.auth.isLoggingOut,
        isRegistering: state.auth.isRegistering
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogin: function(email, password) {
            dispatch(authActions.login(email, password)).then((user) => {
                if (user) {
                    window.location = '/';
                }
            });
        },

        handleRegistration: function(email, password) {
            dispatch(authActions.register(email, password)).then((user) => {
                if (user) {
                    window.location = '/';
                }
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
