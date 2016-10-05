import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import registrationFormActions from '@/actions/registration-form-actions';

require('./registration-form.scss');

class RegistrationForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // TODO: Validate form
        this.props.registerUser({
            Email: this.refs.email.value,
            Password: this.refs.password.value,
            ConfirmPassword: this.refs.passwordConfirm.value
        });
    }

    render() {
        return (
            <div id="register">
                <h2>Register</h2>

                <div className="form-group">
                    <input type="email" className="form-control" ref="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" ref="password" placeholder="Password" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" ref="passwordConfirm" placeholder="Confirm Password" />
                </div>

                <button onClick={this.handleSubmit} className="btn btn-primary">Join the fray</button>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        isLoading: state.registrationForm.isLoading,
        error: state.registrationForm.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: function(email, password, confirmPassword) {
            dispatch(registrationFormActions.registerUser(email, password, confirmPassword));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
