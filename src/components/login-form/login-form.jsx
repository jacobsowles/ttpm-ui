// node modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// app components
import Form from 'components/form';
import Textbox from 'components/textbox';

//import Button from '~/buttons/button';
//import ErrorMessage from '~/messages/error-message';
//import InlineLoadingWrapper from '~/loading/inline-loading-wrapper';

// actions
import authActions from 'actions/auth-actions';

// styles
import './login-form.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <Form className="login-form">
                <Textbox
                    placeholder="email"
                    type="email"
                    value={this.state.email}
                    handleChange={(value) => this.setState({ email: value })}
                />

                <Textbox
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    handleChange={(value) => this.setState({ password: value })}
                />

                <button onClick={this.props.submitForm}>Log in</button>

                <LoginFormLinks />

                {/*<InlineLoadingWrapper showLoadingGraphic={this.props.isLoading}>
                    <ErrorMessage text={this.props.error} />
                </InlineLoadingWrapper>*/}
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submitForm: PropTypes.func.isRequired
};

// Private Components

const LoginFormLinks = props => {
    return (
        <div className="login-form-links">
            <a href="#" title="forgot username">Forgot your username?</a>
            <a href="#" title="reset password">Need to reset your password?</a>
        </div>
    );
};

export default LoginForm;
