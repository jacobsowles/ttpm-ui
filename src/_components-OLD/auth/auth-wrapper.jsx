import React, { Component, PropTypes } from 'react';

import DarkLogo from '~/logo/dark-logo';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
import WarningAlert from '~/alerts/warning-alert';

require('./auth-wrapper.scss');

class AuthWrapper extends Component {

    render() {
        return (
            <div id="auth-wrapper" className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <WarningAlert
                    label="The princess is in another castle."
                    text="The Tiny Two Productivity Manager is currently invite only. Registration has been disabled until a widespread release is made available."
                />

                <DarkLogo />

                <LoginForm
                    error={this.props.loginError}
                    isLoading={this.props.loginIsLoading}
                    handleLogin={this.props.handleLogin}
                />
            </div>
        );
    }
}

AuthWrapper.propTypes = {
    loginError: PropTypes.string.isRequired,
    loginIsLoading: PropTypes.bool.isRequired,
    registrationError: PropTypes.string.isRequired,
    registrationIsLoading: PropTypes.bool.isRequired,

    handleLogin: PropTypes.func.isRequired,
    handleRegistration: PropTypes.func.isRequired
};

export default AuthWrapper;
