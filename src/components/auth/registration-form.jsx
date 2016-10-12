import React, { Component, PropTypes } from 'react';

import Button from '~/buttons/button';
import CheckmarkIcon from '~/icons/checkmark-icon';
import ErrorMessage from '~/messages/error-message';
import InlineLoadingWrapper from '~/loading/inline-loading-wrapper';
import TimesIcon from '~/icons/times-icon';

require('./registration-form.scss');

class RegistrationForm extends Component {

    constructor() {
        super();

        this.state = {
            emailIsValid: false,
            emailIsAvailable: true,
            emailHasBeenEdited: false,
            emailValidationMessage: '',

            passwordIsValid: false,
            passwordHasBeenEdited: false,
            passwordValidationMessage: '',

            passwordsMatch: false,
            passwordConfirmHasBeenEdited: false,
            passwordConfirmValidationMessage: ''
        };

        this.allFieldsValid = this.allFieldsValid.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePasswordConfirm = this.validatePasswordConfirm.bind(this);
    }

    allFieldsValid() {
        return (
            this.state.emailIsValid &&
            this.state.emailIsAvailable &&
            this.state.passwordIsValid &&
            this.state.passwordsMatch
        );
    }

    handleSubmit() {
        if (this.allFieldsValid) {
            this.props.handleRegistration({
                Email: this.refs.email.value,
                Password: this.refs.password.value,
                ConfirmPassword: this.refs.passwordConfirm.value
            });
        }
    }

    validateEmail(event) {
        let isValid = true;
        let validationMessage = '';

        if (event.target.value.match(/^\w+@.+\.[A-Za-z]+$/) == null) {
            isValid = false;
            validationMessage = 'Not a valid email address.';
        }

        this.setState({
            emailIsValid: isValid,
            emailHasBeenEdited: true,
            emailValidationMessage: validationMessage
        });
    }

    validatePassword(event) {
        let isValid = true;
        let validationMessage = '';

        if (event.target.value.length < 6) {
            isValid = false;
            validationMessage = 'Password must be at least 6 characters long.';
        }

        if (event.target.value.match(/\d+/) == null) {
            isValid = false;
            validationMessage = 'Password must contain a number.';
        }

        this.setState({
            passwordIsValid: isValid,
            passwordHasBeenEdited: true,
            passwordValidationMessage: validationMessage
        });
    }

    validatePasswordConfirm(event) {
        let isValid = true;
        let validationMessage = '';

        if (event.target.value != this.refs.password.value) {
            isValid = false;
            validationMessage = 'Those passwords don\'t match.';
        }

        this.setState({
            passwordsMatch: isValid,
            passwordConfirmHasBeenEdited: true,
            passwordConfirmValidationMessage: validationMessage
        });
    }

    render() {
        return (
            <div id="register">
                <h2>Register</h2>

                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        ref="email"
                        placeholder="Email"
                        onChange={(event) => this.validateEmail(event)}
                    />

                    {
                        !this.state.emailHasBeenEdited
                            ? null
                            : this.state.emailIsValid
                                ? <CheckmarkIcon className="valid" />
                                : (
                                    <TimesIcon
                                        className="invalid"
                                        tooltip={this.state.emailValidationMessage}
                                    />
                                )
                    }
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        ref="password"
                        placeholder="Password"
                        onChange={(event) => this.validatePassword(event)}
                    />

                    {
                        !this.state.passwordHasBeenEdited
                            ? null
                            : this.state.passwordIsValid
                                ? <CheckmarkIcon className="valid" />
                                : (
                                    <TimesIcon
                                        className="invalid"
                                        tooltip={this.state.passwordValidationMessage}
                                    />
                                )
                    }
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        ref="passwordConfirm"
                        placeholder="Confirm Password"
                        onChange={(event) => this.validatePasswordConfirm(event)}
                    />

                    {
                        !this.state.passwordConfirmHasBeenEdited
                            ? null
                            : this.state.passwordsMatch
                                ? <CheckmarkIcon className="valid" />
                                : (
                                    <TimesIcon
                                        className="invalid"
                                        tooltip={this.state.passwordConfirmValidationMessage}
                                    />
                                )
                    }
                </div>

                <Button
                    text="Join the fray"
                    isDisabled={!this.allFieldsValid()}
                    handleClick={this.handleSubmit}
                />

                <InlineLoadingWrapper showLoadingGraphic={this.props.isLoading}>
                    <ErrorMessage text={this.props.error} />
                </InlineLoadingWrapper>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    error: PropTypes.string.isRequired,
    handleRegistration: PropTypes.func.isRequired
};

export default RegistrationForm;
