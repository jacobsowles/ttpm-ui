import React, { Component, PropTypes } from 'react';

import Form from 'components/form';
import SupplementalFormLinks from 'components/supplemental-form-links';
import TextBox from 'components/text-box';

//import Button from '~/buttons/button';
//import ErrorMessage from '~/messages/error-message';
//import InlineLoadingWrapper from '~/loading/inline-loading-wrapper';

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
                <TextBox
                    placeholder="email"
                    type="email"
                    value={this.state.email}
                    handleChange={(value) => this.setState({ email: value })}
                />

                <TextBox
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    handleChange={(value) => this.setState({ password: value })}
                />

                <button>Log in</button>

                <SupplementalFormLinks>
                    <a href="#" title="forgot username">Forgot your username?</a>
                    <a href="#" title="reset password">Need to reset your password?</a>
                </SupplementalFormLinks>

                {/*<InlineLoadingWrapper showLoadingGraphic={this.props.isLoading}>
                    <ErrorMessage text={this.props.error} />
                </InlineLoadingWrapper>*/}
            </Form>
        );
    }
}

LoginForm.propTypes = {
};

export default LoginForm;
