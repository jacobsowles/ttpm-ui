import React, { Component, PropTypes } from 'react';

import Button from '~/buttons/button';
import ErrorMessage from '~/messages/error-message';
import InlineLoadingWrapper from '~/loading/inline-loading-wrapper';

require('./login-form.scss');

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter': {
                document.getElementById('login-button').click();
                break;
            }
        }
    }

    handleSubmit() {
        this.props.handleLogin(
            this.refs.loginEmail.value,
            this.refs.loginPassword.value
        );
    }

    render() {
        return (
            <div id="login" className="row">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" ref="loginEmail" placeholder="jpicard@ussenterprise.com" onKeyDown={(e) => this.handleKeyDown(e)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" ref="loginPassword" placeholder="••••••••••••" onKeyDown={(e) => this.handleKeyDown(e)} />
                </div>

                <Button
                    id="login-button"
                    text="Get to work"
                    handleClick={this.handleSubmit}
                />

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
