import React from 'react';
import { connect } from 'react-redux';

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
                <div className="col-xs-2" />

                <div className="col-xs-8">
                    <DarkLogo />

                    <div className="row" id="authentication-wrapper">
                        <div className="col-xs-6 no-horizontal-padding">
                            <LoginForm />
                        </div>

                        <div className="col-xs-6 no-horizontal-padding">
                            <RegistrationForm />
                        </div>
                    </div>
                </div>

                <div className="col-xs-2" />
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
