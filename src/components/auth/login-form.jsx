import React, { Component, PropTypes } from 'react';
import Button from '~/buttons/button';
import ErrorMessage from '~/messages/error-message';

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
            <div id="login">
                <h2>Login</h2>

                <div className="form-group">
                    <input type="email" className="form-control" ref="loginEmail" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" ref="loginPassword" placeholder="Password" />
                </div>

                <Button text="Get to work" handleClick={this.handleSubmit} />
                <ErrorMessage text={this.props.error} />
            </div>
        );
    }
}

LoginForm.propTypes = {
    error: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default LoginForm;
