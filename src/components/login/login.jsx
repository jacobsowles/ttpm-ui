import React from 'react';
import { connect } from 'react-redux';

import WarningAlert from '~/alerts/warning-alert';
import DarkLogo from '~/logo/dark-logo';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';

import { isLoggedIn } from '@/utils/auth';

require('./login.scss');

class Login extends React.Component {

    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            window.location = '/';
        }
    }

    render() {
        return (
            <div id="authentication-page" className="row">
                <div className="col-xs-4" />

                <div className="col-xs-4">
                    <div className="row">
                        <div className="col-xs-12 no-horizontal-padding">
                            <WarningAlert
                                label="The princess is in another castle."
                                text="The Tiny Two Productivity Manager is currently invite only. Registration has been disabled until a widespread release is made available."
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 no-horizontal-padding">
                            <DarkLogo />
                        </div>
                    </div>

                    <div className="row" id="authentication-wrapper">
                        <div className="col-xs-12 no-horizontal-padding">
                            <LoginForm />
                        </div>
                    </div>
                </div>

                <div className="col-xs-4" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
