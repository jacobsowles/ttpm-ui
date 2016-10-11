import React from 'react';
import { connect } from 'react-redux';

import Button from '~/buttons/button';

import loginFormActions from '@/actions/login-form-actions';
import { isLoggedIn } from '@/utils/auth';

require('./login-form.scss');

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // TODO: Validate form
        this.props.login(
            this.refs.loginEmail.value,
            this.refs.loginPassword.value
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (isLoggedIn()) {
            window.location = '/';
        }
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loginForm.isLoading,
        error: state.loginForm.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: function(email, password) {
            dispatch(loginFormActions.login(email, password));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
