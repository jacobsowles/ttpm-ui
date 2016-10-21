import React, { Component, PropTypes } from 'react';

import Button from '~/buttons/button';
import ErrorMessage from '~/messages/error-message';
import InlineLoadingWrapper from '~/loading/inline-loading-wrapper';

require('./login-form.scss');

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.handleLogin(
            this.refs.loginEmail.value,
            this.refs.loginPassword.value
        );
    }

    render() {
        return (
            <div id="login" class="row">
                <h2>Login</h2>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" className="form-control" ref="loginEmail" placeholder="jpicard@ussenterprise.com" />
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" className="form-control" ref="loginPassword" placeholder="••••••••••••" />
                </div>

                <Button text="Get to work" handleClick={this.handleSubmit} />

                <InlineLoadingWrapper showLoadingGraphic={this.props.isLoading}>
                    <ErrorMessage text={this.props.error} />
                </InlineLoadingWrapper>
            </div>
        );
    }
}

LoginForm.propTypes = {
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default LoginForm;
