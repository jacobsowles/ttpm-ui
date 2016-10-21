import React, { Component, PropTypes } from 'react';

import DarkLogo from '~/logo/dark-logo';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
import WarningAlert from '~/alerts/warning-alert';

require('./auth-wrapper.scss');

class AuthWrapper extends Component {

    render() {
        return (
            <div id="auth-wrapper" className="row">
                <div className="col-xs-12">
                    <div className="col-xs-12 no-horizontal-padding">
                        <WarningAlert
                            label="The princess is in another castle."
                            text="The Tiny Two Productivity Manager is currently invite only. Registration has been disabled until a widespread release is made available."
                        />
                    </div>

                    <div className="col-xs-12 no-horizontal-padding">
                        <DarkLogo />
                    </div>

                    <div id="form-wrapper" className="col-xs-12 no-horizontal-padding">
                        <LoginForm
                            error={this.props.loginError}
                            isLoading={this.props.loginIsLoading}
                            handleLogin={this.props.handleLogin}
                        />
                    </div>
                </div>
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
